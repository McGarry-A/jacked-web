<template>
  <component
    :is="component"
    :class="`${tag}`"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface IProps {
    tag: string
}

const props = defineProps<IProps>()

const component = resolveComponent(props.tag)
</script>
