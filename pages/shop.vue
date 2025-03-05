<template>
  <!-- Shop container -->
  <section
    class="grid grid-cols-1 md:grid-cols-2 no-scrollbar lg:grid-cols-3 gap-4 h-fit pb-4 overflow-scroll"
  >
    <ProductCard
      v-for="(item, index) in shopItems"
      :key="index"
      :product="item"
      @click="openModal(item)"
    />

    <!-- Modal -->
    <ProductModal />
  </section>
</template>

<script setup lang="ts">
import bbs from "@/assets/img/bbs2.png";
import gold from "@/assets/img/gold.png";
import { type ShopItem } from "@/types/index";

definePageMeta({
  layout: "base",
});

const store = useShopStore();
const modalOpened = ref(false);

const openModal = (item: ShopItem) => {
  store.selectItem(item);
  modalOpened.value = true;
};

const closeModal = () => {
  store.selectedItem = null;
  modalOpened.value = false;
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
