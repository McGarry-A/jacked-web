<template>
  <li class="w-full rounded hover:bg-surface-elevation-high hover:font-bold hover:text-brand-strong" :class="[ isActive ? 'bg-surface-elevation-high font-semibold text-brand-strong' : 'text-subtle' ]">
    <NuxtLink
      :to="slug"
      :title="slug"
      class="flex items-center gap-4 p-2 rounded-lg cursor-pointer"
      :class="[navPanelOpen ? 'justify-start' : 'justify-center']"
      @click="action && action()"
    >
      <BaseIcon
        :icon="icon"
        class="text-2xl text-inherit"
      />

      <h5 v-if="navPanelOpen" class="transition-all text-md">
        {{ label }}
      </h5>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
interface IProps {
    icon: string,
    label: string,
    slug?: string,
    action?: () => void,
}

const props = defineProps<IProps>()
const uiStore = useUiStore()
const { navPanelOpen } = storeToRefs(uiStore)

const route = useRoute()

const isActive = computed(() => {
  if (route.path === props.slug) { return true }
  return false
})
</script>
