import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import ContentSection from '@/components/ui/content-section'
import DotExpandButton from '@/components/common/DotExpandButton'

export const Cta: React.FC = () => {
	const targetRef = useRef(null)
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start start', 'end start']
	})

	const y = useTransform(scrollYProgress, [0, 1], [0, -100])
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

	return (
		<motion.div ref={targetRef} className='relative w-full py-4 xl:py-24' style={{y, opacity}}>
			<ContentSection
				className=''
				title='Our Standards'
				subtitle='We empower small businesses to thrive in a market dominated by larger corporations. Quality is at the heart of everything we do.'
				description='We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity, simplicity, and affordability—because we believe that standing out should not mean overspending. We never compromise on the quality of our work, ensuring that every project meets the highest standards of design and functionality.'
				customContent={<DotExpandButton />}
				data-aos='fade-left'
			/>
		</motion.div>
	)
}
