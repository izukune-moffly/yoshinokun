import { MULTILINGUAL } from '@/features/slides/enums/multilingual'

// * slidesコレクション *
export type Slides = {
  title: string
  isPublished: boolean // 配信中かどうか
  currentPage: number
}

// * pagesサブコレクション *
export type SlidePages = {
  pageNumber: number
  imageUrl: string
  theme: 'white' | 'black' | 'cover'
  texts: Record<keyof typeof MULTILINGUAL, string>[]
}
