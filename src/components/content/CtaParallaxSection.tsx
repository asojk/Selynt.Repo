/** @format */

import { CallTo } from '@/components/ui/cta.tsx'
import { useImgPadding } from '@/constants/imgpadding'
import { StickyVComp } from '@/components/ui/sticky-comp-variant'

export const CtaParallaxContent = () => {
	useImgPadding()
	return (
		<div className="relative px-content-padding">
			<StickyVComp contentHeight={true}>
				<CallTo />
			</StickyVComp>
		</div>
	)
}
