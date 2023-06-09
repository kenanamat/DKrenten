<script setup lang="ts">
defineProps<{
  img?: string
}>()
</script>

<template>
  <div
    class="relative flex min-h-screen justify-center bg-slate-200 pt-36 shadow-xl"
  >
    <div class="z-10 m-10 max-w-[1440px] xl:-mb-6">
      <div class="relative grid gap-16 sm:mt-16 lg:grid-cols-5 xl:grid-cols-12">
        <div class="lg:col-span-3 xl:col-span-6">
          <div class="mb-12">
            <h1 class="mb-6">
              <slot name="title"></slot>
            </h1>
            <p class="mb-8 mt-6">
              <slot name="body"></slot>
            </p>
          </div>
          <div class="flex flex-wrap gap-8 max-md:max-w-md">
            <slot name="buttons"></slot>
          </div>
        </div>
        <div class="col-span-2 hidden xl:block"></div>
        <div class="lg:col-span-2 xl:col-span-4">
          <slot name="right"></slot>
        </div>
      </div>
      <img
        class="my-20 md:w-[60%] lg:mb-32 lg:-mt-[29rem]"
        :src="img"
        alt="Header plaatje"
      />
    </div>
    <div
      class="bg-primary absolute bottom-0 right-0 h-20 w-full min-w-[1920px]"
      style="clip-path: polygon(0 60%, 100% 0, 100% 100%, 0% 100%)"
    />
  </div>
</template>
