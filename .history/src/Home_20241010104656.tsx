/** @format */

import BeamInput from './components/others/BeamInput'
import { CountUpStats } from './components/others/CountUpStats'
import { FoldingLogos } from './components/others/FoldingLogos'
import { Link } from 'react-router-dom'

export const Home = () => (
	<div className="min-h-screen bg-g-100 antialiased dark:bg-g-900">
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
