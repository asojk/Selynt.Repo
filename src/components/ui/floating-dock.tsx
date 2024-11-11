import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconEyeClosed, IconMenu4 } from '@tabler/icons-react'

interface DockProps {
	items: { title: string; icon: React.ReactNode; href: string; scroll?: boolean }[]
	className?: string
}

const Dock: React.FC<DockProps> = ({ items, className = '' }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className="fixed bottom-6 right-6 z-[1001] flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-p bg-n-1 p-3 text-p transition-colors hover:bg-n-2 dark:border-n-6 dark:bg-n-8 dark:text-s-light dark:hover:bg-n-8"
				animate={{ rotate: isOpen ? 180 : 0 }}>
				{isOpen ? <IconEyeClosed /> : <IconMenu4 />}
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ type: 'spring', stiffness: 300, damping: 25 }}
						className={`fixed bottom-20 right-6 z-[1000] flex flex-col items-end gap-3 ${className}`}>
						{items.map((item, index) => (
							<IconContainer key={item.title} {...item} index={index} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

interface IconContainerProps {
	title: string
	icon: React.ReactNode
	href: string
	scroll?: boolean
	index: number
}

const IconContainer: React.FC<IconContainerProps> = ({ title, icon, href, scroll, index }) => {
	const [hovered, setHovered] = useState(false)

	const handleClick = (e: React.MouseEvent) => {
			if (scroll) {
					e.preventDefault()
					window.scrollTo({
							top: document.documentElement.scrollHeight,
							behavior: 'smooth'
					})
			}
	}

	return (
			<Link to={href} onClick={handleClick}>
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: index * 0.05 }}
				className="relative flex items-center"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}>
				<motion.div
					className="absolute inset-0 h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-gradient-to-r from-n-dark to-n-900 dark:from-s dark:to-s-dark"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.8, opacity: 0 }}
					transition={{ duration: 0.2 }}
				/>
				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="relative flex h-12 w-12 items-center justify-center rounded-full bg-n-1 text-p shadow-md transition-colors hover:bg-n-2 dark:bg-n-8 dark:text-n-1 dark:hover:bg-n-8">
					{React.cloneElement(icon as React.ReactElement, {
						className: 'w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]',
					})}
				</motion.div>
				<AnimatePresence>
					{hovered && (
						<motion.div
							initial={{ opacity: 0, x: 10 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 10 }}
							className="absolute right-full mr-3 rounded-md bg-n-2 px-3 py-1 text-sm font-medium text-p shadow-md dark:bg-n-8 dark:text-s">
							{title}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</Link>
	)
}

export default Dock
