/** @format */

import DotExpandButton from './DotExpandButton'

export default function Blurb() {
	return (
		<div className="h-screen">
			<div className="container mx-auto items-center px-4 py-12 text-center">
				<h2 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white xl:text-3xl">Coming soon...</h2>
				<h3 className="mb-6 text-center text-5xl font-semibold lg:text-7xl">
					we empower small businesses to thrive in a market dominated by larger corporations.
				</h3>
				<p className="mx-auto mb-8 mt-4 block max-w-lg text-center text-5xl font-semibold text-gray-500 dark:text-gray-300 lg:text-7xl">
					We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity,
					simplicity, and affordability—because we believe that standing out shouldn’t mean overspending.
				</p>
				<div className="mt-6">
					<DotExpandButton />
				</div>
			</div>
		</div>
	)
}
