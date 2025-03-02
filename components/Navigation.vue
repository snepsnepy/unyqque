<template>
  <div class="flex flex-col md:flex-row justify-between mt-10">
    <button
      @click="moveTo('/gallery')"
      :class="getActiveClass('/gallery')"
      class="font-neue text-neutral text-4xl md:text-7xl -tracking-[1px] hover:text-primary-hover"
    >
      <SparklesText
        v-if="getActivePath('/gallery')"
        text="GALLERY"
        class="text-2xl md:text-7xl"
        :colors="{ first: '#d0fa88', second: '#83E5DE' }"
        :sparkles-count="8"
      />
      <p v-else>GALLERY</p>
    </button>
    <button
      @click="moveTo('/shop')"
      :class="getActiveClass('/shop')"
      class="font-neue text-neutral text-4xl md:text-7xl -tracking-[1px] hover:text-primary-hover"
    >
      <SparklesText
        v-if="getActivePath('/shop')"
        text="SHOP"
        class="text-2xl md:text-7xl"
        :colors="{ first: '#d0fa88', second: '#83E5DE' }"
        :sparkles-count="8"
      />
      <p v-else>SHOP</p>
    </button>
    <button
      @click="moveTo('/contact')"
      :class="getActiveClass('/contact')"
      class="font-neue text-neutral text-4xl md:text-7xl -tracking-[1px] hover:text-primary-hover"
    >
      <SparklesText
        v-if="getActivePath('/contact')"
        text="CONTACT"
        class="text-4xl md:text-7xl"
        :colors="{ first: '#d0fa88', second: '#83E5DE' }"
        :sparkles-count="8"
      />
      <p v-else>CONTACT</p>
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
    route.path === path ? "text-primary-hover" : "text-neutral"
);
</script>
