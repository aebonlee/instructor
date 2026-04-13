// ============================================================
// Topic Content - 상세 학습 콘텐츠 타입 정의
// ============================================================

/** 학습 모듈 (커리큘럼 각 항목의 상세 내용) */
export interface LearningModule {
  title: string
  titleEn: string
  content: string       // 상세 설명 (KO)
  contentEn: string     // 상세 설명 (EN)
  keyPoints: string[]   // 핵심 포인트 (KO)
  keyPointsEn: string[] // 핵심 포인트 (EN)
}

/** 실습 활동 */
export interface PracticeActivity {
  title: string
  titleEn: string
  type: 'individual' | 'group' | 'project'
  description: string
  descriptionEn: string
  steps: string[]
  stepsEn: string[]
  tools?: string[]        // 사용 도구
}

/** 사례 연구 */
export interface CaseStudy {
  title: string
  titleEn: string
  industry: string       // 산업/분야
  industryEn: string
  summary: string
  summaryEn: string
  challenge: string
  challengeEn: string
  solution: string
  solutionEn: string
  result: string
  resultEn: string
}

/** 강의 팁 */
export interface TeachingTip {
  title: string
  titleEn: string
  content: string
  contentEn: string
  category: 'delivery' | 'engagement' | 'assessment' | 'preparation'
}

/** 토픽 전체 콘텐츠 */
export interface TopicContent {
  topicId: string
  learningObjectives: string[]
  learningObjectivesEn: string[]
  targetAudience: string
  targetAudienceEn: string
  prerequisites: string
  prerequisitesEn: string
  teachingMethod: string[]
  teachingMethodEn: string[]
  modules: LearningModule[]
  practices: PracticeActivity[]
  cases: CaseStudy[]
  tips: TeachingTip[]
}

// ─── Content Map ───
const contentMap = new Map<string, TopicContent>()

export function registerContent(contents: TopicContent[]) {
  contents.forEach(c => contentMap.set(c.topicId, c))
}

export function getTopicContent(topicId: string): TopicContent | undefined {
  return contentMap.get(topicId)
}
