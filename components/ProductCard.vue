<template>
  <section
    class="flex flex-col rounded-3xl border border-base-content/10 gap-y-2 h-fit"
  >
    <div
      class="flex flex-col gap-y-4 bg-base-content/5 bg-clip-padding backdrop-filter backdrop-blur-md rounded-3xl p-4"
    >
      <p
        class="text-base-content text-center font-extrabold font-delight text-lg leading-4 md:text-3xl"
      >
        {{ product.name }}
      </p>

      <img :src="product.imgSrc" alt="product" class="w-full h-full" />

      <div class="flex flex-col gap-y-4 justify-between items-center p-2">
        <p
          class="font-extrabold text-base-content font-delight tracking-[1px] text-3xl pl-2"
        >
          {{ product.price }}
          <span class="text-primary-content text-sm font-bold font-delight"
            >RON</span
          >
        </p>

        <button
          class="btn bg-base-content border-none shadow-sm text-neutral text-sm md:text-base hover:text-neutral/80 font-delight font-light rounded-xl"
          @click="emit('shopIconClicked')"
        >
          Add to Cart
          <Icon
            name="material-symbols:shopping-cart-checkout-rounded"
            class="w-6 h-6 bg-neutral"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type ShopItem } from "@/types/index";

const emit = defineEmits(["shopIconClicked"]);

const props = defineProps<{
  product: ShopItem;
}>();

console.log(props.product.imgSrc);
</script>
