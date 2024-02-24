<template>
  <div class="flex">
    <div v-for="(item, index) in links" :key="item.slug" class="text-sm text-subtle ">
      <NuxtLink :to="item.slug" :class="[index === 0 ? 'pr-3' : 'px-3']" class="transition-all duration-150 hover:text-brand">
        {{ item.label }}
      </NuxtLink>
      <span v-if="links[index+1]" class="">></span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
    links: {
        label: string,
        slug: string
    }[]
}

defineProps<IProps>()
</script>
