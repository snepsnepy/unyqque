// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  app: {
    head: {
      title: "unyqque",
    },
  },
  devtools: { enabled: true },
  ssr: false,
  css: ["@/assets/css/main.css"],
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
  ],
  image: {
    provider: "none",
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },
});
