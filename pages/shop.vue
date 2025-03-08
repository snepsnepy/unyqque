<template>
  <!-- Shop container -->
  <div class="relative py-2 text-right">
    <div class="-top-1.5 absolute right-0">
      <p
        v-if="store.shoppingCart.length"
        class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white"
      >
        {{ store.shoppingCart.length }}
      </p>
    </div>
    <Icon name="solar:cart-outline" class="w-8 h-8 mr-3 text-neutral" />
  </div>

  <section
    class="grid grid-cols-1 md:grid-cols-2 no-scrollbar lg:grid-cols-3 gap-4 h-fit pb-4 overflow-scroll"
  >
    <ProductCard
      v-for="(item, index) in shopItems"
      :key="index"
      :product="item"
      @shop-icon-clicked="openModal(item)"
    />

    <!-- Modal -->
    <ProductModal @close-icon-clicked="closeModal" v-if="modalOpen" />
  </section>
</template>

<script setup lang="ts">
import bbs from "@/assets/img/bbs2.png";
import gold from "@/assets/img/gold.png";
import { type ShopItem } from "@/types/index";

definePageMeta({
  layout: "base",
});

const modalOpen = ref(false);

const store = useShopStore();

const openModal = (item: ShopItem) => {
  modalOpen.value = true;
  store.selectItem(item);
};

const closeModal = () => {
  modalOpen.value = false;
  store.selectedItem = null;
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
