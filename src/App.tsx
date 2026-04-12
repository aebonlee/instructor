import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const Home = lazy(() => import('./pages/Home'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const TopicPage = lazy(() => import('./pages/TopicPage'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const MyPage = lazy(() => import('./pages/MyPage'))
const AdminPage = lazy(() => import('./pages/AdminPage'))
const CommunityPage = lazy(() => import('./pages/CommunityPage'))
const BoardPage = lazy(() => import('./pages/BoardPage'))
const PostWritePage = lazy(() => import('./pages/PostWritePage'))
const PostDetailPage = lazy(() => import('./pages/PostDetailPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const SchedulePage = lazy(() => import('./pages/SchedulePage'))

function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
      <div className="loading-spinner-small" />
    </div>
  )
}

function LazyRoute({ element }: { element: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        {element}
      </Suspense>
    </ErrorBoundary>
  )
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isAdmin, loading } = useAuth()
  if (loading) return <PageLoader />
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (!isAdmin) return <Navigate to="/" replace />
  return children
}

function NotFoundPage() {
  const { t } = useLanguage()
  return (
    <div style={{ textAlign: 'center', padding: '100px 24px' }}>
      <div style={{ fontSize: 80, fontWeight: 900, color: 'var(--primary)', marginBottom: 12 }}>{t('notFound.code')}</div>
      <h2 style={{ fontSize: 24, marginBottom: 12 }}>{t('notFound.title')}</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>{t('notFound.desc')}</p>
      <a href="/" className="btn btn-primary">{t('notFound.home')}</a>
    </div>
  )
}

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LazyRoute element={<Home />} />} />
          <Route path="/login" element={<LazyRoute element={<Login />} />} />
          <Route path="/register" element={<LazyRoute element={<Register />} />} />
          <Route path="/forgot-password" element={<LazyRoute element={<ForgotPassword />} />} />
          <Route path="/my" element={<LazyRoute element={<MyPage />} />} />
          <Route path="/admin" element={<AdminRoute><LazyRoute element={<AdminPage />} /></AdminRoute>} />
          <Route path="/about" element={<LazyRoute element={<AboutPage />} />} />
          <Route path="/faq" element={<LazyRoute element={<FaqPage />} />} />
          <Route path="/schedule" element={<LazyRoute element={<SchedulePage />} />} />
          <Route path="/community" element={<LazyRoute element={<CommunityPage />} />} />
          <Route path="/community/:boardSlug" element={<LazyRoute element={<BoardPage />} />} />
          <Route path="/community/:boardSlug/write" element={<LazyRoute element={<PostWritePage />} />} />
          <Route path="/community/:boardSlug/:postId/edit" element={<LazyRoute element={<PostWritePage />} />} />
          <Route path="/community/:boardSlug/:postId" element={<LazyRoute element={<PostDetailPage />} />} />
          <Route path="/:categorySlug" element={<LazyRoute element={<CategoryPage />} />} />
          <Route path="/:categorySlug/:topicSlug" element={<LazyRoute element={<TopicPage />} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <ErrorBoundary>
              <AppLayout />
            </ErrorBoundary>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
