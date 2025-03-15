// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'normalize.css',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeflex/primeflex.css',
    'primeicons/primeicons.css',
    '@/assets/css/app.scss',
  ],
  build: {
    transpile: ['primevue'],
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
    '@nuxt/content',
  ],
  content: {
    highlight: {
      theme: 'github-light',
    },
  },
  vite: {
    base: '/_nuxt/',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_variables.scss";',
        },
      },
    },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    },
  },
  imports: {
    dirs: ['store'],
  },
  runtimeConfig: {
    public: {
      openaiApiKey: process.env.NUXT_OPENAI_API_KEY,
    },
  },
  nitro: {
    devProxy: {
      '/rakuten': {
        target: 'https://books.rakuten.co.jp',
        changeOrigin: true,
        // hostRewrite: true,
        // cookieDomainRewrite: true,
        headers: {
          'X-Forwarded-Host': 'localhost:3000',
          'X-Forwarded-Proto': 'http',
        },
      },
    },
  }
})
