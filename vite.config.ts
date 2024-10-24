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
      exclude: ['node_modules'],
      include: './src/assets/img',
            jpg: {
              quality: 70,
            },
            png: {
              quality: 80,
            },
            webp: {
              quality: 70,
              lossless: true,
            },
            svg: {
              quality: 70,
            },
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