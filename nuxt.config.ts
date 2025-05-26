export default defineNuxtConfig({
  app: {
    head: {
      title: "time-scans",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  ssr: false,

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-05-15",

  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/icon", "@pinia/nuxt"],

  icon: {
    customCollections: [{
      prefix: 'svg',
      dir: './assets/icons'
    }]
  },

  runtimeConfig: {
    public: {
      BASE_API: process.env.BASE_API
    }
  }
});