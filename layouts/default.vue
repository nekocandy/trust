<script setup lang="ts">

</script>

<template>
  <div class="bg-[#AC67A5]" flex="~ col" h-screen gap-4 overflow-y-hidden font-serif>
    <Navbar />

    <div mx-auto max-w-5xl w-full flex-1 px-4 pb-2>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
