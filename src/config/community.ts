import type { BoardMeta, BoardType } from '../types/community'

export const BOARDS: BoardMeta[] = [
  {
    slug: 'notice',
    name: '공지사항',
    nameEn: 'Announcements',
    desc: '강의 및 사이트 관련 공지사항',
    descEn: 'Announcements about lectures and the site',
    icon: 'fa-solid fa-bullhorn',
    color: '#1E3A5F',
    adminOnly: true,
    hasRating: false,
  },
  {
    slug: 'free',
    name: '자유게시판',
    nameEn: 'Free Board',
    desc: '자유롭게 의견을 나누는 공간',
    descEn: 'A space to freely share opinions',
    icon: 'fa-solid fa-comments',
    color: '#14B8A6',
    adminOnly: false,
    hasRating: false,
  },
  {
    slug: 'course-apply',
    name: '강의신청',
    nameEn: 'Course Application',
    desc: '원하는 강의를 신청하세요',
    descEn: 'Apply for the course you want',
    icon: 'fa-solid fa-graduation-cap',
    color: '#F59E0B',
    adminOnly: false,
    hasRating: false,
  },
  {
    slug: 'material-request',
    name: '강의안 요청',
    nameEn: 'Material Request',
    desc: '강의 자료 요청 게시판',
    descEn: 'Request lecture materials',
    icon: 'fa-solid fa-file-lines',
    color: '#6366F1',
    adminOnly: false,
    hasRating: false,
  },
  {
    slug: 'review',
    name: '수강 후기',
    nameEn: 'Course Reviews',
    desc: '수강 후기를 공유해 주세요',
    descEn: 'Share your course reviews',
    icon: 'fa-solid fa-star',
    color: '#EC4899',
    adminOnly: false,
    hasRating: true,
  },
]

export function getBoardMeta(slug: string): BoardMeta | undefined {
  return BOARDS.find(b => b.slug === slug)
}

export function isBoardSlug(slug: string): slug is BoardType {
  return BOARDS.some(b => b.slug === slug)
}
