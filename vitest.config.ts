/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['./src/components/**/*.test.tsx'],
    setupFiles: ['./vitest-setup.js'],
  },
});
