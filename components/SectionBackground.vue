<script setup lang="ts">
withDefaults(
  defineProps<{
    slantBottom?: boolean
    slantTop?: boolean
  }>(),
  {
    slantBottom: true,
    slantTop: true,
  }
)
</script>

<template>
  <div
    v-if="slantTop"
    class="mt-20 -mb-1 h-20 w-full bg-sky-100"
    style="clip-path: polygon(0 0, 100% 60%, 100% 100%, 0% 100%)"
  ></div>
  <div class="flex justify-center bg-sky-100">
    <div class="relative m-2 w-full max-w-[1440px] sm:m-10">
      <slot></slot>
    </div>
  </div>
  <div
    v-if="slantBottom"
    class="-mt-1 h-20 w-full bg-sky-100"
    style="clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 60%)"
  ></div>
</template>
