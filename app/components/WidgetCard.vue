<template>
  <div class="bg-white rounded shadow p-4">
    <h2 class="text-lg font-semibold">{{ title }}</h2>
    <p>{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  value: string | number
}>()
</script>
