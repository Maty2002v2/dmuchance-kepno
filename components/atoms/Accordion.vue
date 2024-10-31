<script lang="ts" setup>
const start = (el: Element) => ((el as HTMLElement).style.height = el.scrollHeight + "px");
const end = (el: Element) => ((el as HTMLElement).style.height = "");
</script>

<template>
  <transition
    name="accordion"
    @enter="start"
    @after-enter="end"
    @before-leave="start"
    @after-leave="end"
  >
    <slot></slot>
  </transition>
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
