export default {

  mode: 'universal',

  target: 'server',

  head: {
    htmlAttrs: {
      lang: 'ru-Ru'
    },
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],

  },

  css: ['@/assets/css/ress.css',
  ],

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  plugins: [
    './plugins/mixins/validation',
    './plugins/mixins/user',
    './plugins/mixins/intended',
    './plugins/axios',

  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/auth/login', method: 'post', propertyName: 'token'},
          user: {url: '/home', method: 'get', propertyName: 'user'},
          logout: {url: '/auth/logout', method: 'post'},

        },
      }
    },
    redirect: {
      login: '/auth/login',
      home: '/',
    },
    plugins: [
      './plugins/intended'
    ]

  },
  components: true,

  buildModules: [


    ['@nuxtjs/vuetify', { /* module options */}]
  ],

  modules: [

    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',

  ],


  axios:
    {
      baseURL: 'https://extranet.more-otdih.online/api'
    }
  ,

  build: {}
}
