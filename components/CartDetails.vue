<template>
  <div class="flex flex-col gap-y-2 md:gap-y-4 pt-8">
    <!-- Cart Items -->
    <div
      class="flex flex-row gap-x-4 bg-base-content/20 rounded-3xl p-2 md:p-4 items-center"
      v-for="(item, index) in shoppingCart"
      :key="index"
    >
      <img :src="item.imgSrc" alt="product" class="w-24" />
      <div class="flex flex-col gap-y-6 w-full">
        <div class="flex flex-col gap-y-2">
          <p
            class="text-base-content font-delight font-semibold text-sm md:text-xl"
          >
            {{ item.name }}
          </p>
          <div class="flex flex-col gap-y-1 md:gap-x-1">
            <p
              class="text-neutral font-light font-delight text-xs leading-3 md:text-sm md:leading-[14px]"
            >
              <b class="font-semibold">Size</b>: {{ item.size }}
            </p>
            <p
              class="text-neutral font-light font-delight text-xs leading-3 md:text-sm md:leading-[14px]"
            >
              <b class="font-semibold">Color</b>: {{ item.color }}
            </p>
            <p
              class="text-neutral font-light font-delight text-xs leading-3 md:text-sm md:leading-[14px]"
            >
              <b class="font-semibold">Design Color</b>: {{ item.designColor }}
            </p>
          </div>
        </div>
        <p class="font-delight text-white font-semibold text-base md:text-xl">
          {{ item.price }} RON
        </p>
      </div>

      <!-- Inline Confirmation -->
      <div>
        <template v-if="confirmingIndex === index">
          <div
            class="flex flex-col gap-y-4 rounded-full bg-base-content/10 py-2 px-1"
          >
            <Icon
              @click="removeItemByIndex(index)"
              name="mingcute:delete-2-line"
              class="w-6 h-6 md:w-8 md:h-8 text-[#FF748B] hover:text-[#F72C5B] hover:cursor-pointer"
            />
            <Icon
              @click="confirmingIndex = null"
              name="iconoir:cancel"
              class="w-6 h-6 md:w-8 md:h-8 text-neutral/75 hover:text-neutral hover:cursor-pointer"
            />
          </div>
        </template>

        <Icon
          v-else
          @click="confirmingIndex = index"
          name="iconoir:delete-circle"
          class="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-[#FF748B] hover:text-[#F72C5B]"
        />
      </div>
    </div>

    <!-- Total Section -->
    <section class="flex flex-col gap-y-2 pt-2">
      <div class="flex justify-between items-center text-base-content">
        <p class="font-delight font-semibold text-sm md:text-base">Subtotal:</p>
        <p class="font-montserrat font-bold text-sm md:text-base">
          {{ subtotalPrice }} RON
        </p>
      </div>

      <div class="flex justify-between items-center text-base-content">
        <p class="font-delight font-semibold text-sm md:text-base">
          Shipping Fee:
        </p>
        <p class="font-delight font-bold text-sm md:text-base">
          {{ shippingPrice }} RON
        </p>
      </div>

      <div
        class="divider !my-0 !py-1 before:bg-base-content/20 after:bg-base-content/20"
      ></div>

      <div class="flex justify-between items-center text-base-content">
        <p class="font-delight font-semibold text-base md:text-xl">TOTAL:</p>
        <p class="font-delight font-semibold text-base md:text-xl">
          {{ subtotalPrice + shippingPrice }} RON
        </p>
      </div>
    </section>

    <!-- Proceed to Checkout -->
    <button
      @click="emit('proceededToCheckout')"
      class="btn border-none whitespace-nowrap font-delight font-light shadow-none w-full p-3.5 bg-primary hover:bg-base-content text-neutral hover:text-neutral disabled:!bg-white/20 disabled:text-black/50 rounded-xl"
    >
      Proceed to Checkout
    </button>

    <!-- Info Text -->
    <section class="flex flex-row gap-x-1 items-center">
      <Icon
        name="material-symbols:info-outline-rounded"
        class="text-base-content/60"
      />
      <p
        class="text-base-content/60 text-xs md:text-sm font-delight font-light"
      >
        Your order will be shipped within 5-7 days.
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { ShopItem } from "~/types";

const emit = defineEmits(["proceededToCheckout"]);

const props = defineProps<{
  shoppingCart: Array<ShopItem>;
}>();

const store = useShopStore();
const confirmingIndex = ref<number | null>(null); // Stores the index of item being confirmed
const shippingPrice = 20;

const subtotalPrice = computed(() => {
  return props.shoppingCart.reduce((total, item) => total + item.price, 0);
});

const removeItemByIndex = (index: number) => {
  store.removeItemByIndex(index);
  confirmingIndex.value = null; // Reset confirmation state
};
</script>
