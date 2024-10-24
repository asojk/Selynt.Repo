import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path'
import Icons from 'unplugin-icons/vite'
import react from '@vitejs/plugin-react'

// Use this if you need __dirname in an ES module context
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      includePublic: true,
      include: './src/assets/img',
    }),
    visualizer({
      open: true,
      filename: 'dist/stats.html',
    }),
    react(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})