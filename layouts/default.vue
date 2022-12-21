<script setup lang="ts">
/* eslint-disable no-undef */
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - Web Portfolio` : 'Web Portfolio',
})
</script>

<template>
  <!-- <AppHeader /> -->
  <main>
    <slot></slot>
  </main>
  <!-- <ScrollTop />
  <AppFooter /> -->
</template>

<style scoped lang="scss">
/* main {
  flex: 1;
  padding: 1rem;
} */
</style>
