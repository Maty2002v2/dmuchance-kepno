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
                format="webp"
                loading="lazy"
                class="w-24 -mt-2" 
              />
            </a>
          </div>
          <ul class="space-y-4">
            <NavLink name="O nas" url="#aboutUs" />
            <NavLink name="Nasz liczby" url="#ourNumbers" />
            <NavLink name="Galeria" url="#gallery" />
          </ul>
        </div>
        <div
          class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]"
        >
          <ul class="space-y-4">
            <NavLink name="Najczęstrze pytania" url="#faq" />
            <NavLink name="Zaufali nam" url="#theyTrustedUs" />
            <NavLink name="Kontakt" url="#contact" />
          </ul>
        </div>
        <div
          class="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]"
        >
          <p class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Kontakt</p>
          <p class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <PhoneIcon />
            +47 333 789 011
          </p>
          <p class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <PhoneIcon />
            +47 333 789 011
          </p>
          <p class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <EmailOutlineIcon />
            adresemail@gmail.com
          </p>
        </div>
        <div
          class="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]"
        >
          <p class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Sociale</p>
          <p class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <FacebookIcon />
            Facebook
          </p>
          <p class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <InstagramIcon />
            Instagram
          </p>
          <p class="flex items-center gap-3 text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            <YoutubeIcon />
            Youtube
          </p>
        </div>
        <!-- <div
          class="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]"
        >
          <h5 class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Newsletter</h5>
          <p class="text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            Never miss anything crypto when <br class="sm:hidden" />you're on the go
          </p>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Enter your email"
            />
            <button
              class="px-4 py-4 text-white transition duration-300 rounded-md bg-blue-gradient sm:py-3 hover:shadow-md"
            >
              <ArrowRightIcon :size="20" />
            </button>
          </div>
        </div> -->
      </div>
    </div>
    <div class="pt-8 sm:pt-6 pb-3 text-center text-sm text-[#666666] hover:text-gray-900">
      &copy; Copyright 2024 Dmuchane zamki Kępno. Wszystkie prawa zastrzeżone
    </div>
    <div class="pb-8 text-center text-sm text-[#666666] hover:text-gray-900">
      Realizacja <a href="https://www.facebook.com/profile.php?id=100008562976078">Mateuz Małolepszy</a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooter',
}
</script>
