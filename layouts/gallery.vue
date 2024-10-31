<script lang="ts" setup>
const layoutCustomProps = useAttrs();

const toggler = ref(false);
const slideNumber = ref(0);

const selectImage = (index: number) => {
  slideNumber.value = index;
  toggler.value = !toggler.value;
};
</script>

<template>
  <div class="relative min-h-screen font-sans antialiased">
    <div class="relative">
      <OrganismsNavbar />
      <div
        class="absolute top-0 left-0 w-full h-full cover-gradient-2 sm:cover-gradient"
      ></div>

      <main class="z-10 text-neutral-800">
        <div class="w-full">
          <header class="mt-12 mb-16">
            <AtomsSection>
              <NuxtLink
                to="/"
                class="flex items-center px-3 py-1 space-x-1 text-sm font-medium text-blue-500 transition duration-300 rounded-md hover:bg-blue-50"
              >
                <ChevronLeftIcon :size="16" />
                <span>Powrót</span>
              </NuxtLink>
              <h1
                data-aos="fade-right"
                data-aos-once="true"
                class="text-[2.5rem] sm:text-3xl xl:text-4xl font-bold leading-tight sm:pr-8 xl:pr-10 col-span-12"
              >
                {{ layoutCustomProps.title }}
              </h1>
            </AtomsSection>
          </header>
          <section class="w-full pb-24">
            <AtomsSection>
              <div
                v-for="(imagePath, index) in layoutCustomProps.paths"
                :key="index"
                class="col-span-12 mx-auto md:col-span-3 sm:col-span-4 cursor-zoom-in"
              >
                <NuxtImg 
                  :src="imagePath" 
                  :alt="layoutCustomProps.title"
                  width="373"
                  height="280"
                  format="webp"
                  loading="lazy"
                  @click="selectImage(index + 1)" 
                />
              </div>
            </AtomsSection>
          </section>

          <FsLightbox
            :toggler="toggler"
            :sources="layoutCustomProps.paths"
            :slide="slideNumber"
          />
        </div>
      </main>
    </div>
    <OrganismsFooter />
  </div>
</template>

<style>
.cover-gradient {
  background: linear-gradient(
    169.4deg,
    rgba(57, 132, 244, 0.04) -6.01%,
    rgba(12, 211, 255, 0.04) 36.87%,
    rgba(47, 124, 240, 0.04) 78.04%,
    rgba(14, 101, 232, 0.04) 103.77%
  );
}
.cover-gradient-2 {
  background: linear-gradient(
    169.4deg,
    rgba(57, 132, 244, 0.1) -6.01%,
    rgba(12, 211, 255, 0.1) 36.87%,
    rgba(47, 124, 240, 0.1) 78.04%,
    rgba(14, 101, 232, 0.1) 103.77%
  );
}
.bg-blue-gradient,
.text-gradient {
  background: linear-gradient(136.91deg, #468ef9 -12.5%, #0c66ee 107.5%);
}
.text-gradient {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
