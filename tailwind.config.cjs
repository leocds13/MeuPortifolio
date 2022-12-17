/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          '0%': { transform: 'scaleY(0%)' },
          '100%': { transform: 'scaleY(100%)' }
        }
      },
      animation: {
        'dropdown': 'dropdown 1s lineas infinite'
      },
      backgroundImage: {
        'devDescktopBg': "url('./assets/dev-descktop.jpg')"
      },
      colors: {
        primary: {
          300: '#0A3AA3',
          500: '#1545F0'
        },
        secundary: {
          300: '#A31D02',
          500: '#F03F1B',
        },
        tertiary: '#ADF032',
        light: {
          300: '#B8C0CC',
          400: '#CFD8E6',
          500: '#E6F0FF',
          700: '#F0F5FF',
          background: '#E6F0FF',
          text: '#0F172A',
        },
        dark: {
          10: '#0F172A',
          100: '#121C33',
          200: '#1C2A4D',
          300: '#253866',
          background: '#0F172A',
          text: '#E6F0FF',
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
