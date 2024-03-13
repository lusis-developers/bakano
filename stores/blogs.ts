import { defineStore } from "pinia";
import BlogData from "~/data/blogs";

const genericBlogDataService = new BlogData();

interface RootState {
  posts: any,
  errorMessage: string | null,
  isLoading: boolean,
}

export const useGenericBlogStore = defineStore('genericBlogStore', {
  state: (): RootState => ({
    posts: [],
    errorMessage: null,
    isLoading: false,
  }),
  actions: {
    async fetchPosts(): Promise<void>{
      this.isLoading = true;
      try {
        const response = await genericBlogDataService.getBlogs();
        this.posts = response;
      } catch (error) {
        this.errorMessage = 'Hubo un problema al obtener los posts';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  },
})