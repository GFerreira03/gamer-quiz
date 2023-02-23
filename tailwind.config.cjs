/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-light': '#715EE9',
        'purple-dark': '#181045'
      },
      opacity: {
        '15': '0.15'
      }
    },
  },
  plugins: [],
}