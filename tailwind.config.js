/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/landing-page.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins','Quicksand', 'sans-serif'],
        'patrick-hand' : ['Patrick Hand', 'cursive'],
      },

      colors : {
        'blue-sky' : '#6EAED1',
        'gray-dark' : '#2C2C2C',
      }
    },
  },
  plugins: [],
}

