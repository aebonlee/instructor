import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getSitesByCategory, type RelatedSite } from '../config/relatedSites'

function SiteCard({ site, lang, visitLabel, featuredLabel }: { site: RelatedSite; lang: string; visitLabel: string; featuredLabel: string }) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`related-site-card${site.featured ? ' featured' : ''}`}
    >
      <div className="related-site-card-icon">
        <i className={site.icon} />
      </div>
      <div className="related-site-card-body">
        <h4>
          {lang === 'ko' ? site.name : site.nameEn}
          {site.featured && <span className="related-site-featured-badge">{featuredLabel}</span>}
        </h4>
        <p>{lang === 'ko' ? site.desc : site.descEn}</p>
      </div>
      <span className="related-site-card-visit">{visitLabel}</span>
    </a>
  )
}

export default function RelatedSitesSection({ categorySlug }: { categorySlug: string }) {
  const { t, lang } = useLanguage()
  const sites = getSitesByCategory(categorySlug)

  if (sites.length === 0) return null

  return (
    <div className="related-sites-section">
      <div className="related-sites-section-header">
        <h3>{t('relatedSites.sectionTitle')}</h3>
        <p>{t('relatedSites.sectionDesc')}</p>
      </div>
      <div className="related-sites-grid">
        {sites.map(site => (
          <SiteCard
            key={site.id}
            site={site}
            lang={lang}
            visitLabel={t('relatedSites.visitSite')}
            featuredLabel={t('relatedSites.featured')}
          />
        ))}
      </div>
      <div className="related-sites-section-footer">
        <Link to="/related-sites">
          {t('relatedSites.viewAll')} <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>
    </div>
  )
}
