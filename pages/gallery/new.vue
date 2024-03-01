<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const paths = [
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg',
    '/img/nowy-dmuchany-zamek.jpg'
];
</script>

<template>
    <NuxtLayout name="gallery" :paths="paths" title="🔥 Nowości"/>
</template>