-- ============================================================
-- instructor 커뮤니티 테이블 생성 SQL
-- Supabase SQL Editor에서 실행
-- ============================================================

-- 1. 게시글 테이블
CREATE TABLE instructor_posts (
  id          BIGSERIAL PRIMARY KEY,
  board       TEXT NOT NULL CHECK (board IN ('notice','free','course-apply','material-request','review')),
  title       TEXT NOT NULL,
  content     TEXT NOT NULL,
  author_id   UUID NOT NULL,
  author_name TEXT NOT NULL,
  is_pinned   BOOLEAN DEFAULT FALSE,
  is_deleted  BOOLEAN DEFAULT FALSE,
  rating      SMALLINT CHECK (rating BETWEEN 1 AND 5),
  view_count  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_inst_posts_board ON instructor_posts(board, is_deleted, created_at DESC);

-- 2. 댓글 테이블
CREATE TABLE instructor_comments (
  id          BIGSERIAL PRIMARY KEY,
  post_id     BIGINT NOT NULL REFERENCES instructor_posts(id) ON DELETE CASCADE,
  author_id   UUID NOT NULL,
  author_name TEXT NOT NULL,
  content     TEXT NOT NULL,
  is_deleted  BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_inst_comments_post ON instructor_comments(post_id, is_deleted);

-- 3. 강의 일정 테이블
CREATE TABLE instructor_schedules (
  id          BIGSERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  title_en    TEXT,
  description TEXT,
  description_en TEXT,
  location    TEXT,
  start_date  DATE NOT NULL,
  end_date    DATE,
  start_time  TIME,
  end_time    TIME,
  status      TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming','ongoing','completed','cancelled')),
  max_seats   INTEGER,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 4. RLS 활성화
ALTER TABLE instructor_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE instructor_comments ENABLE ROW LEVEL SECURITY;

-- 5. RLS 정책 — 게시글
CREATE POLICY "posts_read" ON instructor_posts FOR SELECT USING (is_deleted = FALSE);
CREATE POLICY "posts_insert" ON instructor_posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "posts_update" ON instructor_posts FOR UPDATE USING (auth.uid() = author_id);

-- 6. RLS 정책 — 댓글
CREATE POLICY "comments_read" ON instructor_comments FOR SELECT USING (is_deleted = FALSE);
CREATE POLICY "comments_insert" ON instructor_comments FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "comments_update" ON instructor_comments FOR UPDATE USING (auth.uid() = author_id);

-- 7. 조회수 증가 RPC (SECURITY DEFINER로 RLS 우회)
CREATE OR REPLACE FUNCTION increment_post_view(p_id BIGINT)
RETURNS VOID AS $$
  UPDATE instructor_posts SET view_count = view_count + 1 WHERE id = p_id;
$$ LANGUAGE SQL SECURITY DEFINER;
