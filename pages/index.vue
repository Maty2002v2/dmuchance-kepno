<script lang="ts" setup>
const accordions = [
  {
    title: "Kogo obsługujemy?",
    description:
      "Obsługujemy różnego rodzaju uroczystości, takie jak: Komunie, festyny szkolne oraz przedszkolne, dożynki, imprezy firmowe, ale także przyjedziemy do Ciebie indywidualnie na podwórko, aby dzieci mogły czerpać radość z naszych atrakcji 😀. Od 13 lat współpracujemy z Gminami, Centrami Kultury, bibliotekami, sołectwami.",
  },
  {
    title: "Czy wystawiamy faktury?",
    description:
      "Taak, wystawiamy faktury.",
  },
  {
    title: "Dla kogo posiadamy atrakję?",
    description:
      "Nasze atrakcje przeznaczone są dla dzieci w każdym wieku, ale nie tylko 😀. Sztuczna krowa do dojenia idealnie sprawdzi się podczas konkurencji dojenia na czas, a nasza bramka celnościowa sprawia, że dorosły chce spróbować swoich sił i trafić jak najlepszy wynik 😀.",
  },
  {
    title: "Czy jesteśmy na imprezie znjmując się aktrakcjami?",
    description:
      "Dbając o bezpieczeństwo dzieci, zawsze jest osoba, która zadba o to, aby zabawa na wynajętych atrakcjach była bezpieczna.",
  },
];
</script>

