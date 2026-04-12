import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'
import { getBoardMeta } from '../config/community'
import { supabase, TABLES } from '../config/supabase'
import type { Post, BoardType } from '../types/community'

const PER_PAGE = 15

export default function BoardPage() {
  const { boardSlug } = useParams<{ boardSlug: string }>()
  const { t, lang } = useLanguage()
  const { isAuthenticated, isAdmin } = useAuth()
  const navigate = useNavigate()
  const board = getBoardMeta(boardSlug || '')

  const [posts, setPosts] = useState<Post[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoading] = useState(true)

  const loadPosts = useCallback(async () => {
    if (!supabase || !boardSlug) return
    setLoading(true)

    let query = supabase
      .from(TABLES.POSTS)
      .select('*, comment_count:instructor_comments(count)', { count: 'exact' })
      .eq('board', boardSlug as BoardType)
      .eq('is_deleted', false)

    if (search) {
      query = query.or(`title.ilike.%${search}%,content.ilike.%${search}%`)
    }

    query = query
      .order('is_pinned', { ascending: false })
      .order('created_at', { ascending: false })
      .range((page - 1) * PER_PAGE, page * PER_PAGE - 1)

    const { data, count } = await query
    if (data) {
      const mapped = data.map((p: Record<string, unknown>) => ({
        ...p,
        comment_count: Array.isArray(p.comment_count) && p.comment_count.length > 0
          ? (p.comment_count[0] as { count: number }).count
          : 0,
      })) as Post[]
      setPosts(mapped)
    }
    setTotal(count || 0)
    setLoading(false)
  }, [boardSlug, page, search])

  useEffect(() => { loadPosts() }, [loadPosts])

  if (!board) {
    navigate('/community', { replace: true })
    return null
  }

  const totalPages = Math.ceil(total / PER_PAGE)
  const canWrite = board.adminOnly ? isAdmin : isAuthenticated

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    setPage(1)
    setSearch(searchInput)
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    })
  }

  function renderStars(rating: number | null) {
    if (!rating) return null
    return (
      <span className="post-rating">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </span>
    )
  }

  return (
    <div className="section">
      <div className="container">
        <div className="board-header">
          <div className="board-header-left">
            <i className={board.icon} style={{ background: board.color }} />
            <h1>{lang === 'ko' ? board.name : board.nameEn}</h1>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Link to="/community" className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-arrow-left" /> {t('community.backToList')}
            </Link>
            {canWrite && (
              <Link to={`/community/${boardSlug}/write`} className="btn btn-primary btn-sm">
                <i className="fa-solid fa-pen" /> {t('community.write')}
              </Link>
            )}
          </div>
        </div>

        <form className="board-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={t('community.searchPlaceholder')}
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <button type="submit"><i className="fa-solid fa-search" /> {t('community.search')}</button>
        </form>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 60 }}>
            <div className="loading-spinner-small" style={{ margin: '0 auto' }} />
          </div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-light)' }}>
            {t('community.noResults')}
          </div>
        ) : (
          <table className="post-table">
            <thead>
              <tr>
                <th className="col-no">#</th>
                <th className="col-title">{t('community.titleLabel')}</th>
                <th className="col-author">{t('community.author')}</th>
                <th className="col-date">{t('community.date')}</th>
                <th className="col-views">{t('community.views')}</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <tr key={post.id} onClick={() => navigate(`/community/${boardSlug}/${post.id}`)}>
                  <td className="col-no">
                    {post.is_pinned ? <i className="fa-solid fa-thumbtack" style={{ color: board.color }} /> : total - ((page - 1) * PER_PAGE + i)}
                  </td>
                  <td className="col-title">
                    <div className="post-title-cell">
                      {post.is_pinned && (
                        <span className="post-pinned-badge" style={{ background: board.color }}>
                          {t('community.pinned')}
                        </span>
                      )}
                      <span className="post-title-text">{post.title}</span>
                      {board.hasRating && renderStars(post.rating)}
                      {(post.comment_count ?? 0) > 0 && (
                        <span className="post-comment-count">[{post.comment_count}]</span>
                      )}
                    </div>
                  </td>
                  <td className="col-author">{post.author_name}</td>
                  <td className="col-date">{formatDate(post.created_at)}</td>
                  <td className="col-views">{post.view_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {totalPages > 1 && (
          <div className="pagination">
            <button disabled={page <= 1} onClick={() => setPage(p => p - 1)}>
              <i className="fa-solid fa-chevron-left" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
              .reduce<(number | string)[]>((acc, p, i, arr) => {
                if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push('...')
                acc.push(p)
                return acc
              }, [])
              .map((p, i) =>
                typeof p === 'string' ? (
                  <span key={`e${i}`} style={{ padding: '0 4px', color: 'var(--text-light)' }}>...</span>
                ) : (
                  <button key={p} className={page === p ? 'active' : ''} onClick={() => setPage(p)}>
                    {p}
                  </button>
                )
              )}
            <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
