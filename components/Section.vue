<script setup lang="ts">
defineProps<{
  title: string
  body?: string
}>()
</script>

<template>
  <div class="my-16 flex justify-center">
    <div class="m-10 w-full max-w-[1440px]">
      <div class="mx-auto max-w-xl text-center text-slate-600">
        <h2 class="mb-2 text-2xl font-extrabold" v-html="title" />
        <p v-html="body" />
      </div>
      <hr class="mx-auto mt-8 mb-14 w-80" />
      <slot></slot>
    </div>
  </div>
</template>
