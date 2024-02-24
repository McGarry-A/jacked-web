<template>
  <BaseButton class="w-10 h-10 p-1 rounded-full bg-surface-elevation-low text-clear" @click="handleSwitchTheme()">
    <BaseIcon v-if="isLightMode" icon="material-symbols:mode-night" size="18" />
    <BaseIcon v-else icon="material-symbols:wb-sunny-rounded" size="18" />
  </BaseButton>
</template>

<script setup lang="ts">
const uiStore = useUiStore()
const { isLightMode } = storeToRefs(uiStore)
const handleSwitchTheme = uiStore.toggleColorMode
</script>
