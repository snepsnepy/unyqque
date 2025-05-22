<template>
  <div
    class="bg-custom-bg bg-cover bg-center bg-no-repeat min-h-screen bg-[#1D1D1D]"
  >
    <!-- Overlay with 50% black opacity -->
    <div class="absolute inset-0 bg-[#1D1D1D]/85 z-0">
      <section
        class="flex flex-col flex-grow gap-8 h-dvh n container mx-auto overflow-scroll no-scrollbar"
      >
        <Navigation />
        <slot />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style scoped>
.layout {
  background-image: url("@/assets/img/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: screen;
}
</style>
