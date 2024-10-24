/** @format */

import BeamInput from './others/BeamInput'

export default function Blurb() {
	return (
		<div className="bg-white dark:bg-gray-900">
			<div className="container mx-auto flex flex-col items-center px-4 py-12 text-center">
				<h2 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white xl:text-3xl">
					Try something really different right now.
				</h2>
				<p className="mt-4 block max-w-4xl text-gray-500 dark:text-gray-300">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse iure tenetur commodi ipsam error voluptate
					magni. Adipisci repudiandae ullam commodi iusto reprehenderit suscipit facere voluptatem, eaque maiores
					minima. Neque, officiis.
				</p>
				<div className="mt-6">
					<BeamInput />
				</div>
			</div>
		</div>
	)
}
