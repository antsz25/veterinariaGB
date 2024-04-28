/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors:{
        "jacksons-purple": "#222381",
        "jungle-green": "#24ab63",
        "burnt-sienna": "#ec5f5f",
        "alabaster": "#fafafa",
        "santas-gray": "#969aac",
        "boulder": "#7c7c7c",
        "ghost": "#c8c9d1",
        "silver": "#bcbcbc",
        "wewak": "#f49c9c",
        "havelock-blue": "#519ddc",
        "fringy-flower": "#B4e3c8",
      }
    },
  },
  plugins: [],
}

