/**
 * OG Image Generator for instructor.dreamitbiz.com
 * Usage: node generate-og.mjs
 */
import sharp from 'sharp'

const WIDTH = 1200
const HEIGHT = 630

// 다크 블루 기반 5가지 컬러
const COLORS = {
  darkBlue: '#1E3A5F',
  navy: '#0F1D2F',
  teal: '#14B8A6',
  amber: '#F59E0B',
  indigo: '#6366F1',
}

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.darkBlue}"/>
      <stop offset="50%" style="stop-color:${COLORS.navy}"/>
      <stop offset="100%" style="stop-color:#060C18"/>
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${COLORS.teal}"/>
      <stop offset="100%" style="stop-color:#2DD4BF"/>
    </linearGradient>
    <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${COLORS.amber}"/>
      <stop offset="100%" style="stop-color:#FCD34D"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="100" cy="100" r="200" fill="${COLORS.indigo}" opacity="0.08"/>
  <circle cx="1100" cy="530" r="250" fill="${COLORS.teal}" opacity="0.06"/>
  <circle cx="600" cy="50" r="120" fill="${COLORS.amber}" opacity="0.05"/>

  <!-- Decorative lines -->
  <line x1="80" y1="420" x2="280" y2="420" stroke="${COLORS.teal}" stroke-width="3" opacity="0.4"/>
  <line x1="920" y1="210" x2="1120" y2="210" stroke="${COLORS.amber}" stroke-width="3" opacity="0.3"/>

  <!-- Top badge -->
  <rect x="80" y="80" width="260" height="40" rx="20" fill="rgba(255,255,255,0.1)"/>
  <text x="210" y="107" font-family="Arial, sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle" font-weight="500">AI Education Specialist</text>

  <!-- Title -->
  <text x="80" y="200" font-family="Arial, sans-serif" font-size="58" fill="white" font-weight="900">AI Instructor</text>

  <!-- Subtitle -->
  <text x="80" y="260" font-family="Arial, sans-serif" font-size="24" fill="#94A3B8" font-weight="400">AI 교육 전문 강사 과정 안내 플랫폼</text>

  <!-- Divider -->
  <rect x="80" y="290" width="80" height="4" rx="2" fill="url(#tealGrad)"/>

  <!-- Category tags -->
  <rect x="80" y="330" width="160" height="36" rx="18" fill="rgba(20,184,166,0.15)" stroke="${COLORS.teal}" stroke-width="1"/>
  <text x="160" y="354" font-family="Arial, sans-serif" font-size="14" fill="${COLORS.teal}" text-anchor="middle" font-weight="600">프롬프트 엔지니어링</text>

  <rect x="260" y="330" width="120" height="36" rx="18" fill="rgba(99,102,241,0.15)" stroke="${COLORS.indigo}" stroke-width="1"/>
  <text x="320" y="354" font-family="Arial, sans-serif" font-size="14" fill="${COLORS.indigo}" text-anchor="middle" font-weight="600">생성형 AI</text>

  <rect x="400" y="330" width="130" height="36" rx="18" fill="rgba(245,158,11,0.15)" stroke="${COLORS.amber}" stroke-width="1"/>
  <text x="465" y="354" font-family="Arial, sans-serif" font-size="14" fill="${COLORS.amber}" text-anchor="middle" font-weight="600">데이터 분석</text>

  <rect x="550" y="330" width="130" height="36" rx="18" fill="rgba(236,72,153,0.15)" stroke="#EC4899" stroke-width="1"/>
  <text x="615" y="354" font-family="Arial, sans-serif" font-size="14" fill="#EC4899" text-anchor="middle" font-weight="600">업무 자동화</text>

  <!-- Stats -->
  <text x="80" y="440" font-family="Arial, sans-serif" font-size="42" fill="url(#tealGrad)" font-weight="900">7</text>
  <text x="120" y="440" font-family="Arial, sans-serif" font-size="16" fill="#64748B" font-weight="500">카테고리</text>

  <text x="250" y="440" font-family="Arial, sans-serif" font-size="42" fill="url(#amberGrad)" font-weight="900">28</text>
  <text x="305" y="440" font-family="Arial, sans-serif" font-size="16" fill="#64748B" font-weight="500">강의 주제</text>

  <text x="440" y="440" font-family="Arial, sans-serif" font-size="42" fill="url(#tealGrad)" font-weight="900">160+</text>
  <text x="540" y="440" font-family="Arial, sans-serif" font-size="16" fill="#64748B" font-weight="500">강의 시간</text>

  <!-- Bottom info -->
  <rect x="0" y="520" width="${WIDTH}" height="110" fill="rgba(0,0,0,0.3)"/>
  <text x="80" y="565" font-family="Arial, sans-serif" font-size="18" fill="white" font-weight="700">instructor.dreamitbiz.com</text>
  <text x="80" y="595" font-family="Arial, sans-serif" font-size="14" fill="#64748B">DreamIT Biz &#183; AI Education Platform</text>

  <!-- Right side icon -->
  <rect x="980" y="540" width="140" height="60" rx="12" fill="url(#tealGrad)"/>
  <text x="1050" y="578" font-family="Arial, sans-serif" font-size="22" fill="white" text-anchor="middle" font-weight="800">AI</text>
</svg>`

await sharp(Buffer.from(svg))
  .png({ quality: 90 })
  .toFile('public/og-image.png')

console.log('OG image generated: public/og-image.png (1200x630)')
