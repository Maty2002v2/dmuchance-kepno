<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const paths = [
    '/img/gallery/bramka-celnosciowa/bramka-celnosciowa.jpeg',
    '/img/gallery/bramka-celnosciowa/bramka-do-pilki.webp',
];
</script>

<template>
    <NuxtLayout name="gallery" :paths="paths" title="Bramka celnościowa"/>
</template>