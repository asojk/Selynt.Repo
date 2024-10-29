import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { StickyVComp } from './ui/sticky-comp-variant'
import { useImgPadding } from '@/constants/imgpadding'

export default function SlidePricing() {
  const [selected, setSelected] = useState<'M' | 'A'>('M')
  useImgPadding()

  return (
    <section className="py-12 md:py-24 xl:py-32">
      <div className="relative px-content-padding">

		<section className="py-12 md:py-24 xl:py-32">
				<div className="relative px-content-padding">
					<StickyVComp contentHeight={true}>
						<div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 text-left">
							<h2 className="text-pretty text-4xl font-bold text-a dark:text-s lg:text-6xl">Pricing</h2>
							<p className="mx-auto mb-4 max-w-lg px-4 text-gray-700 dark:text-gray-300 lg:text-xl">
								Compare your one-time investment with traditional platforms’ average annual costs, which include recurring
								fees, maintenance, and setup costs.
							</p>
						</div>
					</StickyVComp>
					<StickyVComp contentHeight={true}>
						<h2 className="mx-auto text-pretty px-4 pb-4 text-center text-2xl font-bold text-a dark:text-s md:w-2/3  lg:text-3xl">
							Websites
						</h2>
						<div className="pb-4 md:pb-8">
							<CompareButtons selected={selected} setSelected={setSelected} />
						</div>
						<div className="pb-8">
							<PriceCards selected={selected} />
						</div>
					</StickyVComp>
					<StickyVComp contentHeight={true}>
						<h2 className="mx-auto text-pretty px-4 pb-12 text-center text-2xl font-bold text-a dark:text-s md:w-2/3  lg:text-3xl">
							Branding
						</h2>
						<BrandingSection />

					</StickyVComp>
					</div>
					</section>
					</div>
    </section>
  )
}

const SELECTED_STYLES = 'bg-p text-white font-medium rounded-lg py-3 w-28 relative'
const DESELECTED_STYLES = 'font-medium rounded-lg py-3 w-28 hover:bg-slate-100 transition-colors relative'

interface CompareButtonsProps {
	selected: 'M' | 'A'
	setSelected: React.Dispatch<React.SetStateAction<'M' | 'A'>>
}

