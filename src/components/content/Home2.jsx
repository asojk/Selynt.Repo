/** @format */

//import {useImgPadding} from '@/constants/imgpadding'
import Timeline from '@/components/ui/Timeline'
import { StickyVComp } from '../ui/sticky-comp-variant'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BlockInTextCard } from '../common/BlockInTextCard'
import MintCard from '../common/MintCard'

export const Home2 = () => {
	return (
		<div className="relative">
			<StickyVComp contentHeight={true}>
				<Timeline />
			</StickyVComp>
			<StickyVComp contentHeight={true}>
				<div className="p-8">
					<p>obviously incomplete, Tom Tits</p>
					<div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						<MintCard
							avatar="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/icon-XA1wAih8gI77GE2Pq6xWHI45PxPYxh.png"
							info="	− map descriptions"
							info1="-About"
							info2="- SEO & Meta Tags"
							content1="-Accessibility (WCAG guidelines)"
							content2="-Social Proof?"
						/>
						<MintCard
							avatar="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/icon-XA1wAih8gI77GE2Pq6xWHI45PxPYxh.png"
							info="	− contact form"
							info1="finish unifying all text and header classes"
							info2="polish timeline"
							content1="content1"
							content2="content2"
						/>
						<MintCard
							avatar="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/icon-XA1wAih8gI77GE2Pq6xWHI45PxPYxh.png"
							info="− Optimize Images "
							info1="info1"
							info2="info2"
							content1="content1"
							content2="content2"
						/>
					</div>
				</div>
			</StickyVComp>
		</div>
	)
}

export default Home2
