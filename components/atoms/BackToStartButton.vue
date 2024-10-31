<template>
    <div class="flex justify-center w-full my-14">
      <a
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Powrót do góry</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
</template>

<style lang="scss" scoped>
a {
    &:active {
        transform: scale(0.9);
    }
}
</style>
