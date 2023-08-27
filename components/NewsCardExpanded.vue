<script setup lang="ts">

</script>

<template>
  <div flex>
    <div class="bg-[#E4C1E1]" w-full flex flex-1 px-4 py-4>
      <div class="flex flex-col justify-between">
        <div>Some serious news headline that might take, upto two lines?</div>

        <div text-xs font-mono>
          posted 1 day ago
        </div>
      </div>

      <div class="bg-[#A3B28F] -mr-6 -rotate-90" mb-8 h-fit w-fit self-end rounded-t-md px-4 py-1 font-bold>
        @hello!
      </div>
      <div class="h-50 w-full bg-[url(/posts/train.png)] bg-cover bg-center bg-no-repeat pl-8" bg-red />
    </div>

    <div
      class="bg-[#443643] px-2 text-center text-3xl font-bold text-[#FEBB93]" style="writing-mode: vertical-lr;"
    >
      The True Daily.
    </div>
  </div>
</template>

<style scoped>

</style>
