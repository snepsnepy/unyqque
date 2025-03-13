<template>
  <dialog class="modal modal-open">
    <div
      class="modal-box bg-white/50 p-4 md:p-6 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md"
    >
      <div class="flex justify-between items-center">
        <h4
          v-if="!checkoutView"
          class="font-montserrat font-semibold text-xl text-neutral"
        >
          CART (<span v-if="shoppingCart.length < 10">0</span
          >{{ shoppingCart.length }})
        </h4>
        <h4 v-else class="font-montserrat font-semibold text-xl text-neutral">
          CHECKOUT
        </h4>
        <button
          @click="emit('closeIconClicked')"
          class="btn btn-sm btn-circle btn-ghost shadow-none border-neutral/50 hover:border-neutral text-neutral hover:text-white hover:bg-neutral/10 absolute right-4 top-4"
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
      <CartCheckout v-if="checkoutView" />
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
