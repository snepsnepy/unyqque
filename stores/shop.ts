import { defineStore } from "pinia";
import type { ShopItem } from "~/types";

export const useShopStore = defineStore("shopStore", () => {
  const selectedItem = ref<ShopItem | null>(null);
  const shoppingCart = ref<Array<ShopItem>>([]);

  const selectItem = (item: ShopItem) => {
    selectedItem.value = item;
  };

  const addToCart = (item: ShopItem) => {
    shoppingCart.value.push({ ...item });
  };

  const removeItemByIndex = (index: number) => {
    shoppingCart.value.splice(index, 1);
  };

  return {
    selectedItem,
    selectItem,
    removeItemByIndex,
    shoppingCart,
    addToCart,
  };
});
