/** @format */

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '@/constants/ThemeContext'

export default function SlidePricing() {
	const [selected, setSelected] = useState<'M' | 'A'>('M')
	const { theme } = useTheme()

	return (
		<>
			<div className={theme === 'dark' ? 'invert-colors' : ''}>
				<section className="relative w-full overflow-hidden bg-white px-4 py-12 text-black dark:prose-invert dark:invert lg:px-8 lg:py-24">
					<Heading selected={selected} setSelected={setSelected} />
					<PriceCards selected={selected} />
					<TopLeftCircle />
					<BottomRightCircle />
				</section>
			</div>
		</>
	)
}

const SELECTED_STYLES = 'text-white font-medium rounded-lg py-3 w-28 relative bg-p'
const DESELECTED_STYLES = 'font-medium rounded-lg py-3 w-28 hover:bg-n-2  transition-colors relative'

interface HeadingProps {
	selected: 'M' | 'A'
	setSelected: React.Dispatch<React.SetStateAction<'M' | 'A'>>
}

const Heading = ({ selected, setSelected }: HeadingProps) => {
	return (
		<div className="relative z-10 mb-12 lg:mb-24">
			<h3 className="mb-6 text-center text-5xl font-semibold lg:text-7xl">Pricing plans</h3>
			<p className="mx-auto mb-8 max-w-lg text-center">
				Affordable, high-quality services tailored to your business needs.
			</p>
			<div className="flex items-center justify-center gap-3">
				<button onClick={() => setSelected('M')} className={selected === 'M' ? SELECTED_STYLES : DESELECTED_STYLES}>
					Selynt
					{selected === 'M' && <BackgroundShift />}
				</button>
				<div className="relative">
					<button onClick={() => setSelected('A')} className={selected === 'A' ? SELECTED_STYLES : DESELECTED_STYLES}>
						The Other Guys
						{selected === 'A' && <BackgroundShift />}
					</button>
					<CTAArrow />
				</div>
			</div>
			<h3 className="prose-blockquote: text-n-900">
				{' '}
				basic packages which come with varying but very limiting limitations, -annual estimates include monthly rates,
				cheap themes or add-ons which are necessary in many cases, the cost of your time/knowledge/labor on website
				maintenance and configuration which we have estimated at an average of $250/month, and domain cost (avg.
				$20/year).
			</h3>
		</div>
	)
}

const BackgroundShift = () => <motion.span layoutId="bg-shift" className="absolute inset-0 -z-10 rounded-lg bg-p" />

interface PriceCardProps {
	selected: 'M' | 'A'
}

