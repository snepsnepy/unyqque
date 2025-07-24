<template>
  <component
    :is="as"
    class="shadow-color"
    :class="
      cn(
        'relative z-0 inline-block',
        'after:absolute after:left-[0.1em] after:top-[0.1em] after:-z-10',
        'after:bg-[linear-gradient(45deg,transparent_30%,var(--shadow-color)_30%,var(--shadow-color)_70%,transparent_70%)]',
        'after:bg-[length:0.15em_0.15em]',
        'after:content-[attr(data-text)]',
        'animate-line-shadow',
        props.class
      )
    "
    :data-text="content"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { cn } from "@/utils/utils";

interface LineShadowTextProps {
  shadowColor?: string;
  as?: string;
  class?: string;
  content?: string;
}

const props = withDefaults(defineProps<LineShadowTextProps>(), {
  shadowColor: "black",
  as: "span",
});

// Get content from slot if not provided as prop
const slots = useSlots();
const content = computed(() => {
  if (props.content) return props.content;

  // Try to extract text from slot
  const slotContent = slots.default?.();
  if (slotContent && slotContent[0]?.children) {
    return typeof slotContent[0].children === "string"
      ? slotContent[0].children
      : "";
  }
  return "";
});

// Optional: warn if no content found
// if (!content.value) {
//   console.warn("LineShadowText: No text content found");
// }
</script>

<style scoped>
.shadow-color {
  --shadow-color: v-bind(props.shadowColor);
}

.animate-line-shadow::after {
  animation: line-shadow 15s linear infinite;
}

@keyframes line-shadow {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% -100%;
  }
}
</style>
