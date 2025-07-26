<template>
  <section
    class="flex flex-col flex-grow gap-8 h-dvh container mx-auto justify-center"
  >
    <div class="flex flex-col items-center justify-center gap-4 w-full">
      <div class="flex flex-col md:flex-row items-center text-center gap-2">
        <p
          class="text-base-content text-2xl md:text-6xl font-medium font-delight whitespace-nowrap"
        >
          phone:
        </p>
        <a
          href="tel:+40738950590"
          class="text-base-content text-3xl leading-6 md:text-6xl font-delight font-black whitespace-nowrap"
        >
          +40 738 950 590
        </a>
      </div>

      <div class="flex flex-col md:flex-row items-center text-center gap-2">
        <p
          class="text-base-content text-2xl md:text-6xl font-medium font-delight whitespace-nowrap"
        >
          personal instagram:
        </p>

        <LinkPreview url="https://www.instagram.com/nyqqu/">
          <p
            class="text-base-content text-3xl leading-6 md:text-6xl font-delight font-black"
          >
            @nyqqu
          </p>
        </LinkPreview>
      </div>

      <div class="flex flex-col md:flex-row items-center text-center gap-2">
        <p
          class="text-base-content text-2xl md:text-6xl font-medium font-delight whitespace-nowrap"
        >
          shop instagram:
        </p>
        <LinkPreview url="https://www.instagram.com/unyqque/">
          <p
            class="text-base-content text-3xl leading-6 md:text-6xl font-delight font-black"
          >
            @unyqque
          </p>
        </LinkPreview>
      </div>
    </div>
  </section>

  <!-- Logo -->
  <div
    class="relative flex flex-col items-center justify-center h-[50px] pb-10"
  >
    <span
      class="absolute -top-10 md:relative md:top-0 text-xs font-delight font-black text-base-content"
      >POWERED BY</span
    >
    <img src="@/assets/img/snep-09.svg" alt="snep-software" class="w-48" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base",
});
</script>
