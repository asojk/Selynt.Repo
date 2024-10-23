import {Cta} from '@/components/ui/cta'
import {useImgPadding} from '@/constants/imgpadding'
import {StickyVComp} from '../ui/sticky-comp-variant'

export const CtaParallaxContent = () => {
	useImgPadding()
	return (
		<div className='relative px-content-padding'>
			<StickyVComp contentHeight={true}>
				<Cta />
			</StickyVComp>
		</div>
	)
}
