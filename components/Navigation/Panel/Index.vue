<template>
  <aside
    class="@container relative flex flex-col w-full h-full min-h-screen gap-8 transition-all duration-300 ease-in-out border shadow-lg bg-surface-bg text-clear pt-12"
    :class="[navPanelOpen ? 'max-w-xs p-4' : 'max-w-24 p-0']"
  >
    <BaseButton v-if="!navPanelOpen" class="py-2 hover:bg-surface-elevation-low hover:font-bold" @click="toggleNavPanel()">
      <BaseIcon
        icon="material-symbols:arrow-forward"
        size="22"
        class="text-subtle"
      />
    </BaseButton>

    <div class="flex items-center justify-between w-full">
      <BaseLogo class="flex items-start w-full @[150px]:w-auto" />
      <BaseButton class="items-center justify-center p-1 rounded-lg bg-surface-elevation-low hidden @[100px]:flex" @click="toggleNavPanel()">
        <BaseIcon
          icon="material-symbols:arrow-back"
          size="22"
          class="text-subtle"
        />
      </BaseButton>
    </div>

    <div class="flex flex-col grow">
      <GenericList class="w-full grow">
        <NavigationPanelItem v-for="item in listItems" :key="item.slug" :icon="item.icon" :label="item.label" :slug="item.slug" />
      </GenericList>

      <GenericList class="justify-end w-full py-6 border-y border-y-subtle/50">
        <NavigationPanelItem v-for="item in secondaryListItems" :key="item.slug" :icon="item.icon" :label="item.label" :slug="item.slug" />
      </GenericList>
    </div>

    <UserBadge class="pb-6" />
  </aside>
</template>

<script setup lang="ts">
import { listItems, secondaryListItems } from '@/config/NavigationPanel'

defineOptions({
  name: 'NavigationPanel'
})

const uiStore = useUiStore()
const { navPanelOpen } = storeToRefs(uiStore)
const toggleNavPanel = uiStore.toggleNavPanel
</script>
