<template>
  <div class="flex flex-col gap-y-2 md:gap-y-8 pt-8">
    <h4 class="text-neutral text-sm md:text-base md:leading-4 font-montserrat">
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
      class="btn border-none whitespace-nowrap shadow-none w-full p-3.5 bg-primary hover:bg-primary-hover text-neutral hover:text-white disabled:!bg-white/20 disabled:text-neutral/50 font-montserrat rounded-xl"
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
          class="text-neutral/70"
        />
      </div>
      <p class="text-neutral/70 text-xs md:text-sm w-full">
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
