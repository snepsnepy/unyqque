<template>
  <div class="relative py-2 text-right">
    <div class="-top-1 absolute right-0.5">
      <p
        v-if="shoppingCart.length"
        class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white"
      >
        {{ shoppingCart.length }}
      </p>
    </div>
    <Icon name="solar:cart-outline" class="w-8 h-8 mr-3 text-neutral" />
  </div>
</template>

<script lang="ts" setup>
import { type ShopItem } from "@/types/index";

defineProps<{
  shoppingCart: Array<ShopItem>;
}>();
</script>
