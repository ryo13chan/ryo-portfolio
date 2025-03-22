<script setup lang="ts">
const menus: {
  key: string
  label: string
  to: string
}[] = [
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
const route = useRoute()
const isActiveLink = (key: string): boolean => {
  switch (key) {
    case 'blog':
    case 'works':
      return route.path.startsWith(`/${key}`)
    default:
      return false
  }
}

const visibleSpMenu = ref<boolean>(false)
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
        <GitLatestCommit />
      </div>
      <nav>
        <!-- PC用メニュー -->
        <ul class="hidden lg:flex list-none gap-8">
          <li
            v-for="menu in menus"
            :key="menu.key"
          >
            <NuxtLink
              :to="menu.to"
              :class="{ 'router-link-active': isActiveLink(menu.key) }"
            >
              {{ menu.label }}
            </NuxtLink>
          </li>
        </ul>
        <!-- SP用メニューアイコン -->
        <Button
          icon="pi pi-bars"
          class="lg:hidden"
          severity="secondary"
          outlined
          @click="visibleSpMenu = !visibleSpMenu"
        />
        <!-- SP用メニュー -->
        <Drawer
          v-model:visible="visibleSpMenu"
          header=" "
          position="right"
        >
          <ul class="list-none">
            <li
              v-for="menu in menus"
              :key="menu.key"
              class="pb-4"
            >
              <NuxtLink :to="menu.to">
                {{ menu.label }}
              </NuxtLink>
            </li>
          </ul>
        </Drawer>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.router-link-active {
  text-decoration: underline;
  text-underline-offset: 8px;
}
</style>
