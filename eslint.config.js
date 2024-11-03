import tsParser from '@typescript-eslint/parser'
import tseslint from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import eslint from '@eslint/js'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import prettierConfig from 'eslint-config-prettier'
import tailwindPlugin from 'eslint-plugin-tailwindcss'

export default [
	eslint.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
		plugins: {
			'@typescript-eslint': tseslint,
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'react-refresh': reactRefreshPlugin,
			prettier: prettierPlugin,
			tailwindcss: tailwindPlugin,
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
				__dirname: 'readonly',
				__filename: 'readonly',
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
			'prettier/prettier': 'error',
			'tailwindcss/classnames-order': 'warn',
			'tailwindcss/no-custom-classname': 'warn',
			'tailwindcss/no-contradicting-classname': 'error',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	prettierConfig,
	{

	},
]
