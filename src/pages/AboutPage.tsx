import { useLanguage } from '../contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()

  const specialties = t('about.specialtyList') as unknown as string[]
  const careers = t('about.careerList') as unknown as string[]
  const educations = t('about.educationList') as unknown as string[]
  const certifications = t('about.certificationList') as unknown as string[]
  const statItems = t('about.statItems') as unknown as Record<string, string>
  const statValues = t('about.statValues') as unknown as Record<string, string>

  return (
    <>
      <div className="about-hero">
        <div className="container">
          <h1>{t('about.title')}</h1>
          <p>{t('about.subtitle')}</p>
        </div>
      </div>
      <div className="container about-content">
        {/* Profile */}
        <div className="about-profile">
          <div className="about-avatar">
            <i className="fa-solid fa-chalkboard-user" />
          </div>
          <div className="about-info">
            <h2>{t('about.name')}</h2>
            <p className="about-degree">{t('about.degree')}</p>
            <p className="about-position">{t('about.position')}</p>

            <div className="about-section" style={{ border: 'none', padding: 0 }}>
              <h3><i className="fa-solid fa-star" /> {t('about.specialties')}</h3>
              <ul>
                {specialties.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          {Object.keys(statItems).map(key => (
            <div key={key} className="about-stat-card">
              <div className="stat-value">{statValues[key]}</div>
              <div className="stat-label">{statItems[key]}</div>
            </div>
          ))}
        </div>

        {/* Career, Education & Certifications */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24, marginBottom: 24 }}>
          <div className="about-section">
            <h3><i className="fa-solid fa-briefcase" /> {t('about.career')}</h3>
            <ul>
              {careers.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="about-section">
            <h3><i className="fa-solid fa-graduation-cap" /> {t('about.education')}</h3>
            <ul>
              {educations.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="about-section">
            <h3><i className="fa-solid fa-certificate" /> {t('about.certifications')}</h3>
            <ul>
              {certifications.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="about-contact">
          <h3><i className="fa-solid fa-address-card" /> {t('about.contact')}</h3>
          <div className="about-contact-item">
            <i className="fa-solid fa-envelope" />
            <a href={`mailto:${t('about.email')}`}>{t('about.email')}</a>
          </div>
          <div className="about-contact-item">
            <i className="fa-solid fa-globe" />
            <a href={`https://${t('about.website')}`} target="_blank" rel="noreferrer">{t('about.website')}</a>
          </div>
        </div>
      </div>
    </>
  )
}
