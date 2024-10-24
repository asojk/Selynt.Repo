/** @format */

import DotExpandButton from './DotExpandButton'

export default function Blurb() {
	return (
		<>
			<div className="flex h-screen flex-col items-center justify-center">
				<div className="container mx-auto flex flex-col items-center px-4 py-12 text-center">
					<h2 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white xl:text-3xl">
						Coming soon...
					</h2>
					<p className="mt-4 block max-w-4xl text-gray-500 dark:text-gray-300">
						At Selynt, we empower small businesses to thrive in a market dominated by larger corporations.
					</p>
					<p className="mt-4 block max-w-4xl text-gray-500 dark:text-gray-300">
						We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on
						clarity, simplicity, and affordability—because we believe that standing out shouldn’t mean overspending.
					</p>

					<div className="mt-6">
						<DotExpandButton />
					</div>
				</div>
			</div>
			<div className="relative z-10 mb-12 lg:mb-24">
				<h3 className="mb-6 text-center text-5xl font-semibold lg:text-7xl">Pricing plans</h3>
				<p className="mx-auto mb-8 max-w-lg text-center">
					Lorem ipsum dolor sit amet consectetur. Pulvinar eu rhoncus tincidunt eget mattis netus ridiculus.
				</p>
			</div>
		</>
	)
}
