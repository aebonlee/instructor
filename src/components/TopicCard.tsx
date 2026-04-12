import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import type { Topic } from '../data/courses'

interface Props {
  topic: Topic
  categorySlug: string
  color: string
}

export default function TopicCard({ topic, categorySlug, color }: Props) {
  const { t, localizedField } = useLanguage()

  return (
    <div className="topic-card animate-fade-in-up">
      <div className="topic-card-icon" style={{ background: color }}>
        <i className={topic.icon} />
      </div>
      <h4>{localizedField(topic, 'title')}</h4>
      <p>{localizedField(topic, 'description')}</p>
      <div className="topic-card-footer">
        <span className="topic-hours">
          <i className="fa-regular fa-clock" />
          {topic.hours}{t('category.hours')}
        </span>
        <Link to={`/${categorySlug}/${topic.slug}`} className="topic-detail-link">
          {t('category.viewDetail')} <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>
    </div>
  )
}
