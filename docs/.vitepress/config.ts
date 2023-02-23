//@ts-nocheck
import { defineConfig } from 'vitepress';
import enhanceApp from './enhanceApp';

export default defineConfig({
  lang: 'id-ID',
  title: 'Auth0Vite',
  description: 'auth0 to vitepress',
  head: [
    [
      'meta',
      { name: 'robots', content:'noindex,nofollow' }
    ]
  ],

  themeConfig: {
    siteTitle: 'Auth0Vite',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: false,

    footer: {
      copyright: '<a href="https://donnimsifa.github.io">Copyright © 2023-present Donni Maulana Sifa</a>'
    }

  },
  enhanceApp
})