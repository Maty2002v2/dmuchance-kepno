<template>
    <section id="ourNumbers" class="relative w-full shadow my-14 py-14 md:py-20 md:my-20 bg-partner rounded-2xl">
      <AtomsSection data-aos="fade-down">
        <div
          class="flex flex-col items-center justify-center w-full col-span-12 px-6 space-y-4 text-center sm:px-0"
        >
          <h2 data-aos="flip-down" class="text-2xl font-semibold text-neutral-800">
            Dmuchane zamki Kępno w <span class="text-header-gradient">liczbach</span>
          </h2>
          <p data-aos="flip-down" class="!mt-6 paragraph">
            Dane aktualizowane na bierząco
          </p>

          <div class="flex items-center justify-center w-full flex-row flex-wrap !mt-10 sm:gap-0 gap-2">
            <MoleculesInNumber :finishValue="18" color="text-sky-400" class="lg:border-l">
              Lat doświadczenia
            </MoleculesInNumber>

            <MoleculesInNumber :finishValue="60" color="text-sky-400" :setPlus="true">
              Zaliczone imprezy
            </MoleculesInNumber>

            <MoleculesInNumber :finishValue="23" color="text-sky-400">
              Dostępnych atrkacji
            </MoleculesInNumber>

            <MoleculesInNumber :finishValue="7" color="text-sky-400">
              Dni dostępnych w tygodniu
            </MoleculesInNumber>
            </div>
          </div>
      </AtomsSection>
      <NuxtImg
          data-aos="fade-up"
          data-aos-delay="300"
          src="/img/pattern/ellipse-2.png"
          alt="Ikona kulki"
          width="24"
          height="24"
          format="webp"
          loading="lazy"
          class="absolute hidden w-6 sm:block bottom-12 xl:top-16 right-4 xl:right-1/4"
        />
    </section>
</template>
