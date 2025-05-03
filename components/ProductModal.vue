<template>
  <dialog class="modal modal-open">
    <div
      class="modal-box bg-white/50 p-4 md:p-6 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md"
    >
      <div method="dialog">
        <button
          @click="emit('closeIconClicked')"
          class="btn btn-sm btn-circle btn-ghost shadow-none border-neutral/50 hover:border-neutral text-neutral hover:text-white hover:bg-neutral/10 absolute right-4 top-4"
        >
          ✕
        </button>
      </div>

      <div class="flex flex-col gap-y-4 md:gap-y-4 pt-8">
        <!-- Product Image -->
        <div class="rounded-3xl">
          <img :src="imageUrl" alt="product" />
        </div>

        <!-- Title, Price -->
        <div class="flex flex-col gap-y-2">
          <h4
            class="text-black font-montserrat text-xl md:text-2xl leading-6 font-semibold"
          >
            {{ store.selectedItem?.name }}
          </h4>
          <p class="text-white font-bold text-xl md:text-2xl">
            {{ store.selectedItem?.price }}
            <span class="text-black text-sm">RON</span>
          </p>
        </div>

        <div class="flex flex-col gap-4" v-if="store.selectedItem">
          <div class="flex flex-col md:flex-row gap-x-4 gap-y-4">
            <Dropdown
              :items="sizes"
              :placeholder="'Select a size'"
              :is-color-picker="false"
              v-model:product-size="store.selectedItem!.size"
            />

            <Dropdown
              :items="colors"
              :placeholder="'Select a color'"
              :is-color-picker="true"
              v-model:product-color="store.selectedItem!.color"
            />
          </div>

          <Dropdown
            :items="designColor"
            :placeholder="'Select a design color'"
            :is-design-color-picker="true"
            v-model:product-color="store.selectedItem!.designColor"
          />
        </div>

        <!-- Descriere -->
        <div class="flex flex-col gap-y-2">
          <p class="font-montserrat font-medium text-black text-base leading-4">
            Description
          </p>
          <p class="text-neutral text-sm leading-4">
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
              class="btn border-none shadow-none w-full py-3.5 px-2 bg-white/50 hover:bg-neutral/50 text-black hover:text-white disabled:!bg-white/20 disabled:text-black/50 font-montserrat rounded-xl"
            >
              Add to Cart
            </button>
          </div>
          <div class="w-full md:w-fit">
            <button
              :disabled="!hasSelectedValues"
              class="btn border-none whitespace-nowrap shadow-none w-full p-3.5 bg-primary hover:bg-primary-hover text-black hover:text-white disabled:!bg-white/20 disabled:text-black/50 font-montserrat rounded-xl"
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
const emit = defineEmits(["closeIconClicked"]);
const store = useShopStore();

const sizes = ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"];
const colors = ["Black", "White"];
const designColor = ["Green", "Pink", "Blue"];

const addItemAndClose = () => {
  store.addToCart(store.selectedItem!);
  emit("closeIconClicked");
};

const hasSelectedValues = computed(
  () => store.selectedItem?.size && store.selectedItem?.color
);

const { $supabase } = useNuxtApp();

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
