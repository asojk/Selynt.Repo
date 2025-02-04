import { Lamp } from '../components/LampLg'
//import WaveScrollAnimation from '../components/ui/animated-text'
import { ExpandableCards } from '../components/ui/expand-cards'
import { LampSmall } from '../components/LampSm'
import { WhoStepLoader } from '@/components/who-step-loader'
import { Vision } from '../components/Vision'
import { motion } from 'motion/react'
import { ClientTestimonials } from '@/components/AnimatedTestimonials'

const Home = () => {
	return (
		<main className='flex flex-col'>
			<div className='flex flex-grow flex-col'>
				<section className='relative'>
					<div className='hidden md:block'>
						<Lamp />
					</div>
					<div className='md:hidden'>
						<LampSmall />
					</div>
				</section>


				<section className='px-12 md:px-0'>
					<motion.div
					className='vision-section py-16 mx-auto max-w-lg md:max-w-xl '
						initial={{ opacity: 0.5, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}>

					<Vision />
					</motion.div>
					<motion.div
					className='vision-section py-16 mx-auto max-w-lg md:max-w-xl mt-12'
						initial={{ opacity: 0.5, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>

					<WhoStepLoader />

					</motion.div>
				</section>




				<section className='container mx-auto font-light max-w-xl'>
					<motion.div
						initial={{ opacity: 0.5, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}>

					<ClientTestimonials />
					</motion.div>
				</section>



				<section className='flex flex-col items-center justify-center gap-8 px-4 py-16'>
				<motion.div
						initial={{ opacity: 0.5, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: .1 }}>
					<ExpandableCards />
					</motion.div>
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
