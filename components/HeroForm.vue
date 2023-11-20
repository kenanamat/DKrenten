<script setup lang="ts">
import { useContactStore } from "~/stores/contact"

const contactStore = useContactStore()
</script>

<template>
  <form class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="space-y-6 sm:space-y-5">
        <div>
          <h3 class="text-base font-semibold leading-6 text-gray-700">
            Beginpunt van je verhuizing
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Vul hieronder in vanaf waar je wilt verhuizen.
          </p>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="street-address"
              class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Straatnaam
            </label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="focus:ring-primary block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                v-model="contactStore.street"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="city"
              class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >Stad</label
            >
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                name="city"
                id="city"
                autocomplete="address-level2"
                class="focus:ring-primary block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                v-model="contactStore.city"
              />
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="postal-code"
              class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >Postcode</label
            >
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autocomplete="postal-code"
                class="focus:ring-primary block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                v-model="contactStore.postcode"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-x-3 pt-5">
      <ButtonGradient href="#" type="submit"> Bekijk de mogelijkheden! </ButtonGradient>
    </div>
  </form>
</template>
