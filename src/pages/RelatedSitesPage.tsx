import { useLanguage } from '../contexts/LanguageContext'
import { getAllSitesGrouped, type RelatedSite } from '../config/relatedSites'

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

export default function RelatedSitesPage() {
  const { t, lang } = useLanguage()
  const groups = getAllSitesGrouped()

  return (
    <>
      <section className="related-sites-hero">
        <div className="container">
          <h1>{t('relatedSites.title')}</h1>
          <p>{t('relatedSites.subtitle')}</p>
        </div>
      </section>

      <section className="related-sites-content">
        <div className="container">
          {groups.map(group => (
            <div key={group.group} className="related-sites-group">
              <h2 className="related-sites-group-title">
                {lang === 'ko' ? group.group : group.groupEn}
              </h2>
              <div className="related-sites-grid">
                {group.sites.map(site => (
                  <SiteCard
                    key={site.id}
                    site={site}
                    lang={lang}
                    visitLabel={t('relatedSites.visitSite')}
                    featuredLabel={t('relatedSites.featured')}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
