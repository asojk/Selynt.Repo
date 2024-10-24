/** @format */

import { useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { IconEyeClosed, IconMenu4 } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

interface DockProps {
	items: { title: string; icon: React.ReactNode; href: string }[]
	className?: string
}

export const Dock: React.FC<DockProps> = ({ items, className }) => {
	const [isOpen, setIsOpen] = useState(false)
	const mouseX = useMotionValue<number>(99999)

	// Animation properties
	const scale = useSpring(isOpen ? 1 : 0.5, {
		mass: 0.1,
		stiffness: 200,
		damping: 20,
	})

	const borderRadius = useSpring(isOpen ? 100 : 0, {
		mass: 0.1,
		stiffness: 200,
		damping: 20,
	})

	return (
		<>
			{/* Toggle Button for the Floating Dock */}
			<motion.button
				whileHover={{ rotate: '180deg' }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setIsOpen(true)}
				className="fixed bottom-8 right-8 z-[1000] rounded-full bg-white p-4 text-3xl text-black transition-colors hover:text-indigo-500">
				<IconMenu4 />
			</motion.button>

			{/* Floating Dock Navigation */}
			<motion.div
				onMouseMove={e => mouseX.set(e.pageX)}
				onMouseLeave={() => mouseX.set(99999)} // Set to large number when mouse leaves
				animate={isOpen ? 'open' : 'closed'}
				variants={navVariants}
				initial="closed"
				className={cn('fixed bottom-0 left-0 z-[1000] mx-auto flex items-center justify-center p-4', className)}
				style={{
					scale,
					borderRadius: borderRadius.get() + '%',
					width: isOpen ? '300px' : '100px',
				}}>
				{/* Close Button inside the Dock */}
				<motion.button
					className="absolute right-8 top-8 rounded-full border-[1px] border-transparent bg-white p-4 text-3xl text-black transition-colors hover:border-indigo-500 hover:text-indigo-500"
					whileHover={{ rotate: '180deg' }}
					onClick={() => setIsOpen(false)}
					whileTap={{ scale: 0.9 }}>
					<IconEyeClosed />
				</motion.button>

				{/* Render Dock Items */}
				{isOpen &&
					items.map((item, index) => (
						<IconContainer key={item.title} {...item} index={index} totalItems={items.length} />
					))}
			</motion.div>
		</>
	)
}

interface IconContainerProps {
	title: string
	icon: React.ReactNode
	href: string
	index: number
	totalItems: number
}

function IconContainer({ title, icon, href, index, totalItems }: IconContainerProps) {
	const angle = (index / (totalItems - 1)) * (Math.PI / 2)
	const radius = 80

	const x = Math.cos(angle) * radius
	const y = Math.sin(angle) * radius

	const [hovered] = useState(false)
	return (
		<Link to={href}>
			<motion.div
				style={{
					position: 'absolute',
					left: `${x}px`,
					bottom: `${y}px`,
					width: '40px',
					height: '40px',
				}}
				className="flex items-center justify-center rounded-full bg-white dark:bg-g-b">
				<AnimatePresence>
					{hovered && (
						<motion.div
							key="tooltip" // Add a unique key
							initial={{ opacity: 0, y: -10, x: '-50%' }}
							animate={{ opacity: 1, y: 0, x: '-50%' }}
							exit={{ opacity: 0, y: -2, x: '-50%' }}
							className="absolute bottom-full left-1/2 mb-2 w-fit -translate-x-1/2 whitespace-pre rounded-md border border-g-400 bg-white px-2 py-0.5 text-xs text-g-900">
							{title}
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div className="flex items-center justify-center text-g-b dark:text-white">{icon}</motion.div>
			</motion.div>
		</Link>
	)
}

// Animation Variants for Opening and Closing the Dock
const navVariants = {
	open: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5 },
	},
	closed: {
		opacity: 0,
		x: '100%',
		transition: { duration: 0.5 },
	},
}
