<template>
  <div class="flex flex-col md:flex-row justify-between mt-10">
    <button
      @click="moveTo('/gallery')"
      :class="getActiveClass('/gallery')"
      class="font-delight font-black text-4xl md:text-7xl -tracking-[1px]"
    >
      <LineShadowText
        v-if="getActivePath('/gallery')"
        class="text-2xl md:text-7xl"
        shadow-color="white"
      >
        GALLERY
      </LineShadowText>
      <p v-else class="text-base-content">GALLERY</p>
    </button>
    <button
      @click="moveTo('/shop')"
      :class="getActiveClass('/shop')"
      class="font-delight font-black text-4xl md:text-7xl -tracking-[1px]"
    >
      <LineShadowText
        v-if="getActivePath('/shop')"
        class="text-2xl md:text-7xl"
        shadow-color="white"
      >
        SHOP
      </LineShadowText>
      <p v-else class="text-base-content">SHOP</p>
    </button>
    <button
      @click="moveTo('/contact')"
      :class="getActiveClass('/contact')"
      class="font-delight font-black text-4xl md:text-7xl -tracking-[1px]"
    >
      <LineShadowText
        v-if="getActivePath('/contact')"
        class="text-2xl md:text-7xl"
        shadow-color="white"
      >
        CONTACT
      </LineShadowText>
      <p v-else class="text-base-content">CONTACT</p>
    </button>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const moveTo = (path: string) => {
  return navigateTo(path);
};

const getActivePath = computed(() => (path: string) => route.path === path);

const getActiveClass = computed(
  () => (path: string) =>
    route.path === path ? "text-base-content" : "text-neutral"
);
</script>
