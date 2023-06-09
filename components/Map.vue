<script setup lang="ts">
import { useContactStore } from "~/stores/contact"
import { useProvinceStore } from "~/stores/province"

const contactStore = useContactStore()
const { provinces, getCityArr } = useProvinceStore()

const activeProvince = ref("")
</script>

<template>
  <Section
    title="Werkgebied"
    body="Beschikbaar door een groot gedeelte van Nederland <br/> Bekijk hieronder waar u ons kunt inschakelen!"
  >
    <div class="grid items-center gap-8 gap-y-12 md:grid-cols-12">
      <div class="rounded-xl bg-slate-200 p-12 md:col-span-5">
        <ul class="flex flex-wrap justify-between gap-8">
          <li
            v-for="(cities, province) in provinces"
            :key="province"
            @mouseenter="activeProvince = province"
          >
            <ul class="">
              <h3
                class="mb-2 w-44 cursor-default rounded bg-slate-100 p-4 font-bold"
              >
                {{ province }}
              </h3>
              <li
                v-for="(city, index) in getCityArr(province)"
                :key="index"
                class="cursor-pointer hover:font-bold"
                @click="contactStore.city = city"
              >
                {{ city }}
              </li>
              <li
                v-if="!cities.opened && cities.cities.length > 4"
                @click="cities.opened = true"
              >
                <Button
                  class="hover:!text-primary [&>svg]:hover:fill-primary mt-2 inline-block cursor-pointer rounded-none border-t border-slate-300 bg-transparent !p-1 text-sm !text-black shadow-none hover:!bg-transparent [&>svg]:rotate-90 [&>svg]:scale-50"
                >
                  Toon meer..
                </Button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="relative md:col-span-7">
        <img
          src="/noord-holland.png"
          alt=""
          class="absolute transition-all duration-300 ease-in-out"
          :class="[
            activeProvince === 'Noord-Holland' &&
              '-translate-y-2 -translate-x-1 brightness-75 filter',
          ]"
        />
        <img
          src="/zuid-holland.png"
          alt=""
          class="absolute transition-all duration-300 ease-in-out"
          :class="[
            activeProvince === 'Zuid-Holland' &&
              '-translate-y-2 -translate-x-1 brightness-75 filter',
          ]"
        />
        <img
          src="/utrecht.png"
          alt=""
          class="absolute transition-all duration-300 ease-in-out"
          :class="[
            activeProvince === 'Utrecht' &&
              '-translate-y-2 -translate-x-1 brightness-75 filter',
          ]"
        />
        <img
          src="/flevoland.png"
          alt=""
          class="absolute transition-all duration-300 ease-in-out"
          :class="[
            activeProvince === 'Flevoland' &&
              '-translate-y-2 -translate-x-1 brightness-75 filter',
          ]"
        />
        <img
          src="/noord-brabant.png"
          alt=""
          class="absolute transition-all duration-300 ease-in-out"
          :class="[
            activeProvince === 'Noord-Brabant' &&
              '-translate-y-2 -translate-x-1 brightness-75 filter',
          ]"
        />
        <img src="/nederland-map.png" alt="" />
      </div>
    </div>
  </Section>
</template>
