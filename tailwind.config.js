module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#FE6974',
        'black': '#84726B',
        'program': '#796C64',
        'program-bg': '#FFEEE6',
        'program-bg-light': '#9e9890'
      },
      animation: {
        'top-bottom': 'top2bottom 5s linear infinite',
        'top-bottom-2': 'top2bottom-2 3s linear infinite'
      },
      keyframes: {
        'top2bottom': {
          '0%, 100%': { top: '0' },
          '50%': { top: '100px' },
        },
        'top2bottom-2': {
          '0%, 100%': { top: '30px' },
          '50%': { top: '90px' },
        }
      }
    },
  },
  plugins: [],
}
