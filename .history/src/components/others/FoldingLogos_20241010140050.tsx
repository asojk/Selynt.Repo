/** @format */

import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
	Icon12Hours,
	IconAdjustmentsDown,
	IconCarambolaFilled,
	IconDesk,
	IconFlameOff,
	IconThumbUp,
} from '@tabler/icons-react'
import { twMerge } from 'tailwind-merge'

export const FoldingLogos = () => {
	return (
		<section className="flex flex-col items-center justify-center gap-12 px-4 py-24 md:flex-row">
			<Copy />
			<LogoRolodex
				items={[
					<LogoItem key={1} className="bg-orange-300 text-neutral-900">
						<Icon12Hours className="flex h-full w-full items-center justify-center" />
					</LogoItem>,
					<LogoItem key={2} className="bg-green-300 text-neutral-900">
						<IconAdjustmentsDown className="flex h-full w-full items-center justify-center" />
					</LogoItem>,
					<LogoItem key={3} className="bg-blue-300 text-neutral-900">
						<IconDesk className="flex h-full w-full items-center justify-center" />
					</LogoItem>,
					<LogoItem key={4} className="bg-white text-black">
						<IconThumbUp className="flex h-full w-full items-center justify-center" />
					</LogoItem>,
					<LogoItem key={5} className="bg-purple-300 text-neutral-900">
						<IconFlameOff className="flex h-full w-full items-center justify-center" />
					</LogoItem>,
				]}
			/>
		</section>
	)
}

const Copy = () => (
	<div className="max-w-lg text-center md:text-start">
		<h2 className="mb-3 text-4xl text-g-b dark:text-white">Work with the best</h2>
		<p className="mb-6 text-sm leading-relaxed text-g-900 dark:text-g-50">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, ullam tenetur quam debitis illo nemo aliquid
			animi ad provident?
		</p>
		<a href="#" className="group text-sm uppercase text-p transition-colors hover:text-a dark:text-a dark:hover:text-s">
			See case studies
			<IconCarambolaFilled className="ml-1 inline-block text-base transition-transform group-hover:rotate-45" />
		</a>
	</div>
)

const DELAY_IN_MS = 2500
const TRANSITION_DURATION_IN_SECS = 1.5

const LogoRolodex = ({ items }: { items: ReactElement[] }) => {
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
	const [index, setIndex] = useState(0)

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setIndex(pv => pv + 1)
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
				'place-white-center grid h-36 w-52 rounded-lg bg-neutral-700 text-6xl text-neutral-50',
				className
			)}>
			{children}
		</div>
	)
}
