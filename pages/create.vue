<script setup lang="ts">
const content = ref('# News')
</script>

<template>
  <div h-full flex-1 flex="~ col" gap-2>
    <h1 text-3xl font-bold text-white underline="~">
      Create Post!
    </h1>

    <div flex-1>
      <textarea
        v-model="content"
        h-full w-full resize-none rounded-md px-4 py-2 text-sm font-sans class="focus:outline-none"
      />
    </div>

    <div self-end>
      <button rounded bg-pink px-4 py-2>
        Create!
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
