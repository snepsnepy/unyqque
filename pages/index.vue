<template>
  <section
    class="flex flex-col items-center justify-between gap-y-8 py-2 md:py-6 h-full"
  >
    <div class="flex justify-center w-full h-fit">
      <NuxtImg
        src="/img/logo.svg"
        alt="unyqque"
        class="w-[400px] md:w-[600px]"
      />
    </div>
    <div
      class="flex flex-col items-center md:flex-row gap-x-2 font-montserrat text-lg leading-5 md:text-4xl text-neutral font-semibold"
    >
      <span class="whitespace-nowrap">AUTOMOTIVE DESIGN</span>
      <span class="text-primary-hover">&</span>
      <span> ENGINEERING</span>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base",
});
</script>
