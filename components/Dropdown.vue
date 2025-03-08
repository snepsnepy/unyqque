<template>
  <div class="relative w-full">
    <!-- Dropdown Button -->
    <button
      @click="toggleDropdown"
      class="w-full flex justify-between items-center font-montserrat font-medium border-none px-2 py-2.5 border rounded-xl bg-white/50 text-black hover:bg-white/30 focus:outline-none"
    >
      <div class="flex gap-x-2 items-center">
        <div
          v-if="isColorPicker && selectedItem"
          class="w-6 h-6 rounded-full"
          :class="{
            'bg-white': selectedItem === 'White',
            'bg-black': selectedItem === 'Black',
          }"
        ></div>
        <p>{{ selectedItem || placeholder }}</p>
      </div>
      <Icon
        icon="mdi:chevron-up"
        class="w-5 h-5 text-black"
        :class="{
          'rotate-180 transition-transform duration-200': isOpen,
          'transition-transform duration-200': !isOpen,
        }"
      />
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      ref="dropdownRef"
      class="absolute w-full bottom-full bg-gray-200 rounded-b-lg shadow-lg z-10"
      :class="{
        'rounded-lg': isColorPicker,
      }"
    >
      <ul
        class="max-h-48 overflow-y-auto rounded-lg"
        :class="{
          'rounded-none': items[0] === '2XS',
        }"
      >
        <li
          v-for="item in items"
          :key="item"
          @click="selectItem(item)"
          class="px-4 py-2 hover:bg-primary-hover hover:text-white cursor-pointer text-neutral"
        >
          {{ item }}
        </li>
      </ul>

      <transition name="fade">
        <div
          v-if="isOpen && !isColorPicker"
          class="absolute bottom-full w-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-t-lg shadow-lg"
        >
          More sizes available
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { onClickOutside } from "@vueuse/core";

defineProps<{
  items: string[];
  placeholder?: string;
  isColorPicker?: boolean;
}>();

const productSize = defineModel<string>("productSize");
const productColor = defineModel<string>("productColor");

const dropdownRef = ref<HTMLElement | null>(null);

const selectedItem = ref<string>();
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectItem = (value: string) => {
  selectedItem.value = productSize.value = productColor.value = value;
  isOpen.value = false;
};

onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});
</script>
