<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { getFileContents } from '@neko/hedera-sdk'

const hederaData = useHederaClient()
const { params } = useRoute()

const markdown = new MarkdownIt()
const content = await getFileContents(hederaData, params.id as string)
</script>

<template>
  <div prose>
    <div v-html="markdown.render(content)" />
  </div>
</template>

<style scoped>

</style>
