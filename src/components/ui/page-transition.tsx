import { motion } from 'motion/react'

interface PageTransitionProps {
	children: React.ReactNode
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
			{children}
		</motion.div>
	)
}

export default PageTransition