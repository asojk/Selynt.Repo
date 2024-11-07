import { HeroParallaxContent } from '@/components/content/HeroParallaxContent'
import { MapParallaxContent } from '@/components/content/MapParallaexSection'
import { useImgPadding } from '@/constants/imgpadding'
import { Tech } from '@/components/Tech'
import { Notification } from '@/components/ui/notification'
import { Lamp } from '@/components/ui/lamp'
import { Process } from '@/components/ui/process'

export const Home = () => {
	useImgPadding()
	return (
		<div className="overflow-x-clip bg-n-9 antialiased dark:bg-n-6 lg:subpixel-antialiased min-h-screen">
			<Notification initialDelay={1000} displayDuration={10000} />
			<HeroParallaxContent />
			<Lamp />
			<Tech />
			<MapParallaxContent />
			<Process />
		</div>
	)
}

export default Home
