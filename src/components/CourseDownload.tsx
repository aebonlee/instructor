import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'
import { Link } from 'react-router-dom'

interface Props {
  topicId: string
  topicTitle: string
}

export default function CourseDownload({ topicId: _topicId, topicTitle: _topicTitle }: Props) {
  const { isAuthenticated } = useAuth()
  const { t } = useLanguage()

  return (
    <div className="topic-download">
      <h3><i className="fa-solid fa-file-arrow-down" style={{ marginRight: 8, color: 'var(--primary)' }} />{t('topic.download')}</h3>
      <p>{t('topic.downloadDesc')}</p>
      {isAuthenticated ? (
        <button className="btn btn-primary" disabled style={{ opacity: 0.6 }}>
          <i className="fa-solid fa-download" /> {t('topic.downloadBtn')}
        </button>
      ) : (
        <Link to="/login" className="btn btn-secondary">
          <i className="fa-solid fa-lock" /> {t('topic.loginRequired')}
        </Link>
      )}
    </div>
  )
}
