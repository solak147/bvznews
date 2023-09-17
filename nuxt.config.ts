// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  nitro: {
    routeRules: {
      '/api/**': { proxy: 'http://localhost:8080/**' }
    }
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/main.less',
    '@/assets/css/chart-min.js',
    '@/assets/css/font-awesome-min.js'
  ],

  typescript: {
    typeCheck: true
  }
})
