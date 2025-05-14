<template>
  <section class="lg:py-10">
    <header class="py-5">
      <h2
        class="text-neutral text-5xl lg:text-8xl font-neue text-left font-bold"
      >
        Wallpapers
      </h2>
    </header>

    <swiper-container
      class="flex w-full cursor-grab active:cursor-grabbing"
      :pagination="{
        clickable: true,
      }"
      :modules="[Pagination]"
      :breakpoints="{
        '0': {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        '420': {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        '576': {
          slidesPerView: 2.1,
          spaceBetween: 16,
        },
      }"
    >
      <swiper-slide v-for="(image, index) in wallpapers" :key="index">
        <DirectionAwareHover
          :image-url="image.url"
          @click="emit('openModal', image.url)"
        >
        </DirectionAwareHover>
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script lang="ts" setup>
import type { GalleryItem } from "~/types";
import { Pagination } from "swiper/modules";

const emit = defineEmits(["openModal"]);
defineProps<{
  wallpapers: GalleryItem[];
}>();
</script>

<style scoped>
swiper-container::part(wrapper) {
  @apply pb-10;
}
swiper-container::part(bullet-active) {
  @apply bg-yellow-500;
}
</style>
