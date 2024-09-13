import type { ISbRichtext } from "storyblok-js-client"

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
  content: ISbRichtext,
  _uid: string,
}

export interface PostResponse {
  content: PostContent,
  slug: string,
  uuid: string
  perPage: number,
  total: number,
}