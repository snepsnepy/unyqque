<template>
  <dialog class="modal modal-open">
    <div
      class="modal-box bg-base-content/20 p-4 md:p-6 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md"
    >
      <div class="flex justify-between items-center">
        <h4
          v-if="!checkoutView"
          class="font-delight font-semibold text-xl text-base-content"
        >
          CART (<span v-if="shoppingCart.length < 10">0</span
          >{{ shoppingCart.length }})
        </h4>
        <h4 v-else class="font-delight font-semibold text-xl text-base-content">
          CHECKOUT
        </h4>
        <button
          @click="emit('closeIconClicked')"
          class="btn btn-sm btn-circle btn-ghost shadow-none border-base-content hover:border-base-content text-base-content hover:text-base-content hover:bg-primary/20 absolute right-4 top-4"
        >
          ✕
        </button>
      </div>

      <!-- Cart Details -->
      <CartDetails
        v-if="!checkoutView"
        :shopping-cart="shoppingCart"
        @proceeded-to-checkout="toggleCheckoutView"
      />

      <!-- Checkout -->
      <CartCheckout
        v-if="checkoutView"
        @placed-order="emit('closeIconClicked')"
      />
    </div>

    <form method="dialog" class="modal-backdrop bg-neutral/50">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { useShopStore } from "@/stores/shop";
import { type ShopItem } from "@/types/index";

const emit = defineEmits(["closeIconClicked"]);

defineProps<{
  shoppingCart: Array<ShopItem>;
}>();

const store = useShopStore();

const checkoutView = ref(false);

const toggleCheckoutView = () => {
  checkoutView.value = true;
};

watch(
  () => store.shoppingCart,
  () => {
    if (store.shoppingCart.length === 0) emit("closeIconClicked");
  },
  { deep: true }
);
</script>
