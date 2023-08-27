<script setup lang="ts">
const LINKS = [
  {
    name: 'Create',
    href: '/create',
  },
  {
    name: 'NFT',
    href: '/nft',
  },
  {
    name: 'Profile',
    href: '/profile',
  },
]
</script>

<template>
  <div class="flex flex-col">
    <div h-4 class="bg-[#A3B28F]" />
    <div flex items-center justify-between px-6 py-1 class="bg-[#8C3F845E]">
      <NuxtLink to="/dashboard">
        <img class="h-12" src="~/assets/true.svg" alt="">
      </NuxtLink>
      <div>
        <input class="w-full border-2 border-[#443643] bg-transparent px-2 placeholder:(text-center) focus:outline-none" placeholder="Search /" rounded-full type="text">
      </div>
      <div flex gap-2>
        <NuxtLink v-for="link in LINKS" :key="link.href" :to="link.href">
          <div class="rounded-full px-4 py-2 text-white hover:(bg-[#443643])">
            {{ link.name }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
