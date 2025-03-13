<template>
  <div class="flex flex-col gap-y-1 !h-20">
    <p class="text-neutral font-montserrat text-xs leading-3 font-medium">
      {{ label }} <span class="text-secondary">*</span>
    </p>
    <input
      class="w-full bg-white/50 text-neutral font-medium font-montserrat rounded-lg h-10 p-1 focus:outline-none"
      :class="{
        'border border-[#F72C5B]/50': modelValue && modelValue.length < 5,
        'border border-[#9EDF9C]': modelValue && modelValue.length > 4,
      }"
      type="text"
      minlength="5"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span
      v-if="modelValue && modelValue.length < 5"
      class="py-1 text-xs leading-3 text-[#F72C5B]/80"
      >Input must be at least 5 characters long.</span
    >
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: String, // This makes it work with v-model
});
defineEmits(["update:modelValue"]);
</script>
