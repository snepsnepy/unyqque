<template>
  <div class="layout bg-white">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.layout {
  background-image: url("@/assets/img/munte.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: screen;
}
</style>
