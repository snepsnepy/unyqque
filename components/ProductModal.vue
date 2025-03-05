<template>
  <dialog id="my_modal_3" class="modal">
    <div
      class="modal-box bg-white/50 p-4 md:p-6 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md"
    >
      <form method="dialog">
        <button
          class="btn btn-sm btn-circle btn-ghost text-neutral hover:text-white hover:bg-neutral/10 hover:border-none absolute right-4 top-4"
        >
          ✕
        </button>
      </form>

      <div class="flex flex-col gap-y-4 md:gap-y-4 pt-8">
        <!-- Product Image -->
        <div class="rounded-3xl">
          <img :src="store.selectedItem?.imgSrc" alt="product" />
        </div>

        <!-- Title, Price -->
        <div class="flex flex-col gap-y-2">
          <h4
            class="text-black font-montserrat text-xl md:text-2xl leading-6 font-semibold"
          >
            {{ store.selectedItem?.name }}
          </h4>
          <p class="text-black font-bold text-lg md:text-xl">
            {{ store.selectedItem?.price }}
            <span class="text-primary">RON</span>
          </p>
        </div>

        <!-- Descriere -->
        <div class="flex flex-col gap-y-2">
          <p class="font-montserrat font-medium text-black text-base leading-4">
            Description
          </p>
          <p class="text-neutral">
            Oversized tshirt 100% cotton oversized fit. We recomment ordering
            the same size as usual or a biffer one for the perfect fit.
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex gap-x-4 w-full">
          <div class="w-full">
            <button
              class="btn border-none shadow-none w-full py-4 px-2 bg-white/50 hover:bg-neutral/50 text-black hover:text-white font-montserrat rounded-xl"
            >
              Add to Cart
            </button>
          </div>
          <div class="w-fit">
            <button
              class="btn border-none whitespace-nowrap shadow-none w-full p-4 bg-primary hover:bg-primary-hover text-black hover:text-white font-montserrat rounded-xl"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script lang="ts" setup>
const store = useShopStore();
</script>

<style></style>
