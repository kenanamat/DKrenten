<script setup lang="ts">
import "./assets/_styles.css"

useHead({
  htmlAttrs: {
    lang: "nl",
  },
})

useSeoMeta({
  description: 'Bent u op zoek naar een betrouwbare en professionele verhuisservice? Zoek niet verder! DKrenten is er om u te helpen. Onze vriendelijke en behulpzame medewerkers staan klaar om uw verhuizing snel en efficiënt uit te voeren. Gebruik onze tool om direct inzage te krijgen over de kosten!',
  ogDescription: 'Bent u op zoek naar een betrouwbare en professionele verhuisservice? Zoek niet verder! DKrenten is er om u te helpen. Onze vriendelijke en behulpzame medewerkers staan klaar om uw verhuizing snel en efficiënt uit te voeren. Gebruik onze tool om direct inzage te krijgen over de kosten!',
  ogImage: 'https://www.dkrenten.nl/verhuislift-cutout.png',
})
</script>

<template>
  <Notification />
  <Navigation />
  <NuxtPage />
  <NaNek />
</template>
