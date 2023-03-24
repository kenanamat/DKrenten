<script setup lang="ts">
import { Icon } from "#components"
import HomeForm from "../components/HomeForm.vue"
import BenefitBlocks from "~~/components/BenefitBlocks.vue"

const selectedRent = ref("lift")
</script>

<template>
  <div class="relative flex justify-center bg-slate-200 shadow-xl">
    <div class="z-10 m-10 max-w-[1440px]">
      <div class="relative mt-16 grid grid-cols-12">
        <div class="col-span-6">
          <div class="mb-12">
            <h1 class="mb-6">
              <span class="text-2xl font-bold">
                Wij adviseren, jij bepaald
              </span>
              <br />
              <span class="text-5xl font-bold">
                Onze service stel je zelf samen
              </span>
            </h1>
            <p class="">
              Bent u op zoek naar een betrouwbare en professionele
              verhuisservice? Zoek niet verder! DKrenten is er om u te helpen.
              Onze vriendelijke en behulpzame medewerkers staan klaar om uw
              verhuizing snel en efficiënt uit te voeren. Gebruik onze tool om
              direct inzage te krijgen over de kosten!
            </p>
          </div>
          <div class="flex gap-8">
            <button
              class="rounded bg-white px-6 py-4 text-lg font-bold shadow-md"
            >
              Bereken je verhuiskosten
            </button>
            <div class="relative flex">
              <button
                class="bg-primary flex items-center rounded px-6 py-4 text-lg font-bold text-white shadow-md"
              >
                <Icon name="mdi:tow-truck" size="40" class="[&>*]:fill-white" />
                <span class="ml-4">Zelf een verhuislift huren</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-2"></div>
        <div class="col-span-4">
          <div class="rounded-3xl bg-sky-100 shadow-xl">
            <div class="px-10 py-8">
              <h2 class="text-2xl font-bold">Bereken je verhuiskosten!</h2>
              <div class="mt-6 space-y-2">
                <span
                  class="flex w-64 items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm shadow"
                >
                  <Icon
                    name="material-symbols:price-change-rounded"
                    size="26"
                    class="[&>*]:fill-primary"
                  />
                  Volledig inzicht van de prijs!
                </span>
                <span
                  class="flex w-64 items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm shadow"
                >
                  <Icon
                    name="material-symbols:lock-open-rounded"
                    size="26"
                    class="[&>*]:fill-primary"
                  />
                  Nergens aan vast!
                </span>
              </div>
            </div>
            <div class="rounded-b-3xl bg-white px-10 py-8">
              <HomeForm />
            </div>
          </div>
        </div>
      </div>
      <img
        class="mb-32 -mt-56 w-[65%]"
        src="/white-truck-trans.png"
        alt="DKrenten truck"
      />
    </div>
    <div
      class="bg-primary absolute bottom-0 right-0 h-20 w-full"
      style="clip-path: polygon(0 60%, 100% 0, 100% 100%, 0% 100%)"
    ></div>
  </div>
  <div class="my-16 flex justify-center">
    <div class="m-10 w-full max-w-[1440px]">
      <div class="mx-auto max-w-xl text-center text-slate-600">
        <h2 class="mb-2 text-2xl font-extrabold">Onze voordelen</h2>
        <p>
          Bij DKrenten profiteert u van onze uitgebreide ervaring en expertise
          op het gebied van verhuizingen.
        </p>
      </div>
      <hr class="mx-auto my-14 w-80" />
      <BenefitBlocks />
    </div>
  </div>
  <div
    class="mt-20 h-20 w-full bg-sky-100"
    style="clip-path: polygon(0 0, 100% 60%, 100% 100%, 0% 100%)"
  ></div>
  <div class="flex justify-center bg-sky-100">
    <div class="m-10 w-full max-w-[1440px]">
      <div class="flex flex-wrap justify-between gap-8">
        <div class="max-w-5xl">
          <h2 class="text-primary mb-4 text-4xl font-bold">
            Huur een verhuislift!
          </h2>
          <p class="w-5/6">
            Bij DKrenten transport kun je een verhuislift huren om zware spullen
            gemakkelijk naar boven te verplaatsen tijdens een verhuizing. Zo
            hoef je geen zware spullen zoals antieke kasten of wasmachines door
            het smalle trappengat te tillen. De verhuislift wordt geleverd met
            bemanning die je helpt bij het verplaatsen van jouw spullen en
            ervoor zorgt dat alles goed gaat.
          </p>
          <div class="mt-12 mb-3 flex items-center gap-2">
            <Icon
              name="material-symbols:nest-clock-farsight-analog-outline-rounded"
              size="32"
              class="[&>*]:fill-primary"
            />
            <h3 class="text-primary text-2xl font-bold">
              Hoelang heb ik een verhuislift nodig?
            </h3>
          </div>
          <p class="w-5/6">
            Bij DKrenten transport huur je gemakkelijk een verhuislift voor
            alleen hetgeen dat jij nodig hebt. Bij ons hoef je niet onnodig de
            hele dag de lift te huren, jij bepaald!
          </p>
          <ul class="mt-10 space-y-6">
            <li
              class="flex items-center gap-6 rounded-full bg-sky-50 px-6 py-3 shadow-md"
            >
              <h4 class="min-w-max text-lg font-bold">1 uur service:</h4>
              <p class="">
                Meer dan genoeg tijd om +- 10 tot 12 objecten (10m3) naar boven
                te verhuizen. Dit is vergelijkbaar met een vol busje (PostNL
                formaat)
              </p>
            </li>
            <li
              class="flex items-center gap-6 rounded-full bg-sky-50 px-6 py-3 shadow-md"
            >
              <h4 class="min-w-max text-lg font-bold">2 uur service:</h4>
              <p class="">
                Ideaal als je +- 20 m3 wilt liften. Dit is vergelijkbaar met een
                grotere bakwagen.
              </p>
            </li>
            <li
              class="flex items-center gap-6 rounded-full bg-sky-50 px-6 py-3 shadow-md"
            >
              <h4 class="min-w-max text-lg font-bold">3-4 uur service:</h4>
              <p class="">
                Noodzakelijk als je meer dan 25m3 naar boven moet verhuizen
                en/of op 2 locaties de verhuislift wilt inzetten.
              </p>
            </li>
          </ul>
        </div>
        <div class="">
          <h3 class="mb-6 mt-4 text-lg font-bold">
            Verhuislift kan je gebruiken voor:
          </h3>
          <div class="grid grid-cols-2 grid-rows-2 gap-8">
            <div
              class="h-30 w-30 bg-primary flex flex-col rounded-xl p-4 shadow-md"
            >
              <Icon
                name="mdi:truck-fast"
                size="80"
                class="self-center [&>*]:fill-sky-100"
              />
              <span class="mt-2 text-center font-extrabold text-white">
                Verhuizen
              </span>
            </div>
            <div
              class="h-30 w-30 bg-primary flex flex-col rounded-xl p-4 shadow-md"
            >
              <Icon
                name="carbon:solar-panel"
                size="80"
                class="self-center [&>*]:fill-sky-100"
              />
              <span class="mt-2 text-center font-extrabold text-white">
                Zonnepanelen
              </span>
            </div>
            <div
              class="h-30 w-30 bg-primary flex flex-col rounded-xl p-4 shadow-md"
            >
              <Icon
                name="mdi:washing-machine"
                size="80"
                class="self-center [&>*]:fill-sky-100"
              />
              <span class="mt-2 text-center font-extrabold text-white">
                Witgoed
              </span>
            </div>
            <div
              class="h-30 w-30 bg-primary flex flex-col rounded-xl p-4 shadow-md"
            >
              <Icon
                name="map:furniture-store"
                size="80"
                class="self-center [&>*]:fill-sky-100"
              />
              <span class="mt-2 text-center font-extrabold text-white">
                Meubels
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="h-20 w-full bg-sky-100"
    style="clip-path: polygon(0 0, 100% 0%, 100% 60%, 0% 100%)"
  ></div>
  <div class="flex justify-center">
    <div class="m-10 w-full max-w-[1440px]">
      <div class="mx-auto mt-24 text-center text-slate-600">
        <h2 class="text-2xl font-extrabold">Tarieven</h2>
      </div>
      <hr class="mx-auto mt-8 mb-20 w-80" />
      <div class="mb-24">
        <div class="flex justify-between gap-32 flex-wrap">
          <div
            class="mx-auto flex flex-grow justify-between border-2 bg-slate-50 h-36"
          >
            <button
              class="flex w-44 flex-col items-center justify-center border-2 bg-white transition-all"
              @click="selectedRent = 'lift'"
              :class="{ 'border-primary !border-4': selectedRent === 'lift' }"
            >
              <img
                class="max-h-32 w-full"
                src="~/public/verhuislift.png"
                alt="Verhuislift"
              />
              <span class="mt-2 font-bold">Meubel lift</span>
            </button>
            <button
              class="flex w-44 flex-col items-center justify-center border-2 bg-white transition-all"
              @click="selectedRent = 'aanhang'"
              :class="{
                'border-primary !border-4': selectedRent === 'aanhang',
              }"
            >
              <img
                class="max-h-24"
                src="~/public/verhuisliftaanhang.jpg"
                alt="Aanhangwagen"
              />
              <span class="font-bold">Aanhanger lift</span>
            </button>
          </div>
          <ul class="flex justify-center gap-8">
            <li
              class="grid w-32 grid-rows-2 items-center justify-center rounded-xl bg-slate-200 p-4 shadow-md"
            >
              <Icon name="mdi:leaf" size="32" class="mx-auto" />
              <h3 class="font-bold text-center">Milieu bewust</h3>
            </li>
            <li
              class="grid w-32 grid-rows-2 items-center justify-center rounded-xl bg-slate-200 p-4 shadow-md"
            >
              <Icon
                name="fa6-solid:people-carry-box"
                size="32"
                class="mx-auto"
              />
              <h3 class="font-bold text-center">Inclusief operator</h3>
            </li>
            <li
              class="grid w-32 grid-rows-2 items-center justify-center rounded-xl bg-slate-200 p-4 shadow-md"
            >
              <Icon name="mdi:clock-fast" size="32" class="mx-auto" />
              <h3 class="font-bold text-center">Met spoed mogelijk</h3>
            </li>
            <li
              class="grid w-32 grid-rows-2 items-center justify-center rounded-xl bg-slate-200 p-4 shadow-md"
            >
              <Icon name="mdi:calendar-check" size="32" class="mx-auto" />
              <h3 class="font-bold text-center">7 dagen per week</h3>
            </li>
          </ul>
        </div>
        <div
          class="mt-24 grid grid-cols-4 gap-10"
          v-if="selectedRent === 'lift'"
        >
          <div
            class="to-primary relative rounded-xl border bg-gradient-to-b from-sky-300 p-10 shadow-md"
          >
            <span
              class="absolute top-4 right-4 rounded-full bg-sky-50 px-4 py-2 text-xs font-bold text-sky-800 shadow-md"
            >
              Meest gekozen
            </span>
            <h3 class="flex items-center gap-1 text-xl font-bold text-white">
              <Icon name="mingcute:stopwatch-line" size="20" />
              <span>Snel service</span>
            </h3>
            <span class="text-white">Inclusief operator</span>
            <div
              class="my-10 flex items-center gap-4 font-extrabold text-white"
            >
              <span class="text-4xl text-sky-100">€</span>
              <span class="text-7xl">90</span>
            </div>
            <button
              class="mb-6 w-full rounded-xl bg-sky-800 p-3 text-xl font-bold text-slate-100 shadow-md"
            >
              Huur de service
            </button>
            <div class="text-white">
              <h4 class="mb-2 font-bold">Mogelijkheden:</h4>
              <ul class="ml-5 list-disc space-y-2">
                <li>3 objecten / 30 minuten</li>
                <li>Tot en met 9e etage</li>
                <li>Inclusief operator</li>
              </ul>
            </div>
          </div>
          <div class="relative rounded-xl border bg-slate-100 p-10 shadow-md">
            <h3 class="flex items-center gap-1 text-xl font-bold">
              <Icon name="material-symbols:clock-loader-10" size="20" />
              <span>1 uur service</span>
            </h3>
            <span class="">Inclusief operator</span>
            <div class="my-10 flex items-center gap-4 font-extrabold">
              <span class="text-4xl text-slate-600">€</span>
              <span class="text-7xl">110</span>
            </div>
            <button
              class="bg-primary mb-6 w-full rounded-xl p-3 text-xl font-bold text-white shadow-md"
            >
              Huur de service
            </button>
            <div class="">
              <h4 class="mb-2 font-bold">Mogelijkheden:</h4>
              <ul class="ml-5 list-disc space-y-2">
                <li>3 objecten / 30 minuten</li>
                <li>Tot en met 9e etage</li>
                <li>Inclusief operator</li>
              </ul>
            </div>
          </div>
          <div class="relative rounded-xl border bg-slate-100 p-10 shadow-md">
            <h3 class="flex items-center gap-1 text-xl font-bold">
              <Icon name="material-symbols:clock-loader-40" size="20" />
              <span>2 uur service</span>
            </h3>
            <span class="">Inclusief operator</span>
            <div class="my-10 flex items-center gap-4 font-extrabold">
              <span class="text-4xl text-slate-600">€</span>
              <span class="text-7xl">179</span>
            </div>
            <button
              class="bg-primary mb-6 w-full rounded-xl p-3 text-xl font-bold text-white shadow-md"
            >
              Huur de service
            </button>
            <div class="">
              <h4 class="mb-2 font-bold">Mogelijkheden:</h4>
              <ul class="ml-5 list-disc space-y-2">
                <li>3 objecten / 30 minuten</li>
                <li>Tot en met 9e etage</li>
                <li>Inclusief operator</li>
              </ul>
            </div>
          </div>
          <div class="relative rounded-xl border bg-slate-100 p-10 shadow-md">
            <h3 class="flex items-center gap-1 text-xl font-bold">
              <Icon name="material-symbols:clock-loader-90" size="20" />
              <span>3 - 4 uur service</span>
            </h3>
            <span class="">Inclusief operator</span>
            <div class="my-10 flex items-center gap-4 font-extrabold">
              <span class="text-4xl text-slate-600">€</span>
              <span class="text-7xl">265</span>
            </div>
            <button
              class="bg-primary mb-6 w-full rounded-xl p-3 text-xl font-bold text-white shadow-md"
            >
              Huur de service
            </button>
            <div class="">
              <h4 class="mb-2 font-bold">Mogelijkheden:</h4>
              <ul class="ml-5 list-disc space-y-2">
                <li>3 objecten / 30 minuten</li>
                <li>Tot en met 9e etage</li>
                <li>Inclusief operator</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-24 grid grid-cols-4 gap-10" v-else>
          <div
            class="to-primary relative rounded-xl border bg-gradient-to-b from-sky-300 p-10 shadow-md"
          >
            <span
              class="absolute top-4 right-4 rounded-full bg-sky-50 px-4 py-2 text-xs font-bold text-sky-800 shadow-md"
            >
              Meest gekozen
            </span>
            <h3 class="flex items-center gap-1 text-xl font-bold text-white">
              <Icon name="mingcute:stopwatch-line" size="20" />
              <span>Snel service</span>
            </h3>
            <span class="text-white">Inclusief operator</span>
            <div
              class="my-10 flex items-center gap-4 font-extrabold text-white"
            >
              <span class="text-4xl text-sky-100">€</span>
              <span class="text-7xl">105</span>
            </div>
            <button
              class="mb-6 w-full rounded-xl bg-sky-800 p-3 text-xl font-bold text-slate-100 shadow-md"
            >
              Huur de service
            </button>
            <div class="text-white">
              <h4 class="mb-2 font-bold">Mogelijkheden:</h4>
              <ul class="ml-5 list-disc space-y-2">
                <li>3 objecten / 30 minuten</li>
                <li>Tot en met 9e etage</li>
                <li>Inclusief operator</li>
              </ul>
            </div>
          </div>
          <div class="relative rounded-xl border bg-slate-100 p-10 shadow-md">
            <h3 class="flex items-center gap-1 text-xl font-bold">
              <Icon name="material-symbols:clock-loader-10" size="20" />
              <span>1 uur service</span>
            </h3>
            <span class="">Inclusief operator</span>
            <div class="my-10 flex items-center gap-4 font-extrabold">
              <span class="text-4xl text-slate-600">€</span>
              <span class="text-7xl">125</span>
            </div>
            <button
              class="bg-primary mb-6 w-full rounded-xl p-3 text-xl font-bold text-white shadow-md"
            >
              Huur de service
            </button>
            <div class="">
              <h4 class="mb-2 font-bold">Mogelijkheden:</h4>
              <ul class="ml-5 list-disc space-y-2">
                <li>3 objecten / 30 minuten</li>
                <li>Tot en met 9e etage</li>
                <li>Inclusief operator</li>
              </ul>
            </div>
          </div>
          <div class="relative rounded-xl border bg-slate-100 p-10 shadow-md">
            <h3 class="flex items-center gap-1 text-xl font-bold">
              <Icon name="material-symbols:clock-loader-40" size="20" />
              <span>2 uur service</span>
            </h3>
            <span class="">Inclusief operator</span>
            <div class="my-10 flex items-center gap-4 font-extrabold">
              <span class="text-4xl text-slate-600">€</span>
              <span class="text-7xl">185</span>
            </div>
            <button
              class="bg-primary mb-6 w-full rounded-xl p-3 text-xl font-bold text-white shadow-md"
            >
              Huur de service
            </button>
            <div class="">
              <h4 class="mb-2 font-bold">Mogelijkheden:</h4>
              <ul class="ml-5 list-disc space-y-2">
                <li>3 objecten / 30 minuten</li>
                <li>Tot en met 9e etage</li>
                <li>Inclusief operator</li>
              </ul>
            </div>
          </div>
          <div class="relative rounded-xl border bg-slate-100 p-10 shadow-md">
            <h3 class="flex items-center gap-1 text-xl font-bold">
              <Icon name="material-symbols:clock-loader-90" size="20" />
              <span>3 - 4 uur service</span>
            </h3>
            <span class="">Inclusief operator</span>
            <div class="my-10 flex items-center gap-4 font-extrabold">
              <span class="text-4xl text-slate-600">€</span>
              <span class="text-7xl">269</span>
            </div>
            <button
              class="bg-primary mb-6 w-full rounded-xl p-3 text-xl font-bold text-white shadow-md"
            >
              Huur de service
            </button>
            <div class="">
              <h4 class="mb-2 font-bold">Mogelijkheden:</h4>
              <ul class="ml-5 list-disc space-y-2">
                <li>3 objecten / 30 minuten</li>
                <li>Tot en met 9e etage</li>
                <li>Inclusief operator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
