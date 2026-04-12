import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { findTopic } from '../data/courses'
import Sidebar from '../components/Sidebar'
import CourseDownload from '../components/CourseDownload'

export default function TopicPage() {
  const { categorySlug, topicSlug } = useParams<{ categorySlug: string; topicSlug: string }>()
  const { t, localizedField, lang } = useLanguage()
  const [activeTab, setActiveTab] = useState<'learning' | 'outline' | 'materials'>('learning')

  const result = findTopic(categorySlug || '', topicSlug || '')
  if (!result) return <Navigate to="/" replace />

  const { category, topic } = result
  const keywords = lang === 'en' && topic.keywordsEn ? topic.keywordsEn : topic.keywords
  const outline = lang === 'en' && topic.outlineEn ? topic.outlineEn : topic.outline

  return (
    <>
      <section className="topic-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">{t('category.backToHome')}</Link>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 10 }} />
            <Link to={`/${category.slug}`}>{localizedField(category, 'title')}</Link>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 10 }} />
            <span>{localizedField(topic, 'title')}</span>
          </div>
          <div className="topic-hero-inner">
            <h1>{localizedField(topic, 'title')}</h1>
            <p className="topic-hero-desc">{localizedField(topic, 'description')}</p>
            <div className="topic-meta-bar">
              <div className="topic-meta-item">
                <i className="fa-regular fa-clock" />
                {topic.hours}{t('topic.hours')}
              </div>
              <div className="topic-meta-item">
                <i className={category.icon} />
                {localizedField(category, 'title')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-with-sidebar">
        <Sidebar category={category} activeTopicSlug={topic.slug} />

        <div className="sidebar-content">
          {/* Tabs */}
          <div className="topic-tabs">
            <button
              className={`topic-tab-btn${activeTab === 'learning' ? ' active' : ''}`}
              onClick={() => setActiveTab('learning')}
            >
              <i className="fa-solid fa-book-open" style={{ marginRight: 6 }} />
              {t('topic.overview')}
            </button>
            <button
              className={`topic-tab-btn${activeTab === 'outline' ? ' active' : ''}`}
              onClick={() => setActiveTab('outline')}
            >
              <i className="fa-solid fa-list-check" style={{ marginRight: 6 }} />
              {t('topic.outline')}
            </button>
            <button
              className={`topic-tab-btn${activeTab === 'materials' ? ' active' : ''}`}
              onClick={() => setActiveTab('materials')}
            >
              <i className="fa-solid fa-file-arrow-down" style={{ marginRight: 6 }} />
              {t('topic.download')}
            </button>
          </div>

          {/* Tab: Learning Content */}
          {activeTab === 'learning' && (
            <div className="topic-content animate-fade-in">
              {/* Keywords */}
              <div className="topic-keywords">
                <h2><i className="fa-solid fa-tags" />{t('topic.keywords')}</h2>
                <div className="keywords-list">
                  {keywords.map((kw, i) => (
                    <span key={i} className="keyword-tag">{kw}</span>
                  ))}
                </div>
              </div>

              {/* Learning content */}
              <div className="learning-section">
                <h2>{t('topic.overview')}</h2>
                <p>{localizedField(topic, 'description')}</p>

                <h3>{lang === 'ko' ? '학습 목표' : 'Learning Objectives'}</h3>
                <ul>
                  {outline.slice(0, 3).map((item, i) => (
                    <li key={i}>{item}{lang === 'ko' ? '에 대해 이해하고 실습합니다.' : ' - understand and practice.'}</li>
                  ))}
                </ul>

                <h3>{lang === 'ko' ? '대상' : 'Target Audience'}</h3>
                <p>
                  {lang === 'ko'
                    ? 'AI 기술을 교육 현장에 적용하고자 하는 강사, 교수자, 기업 교육 담당자를 대상으로 합니다.'
                    : 'Designed for instructors, educators, and corporate training managers who want to apply AI in educational settings.'}
                </p>

                <h3>{lang === 'ko' ? '선수 지식' : 'Prerequisites'}</h3>
                <p>
                  {lang === 'ko'
                    ? '기본적인 컴퓨터 활용 능력과 AI 도구(ChatGPT, Claude 등)에 대한 기초적인 경험이 있으면 도움이 됩니다.'
                    : 'Basic computer skills and introductory experience with AI tools (ChatGPT, Claude, etc.) are helpful.'}
                </p>

                <h3>{lang === 'ko' ? '교육 방법' : 'Teaching Method'}</h3>
                <ul>
                  <li>{lang === 'ko' ? '이론 강의 + 실습 병행 (이론 40%, 실습 60%)' : 'Theory lectures + hands-on practice (40% theory, 60% practice)'}</li>
                  <li>{lang === 'ko' ? '사례 중심의 프로젝트 기반 학습' : 'Case-based project-oriented learning'}</li>
                  <li>{lang === 'ko' ? '개인 및 그룹 실습 활동 포함' : 'Individual and group practice activities included'}</li>
                </ul>
              </div>
            </div>
          )}

          {/* Tab: Outline/Curriculum */}
          {activeTab === 'outline' && (
            <div className="topic-content animate-fade-in">
              <div className="topic-outline">
                <h2><i className="fa-solid fa-list-check" />{t('topic.outline')}</h2>
                <div className="outline-list">
                  {outline.map((item, i) => (
                    <div key={i} className="outline-item">
                      <div className="outline-number">{i + 1}</div>
                      <span className="outline-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab: Materials Download */}
          {activeTab === 'materials' && (
            <div className="topic-content animate-fade-in">
              <CourseDownload topicId={topic.id} topicTitle={localizedField(topic, 'title')} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
