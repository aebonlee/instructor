export interface RelatedSite {
  id: string
  name: string
  nameEn: string
  url: string
  desc: string
  descEn: string
  icon: string
  featured?: boolean
}

interface SiteGroup {
  group: string
  groupEn: string
  sites: RelatedSite[]
}

const commonAiTools: RelatedSite[] = [
  { id: 'chatgpt', name: 'ChatGPT 활용', nameEn: 'ChatGPT Guide', url: 'https://chatgpt.dreamitbiz.com', desc: 'ChatGPT 프롬프트 & 활용법', descEn: 'ChatGPT Prompts & Usage', icon: 'fa-solid fa-comment-dots', featured: true },
  { id: 'claude', name: 'Claude 활용', nameEn: 'Claude Guide', url: 'https://claude.dreamitbiz.com', desc: 'Claude AI 실습 가이드', descEn: 'Claude AI Hands-on Guide', icon: 'fa-solid fa-brain', featured: true },
  { id: 'gemini', name: 'Gemini 활용', nameEn: 'Gemini Guide', url: 'https://gemini.dreamitbiz.com', desc: 'Google Gemini AI 가이드', descEn: 'Google Gemini AI Guide', icon: 'fa-solid fa-gem', featured: true },
  { id: 'genspark', name: 'Genspark', nameEn: 'Genspark', url: 'https://genspark.dreamitbiz.com', desc: 'Genspark AI 검색 활용', descEn: 'Genspark AI Search Guide', icon: 'fa-solid fa-magnifying-glass-chart', featured: true },
]

const aiBasicsSites: RelatedSite[] = [
  { id: 'ai-prompt', name: 'AI 프롬프트', nameEn: 'AI Prompt', url: 'https://ai-prompt.dreamitbiz.com', desc: '프롬프트 엔지니어링 전문 학습', descEn: 'Prompt Engineering Courses', icon: 'fa-solid fa-wand-magic-sparkles' },
  { id: 'ai-hub', name: 'AI Hub', nameEn: 'AI Hub', url: 'https://ai-hub.dreamitbiz.com', desc: 'AI 교육 통합 허브', descEn: 'AI Education Hub', icon: 'fa-solid fa-network-wired' },
]

const aiAdvancedSites: RelatedSite[] = [
  { id: 'ai-data', name: 'AI 데이터', nameEn: 'AI Data', url: 'https://ai-data.dreamitbiz.com', desc: 'AI 데이터 분석/시각화', descEn: 'AI Data Analytics & Visualization', icon: 'fa-solid fa-chart-line' },
  { id: 'ai-media', name: 'AI 미디어', nameEn: 'AI Media', url: 'https://ai-media.dreamitbiz.com', desc: 'AI 멀티모달 콘텐츠 제작', descEn: 'AI Multimodal Content Creation', icon: 'fa-solid fa-photo-film' },
  { id: 'ai-agents', name: 'AI 에이전트', nameEn: 'AI Agents', url: 'https://ai-agents.dreamitbiz.com', desc: 'AI 에이전트 & 자동화', descEn: 'AI Agents & Automation', icon: 'fa-solid fa-robot' },
  { id: 'autowork', name: '업무자동화', nameEn: 'Autowork', url: 'https://autowork.dreamitbiz.com', desc: 'AI 업무 자동화 실전', descEn: 'AI Business Automation', icon: 'fa-solid fa-gears' },
  { id: 'fine-tuning', name: '파인튜닝', nameEn: 'Fine-tuning', url: 'https://fine-tuning.dreamitbiz.com', desc: 'LLM 파인튜닝 가이드', descEn: 'LLM Fine-tuning Guide', icon: 'fa-solid fa-sliders' },
]

const planningMarketingSites: RelatedSite[] = [
  { id: 'digitalbiz', name: '디지털비즈', nameEn: 'Digital Biz', url: 'https://digitalbiz.dreamitbiz.com', desc: '디지털 비즈니스 전략', descEn: 'Digital Business Strategy', icon: 'fa-solid fa-building' },
  { id: 'marketing', name: '마케팅', nameEn: 'Marketing', url: 'https://marketing.dreamitbiz.com', desc: 'AI 마케팅 실무', descEn: 'AI Marketing Practice', icon: 'fa-solid fa-bullhorn' },
  { id: 'uxdesign', name: 'UX디자인', nameEn: 'UX Design', url: 'https://uxdesign.dreamitbiz.com', desc: 'UX/UI 설계 & AI', descEn: 'UX/UI Design & AI', icon: 'fa-solid fa-pen-ruler' },
  { id: 'self-branding', name: '셀프브랜딩', nameEn: 'Self-Branding', url: 'https://self-branding.dreamitbiz.com', desc: 'AI 기반 셀프 브랜딩', descEn: 'AI-powered Self Branding', icon: 'fa-solid fa-user-tie' },
]

const instructorTrainingSites: RelatedSite[] = [
  { id: 'edu-hub', name: 'Edu Hub', nameEn: 'Edu Hub', url: 'https://edu-hub.dreamitbiz.com', desc: '교육 통합 플랫폼', descEn: 'Education Platform', icon: 'fa-solid fa-graduation-cap' },
  { id: 'teaching', name: 'Teaching', nameEn: 'Teaching', url: 'https://teaching.dreamitbiz.com', desc: '교수법 & 강의 설계', descEn: 'Teaching Methods & Design', icon: 'fa-solid fa-chalkboard-user' },
  { id: 'presentation', name: '프레젠테이션', nameEn: 'Presentation', url: 'https://presentation.dreamitbiz.com', desc: 'AI 프레젠테이션 제작', descEn: 'AI Presentation Creation', icon: 'fa-solid fa-display' },
]

const supplementarySites: RelatedSite[] = [
  { id: 'coding', name: 'Coding', nameEn: 'Coding', url: 'https://coding.dreamitbiz.com', desc: '코딩 교육 (No-code 연계)', descEn: 'Coding Education (No-code)', icon: 'fa-solid fa-code' },
  { id: 'linux-study', name: 'Linux Study', nameEn: 'Linux Study', url: 'https://linux-study.dreamitbiz.com', desc: '리눅스/서버 학습', descEn: 'Linux & Server Study', icon: 'fa-brands fa-linux' },
]

const categoryMap: Record<string, RelatedSite[]> = {
  'ai-basics': aiBasicsSites,
  'ai-advanced': aiAdvancedSites,
  'planning-marketing': planningMarketingSites,
  'instructor-training': instructorTrainingSites,
}

export function getSitesByCategory(slug: string): RelatedSite[] {
  const categorySites = categoryMap[slug] || []
  return [...commonAiTools, ...categorySites]
}

export function getAllSitesGrouped(): SiteGroup[] {
  return [
    { group: '공통 AI 도구', groupEn: 'AI Tools', sites: commonAiTools },
    { group: '생성형AI 기본', groupEn: 'AI Basics', sites: aiBasicsSites },
    { group: '생성형AI 심화', groupEn: 'Advanced AI', sites: aiAdvancedSites },
    { group: '기획·마케팅', groupEn: 'Planning & Marketing', sites: planningMarketingSites },
    { group: '강사양성', groupEn: 'Instructor Training', sites: instructorTrainingSites },
    { group: '보조 학습 자료', groupEn: 'Supplementary', sites: supplementarySites },
  ]
}
