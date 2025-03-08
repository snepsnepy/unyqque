<template>
  <!-- Products Cart -->
  <ProductsCart
    :shopping-cart="store.shoppingCart"
    class="hover:cursor-pointer"
    @click="openCartModal()"
  />

  <!-- Shop container -->
  <section
    class="grid grid-cols-1 md:grid-cols-2 no-scrollbar lg:grid-cols-3 gap-4 h-fit pb-4 overflow-scroll"
  >
    <ProductCard
      v-for="(item, index) in shopItems"
      :key="index"
      :product="item"
      @shop-icon-clicked="openProductModal(item)"
    />

    <!-- Modal -->
    <ProductModal
      @close-icon-clicked="closeProductModal"
      v-if="productModalOpen"
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
import bbs from "@/assets/img/bbs2.png";
import gold from "@/assets/img/gold.png";
import { type ShopItem } from "@/types/index";

definePageMeta({
  layout: "base",
});

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

const closeCartModal = () => {
  cartModalOpen.value = false;
};

const shopItems: Array<ShopItem> = [
  {
    name: "ANTI TDI",
    price: 175,
    imgSrc: bbs,
  },
  {
    name: "BBS RS",
    price: 160,
    imgSrc: bbs,
  },
  {
    name: "CIGARETTES",
    price: 175,
    imgSrc: bbs,
  },
  {
    name: "ANTI TDI",
    price: 175,
    imgSrc: bbs,
  },
];
</script>
