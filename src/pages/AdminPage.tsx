import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'

export default function AdminPage() {
  const { isAuthenticated, isAdmin, loading } = useAuth()
  const { t } = useLanguage()

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', padding: 80 }}><div className="loading-spinner-small" /></div>
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (!isAdmin) return <Navigate to="/" replace />

  return (
    <div className="admin-page">
      <div className="container">
        <h1>{t('admin.title')}</h1>

        <div className="admin-stats">
          <div className="admin-stat-card">
            <i className="fa-solid fa-users" />
            <div className="admin-stat-value">-</div>
            <div className="admin-stat-label">{t('admin.totalUsers')}</div>
          </div>
          <div className="admin-stat-card">
            <i className="fa-solid fa-eye" />
            <div className="admin-stat-value">-</div>
            <div className="admin-stat-label">{t('admin.todayVisits')}</div>
          </div>
          <div className="admin-stat-card">
            <i className="fa-solid fa-download" />
            <div className="admin-stat-value">-</div>
            <div className="admin-stat-label">{t('admin.totalDownloads')}</div>
          </div>
        </div>

        <div className="admin-section">
          <h2>{t('admin.users')}</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>{t('auth.name')}</th>
                <th>{t('auth.email')}</th>
                <th>{t('mypage.joined')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} style={{ textAlign: 'center', color: 'var(--text-light)', padding: 32 }}>
                  Supabase 연동 후 사용자 목록이 표시됩니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
