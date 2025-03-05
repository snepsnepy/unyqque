<template>
  <section class="flex flex-col flex-grow gap-8 h-dvh n container mx-auto">
    <div class="flex flex-col items-center justify-center gap-4 w-full h-full">
      <div
        class="flex flex-col md:flex-row justify-between items-center text-center gap-2 w-2/3"
      >
        <p
          class="text-neutral text-lg md:text-4xl font-extrabold font-montserrat whitespace-nowrap"
        >
          PHONE:
        </p>
        <a
          href="tel:+40738950590"
          class="text-neutral text-lg md:text-4xl font-montserrat font-semibold"
        >
          +40 738 950 590
        </a>
      </div>

      <div
        class="flex flex-col md:flex-row justify-between items-center text-center gap-2 w-2/3"
      >
        <p
          class="text-neutral text-lg md:text-4xl font-extrabold font-montserrat whitespace-nowrap"
        >
          PERSONAL INSTAGRAM:
        </p>

        <LinkPreview url="https://www.instagram.com/nyqqu/">
          <p
            class="text-neutral text-lg md:text-4xl font-montserrat font-semibold"
          >
            @nyqqu
          </p>
        </LinkPreview>
      </div>

      <div
        class="flex flex-col md:flex-row justify-between items-center text-center gap-2 w-2/3"
      >
        <p
          class="text-neutral text-lg md:text-4xl font-extrabold font-montserrat whitespace-nowrap"
        >
          SHOP INSTAGRAM:
        </p>
        <LinkPreview url="https://www.instagram.com/unyqque/">
          <p
            class="text-neutral text-lg md:text-4xl font-montserrat font-semibold"
          >
            @unyqque
          </p>
        </LinkPreview>
      </div>

      <div
        class="flex flex-col md:flex-row justify-between items-center text-center gap-2 w-2/3"
      >
        <p
          class="text-neutral text-lg md:text-4xl font-extrabold font-montserrat whitespace-nowrap"
        >
          FACEBOOK:
        </p>
        <LinkPreview url="https://www.facebook.com/nyqqu">
          <p
            class="text-neutral text-lg md:text-4xl font-montserrat font-semibold"
          >
            @unyqque
          </p>
        </LinkPreview>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base",
});
</script>
