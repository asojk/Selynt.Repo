import type {Config} from 'tailwindcss'
import typography from '@tailwindcss/typography'
import animate from 'tailwindcss-animate'

export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Lato', 'serif'],
				sans: ['Inter', 'sans-serif']
			},
			colors: {
				"p": {
          DEFAULT: '#36454F',  // Primary color
          light: '#4B5A67',    // Slightly lighter variant
					dark: '#243038',     // Slightly darker variant
					"1": "#d0d7dd",
					"2": "#8e9fad",
					"3": "#607483",
					"4": "#43525c",
					"5": "#1e2529"
        },
        "s": {
          DEFAULT: '#AEE1CF',  // Secondary color
          light: '#D3F4E8',    // Lighter variant for backgrounds
					dark: '#7FBFA5',     // Darker variant for text or accents
					"2": "#5cb593",
					"3": "#3a8266",
					"4": "#224a3b"
        },
        "a": {
          DEFAULT: '#33B588',  // Alternative color
          light: '#4ECB9E',    // Lighter alternative for buttons or highlights
					dark: '#208664',     // Darker alternative for bolder CTAs
					"darker": "#224a3b"
        },
        "n": {
          light: '#F5F5F5',    // Light neutral for backgrounds
          dark: '#222222',     // Dark neutral for text
        },
				"g": {
					"50": "#fcfcfc",  //dcopy, content
					"100": "#f1f1f1", //bg
					"200": "#dfdfdf", //bg
					"300": "#cccccc",
					"400": "#aaaaaa", //border
					"500": "#898989",
					"600": "#707070",
					"700": "#5c5c5c",
					"800": "#454545", //dborder
					"900": "#1c1c1c", //dbg
					"b": "#090909", //copy
				},
			},
			boxShadow: {
				neu1: '10px 10px 20px #b3b3b3, -10px -10px 20px #ffffff',
				neu2: 'shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]'
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
			transitionOpacity: ['group-hover']
		}
	},
  plugins: [
    typography,
		animate,
	],
} satisfies Config
