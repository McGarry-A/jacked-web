<template>
  <aside
    class="@container fixed left-0 flex flex-col w-full max-h-screen p-4 gap-8 transition-all duration-150 ease-in-out bg-surface-elevation-low text-clear pt-12 h-full"
    :class="[navPanelOpen ? 'max-w-xs' : 'max-w-24']"
  >
    <BaseButton v-if="!navPanelOpen" class="py-2 rounded text-subtle bg-surface-elevation-high hover:font-bold" @click="toggleNavPanel()">
      <BaseIcon
        icon="material-symbols:arrow-forward"
        size="22"
      />
    </BaseButton>

    <div class="flex items-center justify-between w-full">
      <BaseLogo class="flex items-start w-full" :class="{ navPanelOpen: 'w-auto' }" />
      <BaseButton v-if="navPanelOpen" class="items-center justify-center p-2 rounded-lg bg-surface-elevation-high hidden @[100px]:flex" @click="toggleNavPanel()">
        <BaseIcon
          icon="material-symbols:arrow-back"
          size="22"
          class="text-subtle"
        />
      </BaseButton>
    </div>

    <div class="flex flex-col grow">
      <GenericList class="w-full gap-1 grow">
        <NavigationPanelItem v-for="item in listItems" :key="item.slug" :icon="item.icon" :label="item.label" :slug="item.slug" />
      </GenericList>

      <GenericList class="justify-end w-full py-6 border-y border-y-subtle">
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
