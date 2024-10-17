import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MapChart from './MapChart'
import {images} from './lib/assets'
import ContentSection from './components/ui/ContentSection'
import DotExpandButton from './components/DotExpandButton'

const Home: React.FC = () => {
	useEffect(() => {
		AOS.init({duration: 1000, easing: 'ease-in-out', once: true})
	}, [])

	return (
		<div className='bg-n-light antialiased dark:bg-n-dark lg:subpixel-antialiased'>
			<div
				className='relative flex min-h-[90vh] flex-col items-center justify-end md:min-h-screen'
				data-aos='fade-up'>
				{/* Floating Orb */}
				<div className='absolute top-1/3 z-[1000]'>
					<div className='relative max-w-[85vw]' data-aos='zoom-in'>
						{/* Floating Orb */}
						<div className='absolute inset-0 left-1/2 z-[888] flex h-24 w-24 animate-float items-center justify-center rounded-full bg-s opacity-70 blur-3xl filter md:-top-1/3 md:h-64 md:w-64 lg:-top-1/2 lg:h-72 lg:w-72 lg:opacity-20' />
						{/* Logo */}
						<img
							src={images.logo}
							alt='logo'
							className='relative z-[1000] h-48 w-full dark:hidden'
							data-aos='fade-in'
							data-aos-delay='500'
						/>
						<img
							src={images.dlogo}
							alt='logo'
							className='relative z-[1000] hidden h-36 w-full object-contain dark:block'
							data-aos='fade-in'
							data-aos-delay='700'
						/>
					</div>
				</div>

				{/* Text at the Bottom */}
				<div className='mb-8 text-center' data-aos='fade-up' data-aos-delay='800'>
					<h1 className='text-lg font-semibold text-n-dark dark:text-n-light md:text-4xl'>
						Boost Credibility <br className='line-break-small' />
						with a{' '}
						<span className='animate-text bg-gradient-to-r from-p via-s to-a-darker bg-clip-text text-transparent'>
							Clear Identity
						</span>
					</h1>
					<p className='mb-12 mt-2 pb-2 text-n-6 dark:text-n-3 md:mb-24'>
						Welcome to <span className='italic'>Marketing</span> without the BS
					</p>
				</div>
			</div>
			<div data-aos='fade-left'>
				<ContentSection
					className='py-24'
					title='Discover'
					subtitle='The network of businesses we trust and serve.'
					description='As our map grows, it will serve as a trusted resource for those looking to connect with small businesses that share our values.'
					customContent={<MapChart />}
				/>
			</div>
			<div data-aos='fade-left'>
				<ContentSection
					className='py-24'
					title='Our Mission'
					subtitle='We empower small businesses to thrive in a market dominated by larger corporations.'
					description="We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity, simplicity, and affordability—because we believe that standing out shouldn't mean overspending."
					customContent={<DotExpandButton />}
					data-aos='fade-right'
				/>
			</div>
		</div>
	)
}

export default Home
