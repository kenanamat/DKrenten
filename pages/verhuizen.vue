<script setup lang="ts">
useSeoMeta({
  title: "DKrenten Transport | Verhuizen",
  ogTitle: "DKrenten Transport | Verhuizen",
})
</script>

<template>
  <main>
    <Hero img="white-truck-trans.png">
      <template #title>
        <span class="block text-2xl font-bold"> DKrenten is </span>
        <span class="text-4xl font-bold">
          Een verhuisbedrijf waar jij bepaalt
        </span>
      </template>
      <template #body>
        Ben jij van plan om binnenkort te verhuizen? Dan is het moment van de
        verhuizing, een moment waar je van moet genieten. Een verhuizing kan
        soms veel stress met zich mee brengen, je wilt immers toch dat alles
        soepel verloopt en dat jouw spullen natuurlijk onbeschadigd overgebracht
        worden. Een verhuizing kan dus veel zorgen met zich meebrengen, maar dat
        hoeft niet!
      </template>
      <template #buttons>
        <Button to="/verhuizen" class="text-lg max-md:w-full">
          Bereken uw verhuiskosten!
        </Button>
      </template>
      <template #right>
        <HeroBlock title="Plan je verhuizing!" no-height>
          <!-- <p class="font-bold">
            Als verhuisbedrijf helpen we je bij DKrenten transport om zorgeloos
            over te gaan naar jouw nieuwe woning. Maar!
          </p>
          <p class="my-4">
            Bij ons bepaal jij hoe we jou helpen. Je kan bij ons namelijk
            gemakkelijk jouw verhuis service zelf samenstellen. Jij weet
            tenslotte toch het beste hoe wij jou het beste kunnen helpen.
          </p>
          <Button
            href="https://dkverhuizingen.nl/offerte/"
            class="my-8 md:mr-16"
          >
            Bekijk je mogelijkheden!
          </Button>
          <p class="my-4">
            Kies overzichtelijk van welke diensten je gebruik wilt maken en je
            krijg direct een duidelijk overzicht te zien van de kosten, wel zo
            makkelijk toch?
          </p> -->
          <!-- <ClientOnly>
            <ReuzenPanda />
          </ClientOnly> -->
        </HeroBlock>
        <ul class="mt-8 mb-16 lg:mb-[560px]">
          <li
            class="flex items-center justify-between gap-2 rounded-full bg-sky-50 px-10 py-4 shadow-md"
          >
            <Icon
              name="mdi:key-chain-variant"
              size="48"
              class="[&>*]:fill-primary"
            />
            <h2 class="text-primary text-lg font-bold">
              Particuliere verhuizingen
            </h2>
          </li>
          <li
            class="mt-4 flex items-center justify-between gap-2 rounded-full bg-sky-50 px-10 py-4 shadow-md"
          >
            <Icon
              name="fa6-solid:user-tie"
              size="48"
              class="[&>*]:fill-primary"
            />
            <h2 class="text-primary text-lg font-bold">
              Zakelijke verhuizingen
            </h2>
          </li>
        </ul>
      </template>
    </Hero>
    <Section
      title="Soorten verhuizingen"
      body="
            Bij DKrenten is er voor alle soorten verhuizingen een optie
            beschikbaar!
          "
    >
      <div class="flex flex-wrap justify-evenly gap-12">
        <div
          class="flex w-96 flex-col justify-between rounded-3xl bg-gradient-to-b from-sky-50 to-transparent p-10"
        >
          <img
            src="/steeg.jpeg"
            alt=""
            class="h-56 w-full rounded-xl object-cover shadow-md"
          />
          <div class="mt-4 mb-8">
            <h3 class="text-primary text-lg font-bold">Budget verhuizing</h3>
            <p class="mt-2 text-sm text-slate-700">
              Pakt u de dozen zelf in en uit. Zorgen wij ervoor dat de uw
              spullen worden ingeladen en zetten wij deze bij de nieuwe woning
              op de juiste plek.
            </p>
          </div>
          <Button href="#">Bereken uw verhuiskosten!</Button>
        </div>
        <div
          class="flex w-96 flex-col justify-between rounded-3xl bg-gradient-to-b from-sky-50 to-transparent p-10"
        >
          <img
            src="/bank.jpeg"
            alt=""
            class="h-56 w-full rounded-xl object-cover shadow-md"
          />
          <div class="mt-4 mb-8">
            <h3 class="text-primary text-lg font-bold">Meubels verhuizen</h3>
            <p class="mt-2 text-sm text-slate-700">
              Wilt u alleen de grote meubels laten verhuizen. Dit kan ook bij
              DKrenten Transport. Denk aan koelkast, wasmachine, hoekbank enzv.
            </p>
          </div>
          <Button href="#">Bereken uw verhuiskosten!</Button>
        </div>
        <div
          class="flex w-96 flex-col justify-between rounded-3xl bg-gradient-to-b from-sky-50 to-transparent p-10"
        >
          <img
            src="/david.jpeg"
            alt=""
            class="h-56 w-full rounded-xl object-cover shadow-md"
          />
          <div class="mt-4 mb-8">
            <h3 class="text-primary text-lg font-bold">Full Service</h3>
            <p class="mt-2 text-sm text-slate-700">
              U helemaal laten ontzorgen? Onze verhuizer komen een dag van te
              voren uw spullen inpakken en demonteren. De volgende dag komen de
              verhuizers inladen en zorgen dat alle spullen op de juiste plek
              komen te staan.
            </p>
          </div>
          <Button href="#">Bereken uw verhuiskosten!</Button>
        </div>
      </div>
    </Section>

    <SectionBackground>
      <h2 class="text-primary mb-8 text-4xl font-bold">Werkwijze</h2>
      <Steps
        :steps="[
          {
            title: 'Aanvraag',
            body: 'Via onze website kunt u gratis berekenen wat de kosten zijn voor uw verhuizing. U kunt per ruimte de inboedel doorgeven',
          },
          {
            title: 'Controleren',
          },
          {
            title: 'Akkoord',
          },
          {
            title: 'Voorbereiding',
            body: 'Wij koppelen jouw transport aan de professionele koerier op de weg. Jij ontvangt een e-mail met het tijdvak van 4 uur waarin de koerier jouw spullen komt ophalen. Ook ontvang je de gegevens van de koerier zodat jullie elkaar op de hoogte kunnen houden.',
          },
          {
            title: 'Verhuisdag',
            body: 'Wij koppelen jouw transport aan de professionele koerier op de weg. Jij ontvangt een e-mail met het tijdvak van 4 uur waarin de koerier jouw spullen komt ophalen. Ook ontvang je de gegevens van de koerier zodat jullie elkaar op de hoogte kunnen houden.',
          },
        ]"
      />
    </SectionBackground>

    <Map />

    <FAQ />

    <ContactButtons />
  </main>
</template>
