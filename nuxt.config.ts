// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'aos/dist/aos.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: "@/plugins/aos", ssr: false, mode: "client" },
    { src: "@/plugins/fslightbox", ssr: false, mode: "client" }
  ],
  modules: [
    '@nuxt/image',
    'nuxt-swiper'
  ],
  image: {
    provider: "ipx"
  }
})
