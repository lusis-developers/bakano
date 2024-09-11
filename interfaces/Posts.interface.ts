export interface PostImage {
  alt: string,
  name: string,
  filename: string,
  title: string
}

export interface PostContent {
  authors: string,
  date: string,
  description: string,
  img: PostImage[],
  title: string,
  content: string,
  _uid: string,
}

export interface PostResponse {
  content: PostContent,
  perPage: number,
  total: number,
}