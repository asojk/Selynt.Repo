import {useRef, ReactNode, useEffect, useState} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import {useImgPadding} from '@/constants/imgpadding.tsx'

interface StickyProps {
	children?: ReactNode
}

export const StickyComp = ({children}: StickyProps) => {
	useImgPadding()

	return (
		<div className='relative px-content-padding'>
			<StickyImage>
				<div className='px-4 py-4 lg:py-8 xl:px-8'>{children}</div>
			</StickyImage>
		</div>
	)
}

interface StickyImageProps {
	children: ReactNode
}

const StickyImage: React.FC<StickyImageProps> = ({children}) => {
	const targetRef = useRef(null)
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['end end', 'end start']
	})
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

	const [imgPadding, setImgPadding] = useState(0)

	useEffect(() => {
		const updateImgPadding = () => {
			const screenWidth = window.innerWidth
			let padding
			if (screenWidth < 768) {
				padding = 6
			} else if (screenWidth < 1024) {
				padding = 8
			} else {
				padding = 12
			}
			setImgPadding(padding)
		}

		updateImgPadding()
		window.addEventListener('resize', updateImgPadding)

		return () => {
			window.removeEventListener('resize', updateImgPadding)
		}
	}, [])

	return (
		<motion.div
			ref={targetRef}
			style={{
				backgroundSize: 'cover',
				backgroundImage: 'url("")',
				backgroundPosition: 'center',
				height: `calc(100vh - ${imgPadding * 2}px)`,
				top: imgPadding,
				scale,
				maxWidth: '1440px', // Set your desired max-width here
				width: '100%',
				margin: '0 auto' // This centers the div when it reaches max-width
			}}
			className='sticky z-0 mx-auto overflow-hidden rounded-3xl bg-cover bg-center px-2 xl:px-12'>
			{/* Background Overlay */}
			<motion.div className='absolute inset-1 rounded-3xl bg-n-1 dark:bg-n-9' style={{opacity}} />

			{/* Content Container */}
			<div
				className='relative flex items-center justify-center'
				style={{minHeight: `calc(100vh - ${imgPadding * 2}px)`}}>
				<div className='px-4 py-4 text-center xl:px-12 xl:py-12'>{children}</div>
			</div>
		</motion.div>
	)
}
