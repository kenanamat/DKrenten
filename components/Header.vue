<script setup lang="ts">
const scroll = ref(0)

onMounted(() => {
  window.addEventListener("scroll", () => (scroll.value = window.scrollY))
})
</script>

<template>
  <header
    class="sticky top-0 z-50 grid grid-cols-3 bg-slate-200 transition-all duration-300"
    :class="{ ' bg-white shadow-md': scroll > 0 }"
  >
    <div class="col-auto p-8">
      <NuxtLink to="/">
        <img src="/logo.png" alt="Logo DKrenten" class="w-48" />
      </NuxtLink>
    </div>
    <div class="col-auto flex items-center justify-center text-lg font-bold">
      <NuxtLink
        to="/"
        class="flex h-full items-center px-10 transition-all duration-300"
        :class="{
          'hover:bg-primary bg-white hover:text-white': scroll > 0,
          'hover:text-primary bg-slate-200 hover:bg-white': scroll === 0,
        }"
      >
        Verhuislift
      </NuxtLink>
      <NuxtLink
        to="/"
        class="flex h-full items-center px-10 transition-all duration-300"
        :class="{
          'hover:bg-primary bg-white hover:text-white': scroll > 0,
          'hover:text-primary bg-slate-200 hover:bg-white': scroll === 0,
        }"
      >
        Verhuizen
      </NuxtLink>
      <NuxtLink
        to="/"
        class="flex h-full items-center px-10 transition-all duration-300"
        :class="{
          'hover:bg-primary bg-white hover:text-white': scroll > 0,
          'hover:text-primary bg-slate-200 hover:bg-white': scroll === 0,
        }"
      >
        Transport
      </NuxtLink>
      <NuxtLink
        to="/"
        class="flex h-full items-center px-10 transition-all duration-300"
        :class="{
          'hover:bg-primary bg-white hover:text-white': scroll > 0,
          'hover:text-primary bg-slate-200 hover:bg-white': scroll === 0,
        }"
      >
        Contact
      </NuxtLink>
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
