import { HeroParallaxContent } from '@/components/content/HeroParallaxContent'
import { MapParallaxContent } from '@/components/content/MapParallaexSection'
import { useImgPadding } from '@/constants/imgpadding'
import { Tech } from '@/components/Tech'
import { Notification } from '@/components/ui/notification'
import { Lamp } from '@/components/ui/lamp'
import { Contact } from './Contact'

export const Home = () => {
	useImgPadding()
	return (
		<div className="min-h-screen antialiased overflow-x-clip bg-n-9 dark:bg-n-6 lg:subpixel-antialiased">
			<Notification initialDelay={1000} displayDuration={10000} />
			<HeroParallaxContent />
			<Lamp />
			<Tech />
			<MapParallaxContent />
			<div id="contact">
				<Contact />
			</div>
		</div>
	)
}

export default Home
