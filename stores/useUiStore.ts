export const useUiStore = defineStore('ui', () => {
  const navPanelOpen = ref<boolean>(true)
  const isLightMode = ref<boolean>(true)

  const toggleNavPanel = (): void => {
    navPanelOpen.value = !navPanelOpen.value
  }

  const toggleColorMode = (): void => {
    isLightMode.value = !isLightMode.value
  }

  return { toggleNavPanel, toggleColorMode, navPanelOpen, isLightMode }
})
