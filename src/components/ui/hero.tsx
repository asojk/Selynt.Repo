import React, {useRef} from 'react'
import {images} from '@/lib/assets'
import {motion, useScroll, useTransform} from 'framer-motion'

export const Hero: React.FC = () => {
	const targetRef = useRef(null)
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start start', 'end start']
	})

	const y = useTransform(scrollYProgress, [0, 1], [0, -100])
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

	return (
		<motion.div
			ref={targetRef}
			className='relative flex h-screen flex-col items-center'
			style={{y, opacity}}>
			{/* Logo at top 1/3 */}
			<div className='relative z-[1000] mt-[33vh]'>
				<div className='relative max-w-[85vw]'>
					{/* Floating Orb */}
					<div className='absolute inset-0 left-1/2 z-[888] flex h-24 w-24 animate-float items-center justify-center rounded-full bg-s opacity-70 blur-3xl filter md:h-64 md:w-64 lg:h-72 lg:w-72 lg:opacity-20' />
					{/* Logo */}
					<img
						src={images.logo}
						alt='logo'
						className='relative z-[1000] h-48 w-full px-4 dark:hidden'
					/>
					<img
						src={images.dlogo}
						alt='logo'
						className='relative z-[1000] hidden h-48 w-full px-4 dark:block'
					/>
				</div>
			</div>

			{/* Text at bottom */}
			<div className='mb-16 mt-auto text-center'>
				<h1 className='Hero'>
					Boost Credibility <br className='line-break-small' /> with a{' '}
					<span className='animate-text bg-gradient-to-r from-p via-s to-a-darker bg-clip-text text-transparent'>
						Clear Identity
					</span>
				</h1>
				<p className='Hero-p dark:text-n-5'>Websites & Branding Without the BS</p>
			</div>
		</motion.div>
	)
}
