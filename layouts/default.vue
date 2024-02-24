<template>
  <div class="flex h-full bg-surface-bg" :class="{'dark': !isLightMode}">
    <NavigationPanel />
    <main class="w-full px-8">
      <NavigationHeader class="" />
      <NuxtPage class="w-full h-full" />
    </main>
  </div>
</template>

<script setup lang="ts">
const uiStore = useUiStore()
const { isLightMode } = storeToRefs(uiStore)

useHead({
  title: 'Jacked | Craft a Better You'
})
</script>
