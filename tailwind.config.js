/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'card-bg': '', // set valuse later
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
    },    
  },
  plugins: [],
}