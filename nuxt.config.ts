// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  alias:{
    assets: "/<rootDir>/assets"
  },
  modules:[
    'vue3-carousel-nuxt',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/i18n',
  ],
  i18n: {
    //npm install nuxi@latest module add i18n
    lazy: true,
    langDir: "locales",
    detectBrowserLanguage: false,
    strategy: "prefix",
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English(US)",
        file: "en.json",
      },
      {
        code: "ar",
        iso: "ar",
        name: "Arabic",
        file: "ar.json",
      },
    ],
    defaultLocale: "ar",
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/sass/main.css',
  ],
  build: {
    transpile: ['vuetify','vue-toastification'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
})
