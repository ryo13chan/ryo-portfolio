<script setup lang="ts">
import { BlogTag } from '~/composables/blogTagData'

defineProps<{
  tag: BlogTag | undefined
}>()
</script>

<template>
  <Chip v-if="tag" class="blog-tag">
    <nuxt-link :to="`/blog/tag/${tag.key}`" class="p-1 text-color">
      <slot :tag="tag">{{ tag.label }}</slot>
    </nuxt-link>
  </Chip>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

.p-chip {
  height: 2rem;
  font-size: 0.9rem;

  &.blog-tag {
    &:hover {
      @include styleclass('bg-gray-400');
    }
  }
}
</style>
