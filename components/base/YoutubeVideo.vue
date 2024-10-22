<script lang="ts" setup>
const props = defineProps<{
  imageUrl: string;
  videoId: string;
  altText: string;
}>();

const loadVideo = ref(false);
const url = computed(() => `https://www.youtube.com/embed/${props.videoId}?rel=0&showinfo=0&autoplay=1`);
</script>

<template>
  <div
    class="relative w-full h-full bg-center bg-cover"
    :style="{ 'background-image': `url(${imageUrl})`}"
    @click="loadVideo = true"
  >
    <div
      v-if="!loadVideo"
    >
      <!-- <NuxtImg
        :src="imageUrl"
        :alt="altText"
        width="596"
        height="315"
        format="webp"
        class="w-full h-full"
      /> -->
      <div class="absolute top-0 left-0 w-full h-full cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80.252"
          height="56.189"
          viewBox="0 0 80.252 56.189"
          class="absolute inset-1/2 translate-y-[-50%] translate-x-[-50%]"
        >
          <defs></defs>
          <path
            class="path fill-[red] hover:fill-[#ff3636] duration-100"
            d="M78.6,2.71a10.054,10.054,0,0,0-7.073-7.074c-6.28-1.718-31.4-1.718-31.4-1.718s-25.119,0-31.4,1.653A10.258,10.258,0,0,0,1.653,2.71C0,8.99,0,22.013,0,22.013S0,35.1,1.653,41.315a10.055,10.055,0,0,0,7.073,7.073c6.346,1.719,31.4,1.719,31.4,1.719s25.119,0,31.4-1.653A10.055,10.055,0,0,0,78.6,41.381c1.652-6.28,1.652-19.3,1.652-19.3S80.318,8.99,78.6,2.71ZM32.128,34.044V9.982L53.017,22.013Zm0,0"
            transform="translate(-0.001 6.082)"
          />
        </svg>
      </div>
    </div>
    <iframe
      v-else
      title="Odtwarzecz youtube"
      :src="url"
      width="100%" 
      height="315"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      class="w-full h-full"
    >
    </iframe>
  </div>
</template>
