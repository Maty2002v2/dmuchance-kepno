<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const paths = [
  '/img/gallery/baseny/dmuchany basen z kulkami.jpeg',
  '/img/gallery/baseny/basen-z-kulkami.webp',
  '/img/gallery/baseny/dmuchany-basen-z-kulkami.jpeg',
  '/img/gallery/baseny/kulkowy basen.jpeg',
  '/img/gallery/baseny/basen na kulki.jpeg',
];
</script>

<template>
    <NuxtLayout name="gallery" :paths="paths" title="Suche baseny z piłeczkami "/>
</template>