import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function SlidePricing() {
	const [selected, setSelected] = useState<'M' | 'A'>('M')

	return (
		<section className="relative w-full overflow-hidden bg-white px-4 py-12 text-black dark:bg-n-9 dark:text-white lg:px-8 lg:py-24">
			<Title />
			<Heading selected={selected} setSelected={setSelected} />
			<PriceCards selected={selected} />
			<BrandingSection />
			<TopLeftCircle />
			<BottomRightCircle />
		</section>
	)
}

const SELECTED_STYLES = 'bg-p text-white font-medium rounded-lg py-3 w-28 relative'
const DESELECTED_STYLES = 'font-medium rounded-lg py-3 w-28 hover:bg-slate-100 transition-colors relative'

interface HeadingProps {
	selected: 'M' | 'A'
	setSelected: React.Dispatch<React.SetStateAction<'M' | 'A'>>
}

const Heading = ({ selected, setSelected }: HeadingProps) => {
	return (
	<div className="relative z-10 mb-8 lg:mb-8">
			<div className="flex items-center justify-center space-x-4">
				<button
					onClick={() => setSelected('M')}
					className={`${selected === 'M' ? SELECTED_STYLES : DESELECTED_STYLES} whitespace-nowrap`}>
					Selynt
					{selected === 'M' && <BackgroundShift />}
				</button>
				<div className="relative">
					<button
						onClick={() => setSelected('A')}
						className={`${selected === 'A' ? SELECTED_STYLES : DESELECTED_STYLES} whitespace-nowrap`}>
						The Others
						{selected === 'A' && <BackgroundShift />}
					</button>
					<CTAArrow />
				</div>
			</div>
		</div>
	)
}

const BackgroundShift = () => <motion.span layoutId="bg-shift" className="absolute inset-0 -z-10 rounded-xl bg-a" />

const PriceCards = ({ selected }: { selected: 'M' | 'A' }) => (
	<>
		<div className="">



			<div className="relative z-10 mx-auto flex w-full max-w-3xl flex-row justify-center gap-4 md:gap-12">
				{/* Essential Kit */}
				<div className="flex w-full max-w-80 flex-col justify-between rounded-xl border-[1px] border-slate-300 bg-white p-6 text-n-900 shadow-md dark:bg-n-900 dark:text-white lg:w-1/2">
					<div>
						<p className="mb-2 text-2xl font-bold">Essential Kit</p>
						<div className="mb-8 flex h-20 items-center">
							<AnimatePresence mode="wait">
								{selected === 'M' ? (
									<motion.p
										key="oneTime"
										initial={{ y: -50, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: 50, opacity: 0 }}
										transition={{ ease: 'linear', duration: 0.25 }}
										className="animate-text bg-gradient-to-r from-p via-p-2 to-p-dark bg-clip-text text-6xl font-bold text-transparent">
										<span>$399</span>
									</motion.p>
								) : (
									<motion.p
										key="yearly1"
										initial={{ y: -50, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: 50, opacity: 0 }}
										transition={{ ease: 'linear', duration: 0.25 }}
										className="text-6xl font-bold text-red-500">
										<span>$2,000+</span>
									</motion.p>
								)}
							</AnimatePresence>
						</div>
						<ListItems
							listItems={['Custom Design & Configuration Solutions', 'Deployment, Hosting & All Setup Included']}
						/>
					</div>
					<span className="flex justify-end text-sm italic">
						Additional anytime maintenance or updates billed individually
					</span>
					<motion.button
						whileHover={{ scale: 1.015 }}
						whileTap={{ scale: 0.985 }}
						className="mt-8 w-full rounded-lg bg-p py-4 font-semibold uppercase text-white">
						Get Started
					</motion.button>
				</div>

				{/* Custom Solution */}
				<div className="flex w-full max-w-80 flex-col justify-between rounded-xl border-[1px] border-slate-300 bg-white p-6 text-n-900 shadow-md dark:bg-n-900 dark:text-white lg:w-1/2">
					<div>
						<p className="mb-2 text-2xl font-bold">Custom Solution</p>
						<div className="mb-8 flex h-20 items-center">
							<AnimatePresence mode="wait">
								{selected === 'M' ? (
									<motion.p
										key="oneTime"
										initial={{ y: -50, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: 50, opacity: 0 }}
										transition={{ ease: 'linear', duration: 0.25 }}
										className="text-6xl font-bold">
										<span>$1299</span>
									</motion.p>
								) : (
									<motion.p
										key="yearly2"
										initial={{ y: -50, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: 50, opacity: 0 }}
										transition={{ ease: 'linear', duration: 0.25 }}
										className="text-lg italic text-yellow-500">
										<a className="">You don't want to know how much we've seen companies spend...</a>
									</motion.p>
								)}
							</AnimatePresence>
						</div>
						<ListItems
							listItems={[
								'Color Palette',
								'All-Around Customization',
								'In-Depth Requirements Gathering',
								'Comprehensive Solutions',
								'Four Maintenance /Update Requests',
							]}
						/>
					</div>

					<motion.button
						whileHover={{ scale: 1.015 }}
						whileTap={{ scale: 0.985 }}
						className="mt-8 w-full rounded-lg bg-p py-4 font-semibold uppercase text-white">
						Get Started
					</motion.button>
				</div>
			</div>
		</div>
	</>
)

