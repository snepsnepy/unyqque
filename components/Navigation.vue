<template>
  <div class="flex flex-col md:flex-row justify-between mt-10">
    <button
      @click="moveTo('/gallery')"
      class="font-neue text-neutral text-4xl md:text-7xl -tracking-[1px] hover:text-primary-hover"
    >
      GALLERY
    </button>
    <button
      @click="moveTo('/shop')"
      class="font-neue text-neutral text-4xl md:text-7xl -tracking-[1px] hover:text-primary-hover"
    >
      SHOP
    </button>
    <button
      @click="moveTo('/contact')"
      class="font-neue text-neutral text-4xl md:text-7xl -tracking-[1px] hover:text-primary-hover"
    >
      CONTACT
    </button>
  </div>
</template>

<script setup lang="ts">
const moveTo = (path: string) => {
  return navigateTo(path);
};
</script>
