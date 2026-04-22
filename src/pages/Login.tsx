import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signInWithEmail, signInWithGoogle, signInWithKakao, authError, clearAuthError } = useAuth()
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error: err } = await signInWithEmail(email, password)
    setLoading(false)
    if (err) { setError(err.message); return }
    navigate('/')
  }

  return (
    <div className="auth-page">
      <div className="auth-card animate-fade-in-up">
        <h1>{t('auth.login')}</h1>
        <p className="auth-subtitle">AI Instructor</p>

        {(error || authError) && <p className="form-error" style={{ textAlign: 'center', marginBottom: 16 }}>{error || authError}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t('auth.email')}</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>{t('auth.password')}</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
            {loading ? <div className="loading-spinner-small" style={{ width: 20, height: 20, borderWidth: 2 }} /> : t('auth.loginBtn')}
          </button>
        </form>

        <div style={{ textAlign: 'right', marginTop: 8 }}>
          <Link to="/forgot-password" style={{ fontSize: 13, color: 'var(--primary)' }}>{t('auth.forgotPassword')}</Link>
        </div>

        <div className="auth-divider">{t('auth.or')}</div>

        <div className="oauth-buttons">
          <button className="oauth-btn" onClick={() => { clearAuthError(); signInWithGoogle(); }}>
            <i className="fa-brands fa-google" style={{ color: '#4285F4' }} />
            {t('auth.googleLogin')}
          </button>
          <button className="oauth-btn" onClick={() => { clearAuthError(); signInWithKakao(); }}>
            <i className="fa-solid fa-comment" style={{ color: '#FEE500' }} />
            {t('auth.kakaoLogin')}
          </button>
        </div>

        <div className="auth-footer">
          {t('auth.noAccount')} <Link to="/register">{t('auth.register')}</Link>
        </div>
      </div>
    </div>
  )
}
