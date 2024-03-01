<template>
  <div>
    <!-- <img :src="require(`@/assets/img/partner/${img}`)" class="mx-auto sm:w-1/2 lg:w-72" alt="" /> -->
    <img src="@/assets/img/partner/clever.png" class="mx-auto sm:w-1/2 lg:w-72" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
  },
}
</script>
