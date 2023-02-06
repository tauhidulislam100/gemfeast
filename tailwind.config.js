/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6C57DB',
        'secondary': '#1D2947',
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
      boxShadow: {
        '3xl': '0px 2px 8px rgba(117, 131, 142, 0.08), 0px 20px 32px rgba(52, 60, 68, 0.16)',
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px',
        '4xl': '2560px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}