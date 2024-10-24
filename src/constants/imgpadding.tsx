/** @format */

import { useEffect } from 'react'

export const useImgPadding = (contentHeight: boolean = false): void => {
	useEffect(() => {
		const setImgPadding = () => {
			let padding
			if (window.innerWidth <= 768) {
				padding = contentHeight ? '0.5rem' : '0.25rem' // Small screens
			} else if (window.innerWidth <= 1024) {
				padding = contentHeight ? '1rem' : '2rem' // Medium screens
			} else {
				padding = contentHeight ? '2rem' : '4rem' // Large screens
			}
			document.documentElement.style.setProperty('--content-padding', padding)
		}

		setImgPadding()
		window.addEventListener('resize', setImgPadding)
		return () => window.removeEventListener('resize', setImgPadding)
	}, [contentHeight])
}
