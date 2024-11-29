import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import path from 'path'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	plugins: [
		react(),
		ViteImageOptimizer({
			includePublic: true,
			exclude: ['node_modules'],
			include: './src/assets/img',
			jpg: { quality: 70 },
			png: { quality: 80 },
			webp: { quality: 70, lossless: true },
			svg: { quality: 70 },
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		minify: 'terser',
		terserOptions: {
			format: {
				comments: false,
			},
		},
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString()
					}
				},
			},
		},
	},
})
