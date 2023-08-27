// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      script: [
        {
          children: 'window.global = globalThis || global',
        },
      ],
      title: 'opinionated nuxt',
      meta: [
        {
          name: 'description',
          content: 'an opinionated nuxt starter template',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/oink.svg',
        },
      ],
    },
  },

  modules: ['@vueuse/nuxt', '@unocss/nuxt'],
  css: [
    '@unocss/reset/tailwind.css',
    'notivue/notifications.css',
    'notivue/animations.css',
  ],
  vite: {
    define: {
      'window.global': 'globalThis',
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  },
  alias: {
    '@neko/wallet': './magic/wallet/index.ts',
    '@neko/hedera-sdk': './magic/sdk/index.ts',
  },
  imports: {
    imports: [
      {
        name: 'nanoid',
        from: 'nanoid',
      },
      {
        name: 'consola',
        from: 'consola',
      },
    ],
  },
})
