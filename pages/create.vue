<script setup lang="ts">
import { initWallet, userAccountId } from '@neko/wallet'
import { uploadToHedera } from '@neko/hedera-utils'
import { currentChunk, currentFileId, currentFileTransactionId, fileUploadTransactions, totalChunks } from '@neko/hedera-sdk'

const hederaData = useHederaClient()
const headline = ref('News')
const content = ref('# News')

await initWallet()

consola.info('hederaData', hederaData)
consola.info('content', userAccountId.value)

async function createPost() {
  const fileData = await uploadToHedera(hederaData, content.value, nanoid())
  consola.info('fileData', fileData)
}

onMounted(() => {
  totalChunks.value = 0
  currentChunk.value = 0
  currentFileId.value = null
  currentFileTransactionId.value = null
  fileUploadTransactions.value = []
})
</script>

<template>
  <div h-full flex-1 flex="~ col" gap-2>
    <h1 text-3xl font-bold text-white underline="~">
      Create Post!
    </h1>

    <input v-model="headline" type="text" w-full rounded-md px-4 py-2 text-sm class="focus:outline-none" placeholder="Headline">
    <div flex-1>
      <textarea
        v-model="content"
        h-full w-full resize-none rounded-md px-4 py-2 text-sm font-sans class="focus:outline-none"
      />
    </div>

    <div self-end>
      <button class="bg-[#1D6D77]" rounded px-4 py-2 text-white @click="createPost">
        Create!
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
