/** @format */

import { CountUpStats } from './components/others/CountUpStats'
import { FoldingLogos } from './components/others/FoldingLogos'
import { WhyUs } from './components/WhyUs'
import { Link } from 'react-router-dom'
import { images } from './lib/assets'

export const Home = () => (
	<div className="bg-n-light antialiased dark:bg-n-dark">
		<div className="relative flex min-h-[90vh] flex-col items-center justify-end">
			{/* Floating Orb */}
			<div className="absolute top-1/3 z-[1000]">
				<div className="relative max-w-[85vw]">
					{/*
			White Box
			<div className='hidden dark:flex bg-n-5 rounded-[2rem] w-auto h-36 items-center bg-blend-overlay justify-center absolute inset-0 mt-6 z-[999] backdrop=blur-3xl opacity-70 backdrop-filter filter-blur blur-2xl' />
*/}
					{/* Floating Orb */}
					<div className="absolute inset-0 left-1/2 z-[888] flex h-36 w-36 animate-float items-center justify-center rounded-full bg-s opacity-70 blur-3xl filter md:-top-1/3 md:h-64 md:w-64 lg:-top-1/2 lg:h-96 lg:w-96 lg:opacity-30" />

					{/* Logo */}
					<img src={images.logo} alt="logo" className="relative z-[1000] h-48 w-full dark:hidden" />
					<img
						src={images.dlogo}
						alt="logo"
						className="relative z-[1000] hidden h-48 w-full object-contain dark:flex"
					/>
				</div>
			</div>
			{/*}
			<div className="absolute -top-48 left-1/3 lg:left-0 transform -translate-x-1/2 lg:-top-64">
				<div className="w-96 h-96 bg-s rounded-full filter blur-3xl opacity-70 animate-float" />
			</div>
			*/}

			{/* Text at the Bottom */}
			<div className="mb-8 text-center">
				<h1 className="text-xl font-semibold text-n-dark dark:text-n-light md:text-4xl">
					Boost Credibility with a{' '}
					<a className="animate-text bg-gradient-to-r from-p via-s to-a-darker bg-clip-text text-transparent">
						{' '}
						Clear Identity
					</a>
				</h1>
				<p className="mt-2 text-n-5 dark:text-n-4">Your Brand, Polished. Sleek. Professional. Affordable.</p>
			</div>
		</div>

		<div className="flex flex-col items-center justify-center space-y-4 px-2 pb-12 pt-12 lg:px-12">
			<CountUpStats />

			<button className="rounded-full bg-g-200 px-4 py-2 font-bold text-g-900 hover:bg-g-300 dark:bg-g-800 dark:text-g-100 dark:hover:bg-g-700">
				<Link to="/about">About</Link>
			</button>
			<button className="rounded-full bg-g-200 px-4 py-2 font-bold text-g-900 hover:bg-g-300 dark:bg-g-800 dark:text-g-100 dark:hover:bg-g-700">
				<Link to="/more">More</Link>
			</button>

			<FoldingLogos />

			<WhyUs />
		</div>
	</div>
)
