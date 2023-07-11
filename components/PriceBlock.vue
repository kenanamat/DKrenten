<script setup lang="ts">
withDefaults(
  defineProps<{
    highlight?: boolean
    price: number
    possibilities: string[]
    icon?: string
    title: string
  }>(),
  {
    icon: "mingcute:stopwatch-line",
    highlight: false,
  }
)
</script>

<template>
  <div
    :class="{ 'to-primary bg-gradient-to-b from-sky-300': highlight }"
    class="relative rounded-xl border !bg-slate-100 p-10 shadow-md"
  >
    <span
      v-if="highlight"
      class="absolute top-4 right-4 rounded-full bg-sky-50 px-4 py-2 text-xs font-bold text-sky-800 shadow-md"
    >
      Meest gekozen
    </span>
    <h3
      :class="{ 'text-white': highlight }"
      class="flex items-center gap-1 text-xl font-bold"
    >
      <Icon :name="icon" size="20" />
      <span>{{ title }}</span>
    </h3>
    <span :class="{ 'text-white': highlight }" class=""
      >Inclusief operator</span
    >
    <div
      :class="{ 'text-white': highlight }"
      class="my-10 flex items-center gap-4 font-extrabold"
    >
      <span
        :class="{ '!text-sky-100': highlight }"
        class="text-4xl text-slate-600"
        >€</span
      >
      <span class="text-7xl">{{ price }}</span>
    </div>
    <Button
      href="https://dkrenten.nl/"
      :arrow="false"
      :class="{ '!bg-sky-800': highlight }"
      class="bg-primary mb-6 w-full !justify-center rounded-xl p-3 text-xl font-bold text-slate-100 shadow-md"
    >
      Huur de service
    </Button>
    <div :class="{ 'text-white': highlight }" class="">
      <h4 class="mb-2 font-bold">Mogelijkheden met service:</h4>
      <ul class="ml-5 list-disc space-y-2">
        <li v-for="(item, index) in possibilities" :key="index" class="">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
