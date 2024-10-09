import BeamInput from "./components/others/BeamInput";
import { CountUpStats } from "./components/others/CountUpStats";
import { FoldingLogos } from "./components/others/FoldingLogos";


export const Home = () => (
	<div className='min-h-screen bg-g-100 antialiased dark:bg-g-900'>
		<div className="flex flex-col pt-4 space-y-4 items-center justify-center px-4 lg:px-12">
			<CountUpStats />
			<FoldingLogos />
			<BeamInput />
		</div>
	</div>
);
