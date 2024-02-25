<template>
  <div class="flex flex-col w-full min-h-screen bg-surface-bg" :class="{'dark': !isLightMode, 'pl-[320px]': navPanelOpen, 'pl-[100px]': !navPanelOpen}">
    <NavigationPanel />
    <main class="flex flex-col h-full px-8 grow">
      <NavigationHeader />
      <NuxtPage class="h-full grow" />
    </main>
  </div>
</template>

<script setup lang="ts">
const uiStore = useUiStore()
const { isLightMode, navPanelOpen } = storeToRefs(uiStore)

useHead({
  title: 'Jacked | Craft a Better You'
})
</script>
