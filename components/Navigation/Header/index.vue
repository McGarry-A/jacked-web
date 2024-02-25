<template>
  <header class="flex items-center justify-between w-full pt-12 pb-6 bg-surface-bg">
    <NavigationBreadcrumbs :links="breadcrumbs" />
    <div class="flex gap-4">
      <BaseButton class="bg-surface-elevation-low text-clear py-1 px-2.5 text-sm font-bold rounded" @click="userStore.signOut()">
        Log Out
      </BaseButton>
      <ThemeSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
const userStore = useUserStore()

const breadcrumbs = [
  {
    label: '💪🏽',
    slug: '/'
  },
  {
    label: 'Dashboard',
    slug: '/'
  }
]
</script>
