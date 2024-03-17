<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const paths = [
    '/img/gallery/kule-wodne-lodeczki/kule-wodne.jpeg',
    '/img/gallery/kule-wodne-lodeczki/rowery-wodne.webp',
    '/img/gallery/kule-wodne-lodeczki/rowery-wodne2.jpeg',
];
</script>

<template>
    <NuxtLayout name="gallery" :paths="paths" title="Kule wodne, lódeczki"/>
</template>