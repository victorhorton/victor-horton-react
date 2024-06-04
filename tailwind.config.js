/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: 'Playfair Display', // Adds a new `font-display` class
      },
    },
  },
  plugins: [],
}
