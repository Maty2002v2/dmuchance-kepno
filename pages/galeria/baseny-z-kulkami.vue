<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const paths = [
  // '/img/gallery/baseny/dmuchany basen z kulkami.jpeg',
  // '/img/gallery/baseny/basen-z-kulkami.webp',
  // '/img/gallery/baseny/dmuchany-basen-z-kulkami.jpeg',
  // '/img/gallery/baseny/kulkowy basen.jpeg',
  // '/img/gallery/baseny/basen na kulki.jpeg',
  '/img/gallery/baseny/13320335_1225069767503198_4195813665066489662_o.jpg',
  '/img/gallery/baseny/284438959_410397447631747_7046795021867871805_n.jpg',
  '/img/gallery/baseny/290315409_538887294609295_2719777809189518211_n (1).jpg',
  '/img/gallery/baseny/326017115_721138236232701_1107940879589967080_n.jpg',
  '/img/gallery/baseny/352615854_633873725429077_7094877621634218103_n.jpg',
  '/img/gallery/baseny/365985445_1463129161167109_1024163288132915428_n.jpg',
  '/img/gallery/baseny/piłeczki.jpg',
  '/img/gallery/baseny/piłeczki1.jpg',
];
</script>

<template>
    <NuxtLayout name="gallery" :paths="paths" title="Suche baseny z piłeczkami "/>
</template>