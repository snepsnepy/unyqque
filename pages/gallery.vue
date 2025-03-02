<template>
  <section class="flex flex-col flex-grow gap-8 h-dvh n container mx-auto">
    <!-- Navigation -->
    <Navigation />

    <!-- Logo Section -->
    <div class="flex justify-center w-full h-fit">
      <NuxtImg src="/img/logo.svg" alt="unyqque logo" class="w-24 md:w-44" />
    </div>

    <!-- Gallery Items -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full p-2 md:p-6 overflow-scroll"
    >
      <!-- 1 -->
      <div
        v-for="(item, index) in galleryItems"
        :key="index"
        ref="lastGalleryItem"
        class="flex flex-col bg-neutral border border-neutral rounded-3xl p-3 h-fit"
      >
        <div class="bg-white rounded-3xl">
          <img :src="item.imgSrc" alt="bbs" @click="openPreview(item.imgSrc)" />
        </div>
        <p
          class="text-white font-semibold font-montserrat text-sm leading-4 md:text-xl pt-2"
        >
          {{ item.category }} - {{ item.title }}
        </p>
      </div>
    </div>

    <!-- Image Preview Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50 p-4"
      @click="closePreview"
    >
      <div
        class="relative p-4 bg-white rounded-3xl max-w-4xl w-full"
        @click.stop
      >
        <button
          class="absolute top-4 right-4 text-neutral text-3xl font-bold hover:text-primary-hover"
          @click="closePreview"
        >
          &times;
        </button>
        <img :src="selectedImage" alt="Preview" class="w-full rounded-3xl" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import bbs from "@/assets/img/bbs.png";
import gold from "@/assets/img/gold.png";
import { type GalleryItem, CATEGORY } from "@/types/index";

definePageMeta({
  layout: "base",
});

const selectedImage = ref(null);

// Open image preview
const openPreview = (imgSrc: any) => {
  selectedImage.value = imgSrc;
};

// Close the preview
const closePreview = () => {
  selectedImage.value = null;
};

const galleryItems: Array<GalleryItem> = [
  {
    category: CATEGORY.LIVERY,
    title: "cata.myy",
    imgSrc: bbs,
  },
  {
    category: CATEGORY.LOGO,
    title: "dark.garage21",
    imgSrc: gold,
  },
  {
    category: CATEGORY.MERCH,
    title: "darknaturestudios",
    imgSrc: gold,
  },
  {
    category: CATEGORY.LIVERY,
    title: "darknaturestudios",
    imgSrc: bbs,
  },
  {
    category: CATEGORY.MERCH,
    title: "dark.garage21",
    imgSrc: gold,
  },
  {
    category: CATEGORY.LIVERY,
    title: "cata.myy",
    imgSrc: bbs,
  },
];
</script>
