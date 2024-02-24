<template>
  <header class="flex items-center justify-between w-full pt-12 pb-7 bg-surface-bg">
    <NavigationBreadcrumbs :links="breadcrumbs" />
    <ThemeSwitcher />
  </header>
</template>

<script setup lang="ts">
const breadcrumbs = [
  {
    label: 'Dashboard',
    slug: '/'
  },
  {
    label: 'Widgets',
    slug: '/'
  }
]
</script>
