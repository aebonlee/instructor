import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { resetPassword } = useAuth()
  const { t } = useLanguage()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error: err } = await resetPassword(email)
    setLoading(false)
    if (err) { setError(err.message); return }
    setSent(true)
  }

  return (
    <div className="auth-page">
      <div className="auth-card animate-fade-in-up">
        <h1>{t('auth.resetPassword')}</h1>
        <p className="auth-subtitle">AI Instructor</p>

        {sent ? (
          <div className="auth-success">
            <i className="fa-solid fa-check-circle" style={{ fontSize: 32, marginBottom: 12, display: 'block' }} />
            {t('auth.resetSent')}
          </div>
        ) : (
          <>
            {error && <p className="form-error" style={{ textAlign: 'center', marginBottom: 16 }}>{error}</p>}
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t('auth.email')}</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" />
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
                {loading ? <div className="loading-spinner-small" style={{ width: 20, height: 20, borderWidth: 2 }} /> : t('auth.resetBtn')}
              </button>
            </form>
          </>
        )}

        <div className="auth-footer">
          <Link to="/login">{t('auth.login')}</Link>
        </div>
      </div>
    </div>
  )
}
