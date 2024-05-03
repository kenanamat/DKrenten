<script setup lang="ts">
import "./assets/_styles.css"

useHead({
  htmlAttrs: {
    lang: "nl",
  },
})

useSeoMeta({
  description:
    "Bent u op zoek naar een betrouwbare en professionele verhuisservice? Zoek niet verder! DKrenten is er om u te helpen. Onze vriendelijke en behulpzame medewerkers staan klaar om uw verhuizing snel en efficiënt uit te voeren. Gebruik onze tool om direct inzage te krijgen over de kosten!",
  ogDescription:
    "Bent u op zoek naar een betrouwbare en professionele verhuisservice? Zoek niet verder! DKrenten is er om u te helpen. Onze vriendelijke en behulpzame medewerkers staan klaar om uw verhuizing snel en efficiënt uit te voeren. Gebruik onze tool om direct inzage te krijgen over de kosten!",
  ogImage: "https://www.dkrenten.nl/verhuislift-cutout.png",
})

const shutdown = false
</script>

<template>
  <template v-if="!shutdown">
    <Notification />
    <Navigation />
    <NuxtPage />
  </template>
  <Hero class="-mt-6 h-screen !min-h-0 [&>div]:-mb-6" v-else>
    <template #title>
      <div class="flex flex-wrap items-center">
        <Icon
          size="128"
          class="text-primary"
          name="material-symbols:construction"
        />
        <div>
          <span class="block text-2xl font-bold">
            Website onder constructie
          </span>
          <span class="text-5xl font-bold"
            >We zijn binnenkort weer online!</span
          >
        </div>
      </div>
    </template>
  </Hero>
  <ContactButtons />
  <NaNek />

  <ClientOnly>
    <ReuzenPanda />
  </ClientOnly>
</template>
