<script setup lang="ts">
const selectedRent = ref("lift")

// const { data } = await useAsyncData("user", () => $fetch("/api/user", {
//   method: 'post',
//   body: {
//     id: 4,
//     name: 'test2'
//   }
// }))
// const { data: david } = await useAsyncData("user", () => $fetch("/api/user"))
</script>

<template>
  <main>
    <div class="relative flex justify-center bg-slate-200 shadow-xl">
      <div class="z-10 m-10 max-w-[1440px] xl:-mb-6">
        <div class="relative mt-16 grid gap-16 lg:grid-cols-5 xl:grid-cols-12">
          <div class="lg:col-span-3 xl:col-span-6">
            <div class="mb-12">
              <h1 class="mb-6">
                <span class="text-2xl font-bold">
                  Zware of te grote spullen omhoog?
                </span>
                <br />
                <span class="text-5xl font-bold">
                  Goedkoop met een verhuislift!
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
            <div class="flex flex-wrap gap-8">
              <button
                class="rounded bg-white px-6 py-4 text-lg font-bold shadow-md"
              >
                Algehele verhuisservice
              </button>
              <div class="relative flex">
                <button
                  class="bg-primary flex items-center rounded px-6 py-4 text-lg font-bold text-white shadow-md"
                >
                  <Icon
                    name="mdi:tow-truck"
                    size="40"
                    class="[&>*]:fill-white"
                  />
                  <span class="ml-4"
                    >Een verhuislift huren (inc. operator)</span
                  >
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-2 hidden xl:block"></div>
          <div class="lg:col-span-2 xl:col-span-4">
            <div class="rounded-3xl bg-sky-100 shadow-xl">
              <div class="px-10 py-8">
                <h2 class="text-2xl font-bold">Gemakkelijk een verhuislift!</h2>
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
            <iframe
              title="beoordeling"
              id="rating"
              frameborder="1"
              allowtransparency="true"
              src="https://www.klantenvertellen.nl/retrieve-widget.html?color=white&allowTransparency=false&button=true&lang=nl&tenantId=99&locationId=1068031"
              width="400"
              height="222"
              class="mt-10 w-full"
            ></iframe>
          </div>
        </div>
        <img
          class="my-20 md:w-[65%] lg:mb-32 lg:-mt-[29rem]"
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
        <hr class="mx-auto mt-8 mb-14 w-80" />
        <BenefitBlocks />
      </div>
    </div>
    <div
      class="mt-20 h-20 w-full bg-sky-100"
      style="clip-path: polygon(0 0, 100% 60%, 100% 100%, 0% 100%)"
    ></div>
    <div class="flex justify-center bg-sky-100">
      <div class="m-10 w-full max-w-[1440px]">
        <div
          class="grid items-center justify-between lg:grid-cols-12 lg:gap-20"
        >
          <div class="md:col-span-8">
            <h2 class="text-primary mb-4 text-4xl font-bold">
              Huur een verhuislift!
            </h2>
            <p class="">
              Bij DKrenten transport kun je een verhuislift huren om zware
              spullen gemakkelijk naar boven te verplaatsen tijdens een
              verhuizing. Zo hoef je geen zware spullen zoals antieke kasten of
              wasmachines door het smalle trappengat te tillen. De verhuislift
              wordt geleverd met bemanning die je helpt bij het verplaatsen van
              jouw spullen en ervoor zorgt dat alles goed gaat.
            </p>
            <div class="mb-16">
              <h3 class="text-primary mt-14 mb-10 text-3xl font-bold">
                Een verhuislift kan je gebruiken voor:
              </h3>
              <div class="flex flex-wrap gap-10">
                <div
                  class="max-w-36 flex flex-col items-center justify-end gap-4 rounded-xl bg-sky-50 p-6 pb-3 shadow-md"
                >
                  <img class="" src="/truck.png" alt="Verhuizen" />
                  <span class="text-center text-xl font-bold">Verhuizen</span>
                </div>
                <div
                  class="max-w-36 flex flex-col items-center justify-end gap-4 rounded-xl bg-sky-50 p-6 pb-3 shadow-md"
                >
                  <img class="" src="/solar.png" alt="Zonnepanelen" />
                  <span class="text-center text-xl font-bold"
                    >Zonnepanelen</span
                  >
                </div>
                <div
                  class="max-w-36 flex flex-col items-center justify-end gap-4 rounded-xl bg-sky-50 p-6 pb-3 shadow-md"
                >
                  <img class="" src="/washing-machine.png" alt="Witgoed" />
                  <span class="text-center text-xl font-bold">Witgoed</span>
                </div>
                <div
                  class="max-w-36 flex flex-col items-center justify-end gap-4 rounded-xl bg-sky-50 p-6 pb-3 shadow-md"
                >
                  <img class="" src="/wardrobe.png" alt="Meubels" />
                  <span class="text-center text-xl font-bold">Meubels</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-4 rounded-xl">
            <img
              class="rounded-3xl shadow-xl"
              src="/verhuislift-buiten-crop.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="-mt-1 h-20 w-full bg-sky-100"
      style="clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 60%)"
    ></div>
    <div class="flex justify-center">
      <div class="m-10 w-full max-w-[1440px]">
        <div class="mx-auto mt-24 max-w-xl text-center text-slate-600">
          <h2 class="mb-2 text-2xl font-extrabold">Tarieven*</h2>
          <p>
            *Onderstaande tarieven gelden van maandag tot en met zaterdag
            <br />van 08:00 tot 17:00 uur
          </p>
        </div>
        <hr class="mx-auto mt-8 mb-20 w-80" />
        <div class="mb-24">
          <div class="flex flex-wrap justify-between gap-32">
            <div
              class="order-2 mx-auto flex flex-grow justify-between rounded-full from-sky-200 via-sky-50 transition-all duration-300 xl:order-1"
              :class="{
                'bg-gradient-to-r': selectedRent === 'lift',
                'bg-gradient-to-l': selectedRent === 'aanhang',
              }"
            >
              <button
                class="flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 bg-white transition-all"
                @click="selectedRent = 'lift'"
                :class="{ 'border-primary !border-4': selectedRent === 'lift' }"
              >
                <img
                  class="max-h-20 w-auto"
                  src="/verhuislift.png"
                  alt="Verhuislift"
                />
                <span class="mt-2 font-bold">Meubel lift</span>
              </button>
              <button
                class="flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 bg-white transition-all"
                @click="selectedRent = 'aanhang'"
                :class="{
                  'border-primary !border-4': selectedRent === 'aanhang',
                }"
              >
                <img
                  class="max-h-20"
                  src="/verhuisliftaanhang.jpg"
                  alt="Aanhangwagen"
                />
                <span class="font-bold">Aanhanger lift</span>
              </button>
            </div>
            <ul
              class="order-1 flex flex-grow flex-wrap justify-center gap-8 xl:order-2 xl:flex-grow-0 xl:justify-end"
            >
              <li
                class="grid w-32 grid-rows-2 items-center justify-center rounded-xl bg-slate-200 p-4 shadow-md"
              >
                <Icon name="mdi:leaf" size="32" class="mx-auto" />
                <h3 class="text-center font-bold">Milieu bewust</h3>
              </li>
              <li
                class="grid w-32 grid-rows-2 items-center justify-center rounded-xl bg-slate-200 p-4 shadow-md"
              >
                <Icon
                  name="fa6-solid:people-carry-box"
                  size="32"
                  class="mx-auto"
                />
                <h3 class="text-center font-bold">Inclusief operator</h3>
              </li>
              <li
                class="grid w-32 grid-rows-2 items-center justify-center rounded-xl bg-slate-200 p-4 shadow-md"
              >
                <Icon name="mdi:clock-fast" size="32" class="mx-auto" />
                <h3 class="text-center font-bold">Met spoed mogelijk</h3>
              </li>
              <li
                class="grid w-32 grid-rows-2 items-center justify-center rounded-xl bg-slate-200 p-4 shadow-md"
              >
                <Icon name="mdi:calendar-check" size="32" class="mx-auto" />
                <h3 class="text-center font-bold">7 dagen per week</h3>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <div
                class="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
                v-if="selectedRent === 'lift'"
              >
                <PriceBlock
                  title="Snel service"
                  highlight
                  :price="90"
                  :possibilities="[
                    '3 objecten / 30 minuten',
                    'Tot en met 9e etage',
                    'Inclusief operator',
                  ]"
                />
                <PriceBlock
                  title="1 uur service"
                  :price="110"
                  :possibilities="[
                    '± 10 tot 12 objecten (10m3)',
                    'Vergelijkbaar met vol busje (PostNL formaat)',
                    'Tot en met 9e etage',
                    'Inclusief operator',
                  ]"
                  icon="material-symbols:clock-loader-10"
                />
                <PriceBlock
                  title="2 uur service"
                  :price="179"
                  :possibilities="[
                    '± 20 tot 24 objecten (20m3)',
                    'Vergelijkbaar met grotere bakwagen',
                    'Tot en met 9e etage',
                    'Inclusief operator',
                  ]"
                  icon="material-symbols:clock-loader-40"
                />
                <PriceBlock
                  title="3 - 4 uur service"
                  :price="265"
                  :possibilities="[
                    'Noodzakelijk bij +24 objecten (25m3)',
                    'Noodzakelijk als je op 2 locaties de verhuislift inzet',
                    'Tot en met 9e etage',
                    'Inclusief operator',
                  ]"
                  icon="material-symbols:clock-loader-90"
                />
              </div>
              <div
                class="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
                v-else
              >
                <PriceBlock
                  highlight
                  title="Snel service"
                  :price="105"
                  :possibilities="[
                    '3 objecten / 30 minuten',
                    'Tot en met 9e etage',
                    'Inclusief operator',
                  ]"
                />
                <PriceBlock
                  title="1 uur service"
                  :price="125"
                  :possibilities="[
                    '± 10 tot 12 objecten (10m3)',
                    'Vergelijkbaar met vol busje (PostNL formaat)',
                    'Tot en met 9e etage',
                    'Inclusief operator',
                  ]"
                  icon="material-symbols:clock-loader-10"
                />
                <PriceBlock
                  :price="185"
                  title="2 uur service"
                  :possibilities="[
                    '± 20 tot 24 objecten (20m3)',
                    'Vergelijkbaar met grotere bakwagen',
                    'Tot en met 9e etage',
                    'Inclusief operator',
                  ]"
                  icon="material-symbols:clock-loader-40"
                />
                <PriceBlock
                  :price="269"
                  title="3 - 4 uur service"
                  :possibilities="[
                    'Noodzakelijk bij +24 objecten (25m3)',
                    'Noodzakelijk als je op 2 locaties de verhuislift inzet',
                    'Tot en met 9e etage',
                    'Inclusief operator',
                  ]"
                  icon="material-symbols:clock-loader-90"
                />
              </div>
            </div>
            <!-- EXTRA INFORMATION -->
            <div
              class="bg-primary to-primary my-10 mx-auto flex items-center justify-center bg-gradient-to-b from-sky-300 bg-clip-text p-0 text-[100px] font-extrabold leading-[60px] text-transparent"
            >
              +
            </div>
            <div
              class="to-primary rounded-xl bg-gradient-to-b from-sky-300 p-10 text-white shadow-md"
            >
              <div>
                <h3 class="mb-6 text-2xl font-bold">Extra toeslagen</h3>
                <ul
                  class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
                >
                  <li
                    v-for="(item, index) in [
                      ['Na 17:00 uur eenmalig avondtoeslag', '€ 50,-'],
                      [
                        'Buiten een straal van 40 km van Lijmuiden zijn voorrijkosten',
                        '€ 0,95 p/km',
                      ],
                      [
                        'Verplaatsen op 2 adressen (werktijd loopt door tussen adressen)',
                        '€ 20,-',
                      ],
                      ['Verplaatsen naar de 5e etage', '€ 20,-'],
                      ['Zon- en feestdagen', '€ 50,-'],
                    ]"
                    :key="index"
                    class="flex items-center justify-between gap-2 rounded-xl bg-sky-100 p-2 font-bold text-sky-800 shadow-md sm:p-6"
                  >
                    <span class="max-w-[160px] text-sm">{{ item[0] }}</span>
                    <span
                      class="min-w-fit rounded-xl bg-sky-50 p-2 text-lg shadow-md"
                      >{{ item[1] }}</span
                    >
                  </li>
                </ul>
              </div>
              <div class="mt-10">
                <h3 class="mb-6 text-2xl font-bold">Extra service</h3>
                <ul class="flex flex-wrap gap-8">
                  <li
                    class="flex gap-8 rounded-xl bg-sky-100 p-10 text-sky-800 shadow-md max-sm:flex-wrap"
                  >
                    <img
                      src="/verhuisbus.jpeg"
                      alt="Verhuisbus"
                      class="h-40 w-40 overflow-clip rounded-xl shadow-md"
                    />
                    <div>
                      <h4 class="mb-2 text-2xl font-extrabold">Verhuisbus</h4>
                      <p class="max-w-xs">
                        U kunt een verhuisbus (inhoud 21m3) huren inclusief
                        verhuizer vanaf €70 per uur. Standaard inbegrepen zijn
                        verhuisdekens, spanbanden & 2 hondjes
                      </p>
                    </div>
                  </li>
                  <li
                    class="flex gap-8 rounded-xl bg-sky-100 p-10 text-sky-800 shadow-md max-sm:flex-wrap"
                  >
                    <img
                      src="/verhuizer2.jpeg"
                      alt="Verhuizer"
                      class="h-40 w-40 overflow-clip rounded-xl shadow-md"
                    />
                    <div>
                      <h4 class="mb-2 text-2xl font-extrabold">
                        Extra verhuizer
                      </h4>
                      <p class="max-w-xs">
                        Heeft u geen hulp of kunt u niet zelf tillen ? Huur dan
                        een extra verhuizer in vanaf €45 per uur inclusief btw.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
