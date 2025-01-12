import { HeroParallaxContent } from '@/components/content/HeroParallaxContent'
import { MapParallaxContent } from '@/components/content/MapParallaexSection'
import { useImgPadding } from '@/constants/imgpadding'
//import { Tech } from '@/components/Tech'
import { Notification } from '@/components/ui/notification'
import { Lamp } from '@/components/ui/lamp'
import { Contact } from './Contact'
import { This } from '@/components/This'

const Home = () => {
	useImgPadding()
	return (
<<<<<<< Updated upstream
		<div className="min-h-screen overflow-x-clip bg-n-9 antialiased dark:bg-n-6 lg:subpixel-antialiased">
			<Notification initialDelay={1000} displayDuration={10000} />
			<HeroParallaxContent />
			<This />
			<Lamp />
			<MapParallaxContent />
			<div className="block lg:hidden">
				<Contact />
			</div>
		</div>
=======
		<main className='flex flex-col'>
			<div className='flex flex-grow flex-col'>
				<section className='relative mb-24 flex min-h-[50vh] items-center justify-center lg:mb-36'>
					<div className='absolute inset-0'>
						<div className='hidden h-full md:flex'>
							<Lamp />
						</div>
						<div className='h-full md:hidden'>
							<LampSmall />
						</div>
					</div>
				</section>

				<section className='vision-section py-24 lg:py-36'>
					<Vision />
				</section>
				<section className='additional-content'>
					<div className='relative z-[2] w-full'>
						<WaveScrollAnimation />
					</div>
				</section>

				<section className='content-section flex flex-col items-center justify-center gap-8 px-4 py-16'>
					<WhoStepLoader />
					<ExpandableCards />
				</section>
			</div>
		</main>
>>>>>>> Stashed changes
	)
}

export default Home
