<template>
  <section
    class="flex flex-col rounded-3xl border border-neutral gap-y-2 h-fit"
  >
    <div
      class="flex flex-col gap-y-4 bg-white/50 bg-clip-padding backdrop-filter backdrop-blur-md rounded-3xl p-4"
    >
      <p
        class="text-black text-center font-extrabold font-montserrat text-lg leading-4 md:text-2xl"
      >
        {{ product.name }}
      </p>

      <img :src="product.imgSrc" alt="bbs" class="w-full h-full" />

      <div
        class="flex flex-row justify-between items-center bg-neutral/40 p-2 rounded-2xl"
      >
        <p class="font-extrabold text-white tracking-[1px] text-2xl pl-2">
          {{ product.price }}
          <span class="text-white text-sm font-bold font-montserrat">RON</span>
        </p>

        <button
          class="btn bg-primary hover:bg-primary-hover border-none shadow-sm text-neutral text-sm md:text-base hover:text-white font-montserrat rounded-xl"
          @click="emit('shopIconClicked')"
        >
          <Icon
            name="material-symbols:shopping-cart-checkout-rounded"
            class="w-6 h-6"
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
