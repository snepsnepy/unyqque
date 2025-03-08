<template>
  <dialog class="modal modal-open">
    <div
      class="modal-box bg-white/50 p-4 md:p-6 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md"
    >
      <div method="dialog">
        <button
          @click="emit('closeIconClicked')"
          class="btn btn-sm btn-circle btn-ghost text-neutral hover:text-white hover:bg-neutral/10 hover:border-none absolute right-4 top-4"
        >
          ✕
        </button>
      </div>

      <div class="flex flex-col gap-y-4 md:gap-y-4 pt-8">
        <h1>PRODUCT CART</h1>
        <div
          class="flex flex-col gap-y-2"
          v-for="(item, index) in shoppingCart"
          :key="index"
        >
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
          <p>{{ item.size }}</p>
        </div>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop bg-black/70">
      <button>close</button>
    </form>
  </dialog>
</template>

<script lang="ts" setup>
import { type ShopItem } from "@/types/index";

const emit = defineEmits(["closeIconClicked"]);

defineProps<{
  shoppingCart: Array<ShopItem>;
}>();
</script>
