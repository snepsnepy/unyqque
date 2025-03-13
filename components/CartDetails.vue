<template>
  <div class="flex flex-col gap-y-2 md:gap-y-4 pt-8">
    <!-- Cart Items -->
    <div
      class="flex flex-row gap-x-4 bg-white/50 rounded-3xl p-2 md:p-4 items-center"
      v-for="(item, index) in shoppingCart"
      :key="index"
    >
      <img :src="item.imgSrc" alt="product" class="w-24" />
      <div class="flex flex-col gap-y-6 w-full">
        <div class="flex flex-col gap-y-2">
          <p class="text-neutral font-montserrat font-bold text-sm md:text-xl">
            {{ item.name }}
          </p>
          <div class="flex flex-col md:flex-row gap-y-1 md:gap-x-1">
            <p
              class="text-neutral/50 font-montserrat font-medium text-xs md:text-sm"
            >
              Size: {{ item.size }},
            </p>
            <p
              class="text-neutral/50 font-montserrat font-medium text-xs md:text-sm"
            >
              Color: {{ item.color }}
            </p>
          </div>
        </div>
        <p class="font-montserrat text-white font-bold text-base md:text-xl">
          {{ item.price }} RON
        </p>
      </div>

      <!-- Inline Confirmation -->
      <div>
        <template v-if="confirmingIndex === index">
          <div class="flex flex-col gap-y-4 rounded-full bg-white/50 py-2 px-1">
            <Icon
              @click="removeItemByIndex(index)"
              name="mingcute:delete-2-line"
              class="w-6 h-6 md:w-8 md:h-8 text-[#FF748B] hover:text-[#F72C5B] hover:cursor-pointer"
            />
            <Icon
              @click="confirmingIndex = null"
              name="iconoir:cancel"
              class="w-6 h-6 md:w-8 md:h-8 text-neutral/50 hover:text-neutral hover:cursor-pointer"
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
      <div class="flex justify-between items-center text-neutral">
        <p class="font-montserrat font-semibold text-sm md:text-base">
          Subtotal:
        </p>
        <p class="font-montserrat font-bold text-sm md:text-base">
          {{ subtotalPrice }} RON
        </p>
      </div>

      <div class="flex justify-between items-center text-neutral">
        <p class="font-montserrat font-semibold text-sm md:text-base">
          Shipping Fee:
        </p>
        <p class="font-montserrat font-bold text-sm md:text-base">
          {{ shippingPrice }} RON
        </p>
      </div>

      <div
        class="divider !my-0 !py-1 before:bg-neutral/50 after:bg-neutral/50"
      ></div>

      <div class="flex justify-between items-center text-neutral">
        <p class="font-montserrat font-bold text-base md:text-xl">TOTAL:</p>
        <p class="font-montserrat font-bold text-base md:text-xl">
          {{ subtotalPrice + shippingPrice }} RON
        </p>
      </div>
    </section>

    <!-- Proceed to Checkout -->
    <button
      @click="emit('proceededToCheckout')"
      class="btn border-none whitespace-nowrap shadow-none w-full p-3.5 bg-primary hover:bg-primary-hover text-black hover:text-white disabled:!bg-white/20 disabled:text-black/50 font-montserrat rounded-xl"
    >
      Proceed to Checkout
    </button>

    <!-- Info Text -->
    <section class="flex flex-row gap-x-1 items-center">
      <Icon
        name="material-symbols:info-outline-rounded"
        class="text-neutral/70"
      />
      <p class="text-neutral/70 text-xs md:text-sm">
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
