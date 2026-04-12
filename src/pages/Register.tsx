import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUpWithEmail } = useAuth()
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (password !== confirm) { setError('비밀번호가 일치하지 않습니다.'); return }
    if (password.length < 6) { setError('비밀번호는 6자 이상이어야 합니다.'); return }
    setLoading(true)
    const { error: err } = await signUpWithEmail(email, password, name)
    setLoading(false)
    if (err) { setError(err.message); return }
    navigate('/login')
  }

  return (
    <div className="auth-page">
      <div className="auth-card animate-fade-in-up">
        <h1>{t('auth.register')}</h1>
        <p className="auth-subtitle">AI Instructor</p>

        {error && <p className="form-error" style={{ textAlign: 'center', marginBottom: 16 }}>{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t('auth.name')}</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>{t('auth.email')}</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>{t('auth.password')}</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="6자 이상" />
          </div>
          <div className="form-group">
            <label>{t('auth.confirmPassword')}</label>
            <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
            {loading ? <div className="loading-spinner-small" style={{ width: 20, height: 20, borderWidth: 2 }} /> : t('auth.registerBtn')}
          </button>
        </form>

        <div className="auth-footer">
          {t('auth.hasAccount')} <Link to="/login">{t('auth.login')}</Link>
        </div>
      </div>
    </div>
  )
}
