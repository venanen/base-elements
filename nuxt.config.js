export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'base-elements',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/style/flexboxgrid.css',
    '@/assets/style/global.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/antd-ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyB2mjvKkPdiXPMOUd658NjS5mWKwN8YllI',
          authDomain: 'base-elements.firebaseapp.com',
          databaseURL: 'https://base-elements.firebaseio.com',
          projectId: 'base-elements',
          storageBucket: 'base-elements.appspot.com',
          messagingSenderId: '570870182438',
          appId: '1:570870182438:web:c1d34a7bd5ec1074e5ece7',
          measurementId: 'G-P6BMRVEXE7',
        },
        services: {
          auth: true, // Just as example. Can be any other service.
        },
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
