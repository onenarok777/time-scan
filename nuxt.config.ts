import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "time-scans",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  ssr: true,

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-05-15",

  devtools: { enabled: true },

  modules: ["@nuxt/icon", "@pinia/nuxt", "@nuxtjs/color-mode"],

  colorMode: {
		preference: "light",
		dataValue: "theme",
		storage: "cookie",
		storageKey: "theme",
	},

  icon: {
    customCollections: [
      {
        prefix: "svg",
        dir: "./assets/icons",
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      BASE_API: process.env.BASE_API,
    },
  },
});
