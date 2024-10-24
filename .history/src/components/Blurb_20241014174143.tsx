/** @format */

import DotExpandButton from './DotExpandButton'

export default function Blurb() {
	return (
		<div className="min-h-screen">
			<div className="container mx-auto px-4 py-12 text-center">
				<h2 className="text-4xl font-bold tracking-tight text-a-dark dark:text-s lg:text-5xl">Coming soon...</h2>
				<h3 className="mx-auto mb-6 max-w-lg justify-center text-center text-xl font-semibold text-n-9 dark:text-white lg:text-2xl">
					We empower small businesses to thrive in a market dominated by larger corporations.
				</h3>
				<p className="mx-auto mb-8 mt-4 block max-w-md text-center text-lg font-semibold text-n-8 dark:text-n-3 lg:text-xl">
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
