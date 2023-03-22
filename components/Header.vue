<script setup lang="ts">
import { ref } from "vue"
const scroll = ref(0)

window.addEventListener("scroll", () => (scroll.value = window.scrollY))
</script>

<template>
  <header
    class="sticky top-0 z-50 grid grid-cols-3 bg-slate-200 transition-all duration-300"
    :class="{ ' bg-white shadow': scroll > 0 }"
  >
    <div class="col-auto p-8">
      <img src="/logo.png" alt="Logo DKrenten" class="w-48" />
    </div>
    <div class="col-auto flex items-center justify-center text-lg font-bold">
      <a
        href="#"
        class="hover:text-primary flex h-full items-center bg-slate-200 px-10 transition-all duration-300 hover:bg-white"
        :class="{ 'hover:bg-primary bg-white hover:text-white': scroll > 0 }"
      >
        Verhuizen
      </a>
      <a
        href="#"
        class="hover:text-primary flex h-full items-center bg-slate-200 px-10 transition-all duration-300 hover:bg-white"
        :class="{ 'hover:bg-primary bg-white hover:text-white': scroll > 0 }"
      >
        Verhuisift
      </a>
      <a
        href="#"
        class="hover:text-primary flex h-full items-center bg-slate-200 px-10 transition-all duration-300 hover:bg-white"
        :class="{ 'hover:bg-primary bg-white hover:text-white': scroll > 0 }"
      >
        Transport
      </a>
      <a
        href="#"
        class="hover:text-primary flex h-full items-center bg-slate-200 px-10 transition-all duration-300 hover:bg-white"
        :class="{ 'hover:bg-primary bg-white hover:text-white': scroll > 0 }"
      >
        Contact
      </a>
    </div>
    <div class="col-auto flex items-center justify-end p-8">
      <button
        class="bg-primary flex items-center gap-4 rounded px-8 py-6 text-lg font-bold text-white shadow"
      >
        <span>Verhuiskosten berekenen</span>
        <Icon name="material-symbols:arrow-right-alt-rounded" size="26" />
      </button>
    </div>
  </header>
</template>
