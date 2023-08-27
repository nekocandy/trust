/* eslint-disable n/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ssr: false,
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
    '@neko/hedera-utils': './magic/utils/index.ts',
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
  runtimeConfig: {
    hedera: {
      operator: {
        accountId: process.env.HEDERA_OPERATOR_ACCOUNT_ID,
        privateKey: process.env.HEDERA_OPERATOR_PRIVATE_KEY,
      },
      file: {
        publicKey: process.env.HEDERA_FILE_PUBLIC_KEY,
        privateKey: process.env.HEDERA_FILE_PRIVATE_KEY,
      },
    },

    public: {
      hedera: {
        operator: {
          accountId: process.env.HEDERA_OPERATOR_ACCOUNT_ID,
          privateKey: process.env.HEDERA_OPERATOR_PRIVATE_KEY,
        },
        file: {
          publicKey: process.env.HEDERA_FILE_PUBLIC_KEY,
          privateKey: process.env.HEDERA_FILE_PRIVATE_KEY,
        },
      },
    },
  },
})
