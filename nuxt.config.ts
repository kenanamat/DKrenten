// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
    "nuxt-icon",
    "@nuxtjs/supabase",
    'nuxt-headlessui'
  ],
  app: {
    pageTransition: {name: 'page', mode: 'out-in'}
  },
  tailwindcss: {
    config: {
      content: [],
      theme: {
        extend: {
          colors: {
            primary: "#29ABE2",
            accent: "#E8871E"
          },
        },
      },
      plugins: [
        require("@tailwindcss/forms"),
      ]
    },
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
