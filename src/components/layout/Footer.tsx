import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { categories } from '../../data/courses'

export default function Footer() {
  const { t, localizedField } = useLanguage()

  const familySites = [
    { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
    { name: 'AI Hub', url: 'https://ai-hub.dreamitbiz.com' },
    { name: 'Edu Hub', url: 'https://edu-hub.dreamitbiz.com' },
    { name: 'AI Prompt', url: 'https://ai-prompt.dreamitbiz.com' },
    { name: 'AI Data', url: 'https://ai-data.dreamitbiz.com' },
    { name: 'Coding Study', url: 'https://coding.dreamitbiz.com' },
  ]

  const handleFamilySite = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = e.target.value
    if (url) {
      window.open(url, '_blank', 'noopener')
      e.target.value = ''
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>
              <span className="brand-ai">AI</span> <span className="brand-instructor">Instructor</span>
            </h3>
            <p>{t('footer.desc')}</p>
            <p style={{ marginTop: 8 }}>
              <i className="fa-solid fa-envelope" style={{ marginRight: 6, color: 'var(--accent-light)' }} />
              {t('footer.email')}
            </p>
            <div className="footer-family">
              <select onChange={handleFamilySite} defaultValue="">
                <option value="" disabled>{t('footer.familySite')}</option>
                {familySites.map((s, i) => (
                  <option key={i} value={s.url}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('footer.quickLinks')}</h4>
            <div className="footer-links">
              {categories.slice(0, 7).map(cat => (
                <Link key={cat.id} to={`/${cat.slug}`}>{localizedField(cat, 'title')}</Link>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contact')}</h4>
            <div className="footer-links">
              <a href="mailto:aebonlee@gmail.com">
                <i className="fa-solid fa-envelope" style={{ marginRight: 6 }} />
                aebonlee@gmail.com
              </a>
              <a href="https://www.dreamitbiz.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-globe" style={{ marginRight: 6 }} />
                www.dreamitbiz.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
