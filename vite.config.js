import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
  },
  base: '/ci-cd-github-page/',
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['lcov', 'text'],   // lcov is what SonarCloud reads
    },
  },
})
