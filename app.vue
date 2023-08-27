<script lang="ts" setup>
import { Notifications, Notivue } from 'notivue'
import { initWallet } from '@neko/wallet'

await initWallet(undefined, {
  name: 'True',
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
