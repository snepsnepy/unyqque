<!-- pages/gallery.vue -->
<template>
  <section class="py-4 md:py-8">
    <div class="flex flex-col gap-y-14">
      <FreshCreations @open-modal="(img) => openImagePreview(img)" />
      <Wallpapers @open-modal="(img) => openWallpaperPreview(img)" />
    </div>

    <ImagePreviewModal
      v-model:selected-image="selectedImage"
      v-if="selectedImage"
      :is-wallpaper="isWallpaperSelected"
    />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base",
});

const selectedImage = ref(null);
const isWallpaperSelected = ref(false);

const openImagePreview = (imgSrc: any) => {
  selectedImage.value = imgSrc;
  isWallpaperSelected.value = false;
};

const openWallpaperPreview = (imgSrc: any) => {
  selectedImage.value = imgSrc;
  isWallpaperSelected.value = true;
};
</script>
