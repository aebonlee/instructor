import { NavLink } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import type { Category } from '../data/courses'

interface Props {
  category: Category
  activeTopicSlug?: string
}

export default function Sidebar({ category, activeTopicSlug }: Props) {
  const { t, localizedField } = useLanguage()

  return (
    <aside className="sidebar">
      <div className="sidebar-header" style={{ borderLeftColor: category.color }}>
        <NavLink to={`/${category.slug}`} className="sidebar-title">
          {localizedField(category, 'title')}
        </NavLink>
      </div>
      <nav className="sidebar-nav">
        {category.topics.map(topic => (
          <NavLink
            key={topic.id}
            to={`/${category.slug}/${topic.slug}`}
            className={`sidebar-item${activeTopicSlug === topic.slug ? ' active' : ''}`}
          >
            <span className="sidebar-item-text">{localizedField(topic, 'title')}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
