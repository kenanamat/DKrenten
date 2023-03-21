<script setup lang="ts">
import { Icon } from '#components'

</script>

<template>
  <div class="relative flex justify-center bg-slate-200 shadow-xl">
    <div class="z-10 max-w-[1440px]">
      <div class="relative grid grid-cols-12 py-36">
        <div class="col-span-6">
          <div class="mb-12">
            <h1 class="mb-6">
              <span class="text-2xl font-bold">
                Wij adviseren, jij bepaald
              </span>
              <br />
              <span class="text-5xl font-bold">
                Onze service stel je zelf samen
              </span>
            </h1>
            <p class="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              quaerat placeat alias ea totam unde eum, facilis exercitationem
              excepturi iusto consequatur molestiae officia iure reiciendis sit
              cumque saepe quibusdam adipisci.
            </p>
          </div>
          <div class="flex gap-8">
            <button class="rounded bg-white p-4 shadow">IETS</button>
            <button class="rounded bg-white p-4 shadow">IETS ANDERS</button>
            <button class="bg-primary rounded p-4 shadow">IETS ANDERS</button>
          </div>
        </div>
        <div class="col-span-2"></div>
        <div class="col-span-4">
          <div class="rounded-3xl bg-sky-100 shadow-xl">
            <div class="p-8">
              <h2 class="text-3xl font-bold">Bereken je verhuiskosten!</h2>
              <div class="mt-6">
                <span class="flex items-center gap-4">
                  <Icon name="material-symbols:check-circle"  size="32" class="[&>*]:fill-primary"/>
                  Volledig inzicht van de prijs!
                </span>
                <span class="flex items-center gap-4">
                  <Icon name="material-symbols:check-circle"  size="32" class="[&>*]:fill-primary"/>
                  Nergens aan vast!
                </span>
              </div>
            </div>
            <div class="bg-white p-8 rounded-b-3xl">
              <form action="">
                
              </form>
            </div>
          </div>
        </div>
      </div>
      <img
        class="mb-32 w-[70%]"
        src="/white-truck-trans.png"
        alt="DKrenten truck"
      />
    </div>
    <div
      class="bg-primary absolute bottom-0 right-0 h-20 w-full"
      style="clip-path: polygon(0 80%, 100% 0, 100% 100%, 0% 100%)"
    ></div>
  </div>
</template>
