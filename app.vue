<script lang="ts" setup>
import { Notifications, Notivue } from 'notivue'
import { initWallet } from '@neko/hedera'

await initWallet(undefined, {
  name: 'True.',
  description: 'journalist go brrr',
  url: 'https://true.pycz.dev',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />

    <ClientOnly>
      <Notivue v-slot="item">
        <Notifications :item="item" />
      </Notivue>
    </ClientOnly>
  </NuxtLayout>
</template>
