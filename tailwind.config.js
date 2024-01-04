/** @type {import('tailwindcss').Config} */
tailwind.config = {
  content: ["*.html"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['roboto', 'sans-serif'],
      'serif': ['mulish', 'sans-serif'],
    },
      container: {
      screens:{
        'xl': '1140px',
        '2xl': '1140px',
      }
  },

  plugins: [],
}
}
