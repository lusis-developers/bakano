// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      "link": [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      serviceId: process.env.SERVICE_ID,
      templateId: process.env.TEMPLATE_ID,
      publicKey: process.env.PUBLIC_KEY,  
      urlKey: process.env.URL_KEY,
      storyblokKey: process.env.STORYBLOK_API_KEY,
    }
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }
  },
  modules: ['@pinia/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
            @import '@fortawesome/fontawesome-free/scss/solid.scss';
            @import '@fortawesome/fontawesome-free/scss/regular.scss';
            @import '@fortawesome/fontawesome-free/scss/brands.scss';
            @import '@/style/main.scss';
            @import '@nabux-crush/crush-styles/nabuxLayoutVariables';
          `
        }
      }
    }
  },
  // plugins: [
  //   '@/plugins/richTextRenderer.ts'
  // ],
})
