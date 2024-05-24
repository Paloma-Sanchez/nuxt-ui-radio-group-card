// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  modules: ['../src/module.ts'],
  googleFonts: {    
    families: {
      'DM Sans': true,      
    }
  },
  colorMode: {
    preference: 'light'
  },

  
})
