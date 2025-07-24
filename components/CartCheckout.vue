<template>
  <div class="flex flex-col gap-y-2 md:gap-y-8 pt-8">
    <h4
      class="text-base-content text-sm md:text-base md:leading-4 font-delight font-light tracking-wider"
    >
      Please fill out the form below. Enter your personal details.
    </h4>
    <div class="flex flex-col gap-y-2 md:gap-y-4">
      <BaseInput v-model="store.personalInfo.fullName" label="Full Name" />
      <BaseInput
        v-model="store.personalInfo.address"
        label="Full Address (Country, City, Street, Number)"
      />
      <BaseInput
        v-model="store.personalInfo.cellPhoneNo"
        label="Phone Number"
      />
      <BaseInput v-model="store.personalInfo.email" label="Email" />
    </div>

    <button
      class="btn border-none whitespace-nowrap shadow-none w-full p-3.5 bg-primary hover:bg-base-content text-neutral hover:text-neutral disabled:!bg-white/20 disabled:text-black/50 font-delight font-light rounded-xl"
      :disabled="!formFilled"
      @click="sendOrderViaWhatsApp"
    >
      <Icon name="ic:baseline-whatsapp" class="w-6 h-6" />
      Place Order
    </button>

    <!-- Info Text -->
    <section class="flex flex-row gap-x-1 items-start">
      <div>
        <Icon
          name="material-symbols:info-outline-rounded"
          class="text-base-content/60"
        />
      </div>
      <p
        class="text-base-content/60 text-xs md:text-sm w-full font-delight font-light tracking-wider"
      >
        After placing your order, you will be redirected to WhatsApp with a
        pre-filled message containing your order details. Please review the
        information and tap 'Send' to complete your request.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["placedOrder"]);

const store = useShopStore();
const { shoppingCart } = storeToRefs(store);

const formFilled = computed(() => {
  return (
    store.personalInfo.fullName.length > 4 &&
    store.personalInfo.address.length > 4 &&
    store.personalInfo.cellPhoneNo.length > 4 &&
    store.personalInfo.email.length > 4
  );
});

const sendOrderViaWhatsApp = () => {
  const whatsappLink = useGenerateWappLink(
    store.shoppingCart,
    store.personalInfo
  );
  window.open(whatsappLink, "_blank");
  shoppingCart.value = [];
};
</script>
