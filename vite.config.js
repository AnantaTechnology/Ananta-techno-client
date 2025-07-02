// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // drei v8’s Stats still imports the old CJS path,
      // so redirect it to the ESM build:
      'three/examples/js/libs/stats.min':
        'three/examples/jsm/libs/stats.module.js',
    }
  },
  optimizeDeps: {
    // ensure Vite pre‑bundles the ESM stats module
    include: ['three/examples/jsm/libs/stats.module.js']
  }
})
