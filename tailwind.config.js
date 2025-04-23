/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    './node_modules/preline/**/*.js', // <-- Include Preline
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin')],
};
