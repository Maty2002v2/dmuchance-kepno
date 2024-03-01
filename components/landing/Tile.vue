<script lang="ts" setup>
interface Props {
  title: string;
  buttonLabel: string;
}

withDefaults(defineProps<Props>(), {
  title: "Ttile",
  buttonLabel: "Więcej",
});

const route = useRoute();
console.log("current name", route);

const toggler = ref(false);
</script>

<template>
  <div class="mt-6 overflow-hidden rounded lg:mt-0" v-bind="$attrs">
    <div class="flex items-center justify-between w-full mb-5">
      <span class="font-medium">{{ title }}</span>
      <NuxtLink 
        to="/gallery/new"
        class="flex items-center px-3 py-1 space-x-1 text-sm font-medium text-blue-500 transition duration-300 rounded-md hover:bg-blue-50"
      >
        <span>{{ buttonLabel }}</span>
        <ChevronRightIcon :size="16" />
      </NuxtLink>
    </div>
    <div class="flex flex-col cursor-zoom-in">
      <NuxtImg src="/img/nowy-dmuchany-zamek.jpg" @click="toggler = toggler = !toggler" />
    </div>
  </div>

  <FsLightbox :toggler="toggler" :sources="['/img/nowy-dmuchany-zamek.jpg']" />
</template>
