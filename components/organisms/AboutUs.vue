<template>
    <section id="aboutUs" class="relative w-full my-14 md:my-20">
      <AtomsSection>
        <div class="flex justify-center w-full col-span-12">
          <h2 data-aos="flip-down" class="mb-4 text-2xl font-semibold text-neutral-800">
            Trochę <span class="text-header-gradient">o nas</span>
          </h2>
        </div>
        <div data-aos="fade-up" class="relative col-span-12 md:col-span-6">
          <div class="space-y-2">
            <p class="text-lg font-medium">
              Nasza firma zajmuje się <span class="text-header-gradient">wynajmem urządzeń rekreacyjnych</span>.<br> W naszej firmie posiadamy zjeżdżalnie duże, średnie, suche baseny do skakania z piłeczkami, 
              bramkę celnościową, sztuczną krowę do dojenia, łódeczki oraz kule wodne.<br> <br>
              <span class="text-header-gradient">Od lat</span> współpracujemy z gminami, przedszkolami, szkołami, sołectwami, ośrodkami kultury, czy radami sołeckimi.
              Wynajmując nasze atrakcje masz <span class="text-header-gradient">gwarancję miłej i fachowej obsługi</span>.<br> <br>

              <span class="text-header-gradient">Zajmujemy się również</span> wynajmem namiotów imprezowych wraz z wyposażeniem. 
              Posiadamy namioty o wymiarach 4x8 oraz 8x16.
            </p>
          </div>
        </div>
        <div data-aos="fade-down" class="relative col-span-12 md:col-span-6 h-[315px]">
          <MoleculesYoutubeVideo
            imageUrl="/img/gallery/duze-zjezdzalnie/nowy-dmuchany-zamek.webp"
            videoId="FfinzxzyKUg"
            altText="Film z drona pokazującydmuchane zjeżdżalnie"
          />
        </div>
      </AtomsSection>
      <NuxtImg
          data-aos="fade-up"
          data-aos-delay="300"
          src="/img/pattern/star.png"
          alt="Ikona gwiazdki"
          width="24"
          height="24"
          format="webp"
          loading="lazy"
          class="absolute hidden w-6 sm:block bottom-12 xl:bottom-16 left-4 xl:left-16"
        />
    </section>
</template>
