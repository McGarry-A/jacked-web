<template>
  <li class="w-full  hover:bg-surface-elevation-low hover:font-bold hover:text-brand" :class="[ isActive ? 'bg-surface-elevation-low font-bold text-brand-strong' : 'text-subtle' ]">
    <NuxtLink :to="slug" :title="slug" class="flex items-center gap-4 p-2 rounded-lg" :class="[navPanelOpen ? 'justify-start' : 'justify-center']">
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
    slug: string
}

const props = defineProps<IProps>()
const uiStore = useUiStore()
const { navPanelOpen } = storeToRefs(uiStore)

const route = useRoute()
const isActive = ref(false)
const checkActive = () => {
  if (route.path === props.slug) { isActive.value = true }
}
onMounted(() => {
  checkActive()
})
</script>
