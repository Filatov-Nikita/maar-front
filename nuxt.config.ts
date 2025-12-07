import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      yandexMaps: {
        apikey: ''
      }
    }
  },
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [ path.resolve(process.cwd(), 'app/assets/icons') ],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__svg__icons__dom__',
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/mixins/screens.scss" as *;'
        }
      }
    },
  },
  yandexMaps: {
    apikey: ''
  },
  modules: [
    '@nuxtjs/device',
    '@pinia/nuxt',
    'vue-yandex-maps/nuxt',
  ],
});
