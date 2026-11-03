/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b192c',
        secondary: '#d97706',
        navy: {
          50: '#f0f4f9',
          100: '#e1e9f2',
          200: '#c2d2e5',
          700: '#1b3b64',
          800: '#10223b',
          900: '#0b192c',
          950: '#060e18',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
      },
      fontFamily: {
        logo: ['"Allura"', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.9' },
          '50%': { transform: 'translateY(10px)', opacity: '0.4' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        bounceSoft: 'bounceSoft 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
