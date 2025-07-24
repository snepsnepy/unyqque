<template>
  <dialog class="modal modal-open">
    <div
      class="modal-box bg-base-content/20 p-4 md:p-6 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md"
    >
      <div method="dialog">
        <button
          @click="emit('closeIconClicked')"
          class="btn btn-sm btn-circle btn-ghost hover:bg-transparent border-none hover:border-none text-2xl md:text-3xl shadow-none text-base-content hover:text-base-content/90 absolute right-4 top-4"
        >
          ✕
        </button>
      </div>

      <div class="flex flex-col gap-y-4 md:gap-y-4 pt-8">
        <!-- Product Image -->
        <div class="flex justify-center">
          <img :src="imageUrl" alt="product" class="w-2/3 h-2/3" />
        </div>

        <!-- Title, Price -->
        <div class="flex flex-col gap-y-2">
          <h4
            class="text-base-content font-delight text-xl md:text-3xl leading-6 font-semibold"
          >
            {{ store.selectedItem?.name }}
          </h4>
          <p class="text-white font-bold font-delight text-xl md:text-3xl">
            {{ store.selectedItem?.price }}
            <span class="text-primary-content text-sm font-delight">RON</span>
          </p>
        </div>

        <div class="flex flex-col gap-y-2 md:gap-4" v-if="store.selectedItem">
          <div class="flex flex-col md:flex-row gap-x-4 gap-y-2">
            <Dropdown
              :items="sizes"
              placeholder="Select a size"
              :is-color-picker="false"
              v-model:product-size="store.selectedItem!.size"
            />

            <Dropdown
              :items="colors"
              placeholder="Select a color"
              :is-color-picker="true"
              v-model:product-color="store.selectedItem!.color"
            />
          </div>

          <Dropdown
            :items="designColor!"
            :placeholder="designColorPlaceholder"
            :is-design-color-picker="true"
            :disabled="!store.selectedItem!.color || !designColor!.length"
            v-model:product-color="store.selectedItem!.designColor"
          />
        </div>

        <!-- Descriere -->
        <div class="flex flex-col gap-y-2">
          <p
            class="font-delight font-light text-base-content text-md leading-[14px] md:text-base md:leading-4"
          >
            Description
          </p>
          <p
            class="text-base-content/50 text-xs leading-[14px] font-delight font-light tracking-wider"
          >
            Oversized tshirt 100% cotton oversized fit. We recomment ordering
            the same size as usual or a biffer one for the perfect fit.
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col md:flex-row gap-x-4 gap-y-2 w-full">
          <div class="w-full">
            <button
              @click="addItemAndClose()"
              :disabled="!hasSelectedValues"
              class="btn border-none font-delight font-light shadow-none w-full py-3.5 px-2 bg-base-content/85 hover:bg-primary text-neutral hover:text-base-content disabled:!bg-white/20 disabled:text-black/50 rounded-xl"
            >
              Add to Cart
            </button>
          </div>
          <div class="w-full md:w-fit">
            <button
              @click="emit('buyNowClicked')"
              :disabled="!hasSelectedValues"
              class="btn border-none font-delight font-light whitespace-nowrap shadow-none w-full p-3.5 bg-primary hover:bg-base-content text-neutral hover:text-neutral disabled:!bg-white/20 disabled:text-black/50 rounded-xl"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop bg-neutral/50">
      <button>close</button>
    </form>
  </dialog>
</template>

<script lang="ts" setup>
const emit = defineEmits(["closeIconClicked", "buyNowClicked"]);
const store = useShopStore();

const { $supabase } = useNuxtApp();

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
const colors = ["Black", "White"];
const designColor = store.selectedItem?.designcolors;

const addItemAndClose = () => {
  store.addToCart(store.selectedItem!);
  emit("closeIconClicked");
};

const designColorPlaceholder = computed(() => {
  if (store.selectedItem!.color && !designColor!.length) {
    return "This product has no design colors";
  }

  return "Select a design color";
});

const hasSelectedValues = computed(() => {
  if (!store.selectedItem?.size || !store.selectedItem?.color) {
    return false;
  }

  // If product has design colors available, require one to be selected
  if (designColor && designColor.length > 0) {
    return !!store.selectedItem?.designColor;
  }

  // If no design colors available, don't require designColor selection
  return true;
});

const imageUrl = computed(() => {
  let fileName = "";

  if (store.selectedItem?.designColor) {
    fileName = `${
      store.selectedItem?.name
    }_${store.selectedItem?.color?.toLowerCase()}_${store.selectedItem?.designColor?.toLowerCase()}.png`;
  } else {
    fileName = `${store.selectedItem?.name}_default.png`;
  }

  const { data } = $supabase.storage.from("tshirts").getPublicUrl(fileName);

  store.selectedItem!.imgSrc = data.publicUrl;

  return data.publicUrl;
});
</script>
