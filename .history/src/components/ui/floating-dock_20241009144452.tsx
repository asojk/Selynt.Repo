/** @format */

import { useRef, useState } from 'react'
import { MotionValue, motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils' // Adjust the path based on your project structure

import { Link } from 'react-router-dom' // Use named import

interface FloatingDockProps {
	items: { title: string; icon: React.ReactNode; href: string }[]
	className?: string
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ items, className }) => {
	const mouseX = useMotionValue<number>(99999) // Initialize with a large number

	return (
		<motion.div
			onMouseMove={e => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(99999)} // Replace Infinity with a large number
			className={cn(
				'mx-auto flex h-16 items-center justify-between gap-2 rounded-t-2xl bg-primary px-4 pb-3 pt-4 backdrop-blur-2xl md:gap-4',
				className
			)}>
			{items.map(item => (
				<IconContainer mouseX={mouseX} key={item.title} {...item} />
			))}
		</motion.div>
	)
}

interface IconContainerProps {
	mouseX: MotionValue<number>
	title: string
	icon: React.ReactNode
	href: string
}

function IconContainer({ mouseX, title, icon, href }: IconContainerProps) {
	const ref = useRef<HTMLDivElement>(null)

	const distance = useTransform(mouseX, val => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
		return val - bounds.x - bounds.width / 2
	})

	const widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40])
	const heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40])

	const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 30, 20])
	const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 30, 20])

	const width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	})
	const height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	})

	const widthIcon = useSpring(widthTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	})
	const heightIcon = useSpring(heightTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	})

	const [hovered, setHovered] = useState(false)

	return (
		<Link to={href}>
			<motion.div
				ref={ref}
				style={{ width, height }}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className="relative flex aspect-square items-center justify-center rounded-xl bg-white dark:bg-g-b">
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
				<motion.div
					style={{ width: widthIcon, height: heightIcon }}
					className="flex items-center justify-center text-g-b dark:text-white">
					{icon}
				</motion.div>
			</motion.div>
		</Link>
	)
}
