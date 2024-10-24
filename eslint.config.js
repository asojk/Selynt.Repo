/** @format */

import eslint from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
	eslint.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			'@typescript-eslint': tseslint,
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'react-refresh': reactRefreshPlugin,
			prettier: prettierPlugin,
		},
		languageOptions: {
			parser: tsParser,
			parserOptions: {
					ecmaVersion: 2021,
					sourceType: 'module',
					ecmaFeatures: {
							jsx: true,
					},
			},
			globals: {
					React: 'readonly',
					document: 'readonly',
					window: 'readonly',
					console: 'readonly',
					module: 'readonly',
					process: 'readonly',
					__dirname: 'readonly',  // Add this line
					__filename: 'readonly', // Add this line
			},
	},
		rules: {
			...tseslint.configs['recommended'].rules,
			...reactPlugin.configs['recommended'].rules,
			...reactHooksPlugin.configs['recommended'].rules,
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react-hooks/exhaustive-deps': 'warn',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'react/no-unescaped-entities': 'off',
			'no-undef': 'off',
			'react/prop-types': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	prettierConfig,
	{
		ignores: ['dist', '*.md', '**/*.html', '/history', './history', '../Selynt/**'],
	},
]
