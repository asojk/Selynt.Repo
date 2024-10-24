/** @format */

import { useState } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { IconEyeClosed, IconMenu4 } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

interface DockProps {
	items: { title: string; icon: React.ReactNode; href: string }[]
	className?: string
}

export const Dock: React.FC<DockProps> = ({ items, className }) => {
	const [isOpen, setIsOpen] = useState(false)

	// Animation properties
	const scale = useSpring(isOpen ? 1 : 0.5, {
		mass: 0.1,
		stiffness: 200,
		damping: 20,
	})

	return (
		<>
			{/* Toggle Button for the Floating Dock */}
			<motion.button
				whileHover={{ rotate: isOpen ? '0deg' : '180deg' }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setIsOpen(!isOpen)}
				className="fixed bottom-8 right-8 z-[1001] rounded-full bg-white p-4 text-3xl text-black transition-colors hover:text-indigo-500"
				animate={{ rotate: isOpen ? '180deg' : '0deg' }}>
				{isOpen ? <IconEyeClosed /> : <IconMenu4 />}
			</motion.button>

			{/* Floating Dock Navigation */}
			<motion.div
				animate={isOpen ? 'open' : 'closed'}
				variants={navVariants}
				initial="closed"
				className={cn(
					'border-gradient-to-br fixed bottom-0 right-0 z-[1000] flex items-end justify-end border-[24rem] from-white via-transparent to-transparent',
					className
				)}
				style={{
					scale,
					width: isOpen ? 'min(100vw, 800px)' : '80px',
					height: isOpen ? 'min(100vw, 800px)' : '80px',
					borderRadius: '100% 0 0 0',
					transformOrigin: 'bottom right',
					border: isOpen ? '4rem solid white' : 'none',
					borderImage: 'linear-gradient(to bottom right, white, white, transparent)',
					borderImageSlice: 1,
					borderBottom: 'none',
					borderRight: 'none',
				}}>
				{/* Render Dock Items */}
				{isOpen &&
					items.map((item, index) => (
						<IconContainer key={item.title} {...item} index={index} totalItems={items.length} isOpen={isOpen} />
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
	isOpen: boolean
}

function IconContainer({ title, icon, href, index, totalItems, isOpen }: IconContainerProps) {
	const angle = (index / (totalItems - 1)) * (Math.PI / 2)
	const radius = isOpen ? 'min(45vw, 300px)' : '0px'

	const x = `calc(${Math.cos(angle)} * ${radius})`
	const y = `calc(${Math.sin(angle)} * ${radius})`

	const [hovered, setHovered] = useState(false)

	return (
		<Link to={href}>
			<motion.div
				style={{
					position: 'absolute',
					right: x,
					bottom: y,
					width: '48px',
					height: '48px',
				}}
				className="flex items-center justify-center rounded-full bg-white dark:bg-g-b"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}>
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
