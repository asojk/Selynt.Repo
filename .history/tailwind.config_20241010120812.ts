/** @format */

import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import animate from 'tailwindcss-animate'

export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Merriweather', 'serif'],
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#36454F', // Primary color
					light: '#4B5A67', // Slightly lighter variant
					dark: '#243038', // Slightly darker variant
				},
				secondary: {
					DEFAULT: '#AEE1CF', // Secondary color
					light: '#D3F4E8', // Lighter variant for backgrounds
					dark: '#7FBFA5', // Darker variant for text or accents
				},
				alternative: {
					DEFAULT: '#33B588', // Alternative color
					light: '#4ECB9E', // Lighter alternative for buttons or highlights
					dark: '#208664', // Darker alternative for bolder CTAs
				},
				g: {
					l: '#F5F5F5', // Light neutral for backgrounds
					d: '#222222',
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
					b: '#090909', //copy// Dark neutral for text
				},
				p: {
					'100': '#e6eaec',
					'200': '#d0d7dd',
					'300': '#bbc6cd',
					'400': '#a3b1bc',
					'500': '#8e9fad',
					'600': '#778c9b',
					'700': '#607483',
					'800': '#43525c',
					'900': '#1e2529',
				},
				s: {
					'100': '#b4ddcd',
					'200': '#5cb593',
					'300': '#3a8266',
					'400': '#224a3b',
				},
				accent: '#33B588',
				a: {
					'100': '#b6ddcb',
					'200': '#63b58e',
					'300': '#3e8262',
					'400': '#234b38',
				},
			},
			boxShadow: {
				neu1: '10px 10px 20px #b3b3b3, -10px -10px 20px #ffffff',
				neu2: 'shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]',
			},
			animation: {
				float: 'float 5s ease-in-out infinite',
				text: 'text 5s ease infinite',
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
	plugins: [typography, animate],
} satisfies Config
