<template>
  <BaseButton class="flex items-center gap-2 @container justify-center @[100px]:justify-start">
    <div class="relative w-full max-w-14">
      <img src="../../../static/placeholders/User/avatar.png" alt="user" class="overflow-hidden rounded-full">
      <span class="absolute bottom-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full right-1" />
    </div>
    <div class="flex-col gap-1 @[150px]:flex h-full hidden w-full @[150px]:text-start @[150px]:justify-center">
      <h5 class="text-xl font-semibold leading-4 text-clear">
        Ahmed McGarry
      </h5>
      <p class="text-subtle">
        atomcgarry@gmail.com
      </p>
    </div>
  </BaseButton>
</template>
