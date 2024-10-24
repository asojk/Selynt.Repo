/** @format */

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils' // Adjust the path based on your project structure
import { Link } from 'react-router-dom' // Use named import

interface FloatingDockProps {
	items: { title: string; icon: React.ReactNode; href: string }[]
	className?: string
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ items, className }) => {
	return (
		<motion.div className={cn('fixed bottom-8 right-8 z-[1000] flex items-center justify-center', className)}>
			<div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary">
				<CentralIcon />
				{items.map((item, index) => (
					<IconContainer key={item.title} index={index} {...item} />
				))}
			</div>
		</motion.div>
	)
}

// Central Icon
function CentralIcon() {
	return (
		<motion.div
			style={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: `translate(-50%, -50%)`,
			}}
			className="flex aspect-square items-center justify-center rounded-full bg-white dark:bg-g-b"
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}>
			{/* Replace with your central icon */}
			<span className="text-g-b dark:text-white">🌟</span>
		</motion.div>
	)
}

interface IconContainerProps {
	title: string
	icon: React.ReactNode
	href: string
	index: number
}

function IconContainer({ title, icon, href, index }: IconContainerProps) {
	const ref = useRef<HTMLDivElement>(null)
	const [hovered, setHovered] = useState(false)
	const radius = 50 // Adjust this value for more or less spacing

	// Position the icons in the top-left quadrant
	const angle = (Math.PI / 4) * index // Adjust to position in the top-left quadrant
	const x = Math.cos(angle) * radius
	const y = Math.sin(angle) * radius

	return (
		<Link to={href}>
			<motion.div
				ref={ref}
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: `translate(-50%, -50%) translate(-${x}px, ${-y}px)`, // Negative values to place in the top-left
				}}
				whileHover={{ scale: 1.2 }} // Scale and dim on hover
				whileTap={{ scale: 0.9 }} // Scale down on click
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className="flex aspect-square items-center justify-center rounded-full bg-white transition-all duration-300 dark:bg-g-b">
				<AnimatePresence>
					{hovered && (
						<motion.div
							key="tooltip"
							initial={{ opacity: 0, y: -10, x: '-50%' }}
							animate={{ opacity: 1, y: 0, x: '-50%' }}
							exit={{ opacity: 0, y: -2, x: '-50%' }}
							className="absolute bottom-full left-1/2 mb-2 w-fit -translate-x-1/2 whitespace-pre rounded-md border border-g-400 bg-white px-2 py-0.5 text-xs text-g-900">
							{title}
						</motion.div>
					)}
				</AnimatePresence>
				<div className="flex items-center justify-center text-g-b dark:text-white">{icon}</div>
			</motion.div>
		</Link>
	)
}
