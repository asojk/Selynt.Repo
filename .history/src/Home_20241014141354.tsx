
import { CountUpStats } from './components/others/CountUpStats'
import {images} from './lib/assets'


export const Home = () => (
	<div className='bg-n-light dark:bg-n-dark antialiased'>
		<div className='relative flex flex-col justify-end items-center min-h-[90vh]'>

			{ /* Floating Orb */}
			<div className='absolute top-1/3 z-[1000]'>
				<div className='max-w-[85vw] relative'>

			{ /* Floating Orb */}
				<div className=" absolute left-1/2 w-36 h-36 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-s rounded-full md:-top-1/3 lg:-top-1/2 flex items-center justify-center inset-0 filter blur-3xl opacity-70 lg:opacity-30 animate-float z-[888]" />

			{/* Logo */}
					<img src={images.logo} alt='logo' className='h-48 w-full relative z-[1000] dark:hidden' />
					<img src={images.dlogo} alt='logo' className='h-48 w-full object-contain relative z-[1000] hidden dark:flex' />
				</div>
			</div>

			{ /* Text at the Bottom */ }
			<div className="text-center mb-8">
				<h1 className="text-xl md:text-4xl font-semibold text-n-dark dark:text-n-light">Boost Credibility with a{' '}
					<a className='animate-text bg-gradient-to-r from-p via-s to-a-darker bg-clip-text text-transparent'> Clear Identity</a>
				</h1>
				<p className="text-n-5 dark:text-n-4 mt-2">Welcome to <a className='italic'>Marketing</a> without the BS</p>
			</div>
		</div>

		<CountUpStats />

		<div className="mt-12 w-2/3 mx-auto text-lg"> 
 At Selynt, we empower small businesses to thrive... (or whatever sentence we decide on)
</div>
<div className="mt-4">
 Coming soon...
</div>
<button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Sign up for updates</button>
			
		<div className="flex flex-col space-y-12 md:space-y-16 lg:space-y-24 pt-12 items-center justify-center px-1 lg:px-12 pb-12">

			
		</div>
	</div>
);