// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content', '@nuxtjs/color-mode', "@nuxt/ui", "@nuxtjs/google-fonts",  'nuxt-ui-radio-gp-card',],
  googleFonts: {
    families: {
      'DM Sans': '300..700',
      'JetBrains Mono':true
    }
  },
  colorMode: {
    preference: 'light',
    classSuffix: '',
  },
})