import Blurb from './components/Blurb'
import {images} from './lib/assets'

export const Home = () => (
	<div className='bg-n-light antialiased dark:bg-n-dark'>
		<div className='relative flex min-h-[90vh] flex-col items-center justify-end'>
			{/* Floating Orb */}
			<div className='absolute top-1/3 z-[1000]'>
				<div className='relative max-w-[85vw]'>
					{/* Floating Orb */}
					<div className='absolute inset-0 left-1/2 z-[888] flex h-24 w-24 animate-float items-center justify-center rounded-full bg-s opacity-70 blur-3xl filter md:-top-1/3 md:h-64 md:w-64 lg:-top-1/2 lg:h-72 lg:w-72 lg:opacity-20' />

					{/* Logo */}
					<img src={images.logo}
						alt='logo'
						className='relative z-[1000] h-48 w-full dark:hidden' />
					<img
						src={images.dlogo}
						alt='logo'
						className='relative z-[1000] hidden h-36 w-full object-contain dark:flex'
					/>
				</div>
			</div>

			{/* Text at the Bottom */}
			<div className='mb-8 text-center'>
				<h1 className='text-xl font-semibold text-n-dark dark:text-n-light md:text-4xl'>
					Boost Credibility with a{' '}
					<a className='animate-text bg-gradient-to-r from-p via-s to-a-darker bg-clip-text text-transparent'>
						{' '}
						Clear Identity
					</a>
				</h1>
				<p className='mt-2 text-n-5 dark:text-n-4'>
					Welcome to <a className='italic'>Marketing</a> without the BS
				</p>
			</div>
		</div>
		<Blurb />
	</div>
)
