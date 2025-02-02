import { Lamp } from '../components/LampLg'
import WaveScrollAnimation from '../components/ui/animated-text'
import { ExpandableCards } from '../components/ui/expand-cards'
import { LampSmall } from '../components/LampSm'
import { WhoStepLoader } from '@/components/who-step-loader'
import { Vision } from '../components/Vision'
import LiquidSideNav from '@/components/LiquidSideNav'


const Home = () => {

	return (
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
					<LiquidSideNav />

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
	)
}

export default Home

{
	/*
		<motion.p
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 2.5, duration: 0.8, ease: 'easeOut' }}
			className='absolute bottom-24 font-semibold uppercase text-black text-center dark:text-white'>Our Mission is Simple</motion.p>
				<div className='relative flex items-center justify-center w-full mx-auto z-10 overflow-hidden h-[25vh]'>

      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
				<WaveScrollAnimation />
      </div>

				</div>
				<div className='relative'>
					<div className='grid-background-z h-[200vh] overflow-hidden'></div>
					<Vision />
				</div>
				*/
}
