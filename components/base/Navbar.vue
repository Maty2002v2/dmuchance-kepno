<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div class="flex flex-col max-w-screen-xl px-8 py-4 mx-auto lg:items-center lg:justify-between lg:flex-row">
      <div class="flex flex-col items-center space-x-4 lg:flex-row xl:space-x-8">
        <div class="flex flex-row items-center justify-between w-full py-6">
          <div>
            <img src="@/assets/img/logo/logo.svg" class="w-24 xl:w-28" alt="Nefa Logo" />
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="flex flex-col flex-grow w-full h-auto pb-4 space-y-3 duration-300 origin-top lg:items-center lg:pb-0 lg:justify-end lg:flex-row xl:space-x-2 lg:space-y-0"
        >
          <NavLink name="Cryptocurrency" url="#" />
          <NavLink name="Exchanges" url="#" />
          <NavLink name="Watchlist" url="#" />
          <NavLink name="NFT" url="#" />
          <NavLink name="Portfolio" url="#" />
          <li class="relative group">
            <button
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
              @click="dropdownToggler"
              @blur="dropdownToggler"
            >
              <span>Products</span>
              <ChevronUpIcon v-if="dropdownNavbar" :size="16" />
              <ChevronDownIcon v-else :size="16" />
            </button>
            <transition name="transform-fade-down">
              <ul
                v-if="dropdownNavbar"
                class="flex flex-col py-1 pl-2 rounded-md lg:absolute max-w-42 lg:bg-white lg:shadow-md lg:pl-0"
              >
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Exchange</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wallet</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Explorer</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Charts</a>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
      <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
        <base-button class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]">
          Login
        </base-button>
        <base-button class="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
          Sign Up
        </base-button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'BaseNavbar',
  data() {
    return {
      open: false,
      dropdownNavbar: false,
    }
  },
  methods: {
    dropdownToggler () {
      this.dropdownNavbar = !this.dropdownNavbar
    }
  }
}
</script>
