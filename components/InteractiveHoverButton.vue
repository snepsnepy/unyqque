<template>
  <button
    ref="buttonRef"
    :class="
      cn(
        'group relative w-auto cursor-pointer overflow-hidden rounded-full border border-base-content bg-background p-2 px-6 text-center font-semibold',
        props.class
      )
    "
  >
    <div class="flex items-center gap-2">
      <div
        class="size-2 scale-100 rounded-lg bg-transparent hidden group-hover:inline-block group-hover:bg-base-content transition-all duration-300 group-hover:scale-[100.8]"
      ></div>
      <span
        class="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0"
      >
        {{ text }}
      </span>
    </div>

    <div
      class="absolute top-0 z-10 flex size-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100"
    >
      <span class="whitespace-nowrap text-black">{{ text }}</span>

      <Icon
        v-if="displayIcon"
        name="material-symbols:shopping-cart-checkout-rounded"
        class="w-6 h-6 bg-black"
      />
    </div>
  </button>
</template>

<script lang="ts" setup>
import { cn } from "@/utils/utils";
import { ref } from "vue";

interface Props {
  text?: string;
  class?: string;
  displayIcon?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  text: "Button",
});

const buttonRef = ref<HTMLButtonElement>();
</script>

<style></style>
