<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    noHeight: boolean
  }>(),
  { noHeight: false }
)
</script>

<template>
  <div class="rounded-3xl bg-sky-100 shadow-xl">
    <div class="px-10 py-8">
      <h2 class="text-2xl font-bold" v-html="title" />
      <div class="mt-6 space-y-2">
        <span
          class="flex w-64 items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm shadow"
        >
          <Icon
            name="material-symbols:price-change-rounded"
            size="26"
            class="[&>*]:fill-primary"
          />
          Volledig inzicht van de prijs!
        </span>
        <span
          class="flex w-64 items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm shadow"
        >
          <Icon
            name="material-symbols:lock-open-rounded"
            size="26"
            class="[&>*]:fill-primary"
          />
          Nergens aan vast!
        </span>
      </div>
    </div>
    <div
      class="relative overflow-hidden rounded-b-3xl bg-white"
      :class="[noHeight ? '' : 'min-h-[560px]']"
    >
      <slot></slot>
    </div>
  </div>
</template>
