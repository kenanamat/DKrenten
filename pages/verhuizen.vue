<script setup lang="ts">
const truck = ref<HTMLElement | null>(null)
const { top } = useElementBounding(truck)
const { width } = useWindowSize()

const md = computed(() => width.value < 768)
const roads = computed(() => (md.value ? 18 : 13))

const truckPos = computed(() => {
  if (top.value > 360) return "0"
  else if (md.value) {
    if (top.value < -1185) return "1545px"
  } else {
    if (top.value < -705) return "1065px"
  }
  return String(-top.value + 360) + "px"
})
</script>

<template>
  <main>
    <div
      class="relative flex min-h-screen justify-center bg-slate-200 pt-36 shadow-xl"
    >
      <div class="z-10 m-10 max-w-[1440px] xl:-mb-6">
        <div class="relative mt-16 grid gap-16 lg:grid-cols-5 xl:grid-cols-12">
          <div class="lg:col-span-3 xl:col-span-6">
            <div class="mb-12">
              <h1 class="mb-6">
                <span class="block text-2xl font-bold"> DKrenten is </span>
                <span class="text-4xl font-bold">
                  Een verhuisbedrijf waar jij bepaald
                </span>
              </h1>
              <p class="mb-8 mt-6">
                Ben jij van plan om binnenkort te verhuizen? Dan is het moment
                van de verhuizing, een moment waar je van moet genieten. Een
                verhuizing kan soms veel stress met zich mee brengen, je wilt
                immers toch dat alles soepel verloopt en dat jouw spullen
                natuurlijk onbeschadigd overgebracht worden. Een verhuizing kan
                dus veel zorgen met zich meebrengen, maar dat hoeft niet!
              </p>
              <p>
                Als verhuisbedrijf helpen we je bij DKrenten transport om
                zorgeloos over te gaan naar jouw nieuwe woning. Maar, bij ons
                bepaal jij hoe we jou helpen. Je kan bij ons namelijk
                gemakkelijk jouw verhuis service zelf samenstellen. Jij weet
                tenslotte toch het beste hoe wij jou het beste kunnen helpen.
                Kies overzichtelijk van welke diensten je gebruik wilt maken en
                je krijg direct een duidelijk overzicht te zien van de kosten,
                wel zo makkelijk toch?
              </p>
            </div>
          </div>
          <div class="col-span-2 hidden xl:block"></div>
          <div class="lg:col-span-2 xl:col-span-4">
            <div class="rounded-3xl bg-sky-100 shadow-xl">
              <div class="px-10 py-8">
                <h2 class="text-2xl font-bold">Plan je verhuizing!</h2>
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
            <ul class="mt-8 mb-16">
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
          </div>
        </div>
        <img
          class="my-20 md:w-[55%] lg:mb-32 lg:-mt-[29rem]"
          src="/verhuislift-cutout.png"
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
          <h2 class="mb-2 text-2xl font-extrabold">Soorten verhuizingen</h2>
          <p>
            Bij DKrenten is er voor alle soorten verhuizingen een optie
            beschikbaar!
          </p>
        </div>
        <hr class="mx-auto mt-8 mb-14 w-80" />
        <div class="flex flex-wrap justify-center gap-10 md:justify-between">
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
            <Button>Bereken uw verhuiskosten!</Button>
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
                DKrenten Transport. Denk aan koelkast, wasmachine, hoekbank
                enzv.
              </p>
            </div>
            <Button>Bereken uw verhuiskosten!</Button>
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
                voren uw spullen inpakken en demonteren. De volgende dag komen
                de verhuizers inladen en zorgen dat alle spullen op de juiste
                plek komen te staan.
              </p>
            </div>
            <Button>Bereken uw verhuiskosten!</Button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-20 h-20 w-full bg-sky-100"
      style="clip-path: polygon(0 0, 100% 60%, 100% 100%, 0% 100%)"
    ></div>
    <div class="flex justify-center bg-sky-100">
      <div class="relative m-10 w-full max-w-[1440px]">
        <h2 class="text-primary mb-8 text-center text-4xl font-bold">
          Werkwijze
        </h2>
        <ul class="relative z-10 grid gap-x-52 md:grid-cols-2">
          <li class="">
            <sub class="text-primary text-base font-bold">Stap 1</sub>
            <div
              class="mt-2 flex h-52 flex-col items-center justify-center rounded-xl bg-sky-50 p-4 text-center shadow-xl"
            >
              <h3 class="mb-2 text-2xl font-bold">Aanvraag</h3>
              <p class="text-sm">
                Via onze website kunt u gratis berekenen wat de kosten zijn voor
                uw verhuizing. U kunt per ruimte de inboedel doorgeven
              </p>
            </div>
          </li>
          <li class="mt-24 md:mt-60">
            <sub class="text-primary text-base font-bold">Stap 2</sub>
            <div
              class="mt-2 flex h-52 flex-col items-center justify-center rounded-xl bg-sky-50 p-4 text-center shadow-xl"
            >
              <h3 class="text-2xl font-bold">Controleren</h3>
            </div>
          </li>
          <li class="max-md:mt-24">
            <sub class="text-primary text-base font-bold">Stap 3</sub>
            <div
              class="mt-2 flex h-52 flex-col items-center justify-center rounded-xl bg-sky-50 p-4 text-center shadow-xl"
            >
              <h3 class="text-2xl font-bold">Akkoord</h3>
            </div>
          </li>
          <li class="mt-24 md:mt-60">
            <sub class="text-primary text-base font-bold">Stap 4</sub>
            <div
              class="mt-2 flex h-52 flex-col items-center justify-center rounded-xl bg-sky-50 p-4 text-center shadow-xl"
            >
              <h3 class="mb-2 text-xl font-bold">Voorbereiding</h3>
              <p class="text-sm">
                Wij koppelen jouw transport aan de professionele koerier op de
                weg. Jij ontvangt een e-mail met het tijdvak van 4 uur waarin de
                koerier jouw spullen komt ophalen. Ook ontvang je de gegevens
                van de koerier zodat jullie elkaar op de hoogte kunnen houden.
              </p>
            </div>
          </li>
          <li class="max-md:mt-24 max-md:mb-24">
            <sub class="text-primary text-base font-bold">Stap 5</sub>
            <div
              class="mt-2 flex h-52 flex-col items-center justify-center rounded-xl bg-sky-50 p-4 text-center shadow-xl"
            >
              <h3 class="mb-2 text-xl font-bold">Verhuisdag</h3>
              <p class="text-sm">
                Wij koppelen jouw transport aan de professionele koerier op de
                weg. Jij ontvangt een e-mail met het tijdvak van 4 uur waarin de
                koerier jouw spullen komt ophalen. Ook ontvang je de gegevens
                van de koerier zodat jullie elkaar op de hoogte kunnen houden.
              </p>
            </div>
          </li>
        </ul>
        <div
          class="absolute top-12 left-[calc(50%-64px)] flex flex-col -space-y-8"
          ref="truck"
        >
          <Icon v-for="_ in Array(roads)" name="mdi:road" size="128" class="" />
          <img
            src="/small-truck.png"
            alt=""
            class="absolute left-0 top-12 ml-6 w-20 translate-y-3 transition-none md:transition-all md:duration-500 md:ease-linear"
            :style="`transform: translateY(${truckPos}) rotate(180deg); `"
          />
        </div>
      </div>
    </div>

    <FAQ />
  </main>
</template>
