<template>
  <header class="flex items-center justify-between w-full pt-12 pb-6 bg-surface-bg">
    <NavigationBreadcrumbs :links="breadcrumbs" />
    <div class="flex gap-4">
      <UserAvatar />
      <ThemeSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
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
