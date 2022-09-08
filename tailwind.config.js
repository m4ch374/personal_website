/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pop: 'pop 0.25s ease-in-out',
      },
      keyframes: {
        pop: {
          '0%': {
            transform: 'scale(0.3)'
          },
          '45%': {
            transform: 'scale(1.05)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
      },
    },
  },
  plugins: [],
}
