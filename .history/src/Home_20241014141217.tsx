/** @format */

import { Link } from 'react-router-dom'
import { images } from './lib/assets'

export const Home = () => (
	<div className="bg-n-light antialiased dark:bg-n-dark">
		<div className="relative flex min-h-[90vh] flex-col items-center justify-end">
			{/* Floating Orb */}
			<div className="absolute top-1/3 z-[1000]">
				<div className="relative max-w-[85vw]">
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

			{/* Text at the Bottom */}
			<div className="mb-8 text-center">
				<h1 className="text-xl font-semibold text-n-dark dark:text-n-light md:text-4xl">
					Boost Credibility with a{' '}
					<a className="animate-text bg-gradient-to-r from-p via-s to-a-darker bg-clip-text text-transparent">
						{' '}
						Clear Identity
					</a>
				</h1>
				<p className="mt-2 text-n-5 dark:text-n-4">
					Welcome to <a className="italic">Marketing</a> without the BS
				</p>
			</div>
		</div>

		<div className="mx-auto mt-12 w-2/3 text-lg">
			At Selynt, we empower small businesses to thrive... (or whatever sentence we decide on)
		</div>
		<div className="mt-4">Coming soon...</div>
		<button className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600">
			Sign up for updates
		</button>

		<div className="flex flex-col items-center justify-center space-y-12 px-1 pb-12 pt-12 md:space-y-16 lg:space-y-24 lg:px-12">
			<div className="relative flex flex-row items-center justify-center space-x-8">
				<button className="rounded-full bg-g-200 px-4 py-2 font-bold text-g-900 hover:bg-g-300 dark:bg-g-800 dark:text-g-100 dark:hover:bg-g-700">
					<Link to="/about">About</Link>
				</button>
				<button className="rounded-full bg-g-200 px-4 py-2 font-bold text-g-900 hover:bg-g-300 dark:bg-g-800 dark:text-g-100 dark:hover:bg-g-700">
					<Link to="/more">More</Link>
				</button>
			</div>
		</div>
	</div>
)
