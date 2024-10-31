<template>
    <section class="relative w-full shadow py-14 md:py-20 bg-partner rounded-2xl">
      <AtomsSection class="p-1">
        <div class="flex justify-center col-span-12">
          <h2 data-aos="flip-down" class="mb-4 text-2xl font-semibold text-neutral-800">
            Nasze <span class="text-header-gradient">gwarancje</span> dla Ciebie
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
              Zamki skrojone na miarę Twojej imprezy!
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
                Wszystko co najlepsze prosto i przejrzysto!
            </div>
          </div>
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
</template>
