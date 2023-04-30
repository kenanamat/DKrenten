<script setup lang="ts">
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline"
const provinces = ref({
  "Noord-Holland": {
    opened: false,
    cities: [
      "Naarden - Bussum",
      "Amsterdam",
      "Haarlem",
      "Hoofddorp",
      "Zaandam",
      "Purmerend",
      "Alkmaar",
      "Hoorn",
      "Beverwijk",
      "Schagen",
      "Enkhuizen",
    ],
  },
  Flevoland: {
    opened: false,
    cities: ["Almere", "Zeewolde", "Lelystad", "Zwolle"],
  },
  "Zuid-Holland": {
    opened: false,
    cities: [
      "Aalsmeer",
      "Alphen aan den Rijn",
      "Zoetermeer",
      "Leiden",
      "Den Haag",
      "Rotterdam",
      "Spijkenisse",
      "Delft",
      "Gouda",
      "Dordrecht",
      "Gorinchem",
    ],
  },
  Utrecht: {
    opened: false,
    cities: [
      "Breukelen",
      "Utrecht",
      "Hilversum",
      "Amersfoort",
      "Zeist",
      "Houten",
      "Nieuwegein",
      "Ijselstein",
      "Woerden",
    ],
  },
})

const getCityArr = (province: keyof typeof provinces.value) => {
  if (provinces.value[province].opened) return provinces.value[province].cities
  else return provinces.value[province].cities.slice(0, 4)
}
</script>

<template>
  <main>
    <!-- <div class="relative flex h-screen justify-center bg-slate-200 shadow-xl">
      <div class="z-10 m-10 max-w-[1440px]">
        <div class="relative mt-16 grid gap-16 lg:grid-cols-2">
          <div class="">
            <div class="mb-12">
              <h1 class="mb-6">
                <span class="block text-2xl font-bold">
                  Onbeantwoorde vragen?
                </span>
                <span class="text-5xl font-bold"> Neem contact op! </span>
              </h1>
              <p class="my-8">
                Bent u op zoek naar een betrouwbare en professionele
                verhuisservice? Zoek niet verder! DKrenten is er om u te helpen.
                Onze vriendelijke en behulpzame medewerkers staan klaar om uw
                verhuizing snel en efficiënt uit te voeren. Gebruik onze tool om
                direct inzage te krijgen over de kosten!
              </p>
            </div>
            <div>
              <h2 class="mb-4 text-2xl font-bold">Beschikbaar in</h2>
              <ul class="grid grid-cols-2 gap-8">
                <li v-for="(cities, province) in provinces" :key="province">
                  <ul class="list-disc">
                    <h3
                      class="to-primary mb-2 w-44 rounded-r-full bg-gradient-to-l from-sky-300 p-4 text-lg font-bold text-white shadow-md"
                    >
                      {{ province }}
                    </h3>
                    <li
                      v-for="(city, index) in getCityArr(province)"
                      :key="index"
                      class="ml-5"
                    >
                      {{ city }}
                    </li>
                    <li
                      class="hover:text-primary ml-5 cursor-pointer transition-all"
                      v-if="!cities.opened && cities.cities.length > 4"
                      @click="cities.opened = true"
                    >
                      ...
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex justify-end">
            <img src="/white-truck-trans.png" alt="" class="h-64" />
            <form></form>
          </div>
        </div>
      </div>
    </div> -->
    <div class="relative isolate bg-slate-200">
      <div
        class="mx-auto grid max-w-[1440px] grid-cols-1 justify-between lg:grid-cols-2"
      >
        <div
          class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-36"
        >
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <!-- <div
              class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-slate-200 ring-1 ring-gray-900/10 lg:w-1/2"
            >
              <svg
                class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="white"
                />
                <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div> -->
            <h1 class="mb-6">
              <span class="block text-2xl font-bold">
                Onbeantwoorde vragen?
              </span>
              <span class="text-5xl font-bold"> Neem contact op! </span>
            </h1>
            <p class="my-8">
              Bent u op zoek naar een betrouwbare en professionele
              verhuisservice? Zoek niet verder! DKrenten is er om u te helpen.
              Onze vriendelijke en behulpzame medewerkers staan klaar om uw
              verhuizing snel en efficiënt uit te voeren. Gebruik onze tool om
              direct inzage te krijgen over de kosten!
            </p>
            <dl class="my-10 space-y-2 leading-7">
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Telefoon</span>
                  <PhoneIcon class="h-7 w-6" aria-hidden="true" />
                </dt>
                <dd>
                  <a class="hover:text-gray-900" href="tel:(+31) 657991999"
                    >(+31) 657 99 19 99</a
                  >
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Email</span>
                  <EnvelopeIcon
                    class="h-7 w-6"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    class="hover:text-gray-900"
                    href="mailto:info@dkrententransport.nl "
                    >info@dkrententransport.nl
                  </a>
                </dd>
              </div>
            </dl>
            <div>
              <ul class="grid grid-cols-2 gap-8">
                <li v-for="(cities, province) in provinces" :key="province">
                  <ul class="">
                    <h3
                      class="to-primary mb-2 w-44 rounded-r-full bg-gradient-to-l from-sky-300 p-4 text-lg font-bold text-white shadow-md"
                    >
                      {{ province }}
                    </h3>
                    <li
                      v-for="(city, index) in getCityArr(province)"
                      :key="index"
                      class=""
                    >
                      {{ city }}
                    </li>
                    <li
                      v-if="!cities.opened && cities.cities.length > 4"
                      @click="cities.opened = true"
                    >
                      <Button
                        class="hover:!text-primary [&>svg]:hover:fill-primary mt-2 inline-block cursor-pointer rounded-md border-t border-slate-400 bg-transparent !p-1 text-sm hover:bg-transparent [&>svg]:rotate-90 [&>svg]:scale-75"
                      >
                        Toon meer..
                      </Button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <form
            action="#"
            method="POST"
            class="to-primary mx-6 rounded-xl bg-gradient-to-b from-sky-300 pt-20 pb-24 shadow-md sm:mb-32 lg:my-32 lg:py-16 lg:px-8"
          >
            <div class="mx-auto max-w-xl px-4 lg:max-w-lg">
              <img
                src="/white-truck-trans.png"
                alt=""
                class="ml-auto mb-16 h-52"
              />
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label for="first-name" class="block font-bold text-white"
                    >Voornaam</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="last-name" class="block font-bold text-white"
                    >Last name</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="email" class="block font-bold text-white"
                    >Email</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="email"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="phone-number" class="block font-bold text-white"
                    >Phone number</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autocomplete="tel"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block font-bold text-white"
                    >Message</label
                  >
                  <div class="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-8 flex justify-end">
                <Button
                  type="submit"
                  class="rounded-md bg-sky-800 text-white shadow-md [&>svg]:ring-white [&>svg]:ring-opacity-20"
                >
                  Stuur ons een bericht!
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
