<script setup lang="ts">
const selectedRent = ref("lift")

useSeoMeta({
  title: "DKrenten Transport | Verhuislift",
  ogTitle: "DKrenten Transport | Verhuislift",
})

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
    <Hero img="verhuislift-cutout.png">
      <template #title>
        <span class="block text-2xl font-bold">
          Zware of te grote spullen omhoog?
        </span>
        <span class="text-5xl font-bold">Goedkoop met een verhuislift!</span>
      </template>
      <template #body>
        Bent u op zoek naar een betrouwbare en professionele verhuisservice?
        Zoek niet verder! DKrenten is er om u te helpen. Onze vriendelijke en
        behulpzame medewerkers staan klaar om uw verhuizing snel en efficiënt
        uit te voeren. Gebruik onze tool om
        <strong>direct inzage</strong> te krijgen over de kosten!
      </template>
      <template #buttons>
        <Button
          :arrow="false"
          to="/verhuizen"
          class="bg-white text-lg !text-black hover:!text-white max-md:w-full"
        >
          Algehele verhuisservice
        </Button>
        <ButtonGradient class="text-lg max-md:w-full" href="https://dkrenten.nl/">
          <Icon name="mdi:tow-truck" size="40" class="[&>*]:fill-white" />
          <span class="ml-4">Een verhuislift huren (inc. operator)</span>
        </ButtonGradient>
      </template>
      <template #right>
        <HeroBlock title="Gemakkelijk een verhuislift">
          <HeroForm />
        </HeroBlock>
        <iframe
          title="beoordeling"
          id="rating"
          frameborder="1"
          allowtransparency="true"
          src="https://www.klantenvertellen.nl/retrieve-widget.html?color=white&allowTransparency=true&button=true&lang=nl&tenantId=99&locationId=1068031"
          width="400"
          height="222"
          class="mt-10 w-full"
        />
      </template>
    </Hero>

    <Section
      title="Onze voordelen"
      body="Bij DKrenten profiteert u van onze uitgebreide ervaring en expertise
          op het gebied van verhuizingen."
    >
      <BenefitBlocks />
    </Section>

    <SectionBackground>
      <div
        class="grid items-center justify-between gap-y-24 lg:grid-cols-12 lg:gap-20"
      >
        <div class="md:col-span-8">
          <h2 class="text-primary mb-4 text-4xl font-bold">
            Huur een verhuislift!
          </h2>
          <p class="">
            Bij DKrenten transport kun je een verhuislift huren om zware spullen
            gemakkelijk naar boven te verplaatsen tijdens een verhuizing. Zo
            hoef je geen zware spullen zoals antieke kasten of wasmachines door
            het smalle trappengat te tillen. De verhuislift wordt geleverd met
            bemanning die je helpt bij het verplaatsen van jouw spullen en
            ervoor zorgt dat alles goed gaat.
          </p>
          <h3 class="text-primary mt-14 mb-10 text-3xl font-bold">
            Een verhuislift kan je gebruiken voor:
          </h3>
          <ul class="grid grid-cols-2 gap-12 md:grid-cols-4">
            <li
              class="flex w-full flex-col items-center gap-6 rounded-xl bg-sky-50 p-6 shadow-md"
              v-for="item in [
                {
                  img: 'truck.png',
                  name: 'Verhuizen',
                },
                {
                  img: 'solar.png',
                  name: 'Zonnepanelen',
                },
                {
                  img: 'washing-machine.png',
                  name: 'Witgoed',
                },
                {
                  img: 'wardrobe.png',
                  name: 'Meubels',
                },
              ]"
            >
              <img
                class="max-h-28"
                :src="item.img"
                :alt="`${item.name} plaatje`"
              />
              <span class="text-center text-xl font-bold" v-html="item.name" />
            </li>
          </ul>
        </div>
        <img
          class="col-span-4 rounded-xl shadow-xl"
          src="/verhuislift-buiten-crop.jpeg"
          alt=""
        />
      </div>
    </SectionBackground>

    <Section
      title="Tarieven*"
      body="*Onderstaande tarieven gelden van maandag tot en met zaterdag
            <br/>van 08:00 tot 17:00 uur"
    >
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
            v-for="item in [
              {
                icon: 'mdi:leaf',
                title: 'Milieu bewust',
              },
              {
                icon: 'fa6-solid:people-carry-box',
                title: 'Inclusief operator',
              },
              {
                icon: 'mdi:clock-fast',
                title: 'Met spoed mogelijk',
              },
              {
                icon: 'mdi:calendar-check',
                title: '7 dagen per week',
              },
            ]"
          >
            <Icon :name="item.icon" size="32" class="mx-auto" />
            <h3 class="text-center font-bold" v-html="item.title" />
          </li>
        </ul>
      </div>

      <!-- PRICE BLOCKS -->
      <div
        class="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        v-if="selectedRent === 'lift'"
      >
        <PriceBlock
          title="Snel service"
          highlight
          :price="95"
          :possibilities="[
            '2 objecten',
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
          title="2 uur service"
          :price="186"
          :possibilities="[
            '± 20 tot 24 objecten (20m3)',
            'Vergelijkbaar met grotere bakwagen',
            'Tot en met 9e etage',
            'Inclusief operator',
          ]"
          icon="material-symbols:clock-loader-40"
        />
        <PriceBlock
          title="3 uur service"
          :price="279"
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
            '2 objecten',
            'Tot en met 4e etage',
            'Inclusief operator',
          ]"
        />
        <PriceBlock
          title="1 uur service"
          :price="135"
          :possibilities="[
            '± 10 tot 12 objecten (10m3)',
            'Vergelijkbaar met vol busje (PostNL formaat)',
            'Tot en met 4e etage',
            'Inclusief operator',
          ]"
          icon="material-symbols:clock-loader-10"
        />
        <PriceBlock
          :price="196"
          title="2 uur service"
          :possibilities="[
            '± 20 tot 24 objecten (20m3)',
            'Vergelijkbaar met grotere bakwagen',
            'Tot en met 4e etage',
            'Inclusief operator',
          ]"
          icon="material-symbols:clock-loader-40"
        />
        <PriceBlock
          :price="269"
          title="3 uur service"
          :possibilities="[
            'Noodzakelijk bij +24 objecten (25m3)',
            'Noodzakelijk als je op 2 locaties de verhuislift inzet',
            'Tot en met 4e etage',
            'Inclusief operator',
          ]"
          icon="material-symbols:clock-loader-90"
        />
      </div>

      <div
        class="bg-primary from-primary pointer-events-none my-10 mx-auto flex items-center justify-center bg-gradient-to-b to-sky-300 bg-clip-text p-0 text-[100px] font-extrabold leading-[60px] text-transparent"
      >
        +
      </div>

      <div
        class="to-primary rounded-xl bg-gradient-to-b from-sky-300 p-2 text-white shadow-md sm:p-10"
      >
        <div>
          <h3 class="mb-6 text-2xl font-bold">Extra toeslagen</h3>
          <ul class="space-y-2">
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
              class="flex items-center justify-between gap-4 rounded bg-sky-100 p-2 font-bold text-sky-800 shadow-md first-of-type:rounded-t-xl last-of-type:rounded-b-xl sm:p-4"
            >
              <span class="text-sm">{{ item[0] }}</span>
              <span class="min-w-fit rounded-xl bg-sky-50 p-2 shadow-md">{{
                item[1]
              }}</span>
            </li>
          </ul>
        </div>
        <div class="mt-10">
          <h3 class="mb-6 text-2xl font-bold">Extra service</h3>
          <ul class="flex flex-wrap gap-8">
            <li
              class="flex flex-col gap-8 rounded-xl bg-sky-100 text-sky-800 shadow-md max-sm:w-full md:flex-row"
            >
              <div
                class="h-52 w-full bg-[url('/verhuisbus.jpeg')] bg-cover max-md:rounded-t-xl md:h-auto md:w-44 md:rounded-l-xl"
              ></div>
              <div class="max-w-[260px] max-md:px-8 md:py-8">
                <h4 class="mb-1 text-lg font-extrabold">Verhuisbus</h4>
                <p class="text-sm">
                  U kunt een verhuisbus (inhoud 21m3) huren inclusief verhuizer
                  vanaf €85 per uur. Standaard inbegrepen zijn verhuisdekens,
                  spanbanden & 2 hondjes
                </p>
              </div>
              <div
                class="m-4 mt-auto h-fit rounded-xl bg-sky-50 p-4 text-lg font-bold shadow-md md:my-auto"
              >
                € 85,- p/uur
              </div>
            </li>
            <li
              class="flex flex-col gap-8 rounded-xl bg-sky-100 text-sky-800 shadow-md max-sm:w-full md:flex-row"
            >
              <div
                class="h-52 w-full bg-[url('/verhuizer2.jpeg')] bg-cover bg-center max-md:rounded-t-xl md:h-auto md:w-44 md:rounded-l-xl"
              ></div>
              <div class="max-w-[260px] max-md:px-8 md:py-8">
                <h4 class="mb-1 text-lg font-extrabold">Extra verhuizer</h4>
                <p class="text-sm">
                  Heeft u geen hulp of kunt u niet zelf tillen ? Huur dan een
                  extra verhuizer in vanaf €45 per uur inclusief btw.
                </p>
              </div>
              <div
                class="m-4 mt-auto h-fit rounded-xl bg-sky-50 p-4 text-lg font-bold shadow-md md:my-auto"
              >
                € 45,- p/uur
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>

    <SectionBackground>
      <h2 class="text-primary mb-8 text-4xl font-bold">
        Verhuislift boeken in 3 stappen
      </h2>
      <Steps
        :steps="[
          {
            title: 'Kies',
            body: 'Kies een pakket en reserveer een lift',
          },
          {
            title: 'Controleren',
            body: 'Wij controleren uw aanvraag en bevestigen uw aanvraag',
          },
          {
            title: 'Onderweg!',
            body: 'Onze lift operator is onderweg',
          },
        ]"
      />
    </SectionBackground>

    <Map />

    <FAQ />
  </main>
</template>
