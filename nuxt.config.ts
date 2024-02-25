// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    'nuxt-icon',
    '@nuxtjs/supabase',
    ['@nuxtjs/google-fonts', {
      families: {
        Lato: [400, 700],
        Lora: [500, 600, 700],
        Poppins: [400, 500, 600, 700]
      }
    }
    ]
  ],
  pinia: {
    storesDirs: ['stores']
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: '/register',
      callback: '/'
    }
  }
})
