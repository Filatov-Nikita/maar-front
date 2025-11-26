import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [ path.resolve(process.cwd(), 'app/assets/icons') ],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__svg__icons__dom__',
      }),
    ],
  },
})
