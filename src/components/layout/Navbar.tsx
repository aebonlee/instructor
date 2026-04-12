import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { categories } from '../../data/courses'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { theme, toggleTheme } = useTheme()
  const { user, isAuthenticated, isAdmin, signOut } = useAuth()
  const { t, toggleLang, lang, localizedField } = useLanguage()
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    setUserMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDropdown = (id: string) => {
    setActiveDropdown(prev => prev === id ? null : id)
  }

  const userAvatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
  const userName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="nav-brand">
          <span className="brand-ai">AI</span>
          <span className="brand-instructor">Instructor</span>
        </Link>

        <div className={`nav-menu${mobileOpen ? ' mobile-open' : ''}`}>
          {categories.map(cat => (
            <div key={cat.id} className={`nav-item${activeDropdown === cat.id ? ' open' : ''}`}>
              <span className="nav-link" onClick={() => handleDropdown(cat.id)}>
                <i className={cat.icon} />
                {localizedField(cat, 'title')}
                <i className="fa-solid fa-chevron-down" />
              </span>
              <div className="nav-dropdown">
                <Link to={`/${cat.slug}`} className="dropdown-item" style={{ fontWeight: 600, color: 'var(--primary)' }}>
                  <i className="fa-solid fa-grid-2" />
                  {t('category.title')} {localizedField(cat, 'title')}
                </Link>
                {cat.topics.map(topic => (
                  <Link key={topic.id} to={`/${cat.slug}/${topic.slug}`} className="dropdown-item">
                    <i className={topic.icon} />
                    {localizedField(topic, 'title')}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="nav-actions">
          <button className="nav-action-btn" onClick={toggleTheme} title={theme === 'light' ? t('nav.darkMode') : t('nav.lightMode')}>
            <i className={theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'} />
          </button>
          <button className="nav-action-btn" onClick={toggleLang} title={t('nav.language')}>
            {lang === 'ko' ? 'EN' : 'KO'}
          </button>

          {isAuthenticated ? (
            <div className={`nav-user${userMenuOpen ? ' open' : ''}`} ref={userMenuRef}>
              <button className="nav-user-btn" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                <div className="nav-user-avatar">
                  {userAvatar ? <img src={userAvatar} alt="" /> : userName?.charAt(0)?.toUpperCase()}
                </div>
                <span className="nav-user-name">{userName}</span>
              </button>
              <div className="nav-user-dropdown">
                <Link to="/my" className="user-dropdown-item">
                  <i className="fa-solid fa-user" /> {t('nav.mypage')}
                </Link>
                {isAdmin && (
                  <Link to="/admin" className="user-dropdown-item">
                    <i className="fa-solid fa-shield" /> {t('nav.admin')}
                  </Link>
                )}
                <button className="user-dropdown-item danger" onClick={() => { signOut(); navigate('/') }}>
                  <i className="fa-solid fa-right-from-bracket" /> {t('nav.logout')}
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="nav-auth-btn login">{t('nav.login')}</Link>
          )}

          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            <i className={mobileOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
          </button>
        </div>
      </div>
    </nav>
  )
}
