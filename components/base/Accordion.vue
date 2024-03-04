<script lang="ts" setup>
defineProps<{
  accordion: {}
}>();

const selected = ref(false);
</script>

<template>
  <li class="relative border-b-2 border-gray-200">
    <button type="button" class="w-full py-4 text-left" @click="selected = !selected">
      <div class="flex items-center justify-between">
        <span class="font-medium">{{ accordion.title }}</span>
        <ChevronUpIcon v-if="selected" :size="20" />
        <ChevronDownIcon v-else :size="20" />
      </div>
    </button>

    <Accordion>
      <div v-if="selected" class="relative overflow-hidden transition-all duration-700" style="">
        <div class="py-2">
          <p class="text-sm leading-relaxed tracking-wide text-gray-700">
            {{ accordion.description }}
          </p>
        </div>
      </div>
    </Accordion>
  </li>
</template>