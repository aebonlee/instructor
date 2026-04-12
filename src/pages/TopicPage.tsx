import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { findTopic } from '../data/courses'
import { getTopicContent } from '../data/topicContent'
import type { TopicContent, LearningModule, PracticeActivity, CaseStudy, TeachingTip } from '../data/topicContent'
import Sidebar from '../components/Sidebar'
import CourseDownload from '../components/CourseDownload'

type TabKey = 'learning' | 'practice' | 'cases' | 'tips' | 'outline' | 'materials'

export default function TopicPage() {
  const { categorySlug, topicSlug } = useParams<{ categorySlug: string; topicSlug: string }>()
  const { t, localizedField, lang } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabKey>('learning')

  const result = findTopic(categorySlug || '', topicSlug || '')
  if (!result) return <Navigate to="/" replace />

  const { category, topic } = result
  const keywords = lang === 'en' && topic.keywordsEn ? topic.keywordsEn : topic.keywords
  const outline = lang === 'en' && topic.outlineEn ? topic.outlineEn : topic.outline
  const content = getTopicContent(topic.id)

  const lf = (obj: { [k: string]: string }, field: string) =>
    lang === 'en' ? obj[field + 'En'] || obj[field] : obj[field]

  const tabs: { key: TabKey; icon: string; label: string; labelEn: string }[] = [
    { key: 'learning', icon: 'fa-solid fa-book-open', label: '학습내용', labelEn: 'Learning' },
    { key: 'practice', icon: 'fa-solid fa-laptop-code', label: '실습활동', labelEn: 'Practice' },
    { key: 'cases', icon: 'fa-solid fa-building', label: '사례연구', labelEn: 'Case Studies' },
    { key: 'tips', icon: 'fa-solid fa-lightbulb', label: '강의팁', labelEn: 'Teaching Tips' },
    { key: 'outline', icon: 'fa-solid fa-list-check', label: '커리큘럼', labelEn: 'Curriculum' },
    { key: 'materials', icon: 'fa-solid fa-file-arrow-down', label: '강의안', labelEn: 'Materials' },
  ]

  const tipCategoryLabel = (cat: string) => {
    const map: Record<string, [string, string]> = {
      delivery: ['전달 기법', 'Delivery'],
      engagement: ['참여 유도', 'Engagement'],
      assessment: ['평가 방법', 'Assessment'],
      preparation: ['사전 준비', 'Preparation'],
    }
    return lang === 'en' ? (map[cat]?.[1] ?? cat) : (map[cat]?.[0] ?? cat)
  }

  const practiceTypeLabel = (type: string) => {
    const map: Record<string, [string, string]> = {
      individual: ['개인 실습', 'Individual'],
      group: ['그룹 활동', 'Group Activity'],
      project: ['프로젝트', 'Project'],
    }
    return lang === 'en' ? (map[type]?.[1] ?? type) : (map[type]?.[0] ?? type)
  }

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
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`topic-tab-btn${activeTab === tab.key ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <i className={tab.icon} style={{ marginRight: 6 }} />
                {lang === 'en' ? tab.labelEn : tab.label}
              </button>
            ))}
          </div>

          {/* ─── Tab: 학습내용 ─── */}
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

              {content ? (
                <>
                  {/* Learning Objectives */}
                  <div className="learning-section">
                    <h2>{lang === 'ko' ? '학습 목표' : 'Learning Objectives'}</h2>
                    <ul className="objectives-list">
                      {(lang === 'en' ? content.learningObjectivesEn : content.learningObjectives).map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Target & Prerequisites */}
                  <div className="learning-section info-grid">
                    <div className="info-card">
                      <h3><i className="fa-solid fa-users" /> {lang === 'ko' ? '교육 대상' : 'Target Audience'}</h3>
                      <p>{lang === 'en' ? content.targetAudienceEn : content.targetAudience}</p>
                    </div>
                    <div className="info-card">
                      <h3><i className="fa-solid fa-clipboard-check" /> {lang === 'ko' ? '선수 지식' : 'Prerequisites'}</h3>
                      <p>{lang === 'en' ? content.prerequisitesEn : content.prerequisites}</p>
                    </div>
                    <div className="info-card">
                      <h3><i className="fa-solid fa-chalkboard" /> {lang === 'ko' ? '교육 방법' : 'Teaching Method'}</h3>
                      <ul>
                        {(lang === 'en' ? content.teachingMethodEn : content.teachingMethod).map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Learning Modules */}
                  <div className="modules-section">
                    <h2><i className="fa-solid fa-book" /> {lang === 'ko' ? '상세 학습 내용' : 'Detailed Course Content'}</h2>
                    {content.modules.map((mod: LearningModule, i: number) => (
                      <div key={i} className="module-card">
                        <div className="module-header">
                          <span className="module-number">{i + 1}</span>
                          <h3>{lang === 'en' ? mod.titleEn : mod.title}</h3>
                        </div>
                        <p className="module-content">{lang === 'en' ? mod.contentEn : mod.content}</p>
                        <div className="module-keypoints">
                          <strong>{lang === 'ko' ? '핵심 포인트' : 'Key Points'}</strong>
                          <ul>
                            {(lang === 'en' ? mod.keyPointsEn : mod.keyPoints).map((kp, j) => (
                              <li key={j}>{kp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                /* Fallback if no content yet */
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
                  <p>{lang === 'ko'
                    ? 'AI 기술을 교육 현장에 적용하고자 하는 강사, 교수자, 기업 교육 담당자를 대상으로 합니다.'
                    : 'Designed for instructors, educators, and corporate training managers who want to apply AI in educational settings.'}</p>
                </div>
              )}
            </div>
          )}

          {/* ─── Tab: 실습활동 ─── */}
          {activeTab === 'practice' && (
            <div className="topic-content animate-fade-in">
              {content && content.practices.length > 0 ? (
                <div className="practices-section">
                  <h2><i className="fa-solid fa-laptop-code" /> {lang === 'ko' ? '실습 활동' : 'Practice Activities'}</h2>
                  {content.practices.map((p: PracticeActivity, i: number) => (
                    <div key={i} className="practice-card">
                      <div className="practice-header">
                        <span className={`practice-type type-${p.type}`}>{practiceTypeLabel(p.type)}</span>
                        <span className="practice-duration">
                          <i className="fa-regular fa-clock" /> {lang === 'en' ? p.durationEn : p.duration}
                        </span>
                      </div>
                      <h3>{lang === 'en' ? p.titleEn : p.title}</h3>
                      <p>{lang === 'en' ? p.descriptionEn : p.description}</p>
                      {p.tools && p.tools.length > 0 && (
                        <div className="practice-tools">
                          <strong>{lang === 'ko' ? '사용 도구:' : 'Tools:'}</strong>
                          {p.tools.map((tool, j) => (
                            <span key={j} className="tool-tag">{tool}</span>
                          ))}
                        </div>
                      )}
                      <div className="practice-steps">
                        <strong>{lang === 'ko' ? '실습 단계' : 'Steps'}</strong>
                        <ol>
                          {(lang === 'en' ? p.stepsEn : p.steps).map((step, j) => (
                            <li key={j}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-content">
                  <i className="fa-solid fa-laptop-code" />
                  <p>{lang === 'ko' ? '실습 콘텐츠가 준비 중입니다.' : 'Practice content is being prepared.'}</p>
                </div>
              )}
            </div>
          )}

          {/* ─── Tab: 사례연구 ─── */}
          {activeTab === 'cases' && (
            <div className="topic-content animate-fade-in">
              {content && content.cases.length > 0 ? (
                <div className="cases-section">
                  <h2><i className="fa-solid fa-building" /> {lang === 'ko' ? '사례 연구' : 'Case Studies'}</h2>
                  {content.cases.map((c: CaseStudy, i: number) => (
                    <div key={i} className="case-card">
                      <div className="case-header">
                        <span className="case-industry">{lang === 'en' ? c.industryEn : c.industry}</span>
                        <h3>{lang === 'en' ? c.titleEn : c.title}</h3>
                      </div>
                      <p className="case-summary">{lang === 'en' ? c.summaryEn : c.summary}</p>
                      <div className="case-details">
                        <div className="case-detail-item">
                          <div className="case-detail-label">
                            <i className="fa-solid fa-triangle-exclamation" />
                            {lang === 'ko' ? '도전 과제' : 'Challenge'}
                          </div>
                          <p>{lang === 'en' ? c.challengeEn : c.challenge}</p>
                        </div>
                        <div className="case-detail-item">
                          <div className="case-detail-label">
                            <i className="fa-solid fa-gear" />
                            {lang === 'ko' ? '솔루션' : 'Solution'}
                          </div>
                          <p>{lang === 'en' ? c.solutionEn : c.solution}</p>
                        </div>
                        <div className="case-detail-item">
                          <div className="case-detail-label">
                            <i className="fa-solid fa-chart-line" />
                            {lang === 'ko' ? '성과' : 'Results'}
                          </div>
                          <p>{lang === 'en' ? c.resultEn : c.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-content">
                  <i className="fa-solid fa-building" />
                  <p>{lang === 'ko' ? '사례 연구가 준비 중입니다.' : 'Case studies are being prepared.'}</p>
                </div>
              )}
            </div>
          )}

          {/* ─── Tab: 강의팁 ─── */}
          {activeTab === 'tips' && (
            <div className="topic-content animate-fade-in">
              {content && content.tips.length > 0 ? (
                <div className="tips-section">
                  <h2><i className="fa-solid fa-lightbulb" /> {lang === 'ko' ? '강의 팁' : 'Teaching Tips'}</h2>
                  {content.tips.map((tip: TeachingTip, i: number) => (
                    <div key={i} className="tip-card">
                      <div className="tip-category-tag">{tipCategoryLabel(tip.category)}</div>
                      <h3>{lang === 'en' ? tip.titleEn : tip.title}</h3>
                      <p>{lang === 'en' ? tip.contentEn : tip.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-content">
                  <i className="fa-solid fa-lightbulb" />
                  <p>{lang === 'ko' ? '강의 팁이 준비 중입니다.' : 'Teaching tips are being prepared.'}</p>
                </div>
              )}
            </div>
          )}

          {/* ─── Tab: 커리큘럼 ─── */}
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

          {/* ─── Tab: 강의안 다운로드 ─── */}
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
