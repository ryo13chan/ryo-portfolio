<script setup lang="ts">
useHead({ title: 'Home' })
</script>

<template>
  <div
    class="flex flex-col lg:flex-row justify-center items-center gap-8 min-h-[inherit]"
  >
    <div>
      <h1 class="text-5xl font-bold mb-8">
        Welcome to Ryo's Portfolio!
      </h1>
      <div class="leading-8">
        <p>はじめまして。</p>
        <p>
          Webエンジニアの<span class="font-bold text-xl">Ryo</span>と申します。
        </p>
        <p>当サイトはWebエンジニアとしてのポートフォリオです。</p>
        <p>是非ご覧下さい！</p>
      </div>
    </div>
    <NuxtImg
      src="icon.jpg"
      height="240"
      width="240"
      class="rounded-full"
    />
  </div>
</template>
