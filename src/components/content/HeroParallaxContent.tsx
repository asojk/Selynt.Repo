import { Hero } from '@/components/ui/hero'
import { StickyVComp } from '../ui/sticky-comp-variant'

export const HeroParallaxContent = () => {
	return (
		<div className="relative">
			<StickyVComp heightMode="fullViewport">
				<div className="absolute inset-0 z-10">
					<Hero />
				</div>
			</StickyVComp>
		</div>
	)
}
