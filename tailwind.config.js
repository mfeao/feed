/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@mfeao/uikit/dist/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          50: '#ebfef5',
          100: '#cffce4',
          200: '#a4f6cf',
          300: '#69ecb6',
          400: '#2dda98',
          500: '#08af75',
          DEFAULT: '#08af75',
          600: '#009c69',
          700: '#007d57',
          800: '#026346',
          900: '#03513b',
          950: '#002e22',
        },
      },
    },
  },
  plugins: [],
};

