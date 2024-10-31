<template>
    <div class="overflow-hidden swiper-tile">
        <NuxtImg
            :src="src"
            alt="alt"
            width="373"
            height="280"
            format="webp"
            loading="lazy"
            class="max-h-[380px] rounded-xl"
        />

        <NuxtLink :to="link">
            <div class="overflow-hidden overlay rounded-xl">
                <ClickIcon />
            </div>
        </NuxtLink>

        <h3 class="swiper-tile__title">{{ title }}</h3>
    </div>
</template>

<script lang="ts" setup>
interface Props {
  src: string;
  title?: string;
  link: string;
}

withDefaults(defineProps<Props>(), {
    title: '',
});
</script>

<style scoped lang="scss">
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: all 0.2s linear;
}

.swiper-tile {
    position: relative;
    cursor: pointer;

    &:hover {
        .overlay {
            background-color: #3b82f6;
            opacity: 0.8;
        };

        .swiper-tile__title {
            transform: translateY(200px);
        }

        span.cursor-default-click-icon {
            top: 50%;
            transform: translate(-50%, -50%) scale(2);
        }
    }

    &__title {
        position: absolute;
        bottom: 40px;
        left: 00px;
        color: #FFFFFF;
        background-color: #3b82f6;
        padding: 10px;
        font-size: 2rem;
        font-weight: 700;
        transition: all 0.2s linear;
    }

    span.cursor-default-click-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #FFFFFF;
        transform: translate(-50%, -1000%) scale(2);
        transition: transform 0.2s linear;
    }
}

.swiper-slide {
    width: auto;

    & img{
        width: 100%;
    }
}
</style>
