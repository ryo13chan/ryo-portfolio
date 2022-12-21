<script setup lang="ts">
const title = ref('Home')
useHead({
  title: title.value,
})

const router = useRouter()
const toAbout = () => router.push({ path: '/about' })
const toWorks = () => router.push({ path: '/works' })

const iconImageUrl = computed(
  () => new URL('../assets/images/icon.jpg', import.meta.url).href
)
</script>

<template>
  <div class="home">
    <div class="mx-5 mb-3 md:mb-0">
      <h1 class="text-5xl">Welcome to Ryo's Portfolio!</h1>
      <div>
        <p>はじめまして。</p>
        <p>
          Webエンジニアの<span class="font-bold text-xl">Ryo</span>と申します。
        </p>
        <p>当サイトはWebエンジニアとしてのポートフォリオです。</p>
        <p>是非ご覧下さい！</p>
      </div>
      <div class="flex">
        <Button label="自己紹介" class="mr-4" @click="toAbout" />
        <Button label="作品集" class="p-button-secondary" @click="toWorks" />
      </div>
    </div>
    <Avatar
      :image="iconImageUrl"
      class="mr-3 w-15rem h-15rem md:w-15rem md:h-15rem"
      shape="circle"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

.home {
  @include styleclass(
    'flex align-items-center justify-content-center flex-column md:flex-row'
  );

  height: calc(100vh - $header-height);
}
</style>
