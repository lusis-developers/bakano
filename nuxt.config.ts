// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@/style/main.scss';
          `
        }
      }
    }
  }
})
