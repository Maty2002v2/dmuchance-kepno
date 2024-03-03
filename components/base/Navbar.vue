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
          <NavLink name="O nas" url="#aboutUs" />
          <NavLink name="Nasz liczby" url="#ourNumbers" />
          <NavLink name="Galeria" url="#gallery" />
          <NavLink name="Najczęstrze pytania" url="#faq" />
          <NavLink name="Zaufali nam" url="#theyTrustedUs" />
          <NavLink name="Kontakt" url="#contact" />
          <!-- <li class="relative group">
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
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">O nas</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My w liczbach</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Galeria</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Najczęstrze pytania</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Zaufali nam</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kontakt</a>
                </li>
              </ul>
            </transition>
          </li> -->
        </ul>
      </div>
      <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
        <a href="tel:+4733378901">
          <base-button class="flex items-center gap-3 px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
            <PhoneIcon />
            +47 333 789 011
          </base-button>
        </a>
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
