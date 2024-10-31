<template>
  <button
    class="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300"
    :aria-label="ariaLabel"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
defineProps<{
  ariaLabel: string;
}>();
</script>

<style lang="scss" scoped>
button {
  &:active {
    transform: scale(0.9);
  }
}
</style>
