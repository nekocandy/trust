<script setup lang="ts">
import { initWallet, userAccountId } from '@neko/wallet'
import { generateHederaURL, uploadToHedera } from '@neko/hedera-utils'
import { addToTopic, currentChunk, currentFileId, currentFileTransactionId, fileUploadTransactions, totalChunks } from '@neko/hedera-sdk'

const TOPIC_ID = '0.0.1075227'

const topicTxnId = ref<string | null>(null)
const hederaData = useHederaClient()
const uploading = ref(false)
const headline = ref('News')
const content = ref('# News')

await initWallet()

async function createPost() {
  uploading.value = true
  const articleId = nanoid()
  const fileData = await uploadToHedera(hederaData, content.value, articleId)

  const txnId = await addToTopic(
    hederaData,
    TOPIC_ID,
    JSON.stringify({
      headline: headline.value,
      fileId: fileData.fileId.fileId!.toString(),
      articleId,
    }),
  )

  topicTxnId.value = txnId
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
  <div v-if="!uploading" h-full flex-1 flex="~ col" gap-2>
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

  <div v-else v-auto-animate text-white>
    <div v-if="topicTxnId" flex items-center gap-2>
      <span font-bold text-lime>Source of Truth Topic Txn ID:</span>
      <a font-mono target="_blank" :href="generateHederaURL(topicTxnId)" underline> {{ topicTxnId }}</a>
    </div>
    <div v-if="fileUploadTransactions.length" v-auto-animate mt-4 h-60 pt-2>
      <h1 class="pb-2 text-2xl font-bold font-mono">
        Hedera Storage Txn Ids:
      </h1>
      <div v-for="transactionId in fileUploadTransactions" :key="transactionId" flex items-center gap-2 text-lg>
        <span font-bold text-lime>Txn ID:</span>
        <a font-mono target="_blank" :href="generateHederaURL(transactionId)" underline> {{ transactionId }}</a>
      </div>

      <NuxtLink class="my-4 w-fit flex items-center gap-4 rounded bg-lime px-4 py-2 font-bold text-black" :to="`/post/${currentFileId}`">
        Continue to post
        <div i-ooui-arrow-next-ltr />
      </NuxtLink>
    </div>
    <div v-else>
      Starting to upload <div i-eos-icons-loading />
    </div>
  </div>
</template>

<style scoped>

</style>
