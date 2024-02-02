// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      serviceId: process.env.SERVICE_ID,
      templateId: process.env.TEMPLATE_ID,
      publicKey: process.env.PUBLIC_KEY,  
    }
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@/style/main.scss';
            @import '@nabux-crush/crush-styles/nabuxLayoutVariables';
          `
        }
      }
    }
  }
})
