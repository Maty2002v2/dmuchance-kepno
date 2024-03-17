<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const paths = [
    '/img/gallery/namioty-imprezowe/namiot.jpeg',
    '/img/gallery/namioty-imprezowe/namioty-na-impreze.jpeg',
    '/img/gallery/namioty-imprezowe/namioty.webp',
];
</script>

<template>
    <NuxtLayout name="gallery" :paths="paths" title="Namioty imprezowe"/>
</template>