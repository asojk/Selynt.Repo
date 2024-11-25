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
			{/* Logo at top 1/3 */}
			<div className="relative z-[1000] mt-[33vh]">
				<div className="relative max-w-[85vw]">
					{/* Floating Orb */}
					<div className="absolute inset-0 left-1/2 z-[999] flex h-24 w-24 animate-float items-center justify-center rounded-full bg-s opacity-70 blur-3xl md:h-64 md:w-64 lg:h-72 lg:w-72 lg:opacity-60" />
					{/* Logo */}
					<img src={images.logo} alt="logo" className="relative z-[1000] h-48 w-full px-4 dark:hidden" />
					<img src={images.dlogo} alt="logo" className="relative z-[1000] hidden h-48 w-full px-4 dark:block" />
				</div>
			</div>

			{/* Text at bottom */}

			<div className="mb-36 mt-auto text-center">
				<div className="flex h-[40rem] flex-col items-center justify-center">
					<TypewriterEffectSmooth words={words} />
				</div>
				{/*<h1 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-lg font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white md:py-10 md:text-2xl lg:text-4xl">
						Websites & Branding
						<br />
						Without the BS.
					</h1>*/}
			</div>
		</motion.div>
	)
}
