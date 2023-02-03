// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-vuefire'],
  vuefire: {
    config: {
      apiKey: 'AIzaSyBYMoASCx6J5D2TCu1S9LBwP_5UY9N7_9c',
      authDomain: 'traveloka-9f637.firebaseapp.com',
      projectId: 'traveloka-9f637',
      storageBucket: 'traveloka-9f637.appspot.com',
      messagingSenderId: '44464973109',
      appId: '1:44464973109:web:43bc41b23898b7c211587c',
    },

    admin: {
      serviceAccount: './firebase-admin.json',
    },
  },
});