<template>
  <div class="w-full overflow-hidden">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-10 md:pb-20">
      <BaseSection>
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
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            Wynajem <span class="text-header-gradient">dmuchanych zamkow</span> i innych urządzeń rekreacyjnych
          </h1>
          <!-- <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            class="hidden paragraph sm:block"
          >
            Dmuchane zamki, zjeżdżalnie, atrakcję na festyny, urodziny i inne imprezy. Działamy nie tylko lokalnie w Kępnie czy wielkopolsce.
          </p> -->
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col mt-2 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
          <a href="tel:+48698175028" class="mx-auto sm:mx-0">
            <BaseButton ariaLabel="Call us" class="flex items-center gap-3 px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
              <PhoneIcon />
              +48 698 175 028
            </BaseButton>
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
      </BaseSection>
    </section>

    <section id="aboutUs" class="relative w-full my-14 md:my-20">
      <BaseSection>
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
        <div data-aos="fade-down" class="relative col-span-12 md:col-span-6 md:h-[315px] h-[160px]">
          <BaseYoutubeVideo
            imageUrl="/img/gallery/duze-zjezdzalnie/nowy-dmuchany-zamek.webp"
            videoId="FfinzxzyKUg"
            altText="Film z drona pokazującydmuchane zjeżdżalnie"
          />
        </div>
      </BaseSection>
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

    <!-- We in numbers -->
    <section id="ourNumbers" class="relative w-full shadow my-14 py-14 md:py-20 md:my-20 bg-partner rounded-2xl">
      <BaseSection data-aos="fade-down">
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
            <LandingInNumber :finishValue="18" color="text-sky-400" class="lg:border-l">
              Lat doświadczenia
            </LandingInNumber>

            <LandingInNumber :finishValue="60" color="text-sky-400" :setPlus="true">
              Zaliczone imprezy
            </LandingInNumber>

            <LandingInNumber :finishValue="23" color="text-sky-400">
              Dostępnych atrkacji
            </LandingInNumber>

            <LandingInNumber :finishValue="7" color="text-sky-400">
              Dni dostępnych w tygodniu
            </LandingInNumber>
            </div>
          </div>
      </BaseSection>
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

    <!-- Section with the gallery -->
    <section id="gallery" class="relative w-full py-14 md:py-20">
      <BaseSection>
        <div class="flex justify-center col-span-12 text-center">
          <h2 data-aos="flip-down" class="mb-4 text-2xl font-semibold text-neutral-800">
            Nasza <span class="text-header-gradient">galeria</span> imprez i atrakcji
          </h2>
        </div>
        <LandingTile
          data-aos="fade-up"
          title="Dmuchane zjeżdżalnie"
          alt="Zdjęie zmuchanej zjeżdżalni"
          pathPreview="/img/gallery/duze-zjezdzalnie/nowy-dmuchany-zamek.webp"
          pathPage="/galeria/duze-zjezdzalnie"
          class="col-span-12 sm:col-span-6 md:col-span-4"
        />

        <LandingTile
          data-aos="fade-up"
          data-aos-delay="100"
          title="Suche baseny z piłeczkami "
          alt="Zdjęie basenu z kulkami"
          pathPreview="/img/gallery/baseny/basen-z-kulkami.webp"
          pathPage="/galeria/baseny-z-kulkami"
          class="col-span-12 sm:col-span-6 md:col-span-4"
        />
        <LandingTile
          data-aos="fade-up"
          data-aos-delay="200"
          title="Kule wodne, łódeczki"
          alt="Zdjęie rowerów wodnych"
          pathPreview="/img/gallery/kule-wodne-lodeczki/rowery-wodne.webp"
          pathPage="/galeria/kule-wodne-lodeczki"
          class="col-span-12 sm:col-span-6 md:col-span-4"
        />

        <LandingTile
          data-aos="fade-up"
          title="Bramka celnościowa"
          alt="Bramka celnościowa"
          pathPreview="/img/gallery/bramka-celnosciowa/bramka-do-pilki.webp"
          pathPage="/galeria/bramka-celnosciowa"
          class="col-span-12 sm:col-span-6 md:col-span-4"
        />
        <LandingTile
          data-aos="fade-up"
          data-aos-delay="100"
          title="Namioty imprezowe"
          alt="Namioty imprezowe"
          pathPreview="/img/gallery/namioty-imprezowe/namioty.webp"
          pathPage="/galeria/namioty-imprezowe"
          class="col-span-12 sm:col-span-6 md:col-span-4"
        />
        <LandingTile
          data-aos="fade-up"
          data-aos-delay="200"
          title="Sztuczna krowa"
          alt="Sztuczna krowa."
          pathPreview="/img/gallery/sztuczna-krowa/sztuczna-krowa-do-dojenia.webp"
          pathPage="/galeria/sztuczna-krowa"
          class="col-span-12 sm:col-span-6 md:col-span-4"
        />

        <LandingTile
          data-aos="fade-up"
          title="Wata cukrowa, popcorn"
          alt="Wata cukrowa"
          pathPreview="/img/gallery/wata-cukrowa-popcorn/wata-cukrowa.webp"
          pathPage="/galeria/wata-cukrowa-popcorn"
          class="col-span-12 sm:col-span-6 md:col-span-4"
        />
        
      </BaseSection>
      <NuxtImg
          data-aos="fade-up"
          data-aos-delay="400"
          src="/img/pattern/ellipse-2.png"
          alt="Ikona kulki"
          width="12"
          height="12"
          format="webp"
          loading="lazy"
          class="absolute hidden w-3 sm:block xl:top-2 xl:right-3/4 top-2 left-10"
        />
    </section>

    <!-- Warranty section -->
    <section class="relative w-full shadow py-14 md:py-20 bg-partner rounded-2xl">
      <BaseSection class="p-1">
        <div class="flex justify-center col-span-12">
          <h2 data-aos="flip-down" class="mb-4 text-2xl font-semibold text-neutral-800">
            Nasze <span class="text-header-gradient">gwarancje</span> dla ciebie
          </h2>
        </div>
        <div class="flex flex-wrap items-center justify-center col-span-12 transform bg-white shadow-lg lg:flex-row rounded-xl sm:shadow-md">
          <div 
            data-aos="fade-up"
            class="w-full p-6 space-y-6 border-gray-200 sm:w-1/2 md:w-1/4 lg:mt-0 xl:border-r lg:p-8"
          >
            <div class="flex flex-col items-center text-center">
              <EmoticonHappyOutlineIcon size="50"/>
              Atrakcje, które rozbudzą dziecięcą wyobraźnię!
            </div>
          </div>

          <div 
            data-aos="fade-up"
            data-aos-delay="150"
            class="w-full p-6 space-y-6 border-gray-200 sm:w-1/2 md:w-1/4 lg:mt-0 xl:border-r lg:px-8"
          >
            <div class="flex flex-col items-center text-center">
            <VectorLineIcon size="50"/>
              Zamki skrojone na miarę twojej imprezy!
            </div>
          </div>

          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            class="w-full p-6 border-gray-200 first:space-y-6 sm:w-1/2 md:w-1/4 lg:mt-0 xl:border-r lg:px-8"
          >
            <div class="flex flex-col items-center text-center">
            <AccountFileTextOutlineIcon size="50"/>
              Doświadczenie, na które możesz liczyć!
            </div>
          </div>

          <div 
            data-aos="fade-up"
            data-aos-delay="450"
            class="w-full p-6 space-y-6 border-gray-200 sm:w-1/2 md:w-1/4 lg:mt-0 lg:px-8"
          >
            <div class="flex flex-col items-center text-center">
              <BookOpenBlankVariantOutlineIcon size="50"/>
                Wszystok co najlepsze prosto i przejrzysto!
            </div>
          </div>
        </div>
      </BaseSection>
      <NuxtImg
          data-aos="fade-up"
          data-aos-delay="300"
          src="/img/pattern/star.png"
          alt="Ikona gwiazdki"
          width="24"
          height="24"
          format="webp"
          loading="lazy"
          class="absolute hidden w-6 sm:block top-2 right-3/4"
        />
        <NuxtImg
          data-aos="fade-up"
          src="/img/pattern/star.png"
          alt="Ikona gwiazdki"
          width="24"
          height="24"
          format="webp"
          loading="lazy"
          class="absolute hidden w-6 sm:block top-9 left-3/4"
        />
    </section>

    <!-- FAQ section -->
    <section id="faq" class="w-full mt-14 py-14 md:py-20 md:mt-20">
      <BaseSection>
        <div class="flex justify-center col-span-12">
          <h2 data-aos="flip-down" class="mb-4 text-2xl font-semibold text-neutral-800">
            Najczęstrze <span class="text-header-gradient">pytania</span>
          </h2>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          class="col-span-12 px-4 sm:px-0"
        >

          <ul class="shadow-box">
            <BaseAccordion
              v-for="(accordion, index) in accordions"
              :key="index"
              :accordion="accordion"
            />
          </ul>
        </div>
      </BaseSection>
    </section>

    <!-- Trust section -->
    <!-- <section
      id="theyTrustedUs"
      class="relative max-w-full overflow-hidden shadow py-14 mb-14 md:py-20 md:mb-20 bg-partner rounded-2xl"
    >
      <BaseSection>
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
      </BaseSection>
    </section> -->

    <!-- Contact section -->
    <section
      id="contact"
      class="relative max-w-full overflow-hidden shadow py-14 md:py-20 rounded-2xl bg-partner md:my-20 my-14"
    >
      <BaseSection>
        <div
          class="grid flex-wrap-reverse grid-cols-12 col-span-12 gap-x-6 md:flex-row"
        >
          <div data-aos="fade-left" class="col-span-12 px-4 mt-8 space-y-8 lg:col-span-6 sm:space-y-6 sm:px-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1236.806624654587!2d18.0214887244079!3d51.36264295380441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1spl!2spl!4v1710187403072!5m2!1spl!2spl"
            title="map with location" width="100%" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div
            data-aos="fade-right"
            class="col-span-12 px-4 mt-8 space-y-8 lg:col-span-6 sm:space-y-6 sm:px-6 row-span-full lg:row-span-6"
          >
            <h2 class="text-4xl font-semibold text-center sm:text-left">
              Skontaktuj się <span class="text-header-gradient">z nami</span>
            </h2>
            <div class="space-y-2">
              <h3 class="text-lg font-medium">
                Telefonicznie
              </h3>
              <p class="text-sm paragraph xl:text-base">
                +48 698 175 028 <br/>
                +48 604 482 756
              </p>
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-medium">Mailowo</h3>
              <p class="text-sm paragraph xl:text-base">
                dmuchancekepno@gmail.com
              </p>
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-medium">Jesteśmy dostępni pod adresem</h3>
              <p class="text-sm paragraph xl:text-base">
                Mikorzyn nr domu <br/>
                63-600 Kępno
              </p>
            </div>
            <div class="flex flex-col gap-2 sm:flex-row">
              <a href="tel:+48698175028">
                <BaseButton
                  ariaLabel="Call us"
                  class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base"
                >
                  Zadzwoń
                </BaseButton>
              </a>
            </div>
          </div>
        </div>
      </BaseSection>
    </section>

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
  </div>
</template>

<style scoped>
#aboutUs,
#ourNumbers,
#gallery,
#faq,
#theyTrustedUs,
#contact {
  scroll-margin-top: 50px;
}

.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(
    169.4deg,
    #3984f4 -6.01%,
    #0cd3ff 36.87%,
    #2f7cf0 78.04%,
    #0e65e8 103.77%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url("../assets/img/partner/background.png");
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url("../assets/img/bg-trading-tools.webp");
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
