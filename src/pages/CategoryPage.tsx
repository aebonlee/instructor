import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { findCategory } from '../data/courses'
import TopicCard from '../components/TopicCard'

export default function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const { t, localizedField } = useLanguage()

  const category = findCategory(categorySlug || '')
  if (!category) return <Navigate to="/" replace />

  const catHours = category.topics.reduce((s, tp) => s + tp.hours, 0)

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
                <span><i className="fa-regular fa-clock" />{catHours}{t('category.hours')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="topics-grid stagger-children">
            {category.topics.map(topic => (
              <TopicCard key={topic.id} topic={topic} categorySlug={category.slug} color={category.color} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
