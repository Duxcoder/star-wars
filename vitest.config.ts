/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    root: __dirname,
    include: ['./src/components/**/*.test.tsx'],
    setupFiles: ['./vitest-setup.ts'],
  },
});
