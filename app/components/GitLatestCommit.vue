<script setup lang="ts">
const gitStore = useGitStore()
const { getCommitData } = gitStore
const { commitData } = storeToRefs(gitStore)

onMounted(() => getCommitData())

const dayjs = useDayjs()
const date = computed(() => dayjs(commitData.value?.commit.author.date).format('YYYY-MM-DD'))
const isShowNewLabel = computed(() => {
  if (!commitData.value) return false
  // １週間以内
  return dayjs().subtract(7, 'day').isBefore(date.value)
})
</script>

<template>
  <div v-if="commitData">
    <div class="flex items-center gap-2 mb-2">
      <span>{{ date }}</span>
      <Tag
        v-if="isShowNewLabel"
        severity="secondary"
        value="New"
      />
    </div>
    <NuxtLink
      :href="commitData.html_url"
      target="_blank"
      class="hover:underline hover:underline-offset-4 font-bold"
    >
      {{ commitData.commit.message }}
    </NuxtLink>
  </div>
</template>
