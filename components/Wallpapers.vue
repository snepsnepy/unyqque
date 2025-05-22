<template>
  <section class="flex flex-col gap-y-4">
    <header>
      <h2
        class="text-base-content text-5xl lg:text-8xl font-neue text-center font-bold"
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
      <img
        :src="image.url"
        alt="img"
        v-for="(image, index) in images"
        :key="index"
        class="rounded-2xl"
        @click="emit('openModal', image.url)"
      />
    </div>

    <div class="text-center">
      <button
        @click="loadImages"
        :disabled="loading || noMore"
        class="bg-transparent shadow-sm text-base-content font-neue text-2xl md:text-4xl py-1 px-4 hover:text-primary"
        :class="{
          'hover:bg-transparent hover:!text-neutral': noMore,
        }"
      >
        {{ noMore ? "No More Images" : loading ? "Loading..." : "Load More" }}
      </button>
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
