/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },
      fontFamily: {
        satoshi: ['Satoshi-Variable', 'sans-serif'],
      },

      screens: {
        xxs: '430px', // Customize your screen size breakpoint
      },
    },
  },
  plugins: [],
}
