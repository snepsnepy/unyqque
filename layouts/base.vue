<template>
  <div
    class="bg-custom-bg bg-zoom-in md:bg-zoom-out bg-bottom-2/3 bg-no-repeat bg-[#1D1D1D] relative"
  >
    <!-- Overlay with 85% dark opacity -->
    <div class="absolute inset-0 bg-[#1D1D1D]/85 z-0"></div>

    <!-- Content layer -->
    <section
      class="relative z-10 flex flex-col flex-grow gap-4 md:gap-8 h-dvh container mx-auto overflow-scroll no-scrollbar"
    >
      <Navigation />
      <slot />
    </section>
  </div>
</template>

<script lang="ts" setup></script>
