/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7d884b",
      },
      gridTemplateColumns:{
        'auto':'repeat(autofill, minmax(200px, 1fr))'
    }
    },
  },
  plugins: [],
}
