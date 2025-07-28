<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Set hero background image from Supabase when app loads
const { setHeroBgImage } = useSetHeroBgImage();

onMounted(() => {
  setHeroBgImage();
});
</script>
