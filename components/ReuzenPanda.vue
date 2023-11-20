<template>
  <div v-if="show" class="absolute h-full w-full inset-0 flex animate-bounce items-center justify-center">
    <CubeTransparentIcon class="animate-spin h-20 w-20 text-primary" />
  </div>  
  <div
    class="reuzenpanda-widget-from-js-snippet !relative !h-[560px] !w-full [&>iframe]:!relative [&>iframe]:!w-full z-10 flex justify-center items-center"
  />
  <!-- <a
    href="https://offerte.directsamenstellen.nl/_configure?widget=2d2c2ed3-ff3b-4d2a-8ba7-1f32e423dc02"
    target="_blank"
    style="color: rgba(0, 0, 0, 0)"
  >
    Offerte Direct Samenstellen.nl 2d2c2ed3-ff3b-4d2a-8ba7-1f32e423dc02
  </a>
  <a
    href="https://www.reuzenpanda.nl"
    target="_blank"
    style="color: rgba(0, 0, 0, 0)"
  >
    Reuzenpanda Widget 2d2c2ed3-ff3b-4d2a-8ba7-1f32e423dc02
  </a> -->
</template>

<script setup>
import { CubeTransparentIcon } from '@heroicons/vue/20/solid';

const show = ref(true)
setTimeout(() => {show.value = false}, 2000)

const scriptId = "reuzenpanda-widget-from-js-snippet"
const existingScript = document.getElementById(scriptId)
if (existingScript) {
  existingScript.remove()
}

const script = document.createElement("script")
script.id = scriptId
script.src = "https://snippetjs.reuzenpanda.nl"

script.onload = async () => {
  await reuzenpandaWidget.load("2d2c2ed3-ff3b-4d2a-8ba7-1f32e423dc02", scriptId)
  await reuzenpandaWidget.open()
}

const firstScriptTag = document.getElementsByTagName("script")[0]
firstScriptTag.parentNode.insertBefore(script, firstScriptTag)

// console.log(firstScriptTag)
</script>
