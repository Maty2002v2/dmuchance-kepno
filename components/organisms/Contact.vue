<template>
    <section
      id="contact"
      class="relative max-w-full overflow-hidden shadow py-14 md:py-20 rounded-2xl bg-partner md:my-20 my-14"
    >
      <AtomsSection>
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
              <a href="tel:+48698175028" class="text-sm paragraph xl:text-base">
                +48 698 175 028
              </a>
              
              <br/>

              <a href="tel:+48604482756" class="text-sm paragraph xl:text-base">
                +48 604 482 756
              </a>
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-medium">Mailowo</h3>
              <a href="mailto:dmuchancekepno@gmail.com" class="text-sm paragraph xl:text-base">
                dmuchancekepno@gmail.com
              </a>
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-medium">Jesteśmy dostępni pod adresem</h3>
              <p class="text-sm paragraph xl:text-base">
                Mikorzyn <br/>
                63-600 Kępno
              </p>
            </div>
            <div class="flex flex-col gap-2 sm:flex-row">
              <a href="tel:+48698175028">
                <AtomsButton
                  ariaLabel="Call us"
                  class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base"
                >
                  Zadzwoń
                </AtomsButton>
              </a>
            </div>
          </div>
        </div>
      </AtomsSection>
    </section>
</template>
