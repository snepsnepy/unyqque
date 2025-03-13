import { defineStore } from "pinia";
import type { PersonalInfo, ShopItem } from "~/types";

export const useShopStore = defineStore("shopStore", () => {
  const selectedItem = ref<ShopItem | null>(null);
  const shoppingCart = ref<Array<ShopItem>>([]);
  const totalPrice = ref<number>();
  const personalInfo = ref<PersonalInfo>({
    fullName: "",
    address: "",
    cellPhoneNo: "",
    email: "",
  });

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
    totalPrice,
    personalInfo,
    addToCart,
  };
});
