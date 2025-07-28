<template>
  <section class="flex flex-col gap-y-4">
    <header>
      <h2
        class="text-base-content text-3xl lg:text-6xl font-delight text-center font-black uppercase"
      >
        Fresh Creations
      </h2>
    </header>

    <!-- Gallery Items -->
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      <!-- <DirectionAwareHover
        v-for="(image, index) in images"
        :key="index"
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

const folder = "designs";
const { images, loadImages, loading, noMore } =
  useGetBucketItemsByFolder(folder);

onMounted(() => {
  loadImages();
});
</script>
