// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
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
});