<script setup lang="ts">
import { initWallet, isWalletAvailable, isWalletConnected } from '@neko/wallet'

definePageMeta({
  layout: 'login',
})

await initWallet()

consola.info('isWalletAvailable', isWalletAvailable)
</script>

<template>
  <div h-full w-full flex justify-center gap-4>
    <div class="flex flex-col items-start gap-8">
      <img class="h-24" src="~/assets/true.svg" alt="logo">
      <img h-48 src="~/assets/lines.svg" alt="">
      <div text-4xl underline class="text-[#393339]">
        Be your own journalist or some siht
      </div>
    </div>

    <div class="w-1/2" relative h-full flex items-center>
      <div class="-mr-20">
        <img src="~/assets/flower.svg" alt="">
      </div>
      <div class="border-[#443643] bg-[#E4C1E1]" h-full w-full flex flex-col items-center justify-center gap-4 border-2 rounded-md px-4 py-4>
        <div class="text-2xl">
          Login with your Hedera Wallet
        </div>

        <div>
          <button
            :disabled="isWalletConnected"
            class="rounded-md bg-[#443643] px-8 py-2 text-lg text-white disabled:(cursor-not-allowed opacity-50)"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
