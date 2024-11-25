/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
//import { motion } from 'framer-motion'
import { StickyVComp } from './ui/sticky-comp-variant'
import { useImgPadding } from '@/constants/imgpadding'

export const HeroTest: React.FC = () => {
	useImgPadding()

	return (
		<div className="relative">
			<StickyVComp contentHeight={true}>
				<div className="flex w-full flex-col items-center justify-center px-4">
					<h2 className="mx-auto max-w-[70vw] text-center font-sans text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl lg:text-7xl">
						Websites & Branding
						<br />
						Without the BS
					</h2>

					<p className="mx-auto max-w-xl py-2 text-center font-sans text-base tracking-tight text-neutral-700 dark:text-neutral-400 md:py-8 md:text-lg lg:text-xl">
						We respect your privacy & do not employ manipulative tactics. <br className="hidden md:block" /> We won’t
						even embed a YouTube video here.
					</p>
					<div className="mx-auto items-center justify-center text-balance py-4 text-lg [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] md:py-6 md:text-2xl lg:py-12 lg:text-4xl">
						<span className="animate-text bg-gradient-to-r from-p via-s-dark to-a-darker bg-clip-text text-transparent dark:from-s dark:via-a dark:to-s-2">
							✓ No tracking here ✓ No ads here ✓ No jargon here
						</span>
					</div>
					<p className="mx-auto max-w-xl py-2 text-center font-sans text-base tracking-tight text-neutral-700 dark:text-neutral-400 md:py-8 md:text-lg lg:text-xl">
						Our mission is to empower businesses & professionals through honest and transparent design.
					</p>
				</div>
			</StickyVComp>
		</div>
	)
}