const PriceCards = ({ selected }: PriceCardProps) => (
	<div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4">
		{/* Essential Kit */}
		<div className="flex w-full flex-col justify-between rounded-xl border-[1px] border-n-3 bg-white p-6">
			<div>
				<p className="mb-2 text-2xl font-bold">Essential Kit</p>
				<div className="mb-8 overflow-hidden">
					<AnimatePresence mode="wait">
						{selected === 'M' ? (
							<motion.p
								key="yearly1"
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								transition={{ ease: 'linear', duration: 0.25 }}
								className="text-6xl font-bold">
								<span>$399</span>
								<span className="text-xl font-normal"></span>
							</motion.p>
						) : (
							<motion.p
								key="yearly2"
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								transition={{ ease: 'linear', duration: 0.25 }}
								className="text-6xl font-bold">
								<span>$</span>
								<span className="text-xl font-normal"></span>
							</motion.p>
						)}
					</AnimatePresence>
				</div>

				<div className="mb-2 flex items-center gap-2">
					<CheckMark />
					<span className="text-base">Custom design</span>
				</div>
				<div className="mb-8 flex items-center gap-2">
					<CheckMark />
					<span className="text-base">Hosting & setup included</span>
				</div>
				<div className="mb-2 flex w-[90%] items-center gap-2 text-left">
					<span className="text-sm italic">Additional anytime maintenance or updates billed at $50/hr</span>
				</div>
			</div>
			<motion.button
				whileHover={{ scale: 1.015 }}
				whileTap={{ scale: 0.985 }}
				className="mt-8 w-full rounded-lg bg-black py-4 font-semibold uppercase text-white">
				Get Started
			</motion.button>
		</div>

		{/* Custom Solution */}
		<div className="flex w-full flex-col justify-between rounded-xl border-[1px] border-slate-300 bg-white p-6">
			<div>
				<p className="mb-2 text-2xl font-bold">Custom Solution</p>

				<div className="mb-8 overflow-hidden">
					<AnimatePresence mode="wait">
						{selected === 'M' ? (
							<motion.p
								key="yearly1"
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								transition={{ ease: 'linear', duration: 0.25 }}
								className="text-6xl font-bold">
								<span>$1299</span>
								<span className="text-xl font-normal"></span>
							</motion.p>
						) : (
							<motion.p
								key="yearly2"
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								transition={{ ease: 'linear', duration: 0.25 }}
								className="text-6xl font-bold">
								<span>$</span>
								<span className="text-xl font-normal"></span>
							</motion.p>
						)}
					</AnimatePresence>
				</div>

				<div className="mb-2 flex items-center gap-2">
					<CheckMark />
					<span className="text-base">Comprehensive customization</span>
				</div>
				<div className="mb-2 flex items-center gap-2">
					<CheckMark />
					<span className="text-base">4 no-cost upgrades/maintenance per year</span>
				</div>
			</div>
			<motion.button
				whileHover={{ scale: 1.015 }}
				whileTap={{ scale: 0.985 }}
				className="mt-8 w-full rounded-lg bg-black py-4 font-semibold uppercase text-white">
				Get Started
			</motion.button>
		</div>

		{/* Branding Packages */}
		<div className="flex w-full flex-col justify-between rounded-xl border-[1px] border-slate-300 bg-white p-6">
			<div>
				<p className="mb-2 text-2xl font-bold">Branding Packages</p>
				<div className="mb-8 overflow-hidden">
					<AnimatePresence mode="wait">
						{selected === 'M' ? (
							<motion.p
								key="yearly1"
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								transition={{ ease: 'linear', duration: 0.25 }}
								className="text-6xl font-bold">
								<span>$300</span>
								<span className="text-xl font-normal"></span>
							</motion.p>
						) : (
							<motion.p
								key="yearly2"
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								transition={{ ease: 'linear', duration: 0.25 }}
								className="text-6xl font-bold">
								<span>$</span>
								<span className="text-xl font-normal"></span>
							</motion.p>
						)}
					</AnimatePresence>
				</div>
				<div className="mb-4">
					<p className="text-lg font-semibold">Basic Package</p>
					<p className="text-xl">$300</p>
					<p className="text-base">Logo design and color palette</p>
				</div>
				<div className="mb-4">
					<p className="text-lg font-semibold">Intermediate Package</p>
					<p className="text-xl">$600</p>
					<p className="text-base">Logo, color palette, and brand guidelines</p>
				</div>
				<div>
					<p className="text-lg font-semibold">Comprehensive Package</p>
					<p className="text-xl">$1,000</p>
					<p className="text-base">Full branding suite with detailed guidelines</p>
				</div>
			</div>
			<motion.button
				whileHover={{ scale: 1.015 }}
				whileTap={{ scale: 0.985 }}
				className="mt-8 w-full rounded-lg bg-black py-4 font-semibold uppercase text-white">
				Get Started
			</motion.button>
		</div>
	</div>
)

const CTAArrow = () => (
	<div className="absolute -right-[100px] top-2 sm:top-0">
		<motion.svg
			width="95"
			height="62"
			viewBox="0 0 95 62"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="scale-50 sm:scale-75"
			initial={{ scale: 0.7, rotate: 5 }}
			animate={{ scale: 0.75, rotate: 0 }}
			transition={{
				repeat: Infinity,
				repeatType: 'mirror',
				duration: 1,
				ease: 'easeOut',
			}}>
			<path d="M14.7705 15.8619C33.2146 15.2843 72.0772 22.1597 79.9754 54.2825" stroke="#7D7BE5" strokeWidth="3" />
			<path
				d="M17.7987 7.81217C18.0393 11.5987 16.4421 15.8467 15.5055 19.282C15.2179 20.3369 14.9203 21.3791 14.5871 22.4078C14.4728 22.7608 14.074 22.8153 13.9187 23.136C13.5641 23.8683 12.0906 22.7958 11.7114 22.5416C8.63713 20.4812 5.49156 18.3863 2.58664 15.9321C1.05261 14.6361 2.32549 14.1125 3.42136 13.0646C4.37585 12.152 5.13317 11.3811 6.22467 10.7447C8.97946 9.13838 12.7454 8.32946 15.8379 8.01289"
				stroke="#7D7BE5"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</motion.svg>
		<span className="-mt-1 ml-8 block w-fit -rotate-2 rounded bg-indigo-500 px-1.5 py-0.5 text-xs font-light italic text-white shadow">
			Compare $$$
		</span>
	</div>
)

interface PriceCardProps {
	selected: 'M' | 'A'
}

const CheckMark = () => (
	<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z" fill="black" />
	</svg>
)

const TopLeftCircle = () => {
	return (
		<motion.div
			initial={{ rotate: '0deg' }}
			animate={{ rotate: '360deg' }}
			transition={{ duration: 100, ease: 'linear', repeat: Infinity }}
			className="absolute -left-[250px] -top-[200px] z-0 h-[450px] w-[450px] rounded-full border-2 border-dotted border-slate-500"
		/>
	)
}

const BottomRightCircle = () => {
	return (
		<motion.div
			initial={{ rotate: '0deg' }}
			animate={{ rotate: '-360deg' }}
			transition={{ duration: 100, ease: 'linear', repeat: Infinity }}
			className="absolute -bottom-[200px] -right-[250px] z-0 h-[450px] w-[450px] rounded-full border-2 border-dotted border-slate-500"
		/>
	)
}
