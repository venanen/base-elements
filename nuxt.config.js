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

  hooks: {
    generate: {
      async done(builder) {
        // This makes sure nuxt generate does finish without running into a timeout issue.
        // See https://github.com/nuxt-community/firebase-module/issues/93
        const appModule = await import('./.nuxt/firebase/app.js')
        const { session } = await appModule.default(
          builder.options.firebase.config,
          {
            res: null,
          }
        )
        try {
          session.database().goOffline()
        } catch (e) {}
        try {
          session.firestore().terminate()
        } catch (e) {}
      },
    },
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
    '@nuxtjs/firebase',
  ],

  firebase: {
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
    onFirebaseHosting: false,
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'auth/onAuthStateChanged',
        },
        ssr: true,
      },
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  pwa: {
    importScripts: [
      // ...
      '/firebase-auth-sw.js',
    ],
    // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
    // only set this true for testing and remember to always clear your browser cache in development
    dev: false,
  },
}
