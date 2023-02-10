/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./home_info.html",
    "./agent.html",
    "./index.js",
    "./home/script_files/showMore.js"
  ],
  theme: {
    extend: {
      boxShadow : {
        hide : '0px -28px 30px -2px rgb(255, 255, 255)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({addVariant}) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
