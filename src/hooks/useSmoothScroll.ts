/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useRef } from 'react'

export const useSmoothScroll = () => {
	const requestRef = useRef<number>()
	const previousTimeRef = useRef<number>()
	const scrollContainerRef = useRef<HTMLElement | null>(null)
	const scrolling = useRef(false)
	const targetScrollY = useRef(0)
	const currentScrollY = useRef(0)

	const animate = (time: number) => {
		if (previousTimeRef.current !== undefined) {
			const container = scrollContainerRef.current

			if (container) {
				// Ease the scrolling
				currentScrollY.current += (targetScrollY.current - currentScrollY.current) * 0.1

				// Apply the transform
				container.style.transform = `translateY(${-currentScrollY.current}px)`

				// Check if we're close enough to stop animating
				if (Math.abs(targetScrollY.current - currentScrollY.current) < 0.1) {
					scrolling.current = false
					return
				}
			}
		}

		previousTimeRef.current = time
		requestRef.current = requestAnimationFrame(animate)
	}

	useEffect(() => {
		scrollContainerRef.current = document.getElementById('smooth-scroll-container')
		const container = scrollContainerRef.current

		if (!container) return

		const onScroll = () => {
			targetScrollY.current = window.scrollY
			if (!scrolling.current) {
				scrolling.current = true
				requestRef.current = requestAnimationFrame(animate)
			}
		}

		const setHeight = () => {
			document.body.style.height = `${container.scrollHeight}px`
		}

		setHeight()
		window.addEventListener('scroll', onScroll)
		window.addEventListener('resize', setHeight)

		return () => {
			window.removeEventListener('scroll', onScroll)
			window.removeEventListener('resize', setHeight)
			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current)
			}
		}
	}, [])
}
