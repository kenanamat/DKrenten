<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue"
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline"

const navigation = [
  { name: "Verhuislift", to: "/" },
  { name: "Verhuizen", to: "/verhuislift" },
  { name: "Contact", to: "/contact" },
]

const mobileMenuOpen = ref(false)

const scroll = ref(0)

onMounted(() => {
  window.addEventListener("scroll", () => (scroll.value = window.scrollY))
})
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full bg-slate-200 px-8 transition-all duration-300 lg:px-0"
    :class="{ ' bg-white shadow-md': scroll > 0 }"
  >
    <nav
      class="mx-auto flex items-center justify-between lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="py-8">
          <span class="sr-only">DKrenten Transport</span>
          <img class="w-48" src="/logo.png" alt="Logo DKrenten" />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="text-primary -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open hoofdmenu</span>
          <Bars3Icon class="h-16 w-16" aria-hidden="true" />
        </button>
      </div>
      <div
        class="hidden flex-1 justify-center self-stretch text-lg font-bold lg:flex"
      >
        <NuxtLink
          v-for="item in navigation"
          :to="item.to"
          class="border-primary flex items-center px-10 transition-all duration-300"
          :class="{
            'hover:bg-primary bg-white hover:text-white': scroll > 0,
            'hover:text-primary bg-slate-200 hover:bg-slate-100': scroll === 0,
          }"
          active-class="border-b-4 pt-2 !bg-white !text-slate-900"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <Button class="bg-primary py-6 gap-6 font-bold [&>svg]:ring-white [&>svg]:ring-opacity-20 rounded-md text-white shadow">
          Verhuislift huren!
        </Button>
      </div>
    </nav>
    <ClientOnly>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">DKrenten Transport</span>
              <img class="w-32" src="/logo.png" alt="DKrenten logo" />
            </a>
            <button
              type="button"
              class="text-primary -m-2.5 rounded-md p-2.5"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Sluit menu</span>
              <XMarkIcon class="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.to"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <Button class="bg-primary py-6 font-bold [&>svg]:ring-white [&>svg]:ring-opacity-20 rounded-md text-white shadow">
                  Verhuislift huren!
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </ClientOnly>
  </header>
</template>
