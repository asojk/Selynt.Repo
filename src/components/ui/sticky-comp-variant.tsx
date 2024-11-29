import React, { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useImgPadding } from '@/constants/imgpadding'

type HeightMode = 'content' | 'fullViewport' | 'extendedContent'

interface StickyVProps {
	children?: ReactNode
	heightMode?: HeightMode
}

export const StickyVComp = ({ children, heightMode = 'content' }: StickyVProps) => {
	return (
		<div className="relative px-content-padding">
			<StickyVImage heightMode={heightMode}>
				<div className="">{children}</div>
			</StickyVImage>
		</div>
	)
}

interface StickyVImageProps {
	children: ReactNode
	heightMode: HeightMode
}

const StickyVImage: React.FC<StickyVImageProps> = ({ children, heightMode }) => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	})

	// Slower, smoother transition
	const transition = {
		type: 'spring',
		stiffness: 70, // Reduced stiffness for slower movement
		damping: 20,
		mass: 1.5, // Added mass for more inertia
		restDelta: 0.005,
	}

	// More gradual scaling
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95])

	// Slower opacity change
	const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.98, 0.95, 0.9])

	// Use the custom hook for padding
	useImgPadding(heightMode !== 'fullViewport')

	// More gradual padding changes
	const paddingX = useTransform(scrollYProgress, [0, 0.5, 1], ['0.5rem', '0.25rem', '0rem'])
	const paddingY = useTransform(scrollYProgress, [0, 0.5, 1], ['1rem', '0.75rem', '0.5rem'])

	// More gradual width change
	const width = useTransform(scrollYProgress, [0, 0.5, 1], ['100%', '97.5%', '95%'])

	const getHeight = () => {
		switch (heightMode) {
			case 'fullViewport':
				return 'calc(100vh - var(--content-padding))'
			case 'extendedContent':
				return 'calc(100% + 20vh)' // This adds 20vh to the content height
			default:
				return 'auto'
		}
	}

	const getMinHeight = () => {
		switch (heightMode) {
			case 'fullViewport':
				return 'calc(100vh - var(--content-padding))'
			case 'extendedContent':
				return 'calc(100% + 20vh)' // This ensures the minimum height is also extended
			default:
				return 'auto'
		}
	}

	return (
		<motion.div
			ref={targetRef}
			style={{
				backgroundSize: 'cover',
				backgroundImage: 'url("")',
				backgroundPosition: 'center',
				height: getHeight(),
				minHeight: getMinHeight(),
				scale,
				maxWidth: '1440px',
				width,
				margin: '0 auto',
				paddingLeft: paddingX,
				paddingRight: paddingX,
				paddingTop: paddingY,
				paddingBottom: paddingY,
				position: 'relative',
			}}
			transition={transition}
			className="z-0 mx-auto overflow-hidden rounded-3xl bg-cover bg-center">
			<motion.div
				className="absolute inset-1 rounded-3xl bg-white dark:bg-p-dark"
				style={{ opacity }}
				transition={transition}
			/>

			<motion.div
				className="relative flex items-center justify-center"
				style={{
					minHeight: getMinHeight(),
				}}
				transition={transition}>
				<div className="px-2 py-2 text-center xl:px-12 xl:py-12">{children}</div>
			</motion.div>
		</motion.div>
	)
}
