// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    modules: [
      '@nuxt/content',
      '@nuxt/ui',
      'nuxt-ui-radio-gp-card',
      '@nuxtjs/tailwindcss'
      //'@nuxtjs/color-mode'
      //'@nuxtjs/tailwind'
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    colorMode: {
      preference: 'light'
    },
    ui: {
      safelistColors: [
        "red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary",
        "ring-violet-400",
        "ring-violet-500",

      ]
    },
})
