/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Lato'], 
    },
    screens:{
      'sm': '140px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }, 
    extend: {
      colors: {
        "date" : "#4D5C6F",
        "outline" : "#A5B6CD"
      }
    },
  },
  plugins: [],
};
