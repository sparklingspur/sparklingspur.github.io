// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/app/assets/css/main.css'],
  compatibilityDate: '2024-04-04',
  app: {
      baseURL: '/',
    },
})