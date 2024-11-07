import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import {
	IconBrandFramerMotion,
	IconBrandGithub,
	IconBrandReact,
	IconBrandTypescript,
	IconBrandVite,
} from '@tabler/icons-react'
import { StickyVComp } from './ui/sticky-comp-variant'

export const Tech = () => {
	return (
		<StickyVComp contentHeight={true}>
			<section className="flex w-full cursor-default flex-col items-center justify-center gap-12 px-4 py-4 antialiased md:flex-row lg:py-12 lg:subpixel-antialiased">
				<Copy />
				<LogoRolodex
					items={[
						<LogoItem key={1} className="bg-[#3178C6]">
							<IconBrandTypescript className="scale-[400%] stroke-[0.5] pt-1 text-white lg:stroke-1" />
						</LogoItem>,
						<LogoItem key={2} className="bg-[#232730]">
							<IconBrandReact className="scale-[400%] stroke-[0.5] text-[#61DAFB] lg:stroke-1" />
						</LogoItem>,
						<LogoItem key={3} className="bg-[#0099FF]">
							<IconBrandFramerMotion className="scale-[400%] stroke-[0.5] text-black lg:stroke-1" />
						</LogoItem>,
						<LogoItem key={4} className="bg-black">
							<IconBrandGithub className="scale-[400%] stroke-[0.5] text-white lg:stroke-1" />
						</LogoItem>,
						<LogoItem key={5} className="bg-[#9570FC]">
							<IconBrandVite className="scale-[400%] stroke-[0.5] text-[#FFD32E] lg:stroke-1" />
						</LogoItem>,
					]}
				/>
			</section>
		</StickyVComp>
	)
}

const Copy = () => (
	<div className="mx-auto flex max-w-2xl flex-col items-center text-center md:items-start md:text-left">
		<h2 className="H2">We Leverage the Latest Tech</h2>
		<div className="grid w-full grid-cols-1 gap-8 text-n-900 dark:text-n-1 md:grid-cols-2">
			<div className="space-y-2">
				<h3 className="text-left text-xl font-semibold">to craft</h3>
				<ul className="space-y-2">
					<li className="flex items-center">
						<svg
							className="mr-2 h-5 w-5 text-s"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span className="text-lg lg:text-xl">Websites</span>
					</li>
					<li className="flex items-center">
						<svg
							className="mr-2 h-5 w-5 text-s"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span className="text-lg lg:text-xl">Brand Identities</span>
					</li>
				</ul>
			</div>
			<div className="space-y-2">
				<h3 className="text-left text-xl font-semibold">& focus on</h3>
				<ul className="space-y-2">
					<li className="flex items-center">
						<svg
							className="mr-2 h-5 w-5 text-s"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span className="text-lg lg:text-xl">Clarity</span>
					</li>
					<li className="flex items-center">
						<svg
							className="mr-2 h-5 w-5 text-s"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span className="text-lg lg:text-xl">Simplicity</span>
					</li>
					<li className="flex items-center">
						<svg
							className="mr-2 h-5 w-5 text-s"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
						</svg>
						<span className="text-lg lg:text-xl">Affordability</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
)

const DELAY_IN_MS = 2500
const TRANSITION_DURATION_IN_SECS = 1.5

const LogoRolodex = ({ items }: { items: ReactElement[] }) => {
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
	const [index, setIndex] = useState(0)

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setIndex((pv) => pv + 1)
		}, DELAY_IN_MS)

		return () => {
			clearInterval(intervalRef.current || undefined)
		}
	}, [])

	return (
		<div
			style={{
				transform: 'rotateY(-20deg)',
				transformStyle: 'preserve-3d',
			}}
			className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800">
			<AnimatePresence mode="sync">
				<motion.div
					style={{
						y: '-50%',
						x: '-50%',
						clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
						zIndex: -index,
						backfaceVisibility: 'hidden',
					}}
					key={index}
					transition={{
						duration: TRANSITION_DURATION_IN_SECS,
						ease: 'easeInOut',
					}}
					initial={{ rotateX: '0deg' }}
					animate={{ rotateX: '0deg' }}
					exit={{ rotateX: '-180deg' }}
					className="absolute left-1/2 top-1/2">
					{items[index % items.length]}
				</motion.div>
				<motion.div
					style={{
						y: '-50%',
						x: '-50%',
						clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
						zIndex: index,
						backfaceVisibility: 'hidden',
					}}
					key={(index + 1) * 2}
					initial={{ rotateX: '180deg' }}
					animate={{ rotateX: '0deg' }}
					exit={{ rotateX: '0deg' }}
					transition={{
						duration: TRANSITION_DURATION_IN_SECS,
						ease: 'easeInOut',
					}}
					className="absolute left-1/2 top-1/2">
					{items[index % items.length]}
				</motion.div>
			</AnimatePresence>

			<hr
				style={{
					transform: 'translateZ(1px)',
				}}
				className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
			/>
		</div>
	)
}

const LogoItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return (
		<div
			className={twMerge(
				'grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50',
				className
			)}>
			{children}
		</div>
	)
}
