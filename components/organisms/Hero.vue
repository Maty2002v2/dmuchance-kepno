<template>
    <section id="hero" class="w-full pb-10 md:pb-30">
      <AtomsSection>
        <div
          class="col-span-12 mt-12 space-y-4 text-center lg:col-span-6 xl:mt-10 sm:space-y-6 sm:text-left"
        >
          <span
            data-aos="fade-right"
            data-aos-once="true"
            class="text-base font-semibold uppercase text-gradient"
            >Najlepsi dla Ciebie</span
          >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[1.8rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            Wynajem <span class="text-header-gradient">dmuchanych zamków</span> i urządzeń rekreacyjnych <span class="text-header-gradient">Kępno</span>
          </h1>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col mt-2 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
          <a href="tel:+48698175028" class="mx-auto sm:mx-0">
            <AtomsButton ariaLabel="Call us" class="flex items-center gap-3 px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white font-semibold !text-base">
              <PhoneIcon />
              +48 698 175 028
            </AtomsButton>
          </a>
          </div>
        </div>
        <div class="hidden col-span-12 mx-auto sm:flex lg:col-span-6">
          <div class="w-full">
            <NuxtImg
              data-aos="fade-up"
              data-aos-once="true"
              src="/img/header-image.webp"
              alt="Obrazek zamku dmuchanego"
              width="596"
              height="596"
              format="webp"
              class="-mt-4"
            />
          </div>
        </div>
        <NuxtImg
          data-aos="fade-up"
          data-aos-delay="300"
          src="/img/pattern/ellipse-1.png"
          alt="Ikona kulki"
          width="24"
          height="24"
          format="webp"
          class="absolute hidden w-6 sm:block bottom-12 xl:bottom-16 left-28 xl:left-0"
        />
        <NuxtImg
          data-aos="fade-up"
          data-aos-delay="300"
          src="/img/pattern/ellipse-2.png"
          alt="Ikona kulki"
          width="24"
          height="24"
          format="webp"
          class="hidden sm:block absolute top-0 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <NuxtImg
          data-aos="fade-up"
          data-aos-delay="300"
          src="/img/pattern/ellipse-3.png"
          alt="Ikona kulki"
          width="24"
          height="24"
          format="webp"
          class="absolute hidden w-6 sm:block bottom-56 right-24"
        />
        <NuxtImg
          data-aos="fade-up"
          data-aos-delay="300"
          src="/img/pattern/star.png"
          alt="Ikona gwiazdki"
          width="32"
          height="32"
          format="webp"
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </AtomsSection>
    </section>
</template>

<script lang="ts" setup>

</script>
