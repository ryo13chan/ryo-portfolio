// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }],
  devtools: { enabled: false },
  app: {
    head: {
      // エスケープ
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
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href:
            process.env.NUXT_PUBLIC_ENV === 'production'
              ? '/favicon.ico'
              : process.env.NUXT_PUBLIC_ENV === 'staging'
                ? '/favicon-stg.ico'
                : '/favicon-local.ico',
        },
      ],
    },
  },
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
