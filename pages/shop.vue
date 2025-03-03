<template>
  <section class="flex flex-col flex-grow gap-8 h-dvh n container mx-auto">
    <!-- Navigation -->
    <Navigation />

    <!-- Logo Section -->
    <div class="flex justify-center w-full h-fit">
      <NuxtImg src="/img/logo.svg" alt="unyqque logo" class="w-24 md:w-44" />
    </div>

    <!-- Shop Container -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 no-scrollbar lg:grid-cols-3 gap-4 h-fit p-2 md:p-6 overflow-scroll"
    >
      <div
        v-for="(item, index) in shopItems"
        :key="index"
        @click="openModal(item)"
        ref="lastGalleryItem"
        class="flex flex-col bg-neutral rounded-3xl p-3 gap-y-2 h-fit"
      >
        <div class="bg-white rounded-3xl">
          <img :src="item.imgSrc" alt="bbs" />
        </div>
        <p
          class="text-white font-semibold font-montserrat text-sm leading-4 md:text-xl pt-2"
        >
          {{ item.name }} -
          <span class="text-primary font-bold tracking-[1px]">{{
            item.price
          }}</span>
          <b> RON</b>
        </p>
        <button
          class="btn bg-primary hover:bg-primary-hover text-neutral text-sm md:text-base hover:text-white font-montserrat rounded-xl mb-1"
          onclick="my_modal_3.showModal()"
        >
          Selecteaza produsul
        </button>
      </div>

      <!-- Modal -->
      <dialog id="my_modal_3" class="modal">
        <div class="modal-box bg-white p-4 md:p-6 rounded-2xl">
          <form method="dialog">
            <button
              class="btn btn-sm btn-circle btn-ghost text-neutral hover:text-primary-hover hover:bg-neutral/10 absolute right-2 top-2"
            >
              ✕
            </button>
          </form>

          <div class="flex flex-col gap-y-4 md:gap-y-6 pt-8">
            <!-- Product Image -->
            <div class="bg-primary/50 p-4 md:p-6 rounded-3xl">
              <img :src="store.selectedItem?.imgSrc" alt="product" />
            </div>

            <!-- Title, Price -->
            <div class="flex flex-col gap-y-2">
              <h4
                class="text-neutral font-montserrat text-xl md:text-2xl leading-6 font-semibold"
              >
                Tricou {{ store.selectedItem?.name }}
              </h4>
              <p class="text-neutral font-bold text-lg md:text-xl">
                {{ store.selectedItem?.price }}
                <span class="text-primary-hover">RON</span>
              </p>
              <div class="flex flex-col gap-y-2">
                <p
                  class="font-montserrat font-medium text-neutral text-base leading-4"
                >
                  Marime
                </p>
                <div class="flex gap-x-2 text-neutral w-full justify-between">
                  <span
                    class="rounded-full text-sm md:text-base border border-neutral h-fit p-1 px-2.5 md:p-2 md:px-4 hover:bg-primary/50 hover:cursor-pointer"
                    >S</span
                  >
                  <span
                    class="rounded-full border border-neutral h-fit p-1 px-2.5 md:p-2 md:px-4 hover:bg-primary/50 hover:cursor-pointer"
                    >M</span
                  >
                  <span
                    class="rounded-full border border-neutral h-fit p-1 px-2.5 md:p-2 md:px-4 hover:bg-primary/50 hover:cursor-pointer"
                    >L</span
                  >
                  <span
                    class="rounded-full border border-neutral h-fit p-1 px-2.5 md:p-2 md:px-4 hover:bg-primary/50 hover:cursor-pointer"
                    >XL</span
                  >
                  <span
                    class="rounded-full border border-neutral h-fit p-1 px-2.5 md:p-2 md:px-4 hover:bg-primary/50 hover:cursor-pointer"
                    >XXL</span
                  >
                </div>
              </div>
            </div>

            <!-- Descriere -->
            <div class="flex flex-col gap-y-2">
              <p
                class="font-montserrat font-medium text-neutral text-base leading-4"
              >
                Descriere
              </p>
              <p class="text-neutral/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                sapiente impedit est voluptatibus accusamus. Accusamus, aut eos
                corrupti modi perspiciatis dolor itaque molestias facere!
                Adipisci quaerat quibusdam explicabo temporibus ea?
              </p>
            </div>

            <!-- Buttons -->
            <div class="flex gap-x-4 w-full">
              <button
                class="btn border-none shadow-none w-full whitespace-nowrap py-1 px-2 bg-primary hover:bg-primary-hover text-neutral hover:text-white font-montserrat rounded-xl"
              >
                Cumpara acum
              </button>
            </div>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </section>
</template>

<script setup lang="ts">
import bbs from "@/assets/img/bbs.png";
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
    imgSrc: gold,
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
];
</script>
