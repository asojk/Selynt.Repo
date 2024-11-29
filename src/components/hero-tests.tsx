/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
//import { motion } from 'framer-motion'
import { StickyVComp } from './ui/sticky-comp-variant'
import { useImgPadding } from '@/constants/imgpadding'

export const HeroTest: React.FC = () => {
	useImgPadding()

	return (
		<div className="relative">
			<StickyVComp heightMode="content">
				<div className="flex w-full flex-col items-center justify-center px-6 py-12">
					{/* Heading */}
					<h2 className="mx-auto max-w-[80vw] text-center font-sans text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl lg:max-w-4xl lg:text-7xl">
						Websites & Branding
						<br />
						<span className="text-a dark:text-s">Without the BS</span>
					</h2>

					{/* Subtitle */}
					<p className="mx-auto max-w-xl py-4 text-center font-sans text-lg tracking-tight text-neutral-700 dark:text-neutral-400 md:py-6 md:text-xl lg:text-2xl">
						We respect your privacy & do not employ manipulative tactics. <br className="hidden md:block" />
						We won’t even embed a YouTube video here.
					</p>

					{/* Checkmark Section */}
					<div className="mx-auto py-6 text-lg md:text-2xl lg:text-3xl">
						<span className="animate-text bg-gradient-to-r from-p via-s-dark to-a-darker bg-clip-text text-transparent dark:from-s dark:via-a dark:to-s-2">
							✓ No tracking here &nbsp; ✓ No ads here &nbsp; ✓ No jargon here
						</span>
					</div>

					{/* Mission Statement */}
					<p className="mx-auto max-w-xl py-4 text-center font-sans text-base tracking-tight text-neutral-700 dark:text-neutral-400 md:py-6 md:text-lg lg:text-xl">
						Our mission is to empower businesses and professionals through honest, transparent design.
					</p>

					{/* Optional Call-to-Action */}
					<div className="mt-8">
						<button className="rounded-full bg-a px-6 py-3 text-white shadow-lg hover:bg-a-dark focus:outline-none focus:ring-4 focus:ring-a-light dark:bg-a-dark dark:hover:bg-a-darker">
							Learn More
						</button>
					</div>
				</div>
			</StickyVComp>
		</div>
	)
}
