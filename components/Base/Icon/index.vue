<template>
  <Icon :name="icon" :size="size" />
</template>

<script setup lang="ts">
interface IProps {
    icon: string,
    size?: string
}
defineProps<IProps>()
</script>
