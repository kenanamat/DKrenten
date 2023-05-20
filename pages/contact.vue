<script setup lang="ts">
import { PhoneIcon } from "@heroicons/vue/24/outline"
import { useContactStore } from '../stores/contact';
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

const contactStore = useContactStore()
</script>

<template>
  <main>
    <div class="relative isolate min-h-screen bg-slate-200 pt-36">
      <div
        class="mx-auto grid max-w-[1440px] grid-cols-1 justify-between lg:grid-cols-2"
      >
        <div
          class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-36"
        >
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
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
            <dl class="mb-20 space-y-2 leading-7">
              <div class="flex gap-8">
                <Button
                  :arrow="false"
                  class="!m-0 h-full !p-0 hover:bg-transparent"
                  href="tel:(+31) 657991999"
                >
                  <div
                    class="from-primary group relative flex h-full rounded-full bg-transparent bg-gradient-to-l to-sky-300 px-6 py-2 font-bold text-white shadow-md"
                  >
                    <div class="z-10 flex items-center gap-x-4">
                      <dt class="flex-none">
                        <span class="sr-only">Telefoon</span>
                        <PhoneIcon class="h-7 w-7" aria-hidden="true" />
                      </dt>
                      <dd>(+31) 657 99 19 99</dd>
                    </div>
                    <div
                      class="to-primary absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-l from-sky-300 opacity-0 transition-all duration-500 group-hover:opacity-100"
                    ></div>
                  </div>
                </Button>
                <dt>
                  <span class="sr-only">Whatsapp</span>
                  <a
                    href="https://wa.me/+31657991999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="logos:whatsapp-icon" class="h-16 w-16" />
                  </a>
                </dt>
              </div>
            </dl>
            <div class="mt-16">
              <ul class="grid gap-8 sm:grid-cols-2">
                <li v-for="(cities, province) in provinces" :key="province">
                  <ul class="">
                    <h3
                      class="mb-2 w-44 rounded-xl bg-slate-100 p-4 font-bold shadow-md"
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
                        class="hover:!text-primary [&>svg]:hover:fill-primary mt-2 inline-block cursor-pointer rounded-none border-t border-slate-300 bg-transparent !p-1 text-sm hover:bg-transparent [&>svg]:rotate-90 [&>svg]:scale-50"
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
        <div class="mx-6 lg:pl-8">
          <img
            src="/white-truck-trans.png"
            alt=""
            class="ml-auto -mb-4 max-h-52 -scale-x-100 lg:mt-32"
          />
          <form
            @submit.prevent="contactStore.sendEmail()"
            class="rounded-xl bg-slate-100 pt-20 pb-24 shadow-md sm:mb-32 lg:py-16 lg:px-8"
          >
            <div class="mx-auto max-w-xl px-4 lg:max-w-lg">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label for="first-name" class="block font-bold"
                    >Voornaam</label
                  >
                  <div class="mt-2.5">
                    <input
                      required
                      v-model="contactStore.name"
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="focus:ring-primary block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="last-name" class="block font-bold"
                    >Achternaam</label
                  >
                  <div class="mt-2.5">
                    <input
                      required
                      v-model="contactStore.lastname"
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="focus:ring-primary block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="email" class="block font-bold">Email</label>
                  <div class="mt-2.5">
                    <input
                      required
                      v-model="contactStore.email"
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="email"
                      class="focus:ring-primary block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="phone-number" class="block font-bold"
                    >Telefoonnummer</label
                  >
                  <div class="mt-2.5">
                    <input
                      required
                      v-model="contactStore.phone"
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autocomplete="tel"
                      class="focus:ring-primary block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block font-bold"
                    >Bericht
                    <span class="text-xs font-normal"
                      >(Minimaal 200 tekens)</span
                    ></label
                  >
                  <div class="mt-2.5">
                    <textarea
                      required
                      v-model="contactStore.message"
                      name="message"
                      id="message"
                      rows="4"
                      minlength="200"
                      class="focus:ring-primary block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-8 flex justify-end">
                <Button
                  type="submit"
                  class="bg-primary rounded-md text-white shadow-md [&>svg]:ring-white [&>svg]:ring-opacity-20"
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
