<script setup lang="ts">
import FrontendPanel from '~/components/skills/FrontendPanel.vue'
import BackendPanel from '~/components/skills/BackendPanel.vue'
import DBInfraPanel from '~/components/skills/DBInfraPanel.vue'
import ToolPanel from '~/components/skills/ToolPanel.vue'
import InterestPanel from '~/components/skills/InterestPanel.vue'

const title = ref('Skills')
useHead({
  title: title.value,
})
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>{{ title }}</h2>
    <div class="flex flex-column gap-5">
      <FrontendPanel />
      <BackendPanel />
      <DBInfraPanel />
      <ToolPanel />
      <InterestPanel />
    </div>
  </div>
</template>
