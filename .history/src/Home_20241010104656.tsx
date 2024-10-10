import BeamInput from "./components/others/BeamInput";
import { CountUpStats } from "./components/others/CountUpStats";
import { FoldingLogos } from "./components/others/FoldingLogos";
import { Link } from "react-router-dom";


export const Home = () => (
	<div className='min-h-screen bg-g-100 antialiased dark:bg-g-900'>
		<div className="flex flex-col pt-4 space-y-4 items-center justify-center px-4 lg:px-12">
			<CountUpStats />
			<button className="bg-g-200 dark:bg-g-800 hover:bg-g-300 dark:hover:bg-g-700 text-g-900 dark:text-g-100 font-bold py-2 px-4 rounded-full">
				<Link to="/about">About</Link></button>
				<button className="bg-g-200 dark:bg-g-800 hover:bg-g-300 dark:hover:bg-g-700 text-g-900 dark:text-g-100 font-bold py-2 px-4 rounded-full">
				<Link to="/more">More</Link></button>
			<FoldingLogos />
			<BeamInput />
		</div>
	</div>
);
