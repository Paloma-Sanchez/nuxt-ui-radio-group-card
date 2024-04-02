/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /pr-(1|6)/
    },
    {
      pattern: /pl-(0|3)/,
      variants: ['first-of-type']
    },
    {
      pattern: /ml-(4)/,
    },
    {
      pattern: /bg-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|primary)-(50|400|500)/,
      variants: ['peer-checked', 'peer-disabled', 'hover']
    },
    {
      pattern: /ring-2/,
      variants: ['peer-checked']
    },
    {
      pattern: /ring-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|primary)-500/,
      variants: ['peer-checked']
    },
    {
      pattern: /ring-offset-(2|white)/,
      variants: ['peer-checked']
    },
    {
      pattern: /text-(gray)-(100|200|400|500|600|700|800|900)/,
      variants: ['peer-checked']
    },
    {
      pattern: /text-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|primary)-(100|200|400|500|600|800|900)/,
      variants: ['peer-checked', 'peer-disabled', 'hover']
    },
    {
      pattern: /text-white/,
      variants: ['peer-checked', 'peer-disabled', 'hover']
    },
    {
      pattern: /opacity-50/,
      variants: ['peer-disabled']
    },
    {
      pattern: /cursor-not-allowed/,
      variants: ['peer-disabled']
    }
  ],
  plugins: [],
}
