/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "\index.html"],
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%' : { transform: 'rotate(-360deg)' }
        }
      },
    },
    animation: { 
      'border-spin': 'border-spin 2s linear infinite'
    }
  },
  plugins: [],
}

