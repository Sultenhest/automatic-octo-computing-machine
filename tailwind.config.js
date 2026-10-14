/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "class",
  theme: {
     minHeight: {
       'half': '50vh'
     },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeinright: {
           'from': {
             opacity: 0,
             transform: 'translateX(-15px)'
           },
           'to': {
             opacity: 1,
             transform: 'translateX(0)'
           },
         },
         fadeinup: {
           'from': {
             opacity: 0,
             transform: 'translateY(15px)'
           },
           'to': {
             opacity: 1,
             transform: 'translateY(0)'
           },
         },
      },
      animation: {
        fadeinright: 'fadeinright 1s ease-in-out',
        fadeinup: 'fadeinup 1s ease-in-out'
      },
      // Museumsgrå: paper is the light-mode background and dark-mode text, ink the reverse
      colors: {
        paper: {
          DEFAULT: '#EFEFED',
          deep: '#E2E2DF',
        },
        ink: {
          DEFAULT: '#000000',
          soft: '#1C1C1C',
        },
      }
    }
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [],
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  },
}