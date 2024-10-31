<template>
    <div>
        <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCoverflow]"
            :loop="true"
            :slides-per-view="1.1"
            effect="coverflow"
            :grab-cursor="false"
            :centered-slides="true"
            :space-between="20"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }"
            :coverflow-effect="{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: true,
            }"
            :breakpoints="{
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }"
        >
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <MoleculesGallerySwiperTile
                    :src="slide.image"
                    :title="slide.title"
                    :link="slide.link"
                />
            </SwiperSlide>
        </Swiper>

    </div>
</template>

<script lang="ts" setup>
defineProps<{
    slides: {
        image: string,
        title: string,
        link: string,
    }[]
}>();
</script>

<style scoped>
.test {
    
}
</style>
