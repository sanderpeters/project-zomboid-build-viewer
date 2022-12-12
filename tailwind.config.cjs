/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        hero: `url('/background.jpg')`,
      },
    },
  },
  plugins: [],
}
