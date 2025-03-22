// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'dayjs-nuxt',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }],
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Ryo\'s Portfolio',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      titleTemplate: '%s | Ryo\'s Portfolio',
    },
  },
  css: [
    'primeicons/primeicons.css',
  ],
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    typedPages: true,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  primevue: {
    importTheme: { from: 'assets/themes/mytheme' },
  },
})
