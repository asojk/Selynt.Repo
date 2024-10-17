import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Icons from 'unplugin-icons/vite'
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer'

export default defineConfig({
	plugins: [
		ViteImageOptimizer({
			includePublic: true,
			include: './src/assets/img'
		}),

		react(),
		Icons({
			compiler: 'jsx',
			jsx: 'react'
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})
