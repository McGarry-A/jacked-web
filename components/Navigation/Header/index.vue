<template>
  <header class="flex items-center justify-between w-full px-8 pt-12 bg-surface-bg">
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
