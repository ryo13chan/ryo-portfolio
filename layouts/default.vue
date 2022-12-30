<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - Ryo's Portfolio` : "Ryo's Portfolio",
})
</script>

<template>
  <AppHeader />
  <main>
    <slot></slot>
  </main>
  <ScrollTop />
  <!-- <AppFooter /> -->
</template>

<style scoped lang="scss">
/* main {
  flex: 1;
  padding: 1rem;
} */
</style>
