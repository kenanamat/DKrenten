<script setup lang="ts">
import { Icon } from "#components"
import HomeForm from "../components/HomeForm.vue"
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
            <button class="rounded bg-white px-6 py-4 text-lg font-bold shadow">
              Bereken je verhuiskosten
            </button>
            <div class="relative flex">
              <button
                class="bg-primary flex items-center rounded px-6 py-4 text-lg font-bold text-white shadow"
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
      <hr class="w-80 mx-auto my-14">
      <div class="flex flex-wrap justify-between gap-10">
        <div class="flex h-96 w-80 flex-col rounded-3xl p-10 bg-gradient-to-b from-sky-50 to-transparent">
          <Icon
            name="mdi:pencil-ruler-outline"
            size="128"
            class="[&>*]:fill-primary self-center"
          />
          <h3 class="text-primary mt-8 text-lg font-bold">
            Advies en transport op maat
          </h3>
          <p class="mt-2 text-sm text-slate-700">
            Wij luisteren naar uw wensen en behoeften en bieden advies en
            service op maat om aan al uw verwachtingen te voldoen.
          </p>
        </div>
        <div class="flex h-96 w-80 flex-col rounded-3xl p-10 bg-gradient-to-b from-sky-50 to-transparent">
          <Icon
            name="mdi:calendar-check-outline"
            size="128"
            class="[&>*]:fill-primary self-center"
          />
          <h3 class="text-primary mt-8 text-lg font-bold">
            7 dagen p/w beschikbaar
          </h3>
          <p class="mt-2 text-sm text-slate-700">
            Of het nu gaat om een spoedklus of het sjouwen van zware meubels,
            wij staan voor u klaar.
          </p>
        </div>
        <div class="flex h-96 w-80 flex-col rounded-3xl p-10 bg-gradient-to-b from-sky-50 to-transparent">
          <Icon
            name="fluent:money-off-24-regular"
            size="128"
            class="[&>*]:fill-primary self-center"
          />
          <h3 class="text-primary mt-8 text-lg font-bold">
            Geen verborgen kosten
          </h3>
          <p class="mt-2 text-sm text-slate-700">
            Bij ons krijgt u een hoogwaardige service tegen een eerlijke prijs.
          </p>
        </div>
        <div class="flex h-96 w-80 flex-col rounded-3xl p-10 bg-gradient-to-b from-sky-50 to-transparent">
          <Icon
            name="mdi:file-document-check-outline"
            size="128"
            class="[&>*]:fill-primary self-center"
          />
          <h3 class="text-primary mt-8 text-lg font-bold">
            Goed, snel & transparant
          </h3>
          <p class="mt-2 text-sm text-slate-700">
            Wij begrijpen dat verhuizen stressvol kan zijn en doen er alles aan
            om uw verhuizing soepel te laten verlopen.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
