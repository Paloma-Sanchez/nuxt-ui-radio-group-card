// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-ui-radio-gp-card',
    '@nuxtjs/color-mode',
    'nuxt-svgo',
    '@nuxtjs/sitemap',
    '@tailwindcss/typography',
    '@nuxtjs/google-fonts'
  ],
  colorMode: {
    preference: 'light'
  },
  ui: {
    safelistColors: [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ]
  },
  googleFonts: {
    families: {
      'DM Sans': '300..700',
      'JetBrains Mono':true
    }
  },
  site: {
    url: 'localhost:3000',
  },
})