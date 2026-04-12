-- ============================================================
-- instructor.dreamitbiz.com — Supabase 테이블 설정
-- 접두사: instructor_
-- 실행: Supabase Dashboard > SQL Editor
-- ============================================================

-- 1. 사용자 테이블
CREATE TABLE IF NOT EXISTS instructor_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  name TEXT,
  avatar_url TEXT,
  provider TEXT DEFAULT 'email',
  domain TEXT DEFAULT 'instructor',
  is_blocked BOOLEAN DEFAULT FALSE,
  last_login TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 강의안 다운로드 이력
CREATE TABLE IF NOT EXISTS instructor_downloads (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL,
  topic_title TEXT NOT NULL,
  downloaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. 방문 통계
CREATE TABLE IF NOT EXISTS instructor_visits (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  page TEXT NOT NULL,
  visited_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- RLS (Row Level Security) 정책
-- ============================================================

ALTER TABLE instructor_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE instructor_downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE instructor_visits ENABLE ROW LEVEL SECURITY;

-- instructor_users: 본인 데이터만 조회, 서비스에서 upsert 허용
CREATE POLICY "instructor_users_select_own" ON instructor_users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "instructor_users_insert_own" ON instructor_users
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "instructor_users_update_own" ON instructor_users
  FOR UPDATE USING (auth.uid() = id);

-- instructor_downloads: 본인 데이터만 조회/삽입
CREATE POLICY "instructor_downloads_select_own" ON instructor_downloads
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "instructor_downloads_insert_own" ON instructor_downloads
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- instructor_visits: 누구나 삽입, 본인만 조회
CREATE POLICY "instructor_visits_insert" ON instructor_visits
  FOR INSERT WITH CHECK (true);

CREATE POLICY "instructor_visits_select_own" ON instructor_visits
  FOR SELECT USING (auth.uid() = user_id);

-- ============================================================
-- 인덱스
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_instructor_users_email ON instructor_users(email);
CREATE INDEX IF NOT EXISTS idx_instructor_downloads_user ON instructor_downloads(user_id);
CREATE INDEX IF NOT EXISTS idx_instructor_downloads_topic ON instructor_downloads(topic_id);
CREATE INDEX IF NOT EXISTS idx_instructor_visits_page ON instructor_visits(page);
CREATE INDEX IF NOT EXISTS idx_instructor_visits_date ON instructor_visits(visited_at);

-- ============================================================
-- Auth 설정 메모 (Supabase Dashboard에서 수동 설정 필요)
-- ============================================================
-- 1. Authentication > Providers > Google: 활성화
--    - Client ID / Secret: Google Cloud Console에서 발급
--    - Redirect URL: https://hcmgdztsgjvzcyxyayaj.supabase.co/auth/v1/callback
--
-- 2. Authentication > Providers > Kakao: 활성화
--    - Client ID / Secret: Kakao Developers에서 발급
--    - Redirect URL: https://hcmgdztsgjvzcyxyayaj.supabase.co/auth/v1/callback
--
-- 3. Authentication > URL Configuration:
--    - Site URL: https://instructor.dreamitbiz.com
--    - Redirect URLs: https://instructor.dreamitbiz.com/**
--
-- 완료!
