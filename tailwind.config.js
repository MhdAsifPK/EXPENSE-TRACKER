/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "mainbg":"#4a4a4a",
        "button":"#430c5f",
        "bgk":"#a899f1",
        "bgk1":"#1f1f1f",
        "bgk2":"#292929",
      }
    },
  },
  plugins: [],
}

