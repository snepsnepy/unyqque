<template>
  <section class="flex flex-col h-full">
    <!-- Spacer to push content to center -->
    <div class="flex-1"></div>

    <!-- Main content centered -->
    <section class="flex flex-row items-center justify-between">
      <img
        src="@/assets/img/rx7-bg.png"
        alt="Hero image"
        class="w-2/3 object-contain"
      />
      <ClientOnly>
        <BlurReveal :delay="0.2" :duration="0.75" class="p-8 w-full h-full">
          <h2
            class="text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl"
          >
            Hey there 👋
          </h2>
          <span
            class="text-pretty text-xl tracking-tighter xl:text-4xl/none sm:text-3xl"
          >
            How is it going?
          </span>
        </BlurReveal>
      </ClientOnly>
    </section>

    <!-- Spacer to push footer to bottom -->
    <div class="flex-1"></div>

    <footer
      class="flex flex-col items-center md:flex-row gap-x-2 font-delight text-lg leading-5 md:text-4xl text-base-content font-medium justify-center pb-4"
    >
      <span>automotive design</span>
      <span class="font-black">&</span>
      <span>engineering</span>
    </footer>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base",
});
</script>
