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
  },
  app: {
    head: {
      title: 'Dmuchane zamki - dmuchańce - baseny z kulkami - Kępno',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pl'
      },
      meta: [
        { name: 'google-site-verification', content: '1n6cdlJm4jj_sHUSuerBBg6ZL1xjaetLsxP_voC7YQ8' },
        { name: 'description', content: 'Wynajmuj dmuchane zamki, zjeżdżalnie i atrakcje dla dzieci i dorosłych w Kępnie. Zapewniamy jakościowe usługi, atrakcyjne ceny i dostępność 7 dni w tygodniu. Skorzystaj z prostego kontaktu i wejdź w naszą galerię. Idealne dla urzędów, przedszkoli, imprez prywatnych. Odkryj niskie ceny i gwarancje jakości już teraz!' },
      ]
    }
  }
})