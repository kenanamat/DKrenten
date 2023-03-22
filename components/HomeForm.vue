<script setup lang="ts">
import { Icon } from "#components"
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
              >Straatnaam</label
            >
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
                class="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6"
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
                class="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end gap-x-3">
        <button
          type="submit"
          class="bg-primary hover:bg-accent text-md inline-flex items-center justify-center gap-2 rounded-md py-2 px-3 font-semibold text-white shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Kies je dag!
          <Icon name="material-symbols:arrow-right-alt-rounded" size="26" />
        </button>
      </div>
    </div>
  </form>
</template>
