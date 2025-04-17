/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3E82F7',
        secondary: '#EEF2F8', 
        dark: '#1A1C23',
        light: '#F9FAFB',
        accent: '#FABD4A',
        border:' #D1D5BD',
        error: '#EF4444',
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
} 