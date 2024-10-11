/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#1F3A93',
        secondary: '#F5AB35',
        neutralDark: '#4A4A4A',
        neutralLight: '#F9F9F9',
        success: '#2ECC71',
        error: '#E74C3C',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
