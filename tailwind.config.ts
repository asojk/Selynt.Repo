/** @format */

import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import animate from 'tailwindcss-animate'
import daisyui from 'daisyui'

export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Lato', 'serif'],
				sans: ['Inter', 'sans-serif'],
			},
			fontSize: {
				'heading-1': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
				'heading-2': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }],
				'heading-3': ['1.5rem', { lineHeight: '2rem', fontWeight: '500' }],
				body: ['1rem', { lineHeight: '1.5rem' }],
			},
			spacing: {
				'content-padding': 'var(--content-padding)',
			},
			colors: {
				p: {
					DEFAULT: '#36454F', // Primary color
					light: '#4B5A67', // Slightly lighter variant
					dark: '#243038', // Slightly darker variant
					'1': '#d0d7dd',
					'2': '#8e9fad',
					'3': '#607483',
					'4': '#43525c',
					'5': '#1e2529',
				},
				s: {
					DEFAULT: '#AEE1CF', // Secondary color
					light: '#D3F4E8', // Lighter variant for backgrounds
					dark: '#7FBFA5', // Darker variant for text or accents
					'2': '#5cb593',
					'3': '#3a8266',
					'4': '#224a3b',
				},
				a: {
					DEFAULT: '#33B588', // Alternative color
					light: '#4ECB9E', // Lighter alternative for buttons or highlights
					dark: '#208664', // Darker alternative for bolder CTAs
					darker: '#224a3b',
				},
				n: {
					light: '#F5F5F5', // Light neutral for backgrounds
					dark: '#222222',
					'1': '#fcfcfc', //dcopy, content
					'2': '#f1f1f1', //bg
					'3': '#dfdfdf', //bg
					'4': '#cccccc',
					'5': '#aaaaaa', //border
					'6': '#898989',
					'7': '#707070',
					'8': '#5c5c5c',
					'9': '#454545', //dborder
					'900': '#1c1c1c', //dbg
				},
				g: {
					'50': '#fcfcfc', //dcopy, content
					'100': '#f1f1f1', //bg
					'200': '#dfdfdf', //bg
					'300': '#cccccc',
					'400': '#aaaaaa', //border
					'500': '#898989',
					'600': '#707070',
					'700': '#5c5c5c',
					'800': '#454545', //dborder
					'900': '#1c1c1c', //dbg
					b: '#090909',
					code: '#292C33',
				},
			},
			boxShadow: {
				neu1: '10px 10px 20px #b3b3b3, -10px -10px 20px #ffffff',
				neu2: 'shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]',
				green: '1px 10px 100px 22px rgba(174, 225, 207, 0.8)',
				custom: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				'custom-dark': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
			},
			animation: {
				float: 'float 5s ease-in-out infinite',
				text: 'text 5s ease infinite',
					'pulse-slow': 'pulse 7s infinite',
			},
			keyframes: {
				float: {
					'0%': { transform: 'translate(-50%, 0)' },
					'50%': { transform: 'translate(-50%, 30px)' },
					'100%': { transform: 'translate(-50%, 0)' },
				},
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
			},
		},
	},
	variants: {
		extend: {
			opacity: ['group-hover'],
			transitionOpacity: ['group-hover'],
		},
	},
	plugins: [typography, animate, daisyui],
} satisfies Config
