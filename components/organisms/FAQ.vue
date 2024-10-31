<template>
    <section id="faq" class="w-full mt-14 py-14 md:py-20 md:mt-20">
      <AtomsSection>
        <div class="flex justify-center col-span-12">
          <h2 data-aos="flip-down" class="mb-4 text-2xl font-semibold text-neutral-800">
            Najczęstsze <span class="text-header-gradient">pytania</span>
          </h2>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          class="col-span-12 px-4 sm:px-0"
        >

          <ul class="shadow-box">
            <MoleculesQuestionAccordion
              v-for="(accordion, index) in accordions"
              :key="index"
              :accordion="accordion"
            />
          </ul>
        </div>
      </AtomsSection>
    </section>
</template>

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
      "Tak, wystawiamy faktury.",
  },
  {
    title: "Dla kogo posiadamy atrakcję?",
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
