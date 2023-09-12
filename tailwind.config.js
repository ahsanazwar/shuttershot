/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'theme-primary-black': '#2b2b2b',
      'theme-primary-grey': '#959595',
      'theme-light-grey': '#ececec',
      'theme-dark-grey': '#e7e6e9',
      'theme-sec-light-grey': '#c0c0c0',
      'theme-red': '#ae1e23',
      'theme-light-red': '#bd1c22',
      'theme-primary-red': '#ff2222',
      'theme-white': '#fff',  
      'theme-black': '#000',  
    },
    container: {
      // you can configure the container to be centered
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1650px',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'Impact', 'sans-serif'],
      cursive: ['Kaushan Script', 'cursive'],
      noto: ['Noto Sans Arabic', 'sans-serif'],
      
    },
    extend: {
    }
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn-red': {
          backgroundColor: '#ae1e23',
          color: '#fff',
          transition: '0.2s',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
        '.btn-txt-red': {
          color: '#ae1e23',
          transition: '0.2s',
          '&:hover': {
            color: '#cc1f1a'
          },
        },
      })
    })
  ],
}

