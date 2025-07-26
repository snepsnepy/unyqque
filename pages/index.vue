<template>
  <section class="flex flex-col h-full">
    <!-- Spacer to push content to center -->
    <div class="flex-1"></div>

    <!-- Main content centered -->
    <section
      class="flex flex-col gap-y-8 md:flex-row items-center justify-between"
    >
      <img
        src="@/assets/img/rx7-bg.png"
        alt="Hero image"
        class="w-full max-w-xs md:max-w-3xl object-contain"
      />
      <h1
        class="text-lg leading-5 md:text-5xl font-delight font-medium text-base-content text-center"
      >
        get yourself <br />
        the best <br />
        <span class="font-black">AUTOMOTIVE</span> <br />
        merch <br />
        and be <br />
        <span class="font-black">UNYQQUE</span>
      </h1>
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
