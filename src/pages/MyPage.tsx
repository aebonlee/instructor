import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'

export default function MyPage() {
  const { user, isAuthenticated, loading } = useAuth()
  const { t } = useLanguage()

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', padding: 80 }}><div className="loading-spinner-small" /></div>
  if (!isAuthenticated) return <Navigate to="/login" replace />

  const avatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
  const name = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0]
  const joined = user?.created_at ? new Date(user.created_at).toLocaleDateString() : '-'

  return (
    <div className="mypage">
      <div className="container">
        <h1>{t('mypage.title')}</h1>
        <div className="mypage-grid">
          <div className="profile-card">
            <div className="profile-avatar">
              {avatar ? <img src={avatar} alt="" /> : name?.charAt(0)?.toUpperCase()}
            </div>
            <div className="profile-name">{name}</div>
            <div className="profile-email">{user?.email}</div>
            <div className="profile-joined">{t('mypage.joined')}: {joined}</div>
          </div>
          <div className="mypage-content">
            <h2>{t('mypage.downloads')}</h2>
            <div className="no-data">
              <i className="fa-solid fa-folder-open" style={{ fontSize: 32, marginBottom: 12, display: 'block', color: 'var(--text-light)' }} />
              {t('mypage.noDownloads')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
