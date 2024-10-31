<template>
  <footer class="max-w-screen-xl px-8 mx-auto">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div
          class="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]"
        >
          <div class="items-center mb-6 sm:hidden xl:flex sm:mb-0">
            <a href="#">
              <NuxtImg 
                src="/img/logo/dmuchance-kepno.svg" 
                alt="Dmuchane Zamki Kępno Logo"
                width="96"
                height="71"
                loading="lazy"
                class="w-24 -mt-2" 
              />
            </a>
          </div>
          <ul class="space-y-4">
            <AtomsNavLink name="O nas" url="#aboutUs" />
            <AtomsNavLink name="Nasze liczby" url="#ourNumbers" />
            <AtomsNavLink name="Galeria" url="#gallery" />
          </ul>
        </div>
        <div
          class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]"
        >
          <ul class="space-y-4">
            <AtomsNavLink name="Najczęstsze pytania" url="#faq" />
            <AtomsNavLink name="Zaufali nam" url="#theyTrustedUs" />
            <AtomsNavLink name="Kontakt" url="#contact" />
          </ul>
        </div>
        <div
          class="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]"
        >
          <p class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Kontakt</p>
          <a href="tel:+48698175028" class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <PhoneIcon />
            +48 698 175 028
          </a>
          <a href="tel:+48604482756" class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <PhoneIcon />
            +48 604 482 756
          </a>
          <a href="mailto:dmuchancekepno@gmail.com" class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <EmailOutlineIcon />
            dmuchancekepno@gmail.com
          </a>
        </div>
        <div
          class="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]"
        >
          <p class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Sociale</p>
          <a href="https://www.facebook.com/profile.php?id=100064388723710" class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <FacebookIcon />
            Facebook
          </a>
          <p class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <InstagramIcon />
            Instagram
          </p>
          <a href="https://www.youtube.com/@dmuchancekepno" class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <YoutubeIcon />
            Youtube
          </a>
        </div>
      </div>
    </div>
    <div class="pt-8 sm:pt-6 pb-3 text-center text-sm text-[#666666] hover:text-gray-900">
      &copy; Copyright 2024 Dmuchane zamki Kępno. Wszystkie prawa zastrzeżone
    </div>
    <div class="pb-8 text-center text-sm text-[#666666] hover:text-gray-900">
      Realizacja <a href="https://www.facebook.com/profile.php?id=100008562976078">Mateusz Małolepszy</a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooter',
}
</script>
