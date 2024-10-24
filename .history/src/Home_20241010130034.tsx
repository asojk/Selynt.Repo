/** @format */

import BeamInput from './components/others/BeamInput'
import { CountUpStats } from './components/others/CountUpStats'
import { FoldingLogos } from './components/others/FoldingLogos'
import { Link } from 'react-router-dom'
import { images } from './lib/assets'

export const Home = () => (
	<div className="bg-n-light antialiased dark:bg-n-dark">
		<div className="relative flex min-h-[90vh] flex-col items-center justify-end">
			{/* Floating Orb */}
			<div className="absolute top-1/3 z-[1000]">
				<div className="max-w-screen-sm">
					<img src={images.logo} alt="logo" className="h-48 w-full" />
				</div>
			</div>
			<div className="absolute left-1/2 top-16 -translate-x-1/2 transform">
				<div className="h-96 w-96 animate-float rounded-full bg-s opacity-70 blur-3xl filter" />
			</div>

			{/* Text at the Bottom */}
			<div className="mb-8 text-center">
				<h1 className="text-4xl font-semibold text-n-dark dark:text-n-light">Types for Tailwind-CSS config</h1>
				<p className="mt-2 text-n-5 dark:text-n-4">How to use Typescript types for Tailwind-CSS</p>
			</div>
		</div>

		<div className="flex flex-col items-center justify-center space-y-4 px-4 pt-4 lg:px-12">
			<CountUpStats />

			<button className="rounded-full bg-g-200 px-4 py-2 font-bold text-g-900 hover:bg-g-300 dark:bg-g-800 dark:text-g-100 dark:hover:bg-g-700">
				<Link to="/about">About</Link>
			</button>
			<button className="rounded-full bg-g-200 px-4 py-2 font-bold text-g-900 hover:bg-g-300 dark:bg-g-800 dark:text-g-100 dark:hover:bg-g-700">
				<Link to="/more">More</Link>
			</button>

			<FoldingLogos />
			<BeamInput />
		</div>
	</div>
)
