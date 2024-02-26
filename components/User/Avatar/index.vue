<template>
  <div class="relative w-full max-w-10">
    <img v-if="user" src="../../../static/placeholders/User/avatar.png" alt="user" class="overflow-hidden rounded-full">
    <img v-else src="../../../static/placeholders/User/not-logged-in-avatar.png" alt="user" class="overflow-hidden rounded-full">
    <span class="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
</script>
