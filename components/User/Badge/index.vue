<template>
  <BaseButton class="flex items-center gap-2 @container justify-center w-full">
    <div class="relative w-full max-w-10">
      <img src="../../../static/placeholders/User/avatar.png" alt="user" class="overflow-hidden rounded-full">
      <span class="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
    </div>
    <div class="@[150px]:flex h-full hidden w-full @[150px]:text-start @[150px]:justify-between items-center">
      <h5 class="text-lg font-semibold text-clear">
        Ahmed McGarry
      </h5>

      <BaseIcon
        icon="material-symbols:chevron-left-rounded"
        size="24"
        class="-rotate-90"
      />
    </div>
  </BaseButton>
</template>
