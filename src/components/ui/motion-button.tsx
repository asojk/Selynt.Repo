import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface MotionButtonProps {
	btntxt: string
	link: string
}

export const MotionButton: React.FC<MotionButtonProps> = ({ btntxt, link }) => (
	<Link to={link}>
		<div className="mt-8 text-center">
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				className="rounded-full bg-a px-6 py-3 text-white shadow-lg hover:bg-a-dark focus:outline-none focus:ring-4 focus:ring-a-light dark:bg-a-dark dark:hover:bg-a-darker">
				{btntxt}
			</motion.button>
		</div>
	</Link>
)
