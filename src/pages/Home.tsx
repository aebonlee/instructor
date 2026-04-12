import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { categories, totalTopics, totalHours } from '../data/courses'

export default function Home() {
  const { t, localizedField } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge">
            <i className="fa-solid fa-chalkboard-user" />
            {t('hero.badge')}
          </span>
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-actions">
            <a href="#courses" className="btn btn-primary" style={{ fontSize: 18, padding: '14px 32px' }}>
              <i className="fa-solid fa-book-open" /> {t('hero.cta')}
            </a>
            <a href="mailto:aebonlee@gmail.com" className="btn btn-ghost" style={{ fontSize: 18, padding: '14px 32px' }}>
              <i className="fa-solid fa-envelope" /> {t('hero.ctaSub')}
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">{categories.length}</div>
              <div className="hero-stat-label">{t('stats.categories')}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">{totalTopics}</div>
              <div className="hero-stat-label">{t('stats.topics')}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">{totalHours}+</div>
              <div className="hero-stat-label">{t('stats.hours')}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">98%</div>
              <div className="hero-stat-label">{t('stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section" id="courses">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.categoriesTitle')}</h2>
            <p className="section-subtitle">{t('home.categoriesSubtitle')}</p>
          </div>
          <div className="categories-grid stagger-children">
            {categories.map(cat => {
              const catHours = cat.topics.reduce((s, tp) => s + tp.hours, 0)
              return (
                <Link key={cat.id} to={`/${cat.slug}`} className="category-card animate-fade-in-up" style={{ '--card-color': cat.color } as React.CSSProperties}>
                  <div className="category-icon" style={{ background: cat.color }}>
                    <i className={cat.icon} />
                  </div>
                  <h3>{localizedField(cat, 'title')}</h3>
                  <p>{localizedField(cat, 'description')}</p>
                  <div className="category-meta">
                    <span><i className="fa-solid fa-list" />{cat.topics.length}{t('home.topicsCount')}</span>
                    <span><i className="fa-regular fa-clock" />{catHours}{t('category.hours')}</span>
                  </div>
                  <span className="category-link">
                    {t('home.viewAll')} <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--gradient-hero)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>{t('home.ctaTitle')}</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', marginBottom: 32, maxWidth: 600, margin: '0 auto 32px' }}>
            {t('home.ctaDesc')}
          </p>
          <a href="mailto:aebonlee@gmail.com" className="btn btn-accent" style={{ fontSize: 18, padding: '14px 32px' }}>
            <i className="fa-solid fa-envelope" /> {t('home.ctaEmail')}
          </a>
        </div>
      </section>
    </>
  )
}
