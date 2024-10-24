/** @format */

import DotExpandButton from './DotExpandButton'

export default function Blurb() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center pt-36">
			<div className="container mx-auto px-6 py-12 text-center">
				<h2 className="pb-6 text-4xl font-extrabold tracking-tight text-a-dark dark:text-s lg:text-5xl">
					Coming soon...
				</h2>
				<h3 className="mx-auto max-w-lg pb-6 text-xl font-medium text-n-9 dark:text-white lg:text-2xl">
					We empower small businesses to thrive in a market dominated by larger corporations.
				</h3>
				<p className="mx-auto max-w-xl text-lg leading-relaxed text-n-8 dark:text-n-3 lg:text-xl">
					We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity,
					simplicity, and affordability—because we believe that standing out shouldn’t mean overspending.
				</p>
				<div className="mt-8">
					<DotExpandButton />
				</div>
			</div>
		</div>
	)
}
