import { ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const BlockInTextCard = ({ tag, text, examples }: { tag: string; text: ReactNode; examples: string[] }) => {
	return (
		<div className="mx-auto w-4/5 max-w-4xl space-y-6">
			<div>
				<p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
				<hr className="border-n-9 dark:border-n-1" />
			</div>
			<p className="max-w-4xl text-xl leading-relaxed text-a-dark dark:text-a">{text}</p>
			<div>
				<Typewrite examples={examples} />
				<hr className="border-n-9 dark:border-n-5" />
			</div>
			<button className="mx-auto w-full max-w-lg rounded-full border border-n-900 py-2 text-sm font-medium transition-colors hover:bg-n-900 hover:text-n-3 dark:border-n-1 dark:hover:bg-n-1 dark:hover:text-n-7">
				<a href="mailto:contact@selynt.com">Send us an email</a>
			</button>
		</div>
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
				EXAMPLE:{' '}
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
							className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-n-900 dark:bg-n-1"
						/>
					</motion.span>
				))}
			</span>
		</p>
	)
}
