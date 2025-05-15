<template>
  <section
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50"
    @click="closePreview"
  >
    <div
      class="relative p-2 md:p-4 bg-white/50 bg-clip-padding backdrop-filter backdrop-blur-md rounded-3xl max-w-4xl w-fit border border-neutral"
      @click.stop
    >
      <div
        class="flex flex-row justify-between items-center px-2"
        :class="{
          '!justify-end': !isWallpaper,
        }"
      >
        <!-- Download Button -->
        <button
          v-if="isWallpaper"
          class="absolute left-4 top-4 md:left-6 md:top-6 text-white text-xl md:text-3xl font-bold pl-3.5 pr-2 border-2 border-white rounded-full hover:bg-white hover:text-neutral"
          @click.stop="downloadImage"
        >
          <div class="flex items-center flex-row gap-x-2">
            <span class="text-md font-neue">Download</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
          </div>
        </button>

        <!-- Close Button -->
        <button
          class="absolute right-4 top-4 md:right-6 md:top-6 text-white text-2xl md:text-3xl font-bold border-2 border-white rounded-full hover:bg-white hover:text-neutral"
          @click="closePreview"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 md:h-8 md:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <img
        :src="selectedImage!"
        alt="Preview"
        class="w-full md:w-fit md:max-w-fit max-h-[80vh] object-contain rounded-2xl"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const selectedImage = defineModel<string | null>("selectedImage");

defineProps<{
  isWallpaper?: boolean;
}>();
// Close the preview
const closePreview = () => {
  selectedImage.value = null;
};

const downloadImage = async () => {
  if (!selectedImage.value) return;

  try {
    const response = await fetch(selectedImage.value);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;

    // Optional: create a nicer filename from URL
    const filename =
      selectedImage.value.split("/").pop()?.split("?")[0] || "image.jpg";
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
};
</script>
