// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from "nuxt/schema"

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
  ui: {
    safelistColors: ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"]
  },
  
})
