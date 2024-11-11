/* eslint-disable tailwindcss/no-custom-classname */
import { ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const BlockInTextCard = ({ text, examples }: { text: ReactNode; examples: string[] }) => {
	return (
		<>
			<div className="w-full max-w-4xl mx-auto space-y-8">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					<p className="col-span-1 text-sm text-left text-n-9 dark:text-n-1 sm:col-span-2 md:col-span-3">
						You can fill out the form if you're interested in moving forward.
					</p>
					<p className="col-span-1 mb-4 text-sm text-left text-n-9 dark:text-n-1 sm:col-span-2 md:col-span-3">
						Or for quick contact, you can email us below, or use one of these options:
					</p>
					<div className="grid items-center justify-around w-full grid-cols-2 gap-12 md:gap-48">
						<div className="flex justify-center mx-auto">
							<button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full dark:hover:bg-B-6 bg-p hover:bg-p-dark dark:bg-B-4 sm:w-auto">
								<a href="tel:+17634642656" className="flex items-center justify-center">
									<svg
										className="w-4 h-4 mr-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									Call
								</a>
							</button>
						</div>

						<div className="flex justify-center mx-auto">
							<button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full dark:hover:bg-B-6 bg-p hover:bg-p-dark dark:bg-B-4 sm:w-auto">
								<a href="sms:+17634642656" className="flex items-center justify-center">
									<svg
										className="w-4 h-4 mr-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
										/>
									</svg>
									Text
								</a>
							</button>
						</div>
					</div>
				</div>

				<hr className="border-n-9 dark:border-n-1" />

				<p className="max-w-4xl text-xl leading-relaxed text-a-dark dark:text-a">{text}</p>
				<div className="flex items-start">
					<div className="flex-grow ml-3">
						<p className="mb-2.5 text-sm font-light uppercase">EXAMPLE:</p>
						<Typewrite examples={examples} />
					</div>
				</div>
				<hr className="border-n-9 text-n-900 dark:border-n-5 dark:text-n-1" />
				<button className="w-full max-w-lg py-3 mx-auto text-sm font-medium transition-colors border rounded-full border-n-900 hover:bg-n-900 hover:text-n-3 dark:border-n-1 dark:hover:bg-n-1 dark:hover:text-n-7">
					<a href="mailto:contact@selynt.com" className="flex items-center justify-center">
						<svg
							className="w-5 h-5 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Send us an email
					</a>
				</button>
			</div>
		</>
	)
}

const LETTER_DELAY = 0.025
const BOX_FADE_DURATION = 0.125

const FADE_DELAY = 5
const MAIN_FADE_DURATION = 0.25

const SWAP_DELAY_IN_MS = 5500

const Typewrite = ({ examples }: { examples: string[] }) => {
	const [exampleIndex, setExampleIndex] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setExampleIndex((pv) => (pv + 1) % examples.length)
		}, SWAP_DELAY_IN_MS)

		return () => clearInterval(intervalId)
	}, [examples.length])

	return (
		<p className="mb-2.5 text-sm font-light uppercase">
			<span className="inline-block size-2 bg-n-900 dark:bg-n-1" />
			<span className="ml-3">
				{examples[exampleIndex].split('').map((l, i) => (
					<motion.span
						initial={{
							opacity: 1,
						}}
						animate={{
							opacity: 0,
						}}
						transition={{
							delay: FADE_DELAY,
							duration: MAIN_FADE_DURATION,
							ease: 'easeInOut',
						}}
						key={`${exampleIndex}-${i}`}
						className="relative">
						<motion.span
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							transition={{
								delay: i * LETTER_DELAY,
								duration: 0,
							}}>
							{l}
						</motion.span>
						<motion.span
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: [0, 1, 0],
							}}
							transition={{
								delay: i * LETTER_DELAY,
								times: [0, 0.1, 1],
								duration: BOX_FADE_DURATION,
								ease: 'easeInOut',
							}}
							className="absolute bottom-[3px] left-[0px] right-0 top-[3px] bg-n-900 dark:bg-n-1"
						/>
					</motion.span>
				))}
			</span>
		</p>
	)
}
