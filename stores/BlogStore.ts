import Storyblok from "~/services/storblok/ContentApi";

import type { PostContent, PostResponse } from "~/interfaces/Posts.interface";

const storyblok = new Storyblok();

interface RootState {
  blogs: PostResponse[];
  page: number;
  per_page: number;
  error: string | null;
  isLoading: boolean;
}
// https://api-us.storyblok.com/v2/cdn/stories/blog/how-to-be-your-father?cv=1725760316&token=aRJm3rp5Q37gsQcjV3Y7uAtt&version=published
// https://api.storyblok.com/v2/cdn/stories?version=published&starts_with=blog&token=aRJm3rp5Q37gsQcjV3Y7uAtt&cv=undefined

export const useBlogStore = defineStore('BlogStore', {
  state: (): RootState => ({
    blogs: [],
    page: 1,
    per_page: 10,
    isLoading: false,
    error: null,
  }),

  actions: {
    async getStories(): Promise<void> {
      this.isLoading = true;
      try {
        const response = await storyblok.get('cdn/stories', {
          version: 'published',
          starts_with: 'blog',
          page: this.page,
          per_page: this.per_page
        });

        this.blogs = response.data.stories.map((post: PostResponse) => {
          return {
            content: post.content,
            uuid: post.uuid,
            slug: post.slug
          }
        });
      } catch (error) {
        console.error('errorsote: ', error);
      } finally {
        this.isLoading = false;
      }
    },
    async getStoryById(uuid: string): Promise<PostContent | null> {
      this.isLoading = true;
      try {
        const response = await storyblok.get(`cdn/stories/blog/${uuid}`, {
          version: 'published',
        });
        return response.data.story.content as PostContent;
      } catch (error) {
        console.error('errorsote: ', error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },
  }
});

export default useBlogStore;