import React from 'react'
import MapChart from './MapChart'
import {images} from './lib/assets'
import ContentSection from './components/ui/ContentSection'
import DotExpandButton from './components/DotExpandButton'

const Home: React.FC = () => {
	return (
		<div className='bg-n-light antialiased dark:bg-n-dark lg:subpixel-antialiased'>
			<div className='relative flex min-h-[90vh] flex-col items-center justify-end md:min-h-screen'>
				{/* Floating Orb */}
				<div className='absolute top-1/3 z-[1000]'>
					<div className='relative max-w-[85vw]'>
						{/* Floating Orb */}
						<div className='absolute inset-0 left-1/2 z-[888] flex h-24 w-24 animate-float items-center justify-center rounded-full bg-s opacity-70 blur-3xl filter md:-top-1/3 md:h-64 md:w-64 lg:-top-1/2 lg:h-72 lg:w-72 lg:opacity-20' />
						{/* Logo */}
						<img
							src={images.logo}
							alt='logo'
							className='relative z-[1000] h-48 w-full dark:hidden'
						/>
						<img
							src={images.dlogo}
							alt='logo'
							className='relative z-[1000] hidden h-36 w-full object-contain dark:flex'
						/>
					</div>
				</div>
				{/* Text at the Bottom */}
				<div className='mb-8 text-center'>
					<h1 className='text-lg font-semibold text-n-dark dark:text-n-light md:text-4xl'>
						Boost Credibility <br className='line-break-small' />
						with a{' '}
						<span className='animate-text bg-gradient-to-r from-p via-s to-a-darker bg-clip-text text-transparent'>
							Clear Identity
						</span>
					</h1>
					<p className='mt-2 text-n-6 dark:text-n-3'>
						Welcome to <span className='italic'>Marketing</span> without the BS
					</p>
				</div>
      </div>
      <ContentSection
        title="Discover"
        subtitle="The network of businesses we trust and serve."
        description='As our map grows, it will serve as a trusted resource for those looking to connect with small businesses that share our values.'
        customContent={<MapChart />}
        className="pb-12 pt-24"
      />
      <ContentSection
        title="Coming soon..."
        subtitle="We empower small businesses to thrive in a market dominated by larger corporations."
        description="We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity, simplicity, and affordability—because we believe that standing out shouldn't mean overspending."
        customContent={<DotExpandButton />}
      />
		</div>
	)
}

export default Home
