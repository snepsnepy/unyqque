<template>
  <section class="flex flex-col gap-y-4">
    <header>
      <h2
        class="text-base-content text-3xl lg:text-6xl font-delight text-center font-black uppercase"
      >
        Wallpapers
      </h2>
    </header>

    <!-- Gallery Items -->
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      <!-- <DirectionAwareHover
        
        
        :image-url="image.url"
        @click="emit('openModal', image.url)"
      /> -->
      <NuxtImg
        v-for="(image, index) in images"
        :key="index"
        :src="image.url"
        :alt="image.name"
        class="rounded-2xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
        quality="80"
        format="webp"
        sizes="sm:150px md:200px lg:250px"
        loading="lazy"
        @click="emit('openModal', image.url)"
      />
    </div>

    <div class="text-center">
      <InteractiveHoverButton
        v-if="!noMore"
        :text="loading ? 'LOADING...' : 'LOAD MORE'"
        class="w-fit font-delight font-medium text-base-content"
        @click="loadImages"
      />

      <p
        v-else
        class="text-base-content font-delight font-semibold text-xl md:text-2xl uppercase"
      >
        No more images
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
const emit = defineEmits(["openModal"]);

const folder = "wallpapers";
const { images, loadImages, loading, noMore } =
  useGetBucketItemsByFolder(folder);

onMounted(() => {
  loadImages();
});
</script>
