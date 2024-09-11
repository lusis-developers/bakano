import StoryblokClient from 'storyblok-js-client';

class Storyblok {
  private apiBase: string = 'https://api-us.storyblok.com/v2';
  private accesToken: string = 'aRJm3rp5Q37gsQcjV3Y7uAtt';
  private client: StoryblokClient;

  constructor(){
    this.client = new StoryblokClient({
      accessToken: this.accesToken,
      cache: {
        clear: 'auto',
        type: 'memory',
      },
      endpoint: this.apiBase
    });
  }

  async get(endpoint: string, params: object) {
    const response = await this.client.get(endpoint, params);
    return response
  };
}

export default Storyblok;