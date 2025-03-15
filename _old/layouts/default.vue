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
  <AppFooter />
</template>

<style scoped lang="scss">
main {
  min-height: calc(100vh - 5rem - 6rem - 2rem);
  padding: 1rem;
}
</style>
