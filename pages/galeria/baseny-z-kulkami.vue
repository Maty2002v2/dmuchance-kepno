<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const paths = [
  '/img/gallery/baseny/dmuchany basen z kulkami.jpeg',
  '/img/gallery/baseny/basen-z-kulkami.webp',
  '/img/gallery/baseny/basen_na_kulki.jpeg',
  '/img/gallery/baseny/basen_z_kulkami.jpeg',
  '/img/gallery/baseny/dmuchany_basen_z_kulkami.jpeg',
  '/img/gallery/baseny/dmuchany basen na kulkami.jpeg',
  '/img/gallery/baseny/dmuchany_basen_na_kulkami.jpeg',
  '/img/gallery/baseny/dmuchany-basen-z-kulkami.jpeg',
  '/img/gallery/baseny/dmuchany-basen-na-kulkami.jpeg',
  '/img/gallery/baseny/basen-na-kulki.jpeg',
  '/img/gallery/baseny/kulkowy basen.jpeg',
  '/img/gallery/baseny/basen na kulki.jpeg',
  '/img/gallery/baseny/basen-z-kulkami.jpeg',
];
</script>

<template>
    <NuxtLayout name="gallery" :paths="paths" title="Baseny z kulkami"/>
</template>