<script setup lang="ts">
const router = useRouter()
onMounted(() => {
  router.push('/login')
})
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-zinc-900 font-mono text-white">
    Hello, Pizza!
  </div>
</template>

<style scoped>

</style>
