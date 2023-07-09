<script lang="ts" setup>
defineProps<{
  href?: string
  to?: string
}>()
</script>

<template>
  <Button
    :arrow="false"
    class="relative !p-0 font-bold text-white shadow-md hover:bg-transparent"
    :to="to"
    :href="href"
  >
    <div
      class="from-primary group relative flex h-full w-full rounded bg-gradient-to-r to-sky-300 px-6 py-4"
    >
      <div class="z-10 flex items-center">
        <slot></slot>
      </div>
    </div>
    <div
      class="to-primary absolute left-0 top-0 h-full w-full rounded bg-gradient-to-r from-sky-300 opacity-0 transition-all duration-500 group-hover:opacity-100"
    ></div>
  </Button>
</template>
