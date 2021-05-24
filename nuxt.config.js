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
    css: ["@assets/scss/style.scss", "animate.css/animate.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "@/plugins/vue-slick-carousel.js" },
        { src: "@/plugins/wow.js" }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

<<<<<<< HEAD
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/fontawesome",
  
  ],
  fontawesome: {
=======
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxtjs/fontawesome"],
    fontawesome: {
>>>>>>> 01ea97f5cabe383dcda445f871057bf9cf000c1e
        component: "fa",
        icons: {
            solid: true,
            brands: true
        }
    },

<<<<<<< HEAD
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    'nuxt-i18n',

    '@nuxtjs/vuetify',
   
  ],
  
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
  axios: {
    baseURL: "http://mechta-posuda.uz:3000/api"
  },
=======
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/style-resources",
        "bootstrap-vue/nuxt",

        "@nuxtjs/vuetify",

        ["@nuxtjs/vuetify", {}]
    ],
    styleResources: {
        scss: ["@assets/scss/*.scss"]
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},
>>>>>>> 01ea97f5cabe383dcda445f871057bf9cf000c1e

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vue-slick"],
        vendor: ["wowjs"]
    }
};
