<template>
  <div class="flex flex-col gap-4 pb-4 border-b border-b-subtle">
    <BaseHeading tag="h1">
      <slot name="heading" />
    </BaseHeading>
    <p class="text-subtle">
      <slot name="description" />.
    </p>
  </div>
</template>
