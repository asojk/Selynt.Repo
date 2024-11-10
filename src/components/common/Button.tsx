import { motion } from 'framer-motion'

export function Button({ text }: { text: string }): JSX.Element {
	return (
		<motion.button
			whileHover={{ scale: 1.015 }}
			whileTap={{ scale: 0.985 }}
			className="mt-8 w-full max-w-48 rounded-lg border-[1px] border-s bg-a-dark py-4 font-semibold uppercase text-white shadow-neu1 dark:border-[1px] dark:border-p dark:bg-s dark:text-n-900 dark:shadow-custom-dark">
			{text}
		</motion.button>
	)
}
