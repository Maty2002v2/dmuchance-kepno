<template>
    <section id="gallery" class="relative w-full py-14 md:py-24">
      <div class="flex justify-center col-span-12 mb-6 text-center">
        <h2 class="mb-4 text-2xl font-semibold text-neutral-800">
          Nasza <span class="text-header-gradient">galeria</span> imprez i atrakcji
        </h2>
      </div>
      
      <NuxtImg
        data-aos="fade-up"
        data-aos-delay="400"
        src="/img/pattern/ellipse-2.png"
        alt="Ikona kulki"
        width="12"
        height="12"
        format="webp"
        loading="lazy"
        class="absolute hidden w-3 sm:block xl:top-9 xl:left-3/4 top-2 left-10"
      />

      <MoleculesGallerySwiper :slides="swiperGalleryData"/>
        
      <NuxtImg
        data-aos="fade-up"
        data-aos-delay="400"
        src="/img/pattern/ellipse-2.png"
        alt="Ikona kulki"
        width="12"
        height="12"
        format="webp"
        loading="lazy"
        class="absolute hidden w-3 sm:block xl:top-2 xl:right-3/4 top-2 left-10"
      />
    </section>
</template>

<script lang="ts" setup>
const swiperGalleryData = [
  {
    image: '/img/gallery/duze-zjezdzalnie/nowy-dmuchany-zamek.webp',
    title: 'Dmuchane zjeżdżalnie',
    link: '/galeria/duze-zjezdzalnie'
  },
  {
    image: '/img/gallery/baseny/basen-z-kulkami.webp',
    title: 'Suche baseny z piłeczkami',
    link: '/galeria/baseny-z-kulkami'
  },
  {
    image: '/img/gallery/kule-wodne-lodeczki/rowery-wodne.webp',
    title: 'Kule wodne, łódeczki',
    link: '/galeria/kule-wodne-lodeczki'
  },
  {
    image: '/img/gallery/bramka-celnosciowa/bramka-do-pilki.webp',
    title: 'Bramka celnościowa',
    link: '/galeria/bramka-celnosciowa'
  },
  {
    image: '/img/gallery/namioty-imprezowe/namioty.webp',
    title: 'Namioty imprezowe',
    link: '/galeria/namioty-imprezowe'
  },
  {
    image: '/img/gallery/sztuczna-krowa/sztuczna-krowa-do-dojenia.webp',
    title: 'Sztuczna krowa',
    link: '/galeria/sztuczna-krowa'
  },
  {
    image: '/img/gallery/wata-cukrowa-popcorn/wata-cukrowa.webp',
    title: 'Wata cukrowa, popcorn',
    link: '/galeria/wata-cukrowa-popcorn'
  }
]
</script>
