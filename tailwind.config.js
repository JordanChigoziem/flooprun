/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'floop-purple':  '#7B35F0',
        'floop-pink':    '#FF3FA4',
        'floop-yellow':  '#FFB800',
        'floop-navy':    '#1A1040',
        'floop-dark':    '#0F0A2A',
        'floop-gold':    '#FFC72C',
        'floop-offwhite':'#F5F3FF',
      },
      fontFamily: {
        fredoka: ['"Fredoka One"', 'cursive'],
        nunito:  ['"Nunito"', 'sans-serif'],
      },
      animation: {
        'float':       'float 3s ease-in-out infinite',
        'float-slow':  'float 5s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}