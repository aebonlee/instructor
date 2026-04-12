import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { findTopic, findCategory } from '../data/courses'
import CourseDownload from '../components/CourseDownload'

export default function TopicPage() {
  const { categorySlug, topicSlug } = useParams<{ categorySlug: string; topicSlug: string }>()
  const { t, localizedField, lang } = useLanguage()

  const result = findTopic(categorySlug || '', topicSlug || '')
  if (!result) return <Navigate to="/" replace />

  const { category, topic } = result
  const keywords = lang === 'en' && topic.keywordsEn ? topic.keywordsEn : topic.keywords
  const outline = lang === 'en' && topic.outlineEn ? topic.outlineEn : topic.outline

  // Related topics from same category (excluding current)
  const relatedTopics = category.topics.filter(t => t.id !== topic.id)

  return (
    <>
      <section className="topic-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">{t('category.backToHome')}</Link>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 10 }} />
            <Link to={`/${category.slug}`}>{localizedField(category, 'title')}</Link>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 10 }} />
            <span>{localizedField(topic, 'title')}</span>
          </div>
          <div className="topic-hero-inner">
            <h1>{localizedField(topic, 'title')}</h1>
            <p className="topic-hero-desc">{localizedField(topic, 'description')}</p>
            <div className="topic-meta-bar">
              <div className="topic-meta-item">
                <i className="fa-regular fa-clock" />
                {topic.hours}{t('topic.hours')}
              </div>
              <div className="topic-meta-item">
                <i className={category.icon} />
                {localizedField(category, 'title')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="topic-content">
        {/* Keywords */}
        <div className="topic-keywords animate-fade-in-up">
          <h2><i className="fa-solid fa-tags" />{t('topic.keywords')}</h2>
          <div className="keywords-list">
            {keywords.map((kw, i) => (
              <span key={i} className="keyword-tag">{kw}</span>
            ))}
          </div>
        </div>

        {/* Outline */}
        <div className="topic-outline animate-fade-in-up">
          <h2><i className="fa-solid fa-list-check" />{t('topic.outline')}</h2>
          <div className="outline-list">
            {outline.map((item, i) => (
              <div key={i} className="outline-item">
                <div className="outline-number">{i + 1}</div>
                <span className="outline-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download */}
        <CourseDownload topicId={topic.id} topicTitle={localizedField(topic, 'title')} />

        {/* Related */}
        {relatedTopics.length > 0 && (
          <div className="related-topics animate-fade-in-up">
            <h2>{t('topic.relatedTopics')}</h2>
            <div className="related-grid">
              {relatedTopics.map(rt => (
                <Link key={rt.id} to={`/${category.slug}/${rt.slug}`} className="related-card">
                  <h4>{localizedField(rt, 'title')}</h4>
                  <span><i className="fa-regular fa-clock" style={{ marginRight: 4 }} />{rt.hours}{t('topic.hours')}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back button */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to={`/${category.slug}`} className="btn btn-secondary">
            <i className="fa-solid fa-arrow-left" /> {t('topic.backToCategory')}
          </Link>
        </div>
      </div>
    </>
  )
}
