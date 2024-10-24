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
				<div className="relative max-w-[85vw]">
					{/* White Box */}
					<div className="backdrop=blur-3xl filter-blur absolute inset-0 z-[999] mt-6 hidden h-36 w-auto items-center justify-center rounded-[2rem] bg-n-5 opacity-70 bg-blend-multiply blur-2xl backdrop-filter dark:flex" />

					{/* Floating Orb */}
					<div className="absolute inset-0 left-1/2 z-[888] flex h-96 w-96 animate-float items-center justify-center rounded-full bg-s opacity-70 blur-3xl filter" />

					{/* Logo */}
					<img src={images.logo} alt="logo" className="relative z-[1000] h-48 w-full" />
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
					<a className="animate-text bg-gradient-to-r from-p via-s-dark to-a bg-clip-text text-transparent">
						{' '}
						Clear Identity
					</a>
				</h1>
				<p className="mt-2 text-n-5 dark:text-n-4">Your Brand, Polished. Sleek. Professional. Affordable.</p>
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
			<div className="pb-24 text-n-dark dark:text-n-light">
				<BeamInput />
			</div>
		</div>
	</div>
)
