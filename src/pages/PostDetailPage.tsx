import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'
import { getBoardMeta } from '../config/community'
import { supabase, TABLES } from '../config/supabase'
import type { Post, Comment } from '../types/community'

export default function PostDetailPage() {
  const { boardSlug, postId } = useParams<{ boardSlug: string; postId: string }>()
  const { t, lang } = useLanguage()
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const board = getBoardMeta(boardSlug || '')

  const [post, setPost] = useState<Post | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [commentText, setCommentText] = useState('')
  const [prevPost, setPrevPost] = useState<{ id: number; title: string } | null>(null)
  const [nextPost, setNextPost] = useState<{ id: number; title: string } | null>(null)
  const [loading, setLoading] = useState(true)

  const loadPost = useCallback(async () => {
    if (!supabase || !postId) return
    setLoading(true)
    const pid = parseInt(postId)

    // Increment view count
    await supabase.rpc('increment_post_view', { p_id: pid })

    const { data } = await supabase
      .from(TABLES.POSTS)
      .select('*')
      .eq('id', pid)
      .eq('is_deleted', false)
      .single()

    if (!data) {
      navigate(`/community/${boardSlug}`, { replace: true })
      return
    }
    setPost(data as Post)

    // Load comments
    const { data: cmts } = await supabase
      .from(TABLES.COMMENTS)
      .select('*')
      .eq('post_id', pid)
      .eq('is_deleted', false)
      .order('created_at', { ascending: true })
    setComments((cmts || []) as Comment[])

    // Load prev/next
    const { data: prev } = await supabase
      .from(TABLES.POSTS)
      .select('id, title')
      .eq('board', boardSlug!)
      .eq('is_deleted', false)
      .lt('created_at', data.created_at)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()
    setPrevPost(prev as { id: number; title: string } | null)

    const { data: next } = await supabase
      .from(TABLES.POSTS)
      .select('id, title')
      .eq('board', boardSlug!)
      .eq('is_deleted', false)
      .gt('created_at', data.created_at)
      .order('created_at', { ascending: true })
      .limit(1)
      .single()
    setNextPost(next as { id: number; title: string } | null)

    setLoading(false)
  }, [postId, boardSlug])

  useEffect(() => { loadPost() }, [loadPost])

  if (!board) {
    navigate('/community', { replace: true })
    return null
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    })
  }

  function formatDateTime(iso: string) {
    return new Date(iso).toLocaleString(lang === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit',
    })
  }

  async function handleCommentSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!supabase || !user || !commentText.trim() || !postId) return
    const { error } = await supabase
      .from(TABLES.COMMENTS)
      .insert({
        post_id: parseInt(postId),
        author_id: user.id,
        author_name: user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || 'Anonymous',
        content: commentText.trim(),
      })
    if (!error) {
      setCommentText('')
      // Reload comments
      const { data: cmts } = await supabase
        .from(TABLES.COMMENTS)
        .select('*')
        .eq('post_id', parseInt(postId))
        .eq('is_deleted', false)
        .order('created_at', { ascending: true })
      setComments((cmts || []) as Comment[])
    }
  }

  async function handleDeletePost() {
    if (!supabase || !postId || !confirm(t('community.confirmDelete'))) return
    await supabase
      .from(TABLES.POSTS)
      .update({ is_deleted: true })
      .eq('id', parseInt(postId))
    navigate(`/community/${boardSlug}`)
  }

  async function handleDeleteComment(commentId: number) {
    if (!supabase || !confirm(t('community.confirmDelete'))) return
    await supabase
      .from(TABLES.COMMENTS)
      .update({ is_deleted: true })
      .eq('id', commentId)
    setComments(prev => prev.filter(c => c.id !== commentId))
  }

  if (loading) {
    return (
      <div className="section">
        <div className="container" style={{ textAlign: 'center', padding: 80 }}>
          <div className="loading-spinner-small" style={{ margin: '0 auto' }} />
        </div>
      </div>
    )
  }

  if (!post) return null

  const isAuthor = user?.id === post.author_id

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="post-detail">
          <div className="post-detail-header">
            {post.is_pinned && (
              <span className="post-pinned-badge" style={{ background: board.color, marginBottom: 8, display: 'inline-block' }}>
                {t('community.pinned')}
              </span>
            )}
            <h1>{post.title}</h1>
            <div className="post-detail-meta">
              <span><i className="fa-solid fa-user" /> {post.author_name}</span>
              <span><i className="fa-regular fa-calendar" /> {formatDate(post.created_at)}</span>
              <span><i className="fa-solid fa-eye" /> {post.view_count}</span>
              {board.hasRating && post.rating && (
                <span className="star-display">
                  {'★'.repeat(post.rating)}{'☆'.repeat(5 - post.rating)}
                </span>
              )}
            </div>
          </div>

          <div className="post-detail-body">{post.content}</div>

          <div className="post-detail-actions">
            <div className="left-actions">
              <Link to={`/community/${boardSlug}`} className="btn btn-secondary btn-sm">
                <i className="fa-solid fa-list" /> {t('community.backToList')}
              </Link>
            </div>
            {isAuthor && (
              <div className="right-actions">
                <Link to={`/community/${boardSlug}/${postId}/edit`} className="btn btn-secondary btn-sm">
                  <i className="fa-solid fa-pen" /> {t('community.edit')}
                </Link>
                <button className="btn btn-sm" style={{ color: 'var(--error)', borderColor: 'var(--error)', border: '2px solid' }} onClick={handleDeletePost}>
                  <i className="fa-solid fa-trash" /> {t('community.delete')}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next Navigation */}
        <div className="post-nav">
          {prevPost ? (
            <Link to={`/community/${boardSlug}/${prevPost.id}`}>
              <i className="fa-solid fa-chevron-left" />
              <div>
                <small style={{ color: 'var(--text-light)' }}>{t('community.prevPost')}</small>
                <div>{prevPost.title}</div>
              </div>
            </Link>
          ) : <div style={{ flex: 1 }} />}
          {nextPost ? (
            <Link to={`/community/${boardSlug}/${nextPost.id}`} className="next-post">
              <div>
                <small style={{ color: 'var(--text-light)' }}>{t('community.nextPost')}</small>
                <div>{nextPost.title}</div>
              </div>
              <i className="fa-solid fa-chevron-right" />
            </Link>
          ) : <div style={{ flex: 1 }} />}
        </div>

        {/* Comments Section */}
        <div className="comments-section">
          <h3>
            <i className="fa-solid fa-comments" />
            {t('community.comments')} ({comments.length})
          </h3>

          <div className="comment-list">
            {comments.map(c => (
              <div key={c.id} className="comment-item">
                <div className="comment-header">
                  <div>
                    <span className="comment-author">{c.author_name}</span>
                    <span className="comment-date" style={{ marginLeft: 12 }}>{formatDateTime(c.created_at)}</span>
                  </div>
                  {user?.id === c.author_id && (
                    <span className="comment-delete" onClick={() => handleDeleteComment(c.id)}>
                      <i className="fa-solid fa-trash" /> {t('community.delete')}
                    </span>
                  )}
                </div>
                <div className="comment-body">{c.content}</div>
              </div>
            ))}
          </div>

          {isAuthenticated ? (
            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <textarea
                placeholder={t('community.commentPlaceholder')}
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary btn-sm">
                {t('community.commentSubmit')}
              </button>
            </form>
          ) : (
            <div className="comment-login-msg">
              <i className="fa-solid fa-lock" style={{ marginRight: 8 }} />
              {t('community.loginToComment')}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
