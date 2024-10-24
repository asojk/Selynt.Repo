/** @format */

import { MapContent } from '@/components/ui/mapcontent'
import { useImgPadding } from '@/constants/imgpadding'
import { StickyVComp } from '../ui/sticky-comp-variant'

export const MapParallaxContent = () => {
	useImgPadding()
	return (
		<div className="relative px-content-padding">
			<StickyVComp contentHeight={true}>
				<MapContent />
			</StickyVComp>
		</div>
	)
}