const BrandingSection = () => (
	<>
    <section className="flex flex-col items-start justify-center gap-12 px-24 lg:px-0 antialiased py-12 lg:py-24 lg:subpixel-antialiased md:flex-row w-full mx-auto max-w-5xl">
					<div className="flex items-center justify-center lg:pb-8 md:justify-start">
							<h2 className="H2 pl-0 lg:pl-12 xl:pl-24">Branding</h2>
					</div>
					<div className="relative z-10 mx-auto flex w-full max-w-md lg:max-w-4xl flex-col gap-4 lg:flex-row lg:gap-8">
							{/* Basic Branding */}
							<div className="flex w-full max-w-sm flex-col justify-between rounded-xl border-[1px] border-slate-300 bg-white p-4 text-n-900 shadow-md dark:bg-n-900 dark:text-white">
									<div>
											<p className="mb-2 h-16 text-2xl font-bold w-12">Basic Branding</p>
											<div className="mb-8">
													<p className="text-4xl font-bold">$300</p>
											</div>
											<ListItems listItems={['Custom Logo', 'Personal Color Palette']} />
									</div>
									<motion.button
											whileHover={{ scale: 1.015 }}
											whileTap={{ scale: 0.985 }}
											className="mt-8 w-full rounded-lg bg-a-dark py-4 font-semibold uppercase text-white">
											Get Started
									</motion.button>
							</div>

							{/* Intermediate Branding */}
							<div className="flex w-full max-w-sm flex-col justify-between rounded-xl border-[1px] border-slate-300 bg-white p-4 text-n-900 shadow-md dark:bg-n-900 dark:text-white">
									<div>
											<p className="mb-2 h-16 text-2xl font-bold">Intermediate Branding</p>
											<div className="mb-8">
													<p className="animate-text bg-gradient-to-r from-p via-p-2 to-p-dark bg-clip-text text-6xl font-bold text-transparent">
															$600
													</p>
											</div>
											<ListItems
													listItems={['Logo Design', 'Color Palette', 'Brand Guidelines', 'Instructive Implementation']}
											/>
									</div>
									<motion.button
											whileHover={{ scale: 1.015 }}
											whileTap={{ scale: 0.985 }}
											className="mt-8 w-full rounded-lg bg-a-dark py-4 font-semibold uppercase text-white">
											Get Started
									</motion.button>
							</div>

							{/* Comprehensive Branding */}
							<div className="flex w-full max-w-sm flex-col justify-between rounded-xl border-[1px] border-slate-300 bg-white p-4 text-n-900 shadow-md dark:bg-n-900 dark:text-white">
									<div>
											<p className="mb-2 h-16 text-2xl font-bold">Comprehensive Branding</p>
											<div className="mb-8">
													<p className="text-4xl font-bold">$1,000</p>
											</div>
											<ListItems
													listItems={['Full Branding Suite', 'In-Depth Brand Guidelines', 'Comprehensive Implementation']}
											/>
									</div>
									<motion.button
											whileHover={{ scale: 1.015 }}
											whileTap={{ scale: 0.985 }}
											className="mt-8 w-full rounded-lg bg-a-dark py-4 font-semibold uppercase text-white">
											Get Started
									</motion.button>
							</div>
					</div>
			</section>
	</>
)

