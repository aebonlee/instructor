import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { findCategory } from '../data/courses'
import Sidebar from '../components/Sidebar'
import TopicCard from '../components/TopicCard'
import RelatedSitesSection from '../components/RelatedSitesSection'

export default function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const { t, localizedField } = useLanguage()

  const category = findCategory(categorySlug || '')
  if (!category) return <Navigate to="/" replace />

  return (
    <>
      <section className="category-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">{t('category.backToHome')}</Link>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 10 }} />
            <span>{localizedField(category, 'title')}</span>
          </div>
          <div className="category-header-content">
            <div className="category-header-icon" style={{ background: category.color }}>
              <i className={category.icon} />
            </div>
            <div>
              <h1>{localizedField(category, 'title')}</h1>
              <p>{localizedField(category, 'description')}</p>
              <div className="category-meta" style={{ marginTop: 12 }}>
                <span><i className="fa-solid fa-list" />{category.topics.length} {t('category.topics')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-with-sidebar">
        <Sidebar category={category} />
        <div className="sidebar-content">
          <div className="topics-grid stagger-children">
            {category.topics.map(topic => (
              <TopicCard key={topic.id} topic={topic} categorySlug={category.slug} color={category.color} />
            ))}
          </div>
          <RelatedSitesSection categorySlug={category.slug} />
        </div>
      </div>
    </>
  )
}
