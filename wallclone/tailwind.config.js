/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Puedes personalizar los colores de tu tema aquí
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
      },
    },
  },
  plugins: [],
}