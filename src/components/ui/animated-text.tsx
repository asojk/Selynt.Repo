/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useMemo, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Splitting from 'splitting'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import useWindowSize from '../../hooks/useWindowSize'

gsap.registerPlugin(ScrollTrigger)

const AnimatedLetter: React.FC<{
	char: string
	id: string
	smoothScrollYProgress: any
	start: number
	mid: number
	end: number
	letterIndex: number
	className: string
}> = React.memo(({ char, id, smoothScrollYProgress, start, mid, end, letterIndex, className }) => {
	const opacity = useTransform(smoothScrollYProgress, [start, mid, end], [0, 1, 1])
	const y = useTransform(smoothScrollYProgress, [start, mid, end], [30, -10, 0])
	const x = useTransform(smoothScrollYProgress, [start, mid, end], [0, letterIndex % 2 === 0 ? 1 : -2, 0])

	const letterRef = useRef<HTMLSpanElement>(null)

	useEffect(() => {
		if (letterRef.current) {
			gsap.to(letterRef.current, {
				scrollTrigger: {
					trigger: letterRef.current,
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: true,
				},
				color: 'var(--color-s)',
				scale: 1.45,
				duration: 0.3,
				ease: 'power5.out',
			})
		}
	}, [])

	return (
		<motion.span ref={letterRef} key={id} className={`${className} char`} style={{ opacity, y, x }}>
			{char === ' ' ? '\u00A0' : char}
		</motion.span>
	)
})

const WaveScrollAnimation: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const { width } = useWindowSize()

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	})

	const smoothScrollYProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	})

	useEffect(() => {
		if (containerRef.current) {
			const results = Splitting({ target: containerRef.current, by: 'chars' })
			const highlightedChars = results[0]?.chars

			if (highlightedChars && highlightedChars.length > 0) {
				const animationDefaults = {
					duration: 0.3,
					ease: 'power2.inOut',
				}

				ScrollTrigger.create({
					trigger: containerRef.current,
					start: 'top 70%', // Start when the top of the container reaches 70% of the viewport height
					end: 'bottom 30%', // End when the bottom of the container reaches 30% of the viewport height
					onEnter: () => animateChars(),
					onEnterBack: () => animateChars(),
					onLeave: () => resetChars(),
					onLeaveBack: () => resetChars(),
				})

				const animateChars = () => {
					gsap
						.timeline({ defaults: animationDefaults })
						.set(highlightedChars, { willChange: 'transform, opacity, color' })
						.to(highlightedChars, {
							stagger: 0.05,
							scale: 1.45,
							color: 'var(--color-s)',
						})
						.to(
							highlightedChars,
							{
								duration: 0.3,
								ease: 'sine',
								stagger: 0.05,
								scale: 1,
								color: 'var(--color-a-dark)',
							},
							animationDefaults.duration
						)
				}

				const resetChars = () => {
					gsap.killTweensOf(highlightedChars)
					gsap.set(highlightedChars, {
						scale: 1,
						color: 'var(--color-a)',
					})
				}
			}
		}
	}, [width])

	const textLine1 = ['Ethics over trends']
	const textLine2 = ['& principles over profit']

	const splitIntoWords = (line: string) =>
		line.split(' ').map((word, wordIndex) => ({
			word,
			id: `word-${wordIndex}`,
		}))

	const splitIntoLetters = (word: string) =>
		word.split('').map((char, charIndex) => ({
			char,
			id: `char-${charIndex}`,
		}))

	const renderLine = useMemo(
		() => (line: string, lineIndex: number, className: string) => (
			<motion.div key={lineIndex} className="flex justify-center overflow-hidden" style={{ display: 'inline-flex' }}>
				{splitIntoWords(line).map(({ word, id: wordId }, wordIndex) => (
					<span
						key={wordId}
						style={{
							display: 'inline-flex',
							marginRight: wordIndex < line.split(' ').length - 1 ? '0.5em' : '0.5em', // Reduce spacing for mobile
						}}>
						{splitIntoLetters(word).map(({ char, id: charId }, letterIndex) => {
							const start =
								letterIndex * (width && width < 768 ? 0.005 : 0.01) + wordIndex * (width && width < 768 ? 0.05 : 0.1)
							const end = start + (width && width < 768 ? 0.25 : 0.5)

							return (
								<AnimatedLetter
									key={charId}
									char={char}
									id={charId}
									smoothScrollYProgress={smoothScrollYProgress}
									start={start}
									mid={(start + end) / 2}
									end={end}
									letterIndex={letterIndex}
									className={className}
								/>
							)
						})}
					</span>
				))}
			</motion.div>
		),
		[smoothScrollYProgress, width]
	)

	return (
		<motion.div
			ref={containerRef}
className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-8 md:px-8 md:py-12"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			layoutScroll>
			<div className="mx-auto flex w-full max-w-4xl justify-center space-y-6 text-black dark:text-white">
				{textLine1.map((line, index) =>
					renderLine(line, index, 'text-2xl md:text-4xl lg:text-6xl font-black tracking-wide')
				)}
			</div>
			<div className="mx-auto mt-2 flex w-full max-w-4xl justify-center space-y-6 text-black dark:text-white md:mt-4">
				{textLine2.map((line, index) =>
					renderLine(line, index, 'text-2xl md:text-4xl lg:text-6xl font-black tracking-wide')
				)}
			</div>
		</motion.div>
	)
}

export default WaveScrollAnimation
