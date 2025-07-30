<template>
  <section class="flex flex-col h-full">
    <!-- Spacer to push content to center -->
    <div class="md:flex-1"></div>

    <!-- Main content centered -->
    <section class="flex flex-col md:flex-row items-center justify-evenly">
      <NuxtImg
        :src="heroImageUrl"
        alt="Hero image"
        class="w-full max-w-xs lg:max-w-[500px] xl:max-w-3xl"
        quality="70"
        format="webp"
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
      class="flex flex-row items-center md:flex-row gap-x-1 font-delight text-sm leading-5 md:text-4xl text-base-content font-medium justify-center pb-4"
    >
      automotive design
      <span class="font-black">&</span>
      engineering
    </footer>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base",
});

const { getImageUrl } = useGetBucketImage("gallery", "hero/hero-image.png");
const heroImageUrl = getImageUrl();
</script>
