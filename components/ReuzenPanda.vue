<template>
  <div
    class="absolute inset-0 flex animate-pulse items-center justify-center bg-sky-50"
  >
    <div class="mx-auto flex h-96 animate-bounce items-center">
      <div class="border-primary rounded-full border-4 p-4">
        <CubeTransparentIcon class="text-primary h-16 w-16 animate-spin" />
      </div>
    </div>
  </div>
  <div
    class="reuzenpanda-widget-from-js-snippet !relative z-30 flex !h-[560px] !w-full items-center justify-center bg-transparent transition-all duration-300 [&>iframe]:!relative [&>iframe]:!w-full"
    :class="[!show && '!bg-white']"
  />
  <!-- <a
    href="https://offerte.directsamenstellen.nl/_configure?widget=3c20f21e-da08-4c0e-8361-d5417b47fb52"
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
import { CubeTransparentIcon } from "@heroicons/vue/20/solid"

const show = ref(true)
onMounted(() => {
  show.value = false
  if (
    document.getElementsByTagName("iframe")[0]?.id !=
    "reuzenpanda-reuzenpandaWidget-iframe"
  ) {
    loadWidget()
  }
})

const loadWidget = async () => {
  await reuzenpandaWidget.load(
    "3c20f21e-da08-4c0e-8361-d5417b47fb52",
    "reuzenpanda-widget-from-js-snippet"
  )
  await reuzenpandaWidget.open()
}

const insertScript = () => {
  const scriptId = "reuzenpanda-widget-from-js-snippet"
  if (document.getElementById(scriptId)) {
    loadWidget()
    document.getElementsByTagName("script")[0].remove()
    document.getElementById(scriptId).remove()
  }

  const script = document.createElement("script")
  script.id = scriptId
  script.src = "https://snippetjs.reuzenpanda.nl"
  script.onload = loadWidget

  const firstScriptTag = document.getElementsByTagName("script")[0]
  firstScriptTag.parentNode.insertBefore(script, firstScriptTag)
}

insertScript()
</script>
