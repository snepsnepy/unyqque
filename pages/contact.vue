<template>
  <section
    class="flex flex-col flex-grow gap-8 h-dvh n container mx-auto justify-center"
  >
    <div class="flex flex-col items-center justify-center gap-4 w-full">
      <div
        class="flex flex-col md:flex-row justify-between items-center text-center gap-2 w-2/3"
      >
        <p
          class="text-base-content text-2xl md:text-4xl font-extrabold font-delight whitespace-nowrap"
        >
          PHONE:
        </p>
        <a
          href="tel:+40738950590"
          class="text-primary text-xl md:text-4xl font-delight font-semibold"
        >
          +40 738 950 590
        </a>
      </div>

      <div
        class="flex flex-col md:flex-row justify-between items-center text-center gap-2 w-2/3"
      >
        <p
          class="text-base-content text-2xl md:text-4xl font-extrabold font-delight whitespace-nowrap"
        >
          PERSONAL INSTAGRAM:
        </p>

        <LinkPreview url="https://www.instagram.com/nyqqu/">
          <p
            class="text-primary text-xl md:text-4xl font-delight font-semibold"
          >
            @nyqqu
          </p>
        </LinkPreview>
      </div>

      <div
        class="flex flex-col md:flex-row justify-between items-center text-center gap-2 w-2/3"
      >
        <p
          class="text-base-content text-2xl md:text-4xl font-extrabold font-delight whitespace-nowrap"
        >
          SHOP INSTAGRAM:
        </p>
        <LinkPreview url="https://www.instagram.com/unyqque/">
          <p
            class="text-primary text-xl md:text-4xl font-delight font-semibold"
          >
            @unyqque
          </p>
        </LinkPreview>
      </div>

      <div
        class="flex flex-col md:flex-row justify-between items-center text-center gap-2 w-2/3"
      >
        <p
          class="text-base-content text-2xl md:text-4xl font-extrabold font-delight whitespace-nowrap"
        >
          FACEBOOK:
        </p>
        <LinkPreview url="https://www.facebook.com/nyqqu">
          <p
            class="text-primary text-xl md:text-4xl font-delight font-semibold"
          >
            @nyqqu
          </p>
        </LinkPreview>
      </div>
    </div>
  </section>

  <!-- Logo -->
  <div
    class="relative flex flex-col md:flex-row items-center justify-center h-[50px] pb-10"
  >
    <span
      class="absolute -top-10 md:relative md:top-0 text-xs font-delight font-medium text-base-content"
      >POWERED BY</span
    >
    <img src="@/assets/img/snep-07.png" alt="snep-software" width="230" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base",
});
</script>
