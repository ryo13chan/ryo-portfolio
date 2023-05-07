<script setup lang="ts">
import { Skill } from '~/components/SkillChip.vue'

const props = defineProps<{
  image: string
  title: string
  href?: string
  to?: string
  target?: string
  skills: Skill[]
  description?: string
  githubHref?: string
}>()

const openGithub = () => window.open(props.githubHref, '_blank')
</script>

<template>
  <Card class="border-round-2xl">
    <template #header>
      <nuxt-link :href="href" :to="to" :target="target">
        <img :src="image" class="p-2" />
      </nuxt-link>
    </template>
    <template #title>
      <div class="flex justify-content-between align-items-center mb-3">
        <nuxt-link :href="href" :to="to" :target="target" class="title">
          <span class="title-text">{{ title }}</span>
          <i v-if="href" class="pi pi-external-link ml-2"></i>
        </nuxt-link>
        <Button
          v-if="githubHref"
          icon="pi pi-github"
          class="p-button-rounded p-button-text p-button-lg"
          @click="openGithub"
        />
      </div>
    </template>
    <template #subtitle>
      <div class="skill-area">
        <SkillChip v-for="skill in skills" :key="skill.key" :skill="skill" />
      </div>
    </template>
    <template #content>
      <slot name="content">
        <div>{{ description }}</div>
      </slot>
    </template>
  </Card>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

.title {
  @include styleclass('flex align-items-center');

  &-text:hover {
    text-decoration: underline;
  }
}

.skill-area {
  @include styleclass('flex flex-wrap');

  gap: 0.5rem;
}
</style>
