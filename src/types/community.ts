export type BoardType = 'notice' | 'free' | 'course-apply' | 'material-request' | 'review'

export interface Post {
  id: number
  board: BoardType
  title: string
  content: string
  author_id: string
  author_name: string
  is_pinned: boolean
  is_deleted: boolean
  rating: number | null
  view_count: number
  created_at: string
  updated_at: string
  comment_count?: number
}

export interface Comment {
  id: number
  post_id: number
  author_id: string
  author_name: string
  content: string
  is_deleted: boolean
  created_at: string
}

export interface BoardMeta {
  slug: BoardType
  name: string
  nameEn: string
  desc: string
  descEn: string
  icon: string
  color: string
  adminOnly: boolean
  hasRating: boolean
}

export interface Schedule {
  id: number
  title: string
  title_en: string | null
  description: string | null
  description_en: string | null
  location: string | null
  start_date: string
  end_date: string | null
  start_time: string | null
  end_time: string | null
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
  max_seats: number | null
  created_at: string
}
