import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { BOARDS } from '../config/community'
import { supabase, TABLES } from '../config/supabase'

export default function CommunityPage() {
  const { t, lang } = useLanguage()
  const [postCounts, setPostCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    loadPostCounts()
  }, [])

  async function loadPostCounts() {
    if (!supabase) return
    const counts: Record<string, number> = {}
    for (const board of BOARDS) {
      const { count } = await supabase
        .from(TABLES.POSTS)
        .select('*', { count: 'exact', head: true })
        .eq('board', board.slug)
        .eq('is_deleted', false)
      counts[board.slug] = count || 0
    }
    setPostCounts(counts)
  }

  return (
    <>
      <div className="community-hero">
        <div className="container">
          <h1>{t('community.title')}</h1>
          <p>{t('community.subtitle')}</p>
        </div>
      </div>
      <div className="container">
        <div className="board-grid">
          {BOARDS.map(board => (
            <Link key={board.slug} to={`/community/${board.slug}`} className="board-card">
              <div className="board-card-icon" style={{ background: board.color }}>
                <i className={board.icon} />
              </div>
              <h3>{lang === 'ko' ? board.name : board.nameEn}</h3>
              <p>{lang === 'ko' ? board.desc : board.descEn}</p>
              <span className="board-card-count">
                {postCounts[board.slug] ?? 0} {t('community.posts')}
              </span>
              <span className="board-card-link" style={{ color: board.color }}>
                {t('community.viewBoard')} <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
