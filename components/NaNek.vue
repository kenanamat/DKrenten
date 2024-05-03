<script setup lang="ts">
const scroll = useWindowScroll().y
</script>

<template>
  <div
    class="group fixed bottom-20 right-0 z-50 p-1 font-bold text-white transition-all"
    :class="[scroll > 300 && 'translate-x-16 hover:translate-x-36']"
  >
    <a
      href="mailto:info@nanek.nl"
      class="flex cursor-pointer items-center gap-2 rounded-full bg-[#272640] py-2 shadow-2xl transition-all group-hover:py-1 group-hover:px-3"
      :class="[scroll > 0 && 'pl-0 pr-2', scroll === 0 && 'px-3 !py-1']"
    >
      <p
        class="origin-right transition-all delay-75 group-hover:text-xs group-hover:opacity-100"
        :class="[
          scroll > 0 && 'text-[0px] opacity-0',
          scroll === 0 && 'text-xs opacity-100',
        ]"
      >
        Made by:
      </p>
      <img
        src="/NaNek-logo.png"
        alt=""
        class="transition-all group-hover:h-10 max-sm:h-6"
        :class="[scroll > 0 && 'h-8', scroll === 0 && '!h-10']"
      />
    </a>
  </div>
</template>
