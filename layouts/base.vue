<template>
  <div class="layout bg-white">
    <section
      class="flex flex-col flex-grow gap-8 h-dvh n container mx-auto overflow-scroll no-scrollbar"
    >
      <Navigation />

      <!-- Logo Section -->
      <!-- <div v-if="!isIndexPage" class="flex justify-center w-full h-fit">
        <NuxtImg src="/img/logo.svg" alt="unyqque logo" class="w-24 md:w-44" />
      </div> -->
      <slot />
    </section>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const isIndexPage = computed(() => route.name === "index");
</script>

<style scoped>
.layout {
  background-image: url("@/assets/img/munte.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: screen;
}
</style>
