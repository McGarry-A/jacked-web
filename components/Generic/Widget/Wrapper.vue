<template>
  <div class="w-full h-full min-h-[300px] rounded-lg bg-surface-elevation-low p-6 flex flex-col gap-2 shadow-md">
    <div class="flex justify-between pb-2 border-b border-subtle">
      <div class="flex flex-col gap-2">
        <BaseHeading tag="h2">
          <slot name="heading" />
        </BaseHeading>
        <p class="text-sm opacity-50 text-clear">
          <slot name="description" />
        </p>
      </div>

      <BaseButton>
        <BaseIcon icon="material-symbols:close-rounded" size="24" class="text-clear" />
      </BaseButton>
    </div>

    <slot />
  </div>
</template>
