<script lang="ts" setup>
interface Props {
  finishValue: number;
  color: string;
  setPlus: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  setPlus: false,
});;

const numberTile = ref<null | Element>(null);
const div = ref<null | Element>(null);

if (process.client) {
  const observer = new IntersectionObserver((entries) => {
    if (entries.length > 0) {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          animateValue(entry.target, 0, props.finishValue, 3000);
        }
      });
    }
  });

  const animateValue = (obj: Element, start: number, end: number, duration: number) => {
      let startTimestamp: null | number = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const val = Math.floor(progress * (end - start) + start);
        obj.innerHTML = val.toLocaleString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
          return;
        } 

        if(props.setPlus) {
          obj.innerHTML += '+';
        }
      };
      window.requestAnimationFrame(step);
      
      if(!numberTile.value) return;
      observer.unobserve(numberTile.value);
    }

  onMounted(() => {
    if(!numberTile.value) return;
    observer.observe(numberTile.value);
  })
}
</script>

<template>
  <div
    ref="div"
    data-aos="fade-up"
    data-aos-delay="150"
    class="w-full space-y-6 border-gray-200 sm:w-1/2 md:w-1/4 lg:mt-0 xl:border-r lg:px-8"
  >
    <div class="flex flex-col items-center text-center">
      <span ref="numberTile" :class="['text-4xl font-bold', color]"></span>
      <slot></slot>
    </div>
  </div>
</template>
