/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'm-16': '4rem', // Add margin size of 4rem
        'm-20': '5rem', // Add margin size of 5rem
        'm-24': '6rem', // Add margin size of 6rem
        'm-32': '8rem', // Add margin size of 8rem
        'm-40': '10rem', // Add margin size of 10rem
        'm-48': '12rem', // Add margin size of 12rem
        // Add more custom margin sizes as needed
      }
    },
  },
  plugins: [],
}