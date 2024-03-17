<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const paths = [
    '/img/gallery/duze-zjezdzalnie/dmuchana zjezdzalnia dla dzieci.jpeg',
    '/img/gallery/duze-zjezdzalnie/dmuchana zjezdzalnia.jpeg',
    '/img/gallery/duze-zjezdzalnie/dmuchana zjeżdżalnia dla dzieci.jpeg',
    '/img/gallery/duze-zjezdzalnie/dmuchana zjeżdżalnia.jpeg',
    '/img/gallery/duze-zjezdzalnie/nowy-dmuchany-zamek.webp',
    '/img/gallery/duze-zjezdzalnie/dmuchana-zjeżdżalnia.jpeg',
    '/img/gallery/duze-zjezdzalnie/dmuchane zamki.jpeg',
    '/img/gallery/duze-zjezdzalnie/dmuchany zamek dla dzieci.jpeg',
    '/img/gallery/duze-zjezdzalnie/zjeżdżalnia dla dzieci.jpeg',
    '/img/gallery/duze-zjezdzalnie/nadmuchiwana_zjeżdżalnia.jpeg',
    '/img/gallery/duze-zjezdzalnie/nadmuchiwana-zjeżdżalnia.jpeg',
    '/img/gallery/duze-zjezdzalnie/zjezdzalnia dla dzieci.jpeg',
    '/img/gallery/duze-zjezdzalnie/zjezdzalnie dla dzieci.jpeg',
    '/img/gallery/duze-zjezdzalnie/zjeżdżalnie dla dzieci.jpeg',
    '/img/gallery/duze-zjezdzalnie/nadmuchiwana zjeżdżalnia.jpeg',
];
</script>

<template>
    <NuxtLayout name="gallery" :paths="paths" title="Dmuchane zjeżdżalnie"/>
</template>