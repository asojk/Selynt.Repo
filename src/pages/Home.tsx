/** @format */

import { HeroParallaxContent } from '@/components/content/HeroParallaxContent'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
//import { CtaParallaxContent } from '@/components/content/CtaParallaxSection'
import { MapParallaxContent } from '@/components/content/MapParallaexSection'
import { useImgPadding } from '@/constants/imgpadding'
import Home2 from '@/components/content/Home2'

export const Home = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, easing: 'ease-in-out', once: true })
	}, [])

	useImgPadding() // Init CSS var

	return (
		<div className="overflow-x-clip bg-n-9 antialiased dark:bg-n-6 lg:subpixel-antialiased">
			<div className="lg:px-content-padding">
				<HeroParallaxContent />
        {/* <CtaParallaxContent /> */}
				<Home2 />
				<MapParallaxContent />
			</div>
		</div>
	)
}

export default Home
