<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const paths = [
    '/img/gallery/wata-cukrowa-popcorn/popcorn.jpeg',
    '/img/gallery/wata-cukrowa-popcorn/wata-cukrowa.webp',
];
</script>

<template>
    <NuxtLayout name="gallery" :paths="paths" title="Wata cukrowa, popcorn"/>
</template>