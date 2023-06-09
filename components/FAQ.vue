<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue"

const questions = [
  {
    q: "Waar moet ik rekening mee houden bij het huren van een verhuislift?",
    a: "De lift kan tot maximaal 5 meter van het pand geplaatst worden. Het liefst plaatsen we de lift zo dicht mogelijk tegen de gevel, zo creëren we meer stabiliteit.",
  },
  {
    q: "Hoeveel uur moet ik een verhuislift huren?",
    a: "Wij verhuren onze verhuisliften per uur. Je kan de verhuislift huren voor het aantal uur dat jij denk hem nodig te hebben.",
  },
  {
    q: "Moet ik een vergunning aanvragen voor het huren van een verhuislift?",
    a: "Dit is afhankelijk per gemeente in Nederland. Vaak kan je deze informatie op de website van jouw gemeente vinden. Kom je er niet helemaal uit? Dan helpen wij je graag verder op weg.",
  },
  {
    q: "Kan de verhuislift overal geplaatst worden?",
    a: "In principe is de verhuislift heel flexibel en kunnen we op alle plekken komen. Echter plaatsen we de verhuislift niet op een zachte ondergrond zoals gras, zand, modder, etc.",
  },
  {
    q: "Heb ik extra verhuizers nodig?",
    a: "Bij het huren van een verhuislift komt er standaard een ervaren verhuizer van ons mee. Hij of zij heeft ervaring met de verhuislift en zal je assisteren met verhuizen. Je kunt bij ons ook extra verhuizers inhuren voor €35,- per uur (incl. Btw) extra. Uiteraard kan je er ook voor kiezen om zelf extra verhuizers te regelen.",
  },
  {
    q: "Wat kunnen onze verhuisliften tillen?",
    a: "Onze verhuisliften kunnen worden gebruikt om elk voorwerp of een combinatie van objecten op te tillen tot een maximum gewicht van 250 kg. Grote meubels, witgoed zoals koelkasten, diepvriezers en wasmachines zijn allemaal items die je veilig kunt verplaatsen op de meubellift. Een nieuw bad of keuken om te installeren? Bouwmaterialen? Geen probleem! We kunnen bijna alles naar boven hijsen. Piano’s zijn één van de weinig items die niet op de verhuislift geplaatst kunnen worden.",
  },
]
</script>

<template>
  <SectionBackground :slantBottom="false">
    <h2 class="text-primary mb-4 text-4xl font-bold">Veelgestelde vragen</h2>
    <p class="mt-4 mb-12 text-base leading-7 text-gray-600">
      Kan je het antwoord dat je zoekt niet vinden? Neem snel
      <NuxtLink to="/contact" class="text-primary rounded-full font-bold"
        >contact op</NuxtLink
      >
      met ons!
    </p>
    <dl class="mb-16 space-y-4 text-xl font-bold">
      <Disclosure
        as="dt"
        v-slot="{ open }"
        v-for="(question, i) in questions"
        :key="i"
        class="rounded-xl bg-sky-50 py-8 shadow-md"
      >
        <DisclosureButton
          class="flex w-full cursor-pointer items-center pl-4 text-start !text-black"
        >
          <span class="pr-4">{{ question.q }}</span>
          <div class="relative ml-auto mr-4 h-8 w-4 font-extrabold">
            <div
              :class="[
                'bg-primary absolute top-0 h-8 w-1 transition-all duration-200 ease-in-out',
                open && 'rotate-90',
              ]"
            ></div>
            <div class="bg-primary absolute top-0 h-8 w-1 rotate-90"></div>
          </div>
        </DisclosureButton>
        <Transition
          enter-from-class="opacity-0 max-h-0 !mt-0 !pt-0"
          enter-to-class="opacity-100 max-h-[1000px]"
          leave-from-class="opacity-100 max-h-[1000px]"
          leave-to-class="opacity-0 max-h-0 !mt-0 !pt-0"
        >
          <DisclosurePanel
            as="dd"
            v-html="question.a"
            class="ml-3 mt-4 mr-3 border-t pt-4 text-base font-normal transition-all duration-200 ease-in-out"
          />
        </Transition>
      </Disclosure>
    </dl>
  </SectionBackground>
</template>
