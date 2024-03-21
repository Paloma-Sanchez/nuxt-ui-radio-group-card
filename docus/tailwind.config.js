/** @type {import('tailwindcss').Config} */
export default {
  content: ["../docus/**/*.{html,vue,ts,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

