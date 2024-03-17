<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const paths = [
    '/img/gallery/sztuczna-krowa/sztuczna-krowa-do-dojenia.webp',
    '/img/gallery/sztuczna-krowa/sztuczna-krowa.jpeg',
];
</script>

<template>
    <NuxtLayout name="gallery" :paths="paths" title="Namioty imprezowe"/>
</template>