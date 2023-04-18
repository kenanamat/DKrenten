// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
    "nuxt-icon",
    "nuxt-vuefire",
    'nuxt-headlessui'
  ],
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
  vuefire: {
    config: {
      apiKey: "AIzaSyAIwAhhVMUIH4-fT-qloGWkYmZV5BOT2tk",
      authDomain: "dkrenten-4548a.firebaseapp.com",
      projectId: "dkrenten-4548a",
      storageBucket: "dkrenten-4548a.appspot.com",
      messagingSenderId: "650477249295",
      appId: "1:650477249295:web:b7937adfba2ba94876d47a",
      measurementId: "G-WPSLFEXZZ3"
    },
    admin: {
      serviceAccount: "./dkrenten-4548a-firebase-adminsdk-y94ar-0bc8f2aaad.json"
    }
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
