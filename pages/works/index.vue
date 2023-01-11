<script setup lang="ts">
import { Skill } from '~/components/SkillChip.vue'
import WorkCard from '~/components/works/WorkCard.vue'

const title = ref('Works')
useHead({
  title: title.value,
})

const webPortfolioSkills = ref<Skill[]>([
  {
    key: 'nuxtjs',
    label: 'Nuxt3',
  },
  {
    key: 'vuejs',
    label: 'Vue Composition API',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'primevue',
    label: 'PrimeVUE',
    noIcon: true,
  },
  {
    key: 'primeflex',
    label: 'PrimeFlex',
    noIcon: true,
  },
  {
    key: 'pinia',
    label: 'Pinia',
    noIcon: true,
  },
  {
    key: 'netlify',
    label: 'Netlify',
    noIcon: true,
  },
  {
    key: 'vitest',
    label: 'Vitest',
    noIcon: true,
  },
])

const ryoDashboardSkills = ref<Skill[]>([
  {
    key: 'react',
    label: 'React',
  },
  {
    key: 'nextjs',
    label: 'Next.js',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'chakraui',
    label: 'Chakra UI',
    noIcon: true,
  },
  {
    key: 'vercel',
    label: 'Vercel',
    noIcon: true,
  },
])

const mobilePortfolioSkills = ref<Skill[]>([
  {
    key: 'dart',
    label: 'Dart',
  },
  {
    key: 'flutter',
    label: 'Flutter',
  },
  {
    key: 'flutter',
    label: 'Flutter Web',
  },
  {
    key: 'github',
    label: 'Github Actions',
  },
  {
    key: 'github',
    label: 'Github Pages',
  },
])

const reserveSimulationSkills = ref<Skill[]>([
  {
    key: 'nuxtjs',
    label: 'Nuxt3',
  },
  {
    key: 'vuejs',
    label: 'Vue Composition API',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'primevue',
    label: 'PrimeVUE',
    noIcon: true,
  },
  {
    key: 'primeflex',
    label: 'PrimeFlex',
    noIcon: true,
  },
])

const newComicsSkills = ref<Skill[]>([
  {
    key: 'nuxtjs',
    label: 'Nuxt3',
  },
  {
    key: 'vuejs',
    label: 'Vue Composition API',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'primevue',
    label: 'PrimeVUE',
    noIcon: true,
  },
  {
    key: 'primeflex',
    label: 'PrimeFlex',
    noIcon: true,
  },
])

const blogSkills = ref<Skill[]>([
  {
    key: 'nuxtjs',
    label: 'Nuxt3',
  },
  {
    key: 'nuxtjs',
    label: 'Nuxt Content',
  },
  {
    key: 'vuejs',
    label: 'Vue Composition API',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'primevue',
    label: 'PrimeVUE',
    noIcon: true,
  },
  {
    key: 'primeflex',
    label: 'PrimeFlex',
    noIcon: true,
  },
])

const yesOrNoSkills = ref<Skill[]>([
  {
    key: 'react',
    label: 'React',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'chakraui',
    label: 'Chakra UI',
    noIcon: true,
  },
  {
    key: 'firestore',
    label: 'Firestore Database',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    key: 'hosting',
    label: 'Hosting',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
])

const twitterAdvancedSearchMakerSkills = ref<Skill[]>([
  {
    key: 'react',
    label: 'React',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'chakraui',
    label: 'Chakra UI',
    noIcon: true,
  },
  {
    key: 'netlify',
    label: 'Netlify',
    noIcon: true,
  },
])
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>{{ title }}</h2>
    <div class="grid">
      <div class="col-12 lg:col-6">
        <WorkCard
          image="web-portfolio.png"
          title="Web Portfolio"
          to="/"
          :skills="webPortfolioSkills"
          description="当サイトです。"
        />
      </div>

      <div class="col-12 lg:col-6">
        <WorkCard
          image="blog.png"
          title="Blog"
          to="/blog/article"
          :skills="blogSkills"
        >
          <template #content>
            <div>ブログ機能です。不定期で更新します。</div>
          </template>
        </WorkCard>
      </div>
      <div class="col-12 lg:col-6">
        <WorkCard
          image="reserve-simulation.png"
          title="積立シミュレーション"
          to="/works/reserve-simulation/"
          :skills="reserveSimulationSkills"
        >
          <template #content>
            <div>
              数値を入力して<span class="font-bold">最終積立金額</span>、<span
                class="font-bold"
                >積立期間</span
              >、<span class="font-bold">毎月積立金額</span
              >をシミュレートできます。
            </div>
            <div>積立の推移はチャートで確認できます。</div>
          </template>
        </WorkCard>
      </div>
      <div class="col-12 lg:col-6">
        <WorkCard
          image="new-comics.png"
          title="新刊コミック一覧"
          to="/works/new-comics/"
          :skills="newComicsSkills"
        >
          <template #content>
            <div>近日発売予定のコミックを確認できます。</div>
            <div>楽天の新刊コミックAPIを使用しています。</div>
          </template>
        </WorkCard>
      </div>

      <div class="col-12 lg:col-6">
        <WorkCard
          image="yes-or-no.png"
          title="Yes or No"
          href="https://yes-or-no-66adf.web.app/"
          target="_blank"
          :skills="yesOrNoSkills"
        >
          <template #content>
            <nuxt-link href="https://yesno.wtf/#api" target="_blank"
              >yesno.wtf</nuxt-link
            >
            <span
              >を使用し<span class="font-bold">Yes</span>か<span
                class="font-bold"
                >No</span
              >を表示します。</span
            >
            <span
              >1/10000で<span class="font-bold">Maybe</span
              >が表示されるらしいです。</span
            >
          </template>
        </WorkCard>
      </div>
      <div class="col-12 lg:col-6">
        <WorkCard
          image="twitter-advanced-search-maker.png"
          title="Twitter 高度な検索メーカー"
          href="https://twitter-advanced-search-maker.vercel.app"
          target="_blank"
          :skills="twitterAdvancedSearchMakerSkills"
        >
          <template #content
            >Twitterのコマンドによる検索を支援するフォームです。</template
          >
        </WorkCard>
      </div>
      <div class="col-12 lg:col-6">
        <WorkCard
          image="mobile-portfolio.png"
          title="Mobile Portfolio"
          href="https://ryo13chan.github.io/mobile-portfolio/"
          target="_blank"
          :skills="mobilePortfolioSkills"
          description="モバイルエンジニアとしてのポートフォリオサイトです。"
        />
      </div>
      <div class="col-12 lg:col-6">
        <WorkCard
          image="ryo-dashboard.png"
          title="Ryo Dashboard"
          href="https://ryo-dashboard.vercel.app/"
          target="_blank"
          :skills="ryoDashboardSkills"
          description="個人用のダッシュボードです。"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

.p-card {
  height: 100%;
}
</style>
