<template>
  <router-link v-if="to" :to="to">
    <button
      :type="type"
      class="group flex cursor-pointer items-center gap-4 p-4 font-bold transition-all hover:bg-primary hover:text-white"
      :class="class"
    >
      <slot></slot>
      <ArrowRightIcon
        v-if="arrow"
        class="ml-auto w-7 rounded-full p-0.5 text-font ring-4 ring-black ring-opacity-20 transition-all group-hover:text-white group-hover:ring-white group-hover:ring-opacity-40"
      />
    </button>
  </router-link>
  <a v-else :href="href">
    <button
      :type="type"
      class="group flex cursor-pointer items-center gap-4 p-4 font-bold transition-all hover:bg-primary hover:text-white"
      :class="class"
    >
      <slot></slot>
      <ArrowRightIcon
        v-if="arrow"
        class="ml-auto w-7 rounded-full p-0.5 text-font ring-4 ring-black ring-opacity-20 transition-all group-hover:text-white group-hover:ring-white group-hover:ring-opacity-40"
      />
    </button>
  </a>
</template>

<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/20/solid"
import { ButtonHTMLAttributes } from "vue"

interface Props {
  href?: string
  to?: string
  arrow?: boolean
  type?: ButtonHTMLAttributes["type"]
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  arrow: true,
  type: "button",
})
</script>
