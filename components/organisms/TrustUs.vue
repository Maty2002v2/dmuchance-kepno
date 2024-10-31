<template>
    <section
      id="theyTrustedUs"
      class="relative max-w-full overflow-hidden shadow py-14 mb-14 md:py-20 md:mb-20 bg-partner rounded-2xl"
    >
      <AtomsSection>
        <div
          class="flex flex-col items-center justify-center w-full col-span-12 px-6 space-y-4 text-center sm:px-0"
          >
          <h2 data-aos="flip-down" class="text-2xl font-semibold text-neutral-800">
            Już <span class="text-header-gradient">zaufali nam</span> przede wszyscy
          </h2>
          <p data-aos="flip-down" class="!mt-6 paragraph">
            Co roku współpracujemy z:
          </p>
          <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
            <NuxtImg
              v-for="img in [
                'clever.png',
                'diamon-cutts.png',
                'swiss-finance.png',
                'gambio.png',
              ]"
              :key="img"
              :src="`/img/partner/${img}`"
              alt="Obrazek z logo partnera"
              width="288"
              height="139"
              format="webp"
              loading="lazy"
              class="mx-auto sm:w-1/2 md:w-1/4 lg:w-72"
            />
          </div>
          <NuxtImg
            data-aos="fade-up"
            data-aos-delay="300"
            src="/img/contact.webp"
            alt="Ikona gwiazdki"
            height="400"
            width="500"
            loading="lazy"
          ></NuxtImg>
        </div>
      </AtomsSection>
    </section>
</template>
