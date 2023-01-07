<script setup lang="ts">
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'

const introductionCode = {
  名前: 'Ryo（りょう）',
  性別: '男',
  生年月日: '1992/10/20',
  出身地: '北海道',
  所在地: '北海道',
  好きなもの: ['お笑い', '漫画', 'ラジオ', 'YouTube', '散歩', 'サウナ'],
  仕事: {
    職業: 'Webエンジニア',
    得意: 'フロントエンド開発',
    その他: ['フリーランス', 'リモートワーク'],
  },
}
const highlightJSON = hljs.highlightAuto(
  JSON.stringify(introductionCode, null, '\t'),
  ['JSON']
).value
</script>

<template>
  <Card>
    <template #content>
      <pre v-html="highlightJSON" />
    </template>
  </Card>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

.p-component {
  @include styleclass('border-round-2xl');
}

::v-deep .p-card-body {
  @include styleclass('border-round-2xl surface-900');
}
</style>
