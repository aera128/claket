export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Claket',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "title", content: "Claket" },
      { hid: 'description', name: 'description', content: 'Claket is a soundboard that allows you to play sounds in voice chats like Discord, Teamspeak and other !' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:type", content:"website"},
      { property: "og:url", content:"https://claket.netlify.app/"},
      { property: "og:title", content:"Claket"},
      { property: "og:description", content:"Claket is a soundboard that allows you to play sounds in voice chats like Discord, Teamspeak and other !"},
      { property: "og:image", content:"https://claket.netlify.app/claket.png"},
      { property: "twitter:card", content:"summary_large_image"},
      { property: "twitter:url", content:"https://claket.netlify.app/"},
      { property: "twitter:title", content:"Claket"},
      { property: "twitter:description", content:"Claket is a soundboard that allows you to play sounds in voice chats like Discord, Teamspeak and other !"},
      { property: "twitter:image", content:"https://claket.netlify.app/claket.png"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/logo.png' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'animate.css/animate.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxtjs-mdi-font'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Claket Soundboard',
      author: 'aera128'
    },
    manifest: {
      name: 'Claket Soundboard',
      short_name: 'Claket',
      lang: 'en',
      display: 'standalone'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: { color: '#000000' }
}
