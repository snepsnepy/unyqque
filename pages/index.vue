<template>
  <section class="flex flex-col min-h-screen justify-between container mx-auto">
    <Navigation />
    <div class="flex w-full justify-center">
      <img
        src="@/assets/img/logo.svg"
        alt="unyqque logo"
        class="w-[400px] h-[200px] md:w-[600px] md:h-[600px]"
      />
    </div>
    <div class="text-center mb-10">
      <p class="font-montserrat text-xl md:text-4xl text-neutral font-semibold">
        AUTOMOTIVE DESIGN <span class="text-primary-hover">&</span> ENGINEERING
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base",
});
</script>
