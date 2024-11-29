/* eslint-disable tailwindcss/no-custom-classname */
import { StickyVComp } from './sticky-comp-variant'
import { MotionButton } from './motion-button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function Lamp() {
	return (
		<StickyVComp heightMode="extendedContent">
			<div className="absolute inset-1 z-20 flex items-center justify-center">
				<div
					className="h-full w-[120rem] rounded-full bg-black blur-3xl dark:hidden"
					style={{
						background: 'radial-gradient(circle, rgba(0,0,0,0) 40%, rgba(255,255,255,1) 30%)',
					}}></div>
			</div>
			<div className="py-12">
				<LampContainer>
					<div className="flex flex-col items-center justify-center space-y-8">
						<motion.h1
							initial={{ opacity: 0.5, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								delay: 0.3,
								duration: 0.8,
								ease: 'easeInOut',
							}}
							className="relative z-40 bg-gradient-to-b from-p-dark via-p-3 to-p-5 bg-clip-text pb-12 pt-48 text-center text-4xl font-medium tracking-tight text-transparent dark:from-s dark:via-s-light dark:to-white md:text-7xl">
							Standing out <br /> shouldn't mean <br /> overspending.
						</motion.h1>
						<div className="relative z-40 w-full">
							<CompareTable />
						</div>
					</div>
				</LampContainer>
			</div>
		</StickyVComp>
	)
}

const LampContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return (
		<div className={cn('relative z-20 mx-auto flex max-h-fit w-full flex-col items-center justify-center', className)}>
			<div className="relative isolate z-20 flex w-full flex-1 items-start justify-center pt-16">
				{children}

				<motion.div
					initial={{ opacity: 0.5, width: '15rem' }}
					whileInView={{ opacity: 1, width: '30rem' }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[15rem] translate-y-8 overflow-visible from-s-dark via-transparent to-transparent text-p [--conic-position:from_70deg_at_center_top]">
					<div className="absolute bottom-0 left-0 z-20 h-40 w-[100%] bg-white [mask-image:linear-gradient(to_top,white,transparent)] dark:bg-p-dark" />
					<div className="absolute bottom-0 left-0 z-20 h-[100%] w-40 bg-white [mask-image:linear-gradient(to_right,white,transparent)] dark:bg-p-dark" />
				</motion.div>
				<motion.div
					initial={{ opacity: 0.5, width: '15rem' }}
					whileInView={{ opacity: 1, width: '30rem' }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] translate-y-8 from-transparent via-transparent to-s-dark text-white [--conic-position:from_290deg_at_center_top]">
					<div className="absolute bottom-0 right-0 z-20 h-[100%] w-40 bg-white [mask-image:linear-gradient(to_left,white,transparent)] dark:bg-p-dark" />
					<div className="absolute bottom-0 right-0 z-20 h-40 w-[100%] bg-white [mask-image:linear-gradient(to_top,white,transparent)] dark:bg-p-dark" />
				</motion.div>
				<div className="absolute top-1/2 h-48 w-full translate-y-20 scale-x-150 bg-white blur-xl dark:bg-p-dark"></div>

				<div className="absolute inset-auto z-20 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-s-dark opacity-50 blur-3xl"></div>
				<motion.div
					initial={{ width: '8rem', y: 90 }}
					whileInView={{ width: '16rem', y: 90 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					className="absolute inset-auto z-20 h-24 w-64 rounded-full bg-s blur-2xl"></motion.div>
				<motion.div
					initial={{ width: '15rem', y: 30 }}
					whileInView={{ width: '30rem', y: 30 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					className="absolute inset-auto z-20 h-0.5 w-[30rem] -translate-y-[7rem] bg-s"></motion.div>
			</div>
		</div>
	)
}

const CompareTable = () => (
	<motion.div
		initial={{ opacity: 0.5, y: 0 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{
			delay: 0.3,
			duration: 0.8,
			ease: 'easeInOut',
		}}
		className="relative z-[999] flex flex-col items-center">
		<div className="mx-auto max-w-4xl">
			<motion.div
				className="p-4"
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 50 }}
				transition={{ duration: 0.8 }}>
				<table className="w-full text-left text-p-4 dark:text-n-1">
					<thead>
						<tr>
							<th className="p-4 text-sm uppercase tracking-wide text-p-3 dark:text-n-2">Service</th>
							<th className="p-4 text-center text-sm uppercase tracking-wide text-p-3 dark:text-n-2">Selynt</th>
							<th className="p-4 text-center text-sm uppercase tracking-wide text-p-3 dark:text-n-2">
								Traditional Options
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-B-2 dark:divide-B-3">
						<tr className="transition duration-200 hover:bg-B-light dark:hover:bg-B-4">
							<td className="p-4">Basic Website</td>
							<td className="p-4 text-center">$399 (one-time)</td>
							<td className="p-4 text-center">$300–$600/year</td>
						</tr>
						<tr className="transition duration-200 hover:bg-B-light dark:hover:bg-B-4">
							<td className="p-4">Custom Website</td>
							<td className="p-4 text-center">$1,299 (one-time)</td>
							<td className="p-4 text-center">$1,000+/year</td>
						</tr>
						<tr className="transition duration-200 hover:bg-B-light dark:hover:bg-B-4">
							<td className="p-4">Branding Packages</td>
							<td className="p-4 text-center">$300–$1,000</td>
							<td className="p-4 text-center">$3,000+</td>
						</tr>
					</tbody>
				</table>
				<MotionButton btntxt="View Options" link="/pricing" />
				<p className="pt-2 text-center text-sm text-n-9 dark:text-n-3 lg:text-base">
					Our Prices // Traditional Options
				</p>
			</motion.div>
		</div>
	</motion.div>
)
