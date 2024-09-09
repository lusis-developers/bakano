import Storyblok from "~/services/storblok";

const storyblok = new Storyblok();

interface RootState {
  blogs: any;
  error: string | null;
  isLoading: boolean;
}
// https://api-us.storyblok.com/v2/cdn/stories/blog/how-to-be-your-father?cv=1725760316&token=aRJm3rp5Q37gsQcjV3Y7uAtt&version=published
// https://api.storyblok.com/v2/cdn/stories?version=published&starts_with=blog&token=aRJm3rp5Q37gsQcjV3Y7uAtt&cv=undefined

export const useBlogStore = defineStore('BlogStore', {
  state: (): RootState => ({
    blogs: [
      {
        id: '1', 
        title: 'titulo', 
        img: 'https://i.pinimg.com/236x/d4/60/18/d46018b5dcd5105a158cfa9b24e2f329.jpg',
        paragraph: 'parrafo',
        authorImg: 'https://i.pinimg.com/236x/bb/eb/a6/bbeba63f548807db592804ece5a4dde8.jpg',
        authorName: 'diego reyes',
        date: 'ayer'
      },
    ],
    isLoading: false,
    error: null,
  }),

  actions: {
    async getAllBlogs(): Promise<void> {
      this.isLoading = true;
      try {
        console.log('inicio de obtener blogs')
        const response = await storyblok.get('cdn/stories', {
          version: 'published',
          starts_with: 'blog',
        });
        this.blogs = response;
      } catch (error) {
        console.error('errorsote: ', error);
      } finally {
        this.isLoading = false;
      }
    }
  }
});

export default useBlogStore;