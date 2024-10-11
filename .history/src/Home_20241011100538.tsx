import BeamInput from "./components/others/BeamInput";
import { CountUpStats } from "./components/others/CountUpStats";
import { FoldingLogos } from "./components/others/FoldingLogos";
import { Link } from "react-router-dom";
import {images} from './lib/assets'


export const Home = () => (
	<div className='bg-n-light dark:bg-n-dark antialiased'>
		<div className='relative flex flex-col justify-end items-center min-h-[90vh]'>

			{ /* Floating Orb */}
			<div className='absolute top-1/3 z-[1000]'>
				<div className='max-w-[85vw] relative'>

			{/* White Box */}
			<div className='hidden dark:flex bg-n-5 rounded-[2rem] w-auto h-36 items-center bg-blend-overlay justify-center absolute inset-0 mt-6 z-[999] backdrop=blur-3xl opacity-70 backdrop-filter filter-blur blur-2xl' />

			{ /* Floating Orb */}
				<div className=" absolute left-1/2 w-96 h-96 bg-s rounded-full flex items-center justify-center inset-0 filter blur-3xl opacity-70 animate-float z-[888]" />

			{/* Logo */}
				<img src={images.logo} alt='logo' className='h-48 w-full relative z-[1000]' />
				</div>
			</div>
			{/*}
			<div className="absolute -top-48 left-1/3 lg:left-0 transform -translate-x-1/2 lg:-top-64">
				<div className="w-96 h-96 bg-s rounded-full filter blur-3xl opacity-70 animate-float" />
			</div>
			*/}

			{ /* Text at the Bottom */ }
			<div className="text-center mb-8">
				<h1 className="text-xl md:text-4xl font-semibold text-n-dark dark:text-n-light">Boost Credibility with a{' '}
					<a className='animate-text bg-gradient-to-r from-p via-s-dark to-a bg-clip-text text-transparent'> Clear Identity</a>
				</h1>
				<p className="text-n-5 dark:text-n-4 mt-2">Your Brand, Polished. Sleek. Professional. Affordable.</p>
			</div>
		</div>
			
		<div className="flex flex-col pt-4 space-y-4 items-center justify-center px-4 lg:px-12">
			<CountUpStats />

				<button className="bg-g-200 dark:bg-g-800 hover:bg-g-300 dark:hover:bg-g-700 text-g-900 dark:text-g-100 font-bold py-2 px-4 rounded-full">
					<Link to="/about">About</Link></button>
				<button className="bg-g-200 dark:bg-g-800 hover:bg-g-300 dark:hover:bg-g-700 text-g-900 dark:text-g-100 font-bold py-2 px-4 rounded-full">
					<Link to="/more">More</Link></button>
			
			<FoldingLogos />
			<div className='pb-24 text-n-dark dark:text-n-light'>
				<BeamInput />
				</div>
		</div>
	</div>
);