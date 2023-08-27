<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { getFileContents } from '@neko/hedera-sdk'
import { usePush } from 'notivue'

const push = usePush()
const hederaData = useHederaClient()
const { params } = useRoute()

const markdown = new MarkdownIt()
const content = await getFileContents(hederaData, params.id as string)

async function trustThis() {
  const promise = push.promise('storing information!')
  await new Promise(resolve => setTimeout(resolve, 2_000))

  promise.resolve('Thank you for helping us improve the platform!')
}
</script>

<template>
  <div flex="~ col" h-full w-full gap-4>
    <div flex-1 prose v-html="markdown.render(content)" />
    <div w-full flex items-center justify-center gap-4 pb-4>
      <button rounded bg-lime px-4 py-2 font-bold tracking-wide @click="trustThis()">
        I trust this
      </button>

      <button rounded bg-red px-4 py-2 font-bold tracking-wide @click="trustThis()">
        False Info
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
