<script setup lang="ts">
import dayjs from 'dayjs'

const title = ref('Blog')
useHead({
  title: title.value,
})

const tags = (tags: string[]) =>
  tags.map((tag: string) => blogTagData.find((tagData) => tagData.key === tag))

const createdAt = (date: Date) => dayjs(date).format('YYYY-MM-DD')
</script>

<template>
  <div class="mx-2 p-4 border-round-lg bg-white">
    <ContentDoc>
      <template #default="{ doc }">
        <div class="flex align-items-center mt-2">
          <i class="pi pi-calendar mr-1"></i>
          <div>{{ createdAt(doc.createdAt) }}</div>
        </div>
        <h1 class="mt-1">{{ doc.title }}</h1>
        <div v-if="doc.tags" class="flex align-items-center my-3">
          <i class="pi pi-tags mr-1"></i>
          <div class="tags">
            <BlogTag v-for="tag in tags(doc.tags)" :key="tag?.key" :tag="tag" />
          </div>
        </div>
        <img v-if="doc.thumbnail" :src="doc.thumbnail" class="thumbnail" />
        <ContentRenderer :value="doc" />
      </template>
      <template #empty />
      <template #not-found />
    </ContentDoc>
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

:deep(img) {
  max-width: 100%;
}

.thumbnail {
  @include styleclass('w-full max-h-25rem');

  object-fit: contain;
}

.tags {
  @include styleclass('flex flex-wrap gap-1');
}

:deep(a) {
  &:hover {
    text-decoration: underline;
  }
}

:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5) {
  a {
    color: var(--text-color);
  }
}

:deep(pre) {
  @include styleclass('p-2 surface-200 border-round-md');
}

:deep(p > code) {
  @include styleclass('px-2 py-1 surface-200 border-round-md');
}
</style>
