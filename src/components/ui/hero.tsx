'use client'

/* eslint-disable tailwindcss/no-custom-classname */
import React, { useRef } from 'react'
import { images } from '@/lib/assets'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'

export const Hero: React.FC = () => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start start', 'end start'],
	})

	const y = useTransform(scrollYProgress, [0, 1], [0, -100])
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

	const words = [
		{
			text: 'Ethics',
			className: 'text-a-dark dark:text-s-dark',
		},
		{
			text: 'over',
		},
		{
			text: 'trends',
		},
		{
			text: '&',
		},
		{
			text: 'principles',
			className: 'text-a-dark dark:text-s-dark',
		},
		{
			text: 'over',
		},
		{
			text: 'profit.',
		},
	]

	return (
		<motion.div ref={targetRef} className="relative flex h-screen flex-col items-center" style={{ y, opacity }}>
			<div className="relative z-[1000] mt-[10vh] md:mt-[33vh]">
				<div className="relative max-w-[85vw]">
					<div className="absolute inset-0 left-1/2 z-[99] flex h-24 w-24 animate-float items-center justify-center rounded-full bg-s opacity-70 blur-3xl md:max-h-44 md:w-64 lg:h-72 lg:w-72 lg:opacity-60" />
					<img src={images.logo} alt="logo" className="relative z-[1000] h-36 w-full px-4 dark:hidden md:h-48" />
					<img src={images.dlogo} alt="logo" className="relative z-[1000] hidden h-36 w-full px-4 dark:block md:h-48" />
				</div>
				<div className="relative z-[100] mx-auto flex items-center justify-center text-center">
					<TypewriterEffectSmooth words={words} />
				</div>
			</div>
			<div className="mt-auto text-center">
				<div className="flex h-[40rem] flex-col items-center justify-start">
					<div className="animate-delayed-fade-in">
						<p className="mx-auto flex max-w-[70vw] animate-highlight bg-gradient-to-r from-p-dark via-p-3 to-p-5 bg-clip-text text-left text-lg tracking-tight text-transparent dark:from-p-3 dark:via-p-1 dark:to-p-2 md:items-center md:justify-center md:text-center md:text-2xl lg:max-w-[50vw]">
							We want to empower small businesses & individual professionals through honest, low-cost design.
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
