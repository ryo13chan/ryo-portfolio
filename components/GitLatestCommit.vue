<script setup lang="ts">
import dayjs from 'dayjs'

const gitStore = useGitStore()
const { getCommitData } = gitStore
const { commitDate, commitMessage, commitUrl } = storeToRefs(gitStore)
const date = computed(() => dayjs(commitDate.value).format('YYYY-MM-DD'))
const isShowNewLabel = computed(() => {
  if (!commitDate.value) return false
  // １週間以内
  return dayjs().subtract(7, 'day').isBefore(dayjs(commitDate.value))
})

try {
  await getCommitData()
} catch {
  console.error('Failed to get commit data')
}
</script>

<template>
  <div v-if="commitDate" class="flex-1 mr-2 lg:mr-0">
    <div class="flex align-items-center mb-2">
      <span class="mr-2">{{ date }}</span>
      <Tag v-if="isShowNewLabel" severity="info" value="New" />
    </div>
    <nuxt-link :href="commitUrl" target="_blank" class="message text-lg">
      {{ commitMessage }}
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
.message {
  &:hover {
    text-decoration: underline;
  }
}
</style>
