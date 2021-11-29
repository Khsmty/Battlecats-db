import colors from 'vuetify/es5/util/colors'
import ja from 'vuetify/es5/locale/ja'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - にゃんこ大戦争db',
    title: 'にゃんこ大戦争db',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'にゃんこ大戦争のデータをまとめています。',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '%s',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },

  // Loading bar
  loading: { color: '#1976D2' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  serverMiddleware: ['~/api'],

  googleAnalytics: {
    id: 'G-5E3YSJ6KW8',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
      theme_color: '#1976D2',
      background_color: '#1a1a1a',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      name: 'にゃんこ大戦争db',
      short_name: 'にゃんこ大戦争db',
      title: 'にゃんこ大戦争db',
      description: 'にゃんこ大戦争のデータをまとめています。',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    lang: {
      locales: { ja },
      current: 'ja',
    },
    customVariables: [],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
