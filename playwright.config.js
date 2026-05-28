import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 1,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {

    baseURL: 'https://fakestoreapi.com',

    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    },

    trace: 'on-first-retry'

  }

});