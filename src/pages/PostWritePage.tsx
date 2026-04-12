import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'
import { getBoardMeta } from '../config/community'
import { supabase, TABLES } from '../config/supabase'

export default function PostWritePage() {
  const { boardSlug, postId } = useParams<{ boardSlug: string; postId?: string }>()
  const { t, lang } = useLanguage()
  const { user, isAuthenticated, isAdmin } = useAuth()
  const navigate = useNavigate()
  const board = getBoardMeta(boardSlug || '')
  const isEdit = !!postId

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [rating, setRating] = useState(5)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (isEdit) loadPost()
  }, [postId])

  async function loadPost() {
    if (!supabase || !postId) return
    const { data } = await supabase
      .from(TABLES.POSTS)
      .select('*')
      .eq('id', parseInt(postId))
      .single()
    if (data) {
      setTitle(data.title)
      setContent(data.content)
      if (data.rating) setRating(data.rating)
    }
  }

  if (!board) {
    navigate('/community', { replace: true })
    return null
  }

  if (!isAuthenticated) {
    navigate('/login', { replace: true })
    return null
  }

  if (board.adminOnly && !isAdmin) {
    navigate(`/community/${boardSlug}`, { replace: true })
    return null
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!supabase || !user || !title.trim() || !content.trim()) return
    setSubmitting(true)

    const postData = {
      board: boardSlug,
      title: title.trim(),
      content: content.trim(),
      author_id: user.id,
      author_name: user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || 'Anonymous',
      ...(board.hasRating ? { rating } : {}),
    }

    if (isEdit) {
      const { error } = await supabase
        .from(TABLES.POSTS)
        .update({ title: postData.title, content: postData.content, ...(board.hasRating ? { rating } : {}), updated_at: new Date().toISOString() })
        .eq('id', parseInt(postId!))
      if (!error) navigate(`/community/${boardSlug}/${postId}`)
    } else {
      const { data, error } = await supabase
        .from(TABLES.POSTS)
        .insert(postData)
        .select('id')
        .single()
      if (!error && data) navigate(`/community/${boardSlug}/${data.id}`)
    }
    setSubmitting(false)
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <form className="post-form" onSubmit={handleSubmit}>
          <h2>
            {lang === 'ko' ? board.name : board.nameEn} - {isEdit ? t('community.edit') : t('community.write')}
          </h2>

          <div className="post-form-group">
            <label>{t('community.titleLabel')}</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              maxLength={200}
            />
          </div>

          <div className="post-form-group">
            <label>{t('community.contentLabel')}</label>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              required
            />
          </div>

          {board.hasRating && (
            <div className="post-form-group">
              <label>{t('community.rating')}</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map(s => (
                  <i
                    key={s}
                    className={`fa-solid fa-star${s <= rating ? ' active' : ''}`}
                    onClick={() => setRating(s)}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="post-form-actions">
            <Link to={`/community/${boardSlug}`} className="btn btn-secondary">
              {t('community.cancel')}
            </Link>
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? '...' : isEdit ? t('community.update') : t('community.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
