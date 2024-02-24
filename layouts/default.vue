<template>
  <div class="flex h-full" :class="{'dark': !isLightMode}">
    <NavigationPanel />
    <main class="w-full">
      <NavigationHeader class="transition-all duration-150 bg-surface-bg" />
      <NuxtPage class="w-full h-full transition-all duration-150 bg-surface-bg" />
    </main>
  </div>
</template>

<script setup lang="ts">
const uiStore = useUiStore()
const { isLightMode } = storeToRefs(uiStore)
</script>
