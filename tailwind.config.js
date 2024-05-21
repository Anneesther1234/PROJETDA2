/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F78238',
        'orangetxt': '#FFDDC7',
        'orangebg' :'#FFAC77',
        'vert' : '#009440',
        'gris' : '#5C5C5C'
      }
    },
  },
  plugins: [],
};
