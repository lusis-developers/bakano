import BaseService from '~/services/BaseService'

class BlogData extends BaseService {
  constructor(){
    super();
  }

  async getInfoFilteredByAuthor(authorName: string){
    const data:any = await this.get(`posts/?key=98e5e527610957edcc5aecf066&include=authors&filter=authors.slug:${authorName}&fields=uuid,title,feature_image,published_at,feature_image_caption`)
    return data.posts;
  }

  async getAuthorsInfo(authorName: string): Promise<any> {
    const data:any = await this.get(`authors/?key=98e5e527610957edcc5aecf066&filter=slug:${authorName}`);
    return data.authors;  
  }

  async getAllInfoFilteredByAuthor(authorName: string){
    const data:any = await this.get(`posts/?key=98e5e527610957edcc5aecf066&include=authors&filter=authors.slug:${authorName}`);
    return data.posts;
  }
}

export default BlogData;