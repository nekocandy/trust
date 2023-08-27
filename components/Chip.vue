<script setup lang="ts">
defineProps({
  title: String,
  value: String,
})
</script>

<template>
  <div class="bg-[#443643] text-[#FEBB93]" w-full flex items-center justify-center gap-2 rounded px-4 py-1 text-lg>
    <span>{{ $props.title }}</span>
    <span>{{ $props.value }}</span>
  </div>
</template>

<style scoped>

</style>
