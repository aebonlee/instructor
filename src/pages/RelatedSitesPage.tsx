import { useLanguage } from '../contexts/LanguageContext'
import { getAllSitesGrouped, type RelatedSite } from '../config/relatedSites'

function SiteCard({ site, lang, visitLabel, featuredLabel, paidBadge }: { site: RelatedSite; lang: string; visitLabel: string; featuredLabel: string; paidBadge: string }) {
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
          <span className="rs-paid-badge">{paidBadge}</span>
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
  const rs = t('relatedSites') as any

  return (
    <>
      <section className="related-sites-hero">
        <div className="container">
          <h1>{rs.title}</h1>
          <p>{rs.subtitle}</p>
        </div>
      </section>

      <section className="related-sites-content">
        <div className="container">

          {/* Paid Service Notice */}
          <div className="rs-paid-notice">
            <div className="rs-paid-notice-header">
              <span className="rs-paid-notice-icon">💳</span>
              <h2>{rs.paidNoticeTitle}</h2>
            </div>
            <p className="rs-paid-notice-desc">{rs.paidNoticeDesc}</p>
            <ul className="rs-paid-notice-list">
              {rs.paidNoticeItems?.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

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
                    visitLabel={rs.visitSite}
                    featuredLabel={rs.featured}
                    paidBadge={rs.paidBadge}
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
