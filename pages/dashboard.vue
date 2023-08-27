<script setup lang="ts">
import { getData } from '@neko/hedera-sdk'
</script>

<template>
  <div h-full flex flex-col gap-4>
    <div flex items-center justify-around gap-4>
      <Chip title="Active users:" :value="getData('active-users').toString()" />
      <Chip title="Posts Made:" :value="getData('posts-made').toString()" />
      <Chip title="All Posts:" :value="getData('all-posts').toString()" />
      <Chip title="Active Now:" :value="getData('active-now').toString()" />
      <Chip title="Transactions:" :value="getData('txn-total').toString()" />
    </div>
  </div>
</template>

<style scoped>

</style>
