/** @format */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
	plugins: [
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
