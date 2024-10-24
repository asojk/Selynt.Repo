/** @format */

import { Hero } from '@/components/ui/hero'
import { StickyComp } from '@/components/ui/sticky-component'
import { useImgPadding } from '@/constants/imgpadding'

export const HeroParallaxContent = () => {
	useImgPadding()
	return (
		<div className="relative px-content-padding">
			<StickyComp>
				<div className="absolute inset-0 z-10">
					<Hero />
				</div>
			</StickyComp>
		</div>
	)
}