const CTAArrow = () => (
	<div className="absolute -right-[100px] top-2 sm:top-0">
		<motion.svg
			width="95"
			height="62"
			viewBox="0 0 95 62"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="scale-40 sm:scale-65"
			initial={{ scale: 0.7, rotate: 3 }}
			animate={{ scale: 0.75, rotate: 0 }}
			transition={{
				repeat: Infinity,
				repeatType: 'mirror',
				duration: 2,
				ease: 'easeOut',
			}}>
			<path d="M14.7705 15.8619C33.2146 15.2843 72.0772 22.1597 79.9754 54.2825" stroke="#aee1cf" strokeWidth="3" />
			<path
				d="M17.7987 7.81217C18.0393 11.5987 16.4421 15.8467 15.5055 19.282C15.2179 20.3369 14.9203 21.3791 14.5871 22.4078C14.4728 22.7608 14.074 22.8153 13.9187 23.136C13.5641 23.8683 12.0906 22.7958 11.7114 22.5416C8.63713 20.4812 5.49156 18.3863 2.58664 15.9321C1.05261 14.6361 2.32549 14.1125 3.42136 13.0646C4.37585 12.152 5.13317 11.3811 6.22467 10.7447C8.97946 9.13838 12.7454 8.32946 15.8379 8.01289"
				stroke="#aee1cf"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</motion.svg>
		<span className="-mt-1 ml-8 block w-fit -rotate-2 rounded bg-s px-1.5 py-0.5 text-xs font-light italic text-p shadow">
			Compare $$$
		</span>
	</div>
)

const CheckMark = () => (
	<svg
		width="16"
		height="18"
		viewBox="0 0 18 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="mr-2 mt-1 inline-block">
		<path
			d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
			fill="#aee1cf"
		/>
	</svg>
)

const Title = () => (
	<><div className="relative z-10 mb-8 lg:mb-8">
		<h3 className="mb-6 text-center text-5xl font-bold text-a dark:text-s">Pricing</h3>
	</div><section className="flex justify-center py-8 w-full max-w-2xl mx-auto antialiased lg:subpixel-antialiased flex-row gap-4 md:gap-8 lg:gap-12 items-start">
			<h2 className="H2 text-center">Websites</h2>
			<div className=''>
			<p className="mx-auto mb-4 max-w-lg text-left text-gray-700 dark:text-gray-300">
				Traditional platforms often have recurring fees, maintenance, and setup costs. Compare your one-time investment
				with their average annual costs.</p>
							<p className="mx-auto mb-8 max-w-lg text-left text-gray-700 dark:text-gray-300">
			We offer simple, one-time payments. Here’s how they compare to the average annual cost of traditional platforms.
		</p>
		</div>
		</section></>
)

const TopLeftCircle = () => {
	return (
		<motion.div
			initial={{ rotate: '0deg' }}
			animate={{ rotate: '360deg' }}
			transition={{ duration: 100, ease: 'linear', repeat: Infinity }}
			className="absolute -left-[250px] -top-[200px] z-0 h-[450px] w-[450px] rounded-full border-[1px] md:border-2 lg:border-4 border-dotted border-p"
		/>
	)
}

const BottomRightCircle = () => {
	return (
		<motion.div
			initial={{ rotate: '0deg' }}
			animate={{ rotate: '-360deg' }}
			transition={{ duration: 100, ease: 'linear', repeat: Infinity }}
			className="absolute -bottom-[200px] -right-[250px] z-0 h-[450px] w-[450px] rounded-full border-2 border-dotted border-p"
		/>
	)
}

type ListItemProps = {
	listItems: string[]
}

const ListItems = ({ listItems }: ListItemProps) => (
	<ul className="Description-p prose">
		{listItems.map((item, index) => (
			<li key={index} className="flex items-center">
				<CheckMark />
				{item}
			</li>
		))}
	</ul>
)
