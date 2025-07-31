<template>
  <section
    class="flex flex-col flex-grow gap-8 h-dvh container mx-auto justify-center"
  >
    <div class="flex flex-col items-center justify-center gap-4 w-full">
      <div class="flex flex-col md:flex-row items-center text-center gap-2">
        <p
          class="text-base-content text-2xl md:text-6xl font-medium font-delight whitespace-nowrap"
        >
          phone<span class="font-black">:</span>
        </p>
        <a
          href="tel:+40738950590"
          class="text-base-content text-3xl leading-6 md:text-6xl font-delight font-medium whitespace-nowrap"
        >
          <span class="font-black">+</span>40 738 950 590
        </a>
      </div>

      <div class="flex flex-col md:flex-row items-center text-center gap-2">
        <p
          class="text-base-content text-2xl md:text-6xl font-medium font-delight whitespace-nowrap"
        >
          personal instagram<span class="font-black">:</span>
        </p>

        <LinkPreview url="https://www.instagram.com/nyqqu/">
          <p
            class="text-base-content text-3xl leading-6 md:text-6xl font-delight font-medium"
          >
            <span class="font-black">@</span>nyqqu
          </p>
        </LinkPreview>
      </div>

      <div class="flex flex-col md:flex-row items-center text-center gap-2">
        <p
          class="text-base-content text-2xl md:text-6xl font-medium font-delight whitespace-nowrap"
        >
          shop instagram<span class="font-black">:</span>
        </p>
        <LinkPreview url="https://www.instagram.com/unyqque/">
          <p
            class="text-base-content text-3xl leading-6 md:text-6xl font-delight font-medium"
          >
            <span class="font-black">@</span>unyqque
          </p>
        </LinkPreview>
      </div>
    </div>
  </section>

  <!-- Logo -->
  <div
    class="relative flex flex-col items-center justify-center h-[50px] pb-14"
  >
    <span
      class="absolute -top-12 text-xs font-delight font-medium text-base-content"
      >POWERED BY</span
    >
    <a href="https://www.linkedin.com/in/savulescumihnea/" target="_blank">
      <img
        src="@/assets/img/snep-09.svg"
        alt="snep-software"
        class="w-48 md:w-56"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base",
});
</script>
