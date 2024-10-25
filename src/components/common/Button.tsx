import { motion } from 'framer-motion'

export function Button({ text }: { text: string }): JSX.Element {
	return (
		<motion.button
			whileHover={{ scale: 1.015 }}
			whileTap={{ scale: 0.985 }}
			className="w-full py-4 mt-8 font-semibold text-white dark:bg-s dark:border-[1px] shadow-neu1 dark:shadow-custom-dark dark:border-p dark:text-n-900 border-[1px] border-s uppercase rounded-lg max-w-48 bg-a-dark">
			{text}
		</motion.button>
	)
}
