export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "mechta",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@assets/scss/style.scss",],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/vue-slick-carousel.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/vuetify",
    ["@nuxtjs/vuetify", {}],
    'nuxt-i18n',
  ],
// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
// vuetify: {
//   customVariables: ['~/assets/variables.scss'],
//   theme: {
//     dark: false,
//     themes: {
//       dark: {
//         primary: colors.blue.darken2,
//         accent: colors.grey.darken3,
//         secondary: colors.amber.darken3,
//         info: colors.teal.lighten1,
//         warning: colors.amber.base,
//         error: colors.deepOrange.accent4,
//         success: colors.green.accent3
//       }
//     }
//   }
// },
// ============ Language change ============
  i18n: {
    locales: [
      {
        code: "uz",
        file: "uz.js"
      },
      {
        code: "ru",
        file: "ru.js"
      }
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "uz"
  },
  
  styleResources: {
    scss: ["@assets/scss/*.scss"]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {  baseURL: 'http://mechta-posuda.uz:3000/api' },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-slick"],
  }
};
