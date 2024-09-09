import StoryblokClient from 'storyblok-js-client';

// const baseURL = 'https://api.storyblok.com/v2'

// const storyblokClient = new StoryblokClient({
//   accessToken: 'aRJm3rp5Q37gsQcjV3Y7uAtt',
//   cache: {
//     clear: 'auto',
//     type: 'memory'
//   },
// });


class Storyblok {
  private accesToken: string = 'aRJm3rp5Q37gsQcjV3Y7uAtt';
  private client: StoryblokClient;

  constructor(){
    this.client = new StoryblokClient({
      accessToken: this.accesToken,
      cache: {
        clear: 'auto',
        type: 'memory',
      },
      endpoint: 'https://api-us.storyblok.com/v2'
    });
  }

  async get(endpoint: string, params: object) {
    const response = await this.client.get(endpoint, params);
    console.log('response en get de storyblok: ', response);
    return response
  };
}

export default Storyblok;