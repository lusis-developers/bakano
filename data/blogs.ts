import BaseService from '~/services/BaseService'

class BlogData extends BaseService {
  constructor(){
    super();
  }

  async getBlogs(){
    const data = await this.get('posts/?key=98e5e527610957edcc5aecf066')
    console.log(data);  
    return data;
  }

  async getBlogsFilteredByAuthor(authorName: string): Promise<any> {
    return await this.get(`authors/${authorName}/?key=98e5e527610957edcc5aecf066`);
  }
}

export default BlogData;