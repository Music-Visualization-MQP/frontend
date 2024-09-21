import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    svelte({ hot: !process.env.VITEST }),
  ],
  test: {
    include: ['src/**/*.{test,spec}.ts'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ["./setupTests.js"],
    alias: {
      // "$app/forms": resolve('./.empty.js'),
    }
  }
})