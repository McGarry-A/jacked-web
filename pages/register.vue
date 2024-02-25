<template>
  <div class="flex w-screen h-screen">
    <div class="flex-1 w-full h-full bg-brand-strong">
      <div class="flex flex-col justify-between h-full px-4 py-12 dark">
        <BaseHeading tag="h1" class="text-clear">
          Jacked
        </BaseHeading>
        <BaseHeading tag="h3" class="text-lg text-clear text-balance">
          “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”
        </BaseHeading>
      </div>
    </div>
    <div class="flex-1 w-full h-full bg-surface-bg">
      <UserAuth />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Register'
})
definePageMeta({
  layout: 'basic'
})
</script>
