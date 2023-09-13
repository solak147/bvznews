// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  css: ['@/assets/css/tailwind.css', '@/assets/css/main.less'],

  typescript: {
    typeCheck: true
  }
})
