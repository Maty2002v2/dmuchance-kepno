<script lang="ts" setup>
const { isMobile } = useWindoWidth();

const open = ref(false);
const showOptions = computed(() => open.value || !isMobile?.value);
</script>

<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div class="flex flex-col max-w-screen-xl px-8 py-4 mx-auto lg:items-center lg:justify-between lg:flex-row">
      <div class="flex flex-col items-center justify-center w-full space-x-4 lg:flex-row xl:space-x-8">
        <div class="flex flex-row items-center justify-between w-full py-6">
          <div>
            <img src="@/assets/img/logo/logo.svg" class="w-24 xl:w-28" alt="Dmuchńce Kępno Logo" />
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <Accordion>
          <ul
            v-if="showOptions"
            class="flex flex-col flex-grow w-full h-auto pb-4 space-y-3 duration-300 origin-top lg:items-center lg:pb-0 lg:justify-end lg:flex-row xl:space-x-2 lg:space-y-0"
          >
            <NavLink name="O nas" url="#aboutUs" />
            <NavLink name="Nasz liczby" url="#ourNumbers" />
            <NavLink name="Galeria" url="#gallery" />
            <NavLink name="Najczęstrze pytania" url="#faq" />
            <NavLink name="Zaufali nam" url="#theyTrustedUs" />
            <NavLink name="Kontakt" url="#contact" />
          </ul>
        </Accordion>
      </div>
    </div>
  </nav>
</template>