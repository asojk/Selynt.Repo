/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-undef */
/* eslint-disable tailwindcss/no-custom-classname */

import { ReactNode } from 'react'

export const BlockInTextCard = ({ text }: { text: ReactNode }) => {
	return (
		<div className="mx-auto w-full max-w-md space-y-8 lg:max-w-4xl">
			{/* Contact Buttons */}
			<div className="flex flex-col items-stretch space-y-4 sm:flex-row sm:justify-around sm:space-x-2 sm:space-y-0 lg:space-x-4">
				<ContactButton
					link="tel:+17634642656"
					text="Call"
					icon={
						<svg
							className="mr-2 h-4 w-4"
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
					}
				/>
				<ContactButton
					link="sms:+17634642656"
					text="Text"
					icon={
						<svg
							className="mr-2 h-4 w-4"
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
					}
				/>
				<ContactButton
					link="mailto:contact@selynt.com"
					text="Email"
					icon={
						<svg
							className="mr-2 h-5 w-5"
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
					}
				/>
			</div>

			{/* Divider */}
			<hr className="max-auto w-full max-w-md border-n-9 dark:border-n-1 lg:max-w-xl" />

			{/* Main Content */}
			<p className="Description max-w-4xl">{text}</p>
		</div>
	)
}

const ContactButton = ({ link, text, icon }: { link: string; text: string; icon: ReactNode }) => (
	<a
		href={link}
		className="inline-flex w-full items-center justify-center rounded-full bg-p-3 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-p-4 active:bg-p-5 dark:bg-p-3 dark:text-n-1 dark:hover:bg-p-4 dark:active:bg-p-5 sm:w-auto sm:flex-1">
		{icon}
		{text}
	</a>
)

/* 
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
	*/
