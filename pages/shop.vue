<template>
  <!-- Products Cart -->
  <ProductsCartIcon
    v-if="store.shoppingCart.length"
    :shopping-cart="store.shoppingCart"
    class="hover:cursor-pointer"
    @click="openCartModal()"
  />

  <!-- Shop container -->
  <section
    class="grid grid-cols-1 md:grid-cols-2 no-scrollbar lg:grid-cols-3 gap-4 h-fit pb-4 overflow-scroll"
  >
    <ProductCard
      v-for="(item, index) in data"
      :key="index"
      :product="item"
      @shop-icon-clicked="openProductModal(item)"
    />

    <!-- Modal -->
    <ProductModal
      @close-icon-clicked="closeProductModal"
      v-if="productModalOpen"
      @buy-now-clicked="buyNowProduct()"
    />

    <!-- Products Cart Modal -->
    <ProductsCartModal
      :shopping-cart="store.shoppingCart"
      @close-icon-clicked="closeCartModal"
      v-if="cartModalOpen"
    />
  </section>
</template>

<script setup lang="ts">
import { type ShopItem } from "@/types/index";

definePageMeta({
  layout: "base",
});

const { $supabase } = useNuxtApp();
const { data } = await $supabase.from("products").select("*");

const productModalOpen = ref(false);
const cartModalOpen = ref(false);

const store = useShopStore();

const openProductModal = (item: ShopItem) => {
  productModalOpen.value = true;
  store.selectItem(item);
};

const closeProductModal = () => {
  productModalOpen.value = false;
  store.selectedItem = null;
};

const openCartModal = () => {
  cartModalOpen.value = true;
};

const buyNowProduct = () => {
  productModalOpen.value = false;
  store.addToCart(store.selectedItem!);
  openCartModal();
};

const closeCartModal = () => {
  cartModalOpen.value = false;
};
</script>