const CompareButtons = ({ selected, setSelected }: CompareButtonsProps) => {
	return (
		<div className="relative z-10 mb-4 lg:mb-8">
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
	<div className="flex flex-col gap-6 md:mx-auto md:flex-row md:justify-center md:gap-4">
		{/* Essential Kit */}
		<PriceCard
			title="Essential Kit"
			selected={selected}
			oneTimePrice="$399"
			yearlyPrice="$2,000+"
			listItems={['Custom Design & Configuration Solutions', 'Deployment, Hosting & All Setup Included']}
		/>
		{/* Custom Solution */}
		<PriceCard
			title="Custom Solution"
			selected={selected}
			oneTimePrice="$1299"
			yearlyPrice="It's outrageous.."
			listItems={[
				'Color Palette',
				'All-Around Customization',
				'In-Depth Requirements Gathering',
				'Comprehensive Solutions',
				'Four Maintenance / Update Requests',
			]}
		/>
	</div>
)

interface PriceCardProps {
	title: string
	selected: 'M' | 'A'
	oneTimePrice: string
	yearlyPrice: string
	listItems: string[]
}


	const PriceCard = ({ title, selected, oneTimePrice, yearlyPrice, listItems }: PriceCardProps) => (
		<div className={`
			mx-auto flex w-3/4 flex-shrink-0 flex-col justify-between rounded-xl 
			border-[1px] border-slate-300 dark:border-slate-700
			bg-white dark:bg-n-900 p-3 
			text-n-900 dark:text-white shadow-md 
			md:mx-0 md:w-1/3 md:p-4 lg:grid lg:grid-rows-[auto_1fr_auto] lg:p-6 
			${selected === 'A' ? 'h-auto' : ''}
		`}>
		<div className="bg-card text-card-foreground flex w-80 flex-col justify-between rounded-lg text-left">
			<div className="flex flex-col space-y-1.5">
				<p className="mb-2 text-lg font-bold lg:text-2xl">{title}</p>
				<div className="mb-2 flex items-center lg:mb-12">
					<AnimatePresence mode="wait">
						{selected === 'M' ? (
							<motion.p
								key="oneTime"
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								transition={{ ease: 'linear', duration: 0.25 }}
								className="animate-text bg-gradient-to-r from-p via-p-2 to-p-dark bg-clip-text pb-4 text-4xl font-bold text-transparent md:text-6xl lg:pb-8">
								<span>{oneTimePrice}</span>
							</motion.p>
						) : (
							<motion.p
								key="yearly"
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 50, opacity: 0 }}
								transition={{ ease: 'linear', duration: 0.25 }}
								className="justify-left flex w-40 items-center text-left text-2xl font-bold text-red-500 md:text-4xl lg:w-52">
								<span>{yearlyPrice}</span>
							</motion.p>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
		<div className="lg:flex lg:items-start">
			{selected === 'M' ? (
				<ListItems listItems={listItems} />
			) : (
				<div className="hidden" /> // Placeholder to maintain height
			)}
		</div>
		{selected === 'M' ? (
			<motion.button
				whileHover={{ scale: 1.015 }}
				whileTap={{ scale: 0.985 }}
				className="mt-8 w-2/3 rounded-lg bg-p py-4 font-semibold uppercase text-white">
				Get Started
			</motion.button>
		) : (
			<div className="hidden" />
		)}
	</div>
)


const BrandingSection = () => (
  <div className="flex flex-wrap gap-4 md:justify-center lg:gap-6 lg:px-12 max-w-7xl mx-auto">
    <BrandingCard title="Basic Branding" price="$300" listItems={['Custom Logo', 'Personal Color Palette']} />
    <BrandingCard
      title="Intermediate Branding"
      price="$600"
      listItems={['Logo Design', 'Color Palette', 'Brand Guidelines', 'Instructive Implementation']}
    />
    <BrandingCard
      title="Comprehensive Branding"
      price="$1,000"
      listItems={['Full Branding Suite', 'In-Depth Brand Guidelines', 'Comprehensive Implementation']}
    />
  </div>
)



interface BrandingCardProps {
	title: string
	price: string
	listItems: string[]
}

const BrandingCard = ({ title, price, listItems }: BrandingCardProps) => (
  <div className="w-3/4 md:w-1/3 flex-shrink-0 flex-col justify-between rounded-xl border-[1px] border-slate-300 bg-white p-3 text-n-900 shadow-md dark:bg-n-900 dark:text-white md:p-4 lg:w-1/3 lg:p-6 mx-auto">
		<div className="bg-card text-card-foreground flex w-80 flex-col justify-between rounded-lg text-left">
			<div className="flex flex-col space-y-1.5">
				<p className="mb-2 font-bold lg:text-2xl w-fit">{title}</p>
				<div className="mb-2 flex items-center lg:mb-12">
					<h2 className='pb-4 text-4xl font-bold md:text-6xl lg:pb-8'>{price}</h2>
					</div>
			</div>
		</div>
			<ListItems listItems={listItems} />
		<motion.button
			whileHover={{ scale: 1.015 }}
			whileTap={{ scale: 0.985 }}
			className="mt-8 w-2/3 rounded-lg bg-p py-4 font-semibold uppercase text-white">
			Get Started
		</motion.button>
	</div>
)

// ListItems component
const ListItems = ({ listItems }: { listItems: string[] }) => (
	<ul className="max-w-52 list-inside list-none space-y-2 text-left">
		{listItems.map((item, index) => (
			<li key={index} className="flex items-start">
				<CheckMark />
				<span>{item}</span>
			</li>
		))}
	</ul>
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

const CTAArrow = () => (
	<div className="absolute -right-[75px] top-0 md:-right-[100px] md:top-2">
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
		<span className="-mt-1 ml-8 hidden w-fit -rotate-2 rounded bg-s px-1.5 py-0.5 text-xs font-light italic text-p shadow md:block">
			Compare $$$
		</span>
	</div>
)


