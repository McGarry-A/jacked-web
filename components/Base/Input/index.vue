<template>
  <input
    class="bg-stone-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-brand focus:bg-stone-50"
    @input="$event => emit('updated', $event.target.value)"
  >
</template>

<script setup lang="ts">
const emit = defineEmits(['updated'])
</script>
