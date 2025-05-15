<template>
  <section class="flex flex-col gap-y-4">
    <header>
      <h2
        class="text-neutral text-5xl lg:text-8xl font-neue text-center font-bold"
      >
        Fresh Creations
      </h2>
    </header>

    <!-- Gallery Items -->
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      <DirectionAwareHover
        v-for="(image, index) in images"
        :key="index"
        :image-url="image.url"
        @click="emit('openModal', image.url)"
      />
    </div>

    <div class="text-center">
      <button
        @click="loadImages"
        :disabled="loading || noMore"
        class="bg-transparent border-2 border-neutral shadow-sm text-neutral font-neue text-xl md:text-3xl py-1 px-4 rounded-full hover:text-primary hover:bg-neutral"
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

const folder = "designs";
const { images, loadImages, loading, noMore } =
  useGetBucketItemsByFolder(folder);

onMounted(() => {
  loadImages();
});
</script>
