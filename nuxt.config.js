require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hundefotografi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hundefotografi - Professionel fotografering af din hund i Nordsjælland.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'bg-gray-50 dark:bg-dark'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-masonry-css' },
    { src: '~/plugins/contentful' },
    { src: '~/plugins/frontpage' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    "@nuxtjs/color-mode",
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    '@nuxtjs/dotenv',

    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  colorMode: {
    classSuffix: ''
  },

  router: {
    // linkExactActiveClass: 'bg-gray-200 dark:bg-gray-900 cursor-default'
  },

  env: {
    NUXT_ENV_CONTENTFUL_SPACE: process.env.NUXT_ENV_CONTENTFUL_SPACE,
    NUXT_ENV_CONTENTFUL_ACCESS_TOKEN: process.env.NUXT_ENV_CONTENTFUL_ACCESS_TOKEN
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  image: {
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    contentful: {
      baseURL: 'https://images.ctfassets.net/'
    }
  }
}
