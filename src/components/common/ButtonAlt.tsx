import { motion } from 'framer-motion'

export function ButtonAlt({ text }: { text: string }): JSX.Element {
	return (
		<motion.button
		whileHover={{ scale: 1.015 }}
		whileTap={{ scale: 0.985 }}
		className="w-full py-4 mt-8 font-semibold text-white uppercase rounded-lg bg-p">
		{text}
	</motion.button>
	)
}