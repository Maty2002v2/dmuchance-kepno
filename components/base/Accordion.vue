<script lang="ts" setup>
const start = el => (el.style.height = el.scrollHeight + 'px');
const end = el => (el.style.height = '');

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

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-if="selected" class="relative overflow-hidden transition-all duration-700" style="">
        <div class="py-2">
          <p class="text-sm leading-relaxed tracking-wide text-gray-700">
            {{ accordion.description }}
          </p>
        </div>
      </div>
    </transition>
  </li>
</template>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0px !important;
  opacity: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>