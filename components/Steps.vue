<script setup lang="ts">
const props = defineProps<{
  steps: { title: string; body?: string }[]
}>()

const truck = ref<HTMLElement | null>(null)
const { top, height } = useElementBounding(truck)
const { width } = useWindowSize()

const md = computed(() => width.value < 768)
const roads = computed(() =>
  md.value
    ? Math.ceil(props.steps.length * 3.6)
    : Math.ceil(props.steps.length * 2.6)
)

const truckPos = computed(() => {
  if (top.value > 360) return "0"
  if (top.value < -height.value + 575) return `${height.value - 215}px`
  return String(-top.value + 360) + "px"
})
</script>

<template>
  <ul class="relative z-10 grid gap-x-52 md:grid-cols-2 mb-24">
    <li
      v-for="(step, index) in steps"
      class="last-of-type:max-md:mb-24"
      :class="
        index % 2 ? 'mt-24 md:mt-60' : 'max-md:mt-24 first-of-type:max-md:mt-0'
      "
    >
      <sub class="text-primary text-base font-bold">Stap {{ index + 1 }}</sub>
      <div
        class="mt-2 flex h-52 flex-col items-center justify-center rounded-xl bg-sky-50 p-4 text-center shadow-xl"
      >
        <h3 class="mb-2 text-2xl font-bold">{{ step.title }}</h3>
        <p class="text-sm" v-if="step.body && step.body != ''">
          {{ step.body }}
        </p>
      </div>
    </li>
  </ul>
  <div
    class="absolute top-24 left-[calc(50%-64px)] flex flex-col -space-y-8"
    ref="truck"
  >
    <Icon v-for="_ in Array(roads)" name="mdi:road" size="128" class="" />
    <img
      src="/small-truck.png"
      alt=""
      class="absolute left-0 top-12 ml-6 w-20 translate-y-3 transition-none md:transition-all md:duration-500 md:ease-linear"
      :style="`transform: translateY(${truckPos}) rotate(180deg); `"
    />
  </div>
</template>
