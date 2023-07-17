<script lang="ts" setup>
import { PhoneIcon } from "@heroicons/vue/20/solid"
</script>

<template>
  <dl
    class="group fixed bottom-0 left-0 z-50 p-1 font-bold text-white transition-all"
  >
    <div class="flex items-center gap-4">
      <Button
        :arrow="false"
        class="!m-0 h-full bg-transparent !p-0 shadow-none hover:!bg-transparent"
        href="tel:(+31) 657991999"
      >
        <div
          class="from-primary group relative flex h-full rounded-full bg-transparent bg-gradient-to-l to-sky-300 px-2 py-2 font-bold text-white shadow-md"
        >
          <div class="z-10 flex items-center gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Telefoon</span>
              <PhoneIcon class="h-7 w-7" aria-hidden="true" />
            </dt>
          </div>
          <div
            class="to-primary absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-l from-sky-300 opacity-0 transition-all duration-500 group-hover:opacity-100"
          ></div>
        </div>
      </Button>
      <dt>
        <span class="sr-only">WhatsApp</span>
        <a
          href="https://wa.me/+31657991999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="logos:whatsapp-icon" class="h-12 w-12" />
        </a>
      </dt>
    </div>
  </dl>
</template>
