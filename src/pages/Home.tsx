/** @format */

import { HeroParallaxContent } from '@/components/content/HeroParallaxContent'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { MapParallaxContent } from '@/components/content/MapParallaexSection'
import { useImgPadding } from '@/constants/imgpadding'
import { CallTo } from '@/components/ui/CallTo'
import TimelineE from '@/components/ui/TimeTable'
import { Tech } from '@/components/Tech'

export const Home = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, easing: 'ease-in-out', once: true })
	}, [])

	useImgPadding()

	return (
		<div className="antialiased overflow-x-clip bg-n-9 dark:bg-n-6 lg:subpixel-antialiased">
			<div className="">
				<HeroParallaxContent />
				<CallTo />
				<TimelineE />
				<MapParallaxContent />
				<Tech />
			</div>
		</div>
	)
}

export default Home
