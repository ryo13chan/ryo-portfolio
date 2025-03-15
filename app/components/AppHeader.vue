<script setup lang="ts">
const menus: {
  key: string
  label: string
  to: string
} = [
  {
    key: 'home',
    label: 'Home',
    to: '/',
  },
  {
    key: 'about',
    label: 'About',
    to: '/about',
  },
  {
    key: 'works',
    label: 'Works',
    to: '/works',
  },
  {
    key: 'blog',
    label: 'Blog',
    to: '/blog',

  },
]
</script>

<template>
  <header class="sticky top-0 z-10 bg-white dark:bg-black">
    <div
      class="h-20 flex items-center justify-between shadow-md px-4"
    >
      <div class="flex gap-4 items-center">
        <NuxtLink to="/">
          <NuxtImg
            src="icon.jpg"
            height="64"
            width="64"
            class="rounded-full"
          />
        </NuxtLink>
        <span class="font-bold">Admin</span>
      </div>
      <span>{{ 'aaa' }}</span>
    </div>
  </header>
</template>
