import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { categories, totalTopics } from '../data/courses'

export default function SiteIntroPage() {
  const { t, localizedField } = useLanguage()

  const features = t('siteIntro.features') as unknown as { icon: string; title: string; desc: string }[]

  return (
    <>
      <div className="about-hero">
        <div className="container">
          <h1>{t('siteIntro.title')}</h1>
          <p>{t('siteIntro.subtitle')}</p>
        </div>
      </div>
      <div className="container about-content">
        {/* Mission */}
        <div className="about-section" style={{ textAlign: 'center', padding: '36px 28px' }}>
          <h3 style={{ justifyContent: 'center' }}><i className="fa-solid fa-bullseye" /> {t('siteIntro.missionTitle')}</h3>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: 700, margin: '0 auto' }}>
            {t('siteIntro.missionDesc')}
          </p>
        </div>

        {/* Stats */}
        <div className="about-stats" style={{ marginTop: 32 }}>
          <div className="about-stat-card">
            <div className="stat-value">{categories.length}</div>
            <div className="stat-label">{t('stats.categories')}</div>
          </div>
          <div className="about-stat-card">
            <div className="stat-value">{totalTopics}</div>
            <div className="stat-label">{t('stats.topics')}</div>
          </div>
          <div className="about-stat-card">
            <div className="stat-value">98%</div>
            <div className="stat-label">{t('stats.satisfaction')}</div>
          </div>
        </div>

        {/* Features */}
        <h2 style={{ fontSize: 24, fontWeight: 800, textAlign: 'center', marginTop: 48, marginBottom: 28 }}>
          {t('siteIntro.featuresTitle')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, marginBottom: 48 }}>
          {features.map((f, i) => (
            <div key={i} className="about-section" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 12, color: 'var(--primary)' }}>
                <i className={f.icon} />
              </div>
              <h3 style={{ justifyContent: 'center', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-secondary)' }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Course Categories */}
        <h2 style={{ fontSize: 24, fontWeight: 800, textAlign: 'center', marginBottom: 28 }}>
          {t('siteIntro.coursesTitle')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
          {categories.map(cat => (
            <Link key={cat.id} to={`/${cat.slug}`} className="board-card" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
              <div className="board-card-icon" style={{ background: cat.color, width: 44, height: 44, borderRadius: 'var(--radius-sm)', fontSize: 18 }}>
                <i className={cat.icon} />
              </div>
              <h3 style={{ fontSize: 17 }}>{localizedField(cat, 'title')}</h3>
              <p style={{ fontSize: 13 }}>{localizedField(cat, 'description')}</p>
              <span style={{ fontSize: 13, color: 'var(--text-light)' }}>
                {cat.topics.length}{t('home.topicsCount')}
              </span>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="about-section" style={{ textAlign: 'center', padding: '36px 28px' }}>
          <h3 style={{ justifyContent: 'center' }}><i className="fa-solid fa-link" /> {t('siteIntro.quickLinksTitle')}</h3>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
            <Link to="/about" className="btn btn-primary btn-sm">
              <i className="fa-solid fa-user-tie" /> {t('nav2.about')}
            </Link>
            <Link to="/community" className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-comments" /> {t('nav2.community')}
            </Link>
            <Link to="/faq" className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-circle-question" /> {t('nav2.faq')}
            </Link>
            <Link to="/schedule" className="btn btn-secondary btn-sm">
              <i className="fa-regular fa-calendar" /> {t('nav2.schedule')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
