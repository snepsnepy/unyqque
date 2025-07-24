<template>
  <div ref="container" :class="props.class">
    <Motion
      :initial="getInitial()"
      :while-in-view="getAnimate()"
      :transition="{
        duration: props.duration,
        ease: 'easeInOut',
        delay: props.delay,
      }"
      :viewport="{ once: true }"
    >
      <slot />
    </Motion>
  </div>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";

interface Props {
  duration?: number;
  delay?: number;
  blur?: string;
  yOffset?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 1,
  delay: 0.2,
  blur: "20px",
  yOffset: 20,
});

const container = ref(null);

function getInitial() {
  return {
    opacity: 0,
    filter: `blur(${props.blur})`,
    y: props.yOffset,
  };
}

function getAnimate() {
  return {
    opacity: 1,
    filter: `blur(0px)`,
    y: 0,
  };
}
</script>
