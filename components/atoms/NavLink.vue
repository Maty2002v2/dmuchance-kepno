<template>
  <li class="w-full text-start">
    <a
      class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline text-nowrap"
      :href="url"
    >
      {{ name }}
    </a>
  </li>
</template>
<script lang="ts" setup>
defineProps<{
  name: string;
  url: string;
}>();
</script>
