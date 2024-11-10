import MapChart from '@/components/MapChart'
import { useImgPadding } from '@/constants/imgpadding'
import { StickyVComp } from '../ui/sticky-comp-variant'

export const MapParallaxContent = () => {
	useImgPadding()
	return (
		<div className="relative">
			<StickyVComp contentHeight={true}>
				<section className="flex flex-col items-center justify-center w-full gap-12 px-4 py-4 antialiased md:flex-row lg:py-12 lg:subpixel-antialiased">
					<div className="prose text-center md:text-start">
						<h2 className="H2">Discover</h2>
						<h3 className="prose text-left H3">The network of businesses we trust and serve</h3>
						<p className="prose text-left Description">
							As our map grows, we hope it will serve as a trusted resource for those looking to connect with small
							businesses that share our values.
						</p>
					</div>
					<div className="text-center md:text-start">
					<div className="w-full h-full rounded-lg shadow-lg">
						<MapChart />
					</div>
					</div>
				</section>
			</StickyVComp>
		</div>
	)
}
