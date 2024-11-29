import { motion } from 'framer-motion'
import { useState } from 'react'
import Modal from './Modal'

const FloatingButton: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const closeModal = () => setIsOpen(false)
	const openModal = () => setIsOpen(true)

	return (
		<>
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="fixed bottom-4 right-4 rounded-full bg-a-dark p-4 text-white shadow-lg"
				onClick={openModal}>
				<span className="hidden sm:block">Contact</span>
			</motion.button>
			<Modal isOpen={isOpen} onClose={closeModal} />
		</>
	)
}

export default FloatingButton
