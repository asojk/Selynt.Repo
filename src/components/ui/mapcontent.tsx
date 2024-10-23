import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import ContentSection from '@/components/ui/content-section'
import MapChart from '@/components/MapChart'

export const MapContent: React.FC = () => {
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
			className='relative w-full py-4 xl:py-24' // Removed `min-h-screen`
			style={{y, opacity}}>
			<div className='container mx-auto px-4 lg:px-8'>
				<div className='space-y-8'>
					<ContentSection
						className='text-left'
						title='Discover'
						subtitle='The network of businesses we trust and serve.'
						description='As our map grows, we hope it will serve as a trusted resource for those looking to connect with small businesses that share our values.'
					/>
					<div className='mx-auto aspect-video w-full max-w-2xl overflow-hidden rounded-lg shadow-lg'>
						<MapChart />
					</div>
				</div>
			</div>
		</motion.div>
	)
}
