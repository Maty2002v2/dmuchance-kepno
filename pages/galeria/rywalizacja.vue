<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const paths = [
    '/img/gallery/rywalizacja/sumo1.jpeg',
    '/img/gallery/rywalizacja/sumo2.jpeg',
    '/img/gallery/rywalizacja/koszykowka1.jpeg',
    '/img/gallery/rywalizacja/koszykowka2.jpeg',
];
</script>

<template>
    <NuxtLayout name="gallery" :paths="paths" title="Rywalizacja"/>
</template>
