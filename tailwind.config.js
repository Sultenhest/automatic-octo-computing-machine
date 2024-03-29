/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  theme: {
     minHeight: {
       'half': '50vh'
     },
     backgroundColor: theme => ({
      ...theme('colors'),
      'dark': '#111111',
    }),
    extend: {
      keyframes: {
        fadeinright: {
           'from': {
             opacity: 0,
             transform: 'translateX(-15px)'
           },
           'to': {
             opacit: 1,
             transform: 'translateX(0)'
           },
         },
         fadeinup: {
           'from': {
             opacity: 0,
             transform: 'translateY(15px)'
           },
           'to': {
             opacit: 1,
             transform: 'translateY(0)'
           },
         },
      },
      animation: {
        fadeinright: 'fadeinright 1s ease-in-out',
        fadeinup: 'fadeinup 1s ease-in-out'
      },
      colors: {
        'dark': '#111111' 
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