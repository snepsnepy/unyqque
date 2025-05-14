<template>
  <section>
    <!-- Fresh Creations -->
    <FreshCreations :images="images" @open-modal="(img) => openPreview(img)" />

    <!-- Wallpapers -->
    <Wallpapers
      :wallpapers="wallpapers"
      @open-modal="(img) => openPreview(img)"
    />

    <!-- Image Preview Modal -->
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
const images = ref<any>([]);
const wallpapers = ref<any>([]);
const isWallpaperSelected = ref(false);

onMounted(async () => {
  images.value = await useUseGetBucketItemsByFolder("designs");
  wallpapers.value = await useUseGetBucketItemsByFolder("wallpapers");
});

// Open image preview
const openPreview = (imgSrc: any) => {
  selectedImage.value = imgSrc;

  // Check if selected image is from wallpapers list
  isWallpaperSelected.value = wallpapers.value.some(
    (wallpaper: any) => wallpaper.url === imgSrc
  );
};
</script>
