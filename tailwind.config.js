/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      colors:{
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      fontFamily: {
        lobster: ['Lobster Two', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        
        nunito: ['Nunito', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        literata: ['"Literata"', 'serif'],
      },
      
    },
  },
  plugins: [],
}

