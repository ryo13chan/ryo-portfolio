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
    label: 'Nuxt4',
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
    key: 'tailwindcss',
    label: 'Tailwind CSS',
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

const chatGptTerminalSkills = ref<Skill[]>([
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
    key: 'openai-api',
    label: 'OpenAI API',
    noIcon: true,
  },
])

const openAiImageGeneratorSkills = ref<Skill[]>([
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
    key: 'openai-api',
    label: 'OpenAI API',
    noIcon: true,
  },
])

const workSkillOptions: Skill[] = Array.from(
  new Map(
    webPortfolioSkills.value
      .concat(
        ryoDashboardSkills.value,
        mobilePortfolioSkills.value,
        reserveSimulationSkills.value,
        newComicsSkills.value,
        blogSkills.value,
        yesOrNoSkills.value,
        twitterAdvancedSearchMakerSkills.value,
        chatGptTerminalSkills.value,
        openAiImageGeneratorSkills.value
      )
      .map((skill) => [skill.key, skill])
  ).values()
).sort((a, b) => a.key.localeCompare(b.key))
const selectedWorkSkills = ref<string[]>([])
const selectedWorkSkillOptionsKeys = computed(() => (skills: Skill[]) => {
  if (!selectedWorkSkills.value || !selectedWorkSkills.value.length) return true
  return skills.some((skill) => selectedWorkSkills.value.includes(skill.key))
})
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>{{ title }}</h2>
    <div class="flex justify-content-end">
      <MultiSelect
        v-model="selectedWorkSkills"
        :options="workSkillOptions"
        optionLabel="label"
        optionValue="key"
        placeholder="Skill"
        class="mb-2 w-full md:w-20rem"
      >
        <template #option="slotProps">
          <div class="flex align-items-center">
            <SkillChip :skill="slotProps.option" />
          </div>
        </template>
      </MultiSelect>
    </div>
    <div class="grid">
      <div
        v-show="selectedWorkSkillOptionsKeys(webPortfolioSkills)"
        class="col-12 lg:col-4 md:col-6"
      >
        <WorkCard
          image="web-portfolio.png"
          title="Web Portfolio"
          to="/"
          githubHref="https://github.com/ryo13chan/ryo-portfolio"
          :skills="webPortfolioSkills"
          description="当サイトです。"
        />
      </div>
      <div
        v-show="selectedWorkSkillOptionsKeys(blogSkills)"
        class="col-12 lg:col-4 md:col-6"
      >
        <WorkCard
          image="blog.png"
          title="Blog"
          href="https://ryo-blog-phi.vercel.app"
          target="_blank"
          :skills="blogSkills"
        >
          <template #content>
            <div>ブログ機能です。不定期で更新します。</div>
            <div>※2024/12 Nuxt4+Nuxt Contentで作り直しました</div>
          </template>
        </WorkCard>
      </div>
      <div
        v-show="selectedWorkSkillOptionsKeys(reserveSimulationSkills)"
        class="col-12 lg:col-4 md:col-6"
      >
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
      <div
        v-show="selectedWorkSkillOptionsKeys(newComicsSkills)"
        class="col-12 lg:col-4 md:col-6"
      >
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
      <div
        v-show="selectedWorkSkillOptionsKeys(yesOrNoSkills)"
        class="col-12 lg:col-4 md:col-6"
      >
        <WorkCard
          image="yes-or-no.png"
          title="Yes or No"
          href="https://yes-or-no-66adf.web.app/"
          target="_blank"
          githubHref="https://github.com/ryo13chan/yes-or-no"
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
      <div
        v-show="selectedWorkSkillOptionsKeys(twitterAdvancedSearchMakerSkills)"
        class="col-12 lg:col-4 md:col-6"
      >
        <WorkCard
          image="twitter-advanced-search-maker.png"
          title="Twitter 高度な検索メーカー"
          href="https://twitter-advanced-search-maker.vercel.app"
          target="_blank"
          githubHref="https://github.com/ryo13chan/twitter-advanced-search-maker"
          :skills="twitterAdvancedSearchMakerSkills"
        >
          <template #content
            >Twitterのコマンドによる検索を支援するフォームです。</template
          >
        </WorkCard>
      </div>
      <div
        v-show="selectedWorkSkillOptionsKeys(chatGptTerminalSkills)"
        class="col-12 lg:col-4 md:col-6"
      >
        <WorkCard
          image="chatgpt-terminal.png"
          title="ChatGPT Terminal"
          to="/works/chatgpt-terminal/"
          :skills="chatGptTerminalSkills"
        >
          <template #content>
            <div>
              対話形式で文章生成ができるターミナルのコンポーネントです。
            </div>
            <div>
              ChatGPTのモデル<span class="font-bold">gpt-3.5-turbo</span
              >を使用しています。
            </div>
          </template>
        </WorkCard>
      </div>
      <div
        v-show="selectedWorkSkillOptionsKeys(openAiImageGeneratorSkills)"
        class="col-12 lg:col-4 md:col-6"
      >
        <WorkCard
          image="open-ai-image-generator.png"
          title="OpenAI Image Generator"
          to="/works/open-ai-image-generator/"
          :skills="openAiImageGeneratorSkills"
          description="OpenAI APIを使用して画像を生成するアプリです。"
        />
      </div>
      <div
        v-show="selectedWorkSkillOptionsKeys(mobilePortfolioSkills)"
        class="col-12 lg:col-4 md:col-6"
      >
        <WorkCard
          image="mobile-portfolio.png"
          title="Mobile Portfolio"
          href="https://ryo13chan.github.io/mobile-portfolio/"
          target="_blank"
          githubHref="https://github.com/ryo13chan/mobile-portfolio"
          :skills="mobilePortfolioSkills"
        >
          <template #content>
            <div>モバイルエンジニアとしてのポートフォリオサイトです。</div>
            <div>※更新停止中</div>
          </template>
        </WorkCard>
      </div>
      <div
        v-show="selectedWorkSkillOptionsKeys(ryoDashboardSkills)"
        class="col-12 lg:col-4 md:col-6"
      >
        <WorkCard
          image="ryo-dashboard.png"
          title="Ryo Dashboard"
          :skills="ryoDashboardSkills"
          description="個人用のダッシュボードです。"
        >
          <template #content>
            <div>個人用のダッシュボードです。</div>
            <div>※非公開・更新停止中</div>
          </template>
        </WorkCard>
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
