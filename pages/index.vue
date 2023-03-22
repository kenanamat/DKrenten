<script setup lang="ts">
import { Icon } from "#components"
import HomeForm from "../components/HomeForm.vue"
</script>

<template>
  <div class="relative flex justify-center bg-slate-200 shadow-xl">
    <div class="z-10 m-10 max-w-[1440px]">
      <div class="relative grid grid-cols-12 mt-16">
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              quaerat placeat alias ea totam unde eum, facilis exercitationem
              excepturi iusto consequatur molestiae officia iure reiciendis sit
              cumque saepe quibusdam adipisci.
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
  <div class="max-w-[1440px] m-10">

  </div>
</template>
