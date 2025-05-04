<template>
  <section>
    <!-- Gallery Items -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 no-scrollbar lg:grid-cols-3 gap-4 overflow-scroll items-center"
    >
      <DirectionAwareHover
        v-for="(image, index) in images"
        :key="index"
        :image-url="image.url"
        @click="openPreview(image.url)"
      >
      </DirectionAwareHover>
    </div>

    <!-- Image Preview Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50 p-4"
      @click="closePreview"
    >
      <div
        class="relative p-2 lg:p-6 bg-white/50 bg-clip-padding backdrop-filter backdrop-blur-md rounded-3xl max-w-4xl w-full border border-neutral"
        @click.stop
      >
        <button
          class="absolute top-0 right-2 text-white text-3xl font-bold hover:text-primary/50"
          @click="closePreview"
        >
          &times;
        </button>
        <img :src="selectedImage" alt="Preview" class="w-full rounded-2xl" />
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

const { $supabase } = useNuxtApp();
const selectedImage = ref(null);
const images = ref<any>([]);

const useGalleryImages = async () => {
  try {
    // List all files in the 'designs' folder
    const { data: files, error } = await $supabase.storage
      .from("gallery")
      .list("designs");

    if (error) throw error;

    // Get public URLs for each image
    const imagesWithUrls = files.map((file) => {
      const {
        data: { publicUrl },
      } = $supabase.storage
        .from("gallery")
        .getPublicUrl(`designs/${file.name}`);

      return {
        name: file.name,
        url: publicUrl,
      };
    });

    return imagesWithUrls;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
};

onMounted(async () => {
  images.value = await useGalleryImages();
});

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
