/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useOutsideClick } from '../../hooks/use-outside-click'
import { TimeLine } from './timeline'
import { Profile } from './Profile'
import ContactForm from '../ContactForm'
import { IconChevronRight, IconInfoCircle, IconMailBolt, IconMap, IconTag } from '@tabler/icons-react'
import React from 'react'
import { Map } from '../Map'
import PriceTable from './price-table'
import { CloseIcon } from './close-icon'

export function ExpandableCards() {
	const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null)
	const ref = useRef<HTMLDivElement>(null)
	const id = useId()

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setActive(false)
			}
		}

		if (active && typeof active === 'object') {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [active])

	useOutsideClick(ref, () => setActive(null))

	return (
		<>
			<AnimatePresence>
				{active && typeof active === 'object' && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 z-20 h-full w-full bg-black/20'
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{active && typeof active === 'object' ? (
					<div className='fixed inset-0 z-50 grid place-items-center'>
						<motion.button
							key={`button-${active.title}-${id}`}
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, transition: { duration: 0.05 } }}
							className='absolute right-2 top-2 flex items-center justify-center rounded-full bg-white md:right-4 md:top-4 lg:hidden'
							onClick={() => setActive(null)}>
							<CloseIcon />
						</motion.button>
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className='flex h-fit w-full max-w-2xl flex-col overflow-clip rounded-3xl bg-white p-2 dark:bg-neutral-900 md:p-4 lg:max-w-4xl lg:p-6 xl:max-w-6xl'>
							{active.src && (
								<motion.div layoutId={`image-${active.title}-${id}`}>
									<img
										width={200}
										height={200}
										src={active.src}
										alt={active.title}
										className='h-40 w-full rounded-tl-lg rounded-tr-lg object-cover object-center lg:h-64 xl:h-80'
									/>
								</motion.div>
							)}

							<div>
								<div className='flex-grow overflow-y-auto md:overflow-hidden'>
									<div className='mb-0 p-2 md:p-4 lg:p-4'>
										<motion.h3 layoutId={`title-${active.title}-${id}`} className='font-bold text-n-9 dark:text-n-2'>
											{active.title}
										</motion.h3>
									</div>
								</div>
								<div className='custom-scrollbar relative max-h-[60vh] overflow-y-auto px-2 pt-4 md:max-h-[70vh] md:px-4 lg:max-h-[75vh]'>
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className='flex flex-col items-start gap-4 text-xs text-n-9 dark:text-n-5 md:text-sm lg:text-base'>
										{typeof active.content === 'function' ? active.content() : active.content}
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
			<ul className='mx-auto w-full max-w-3xl gap-4'>
				{cards.map((card, _index) => (
					<motion.div
						layoutId={`card-${card.title}-${id}`}
						key={`card-${card.title}-${id}`}
						onClick={() => setActive(card)}
						className='flex cursor-pointer flex-row items-center justify-between rounded-xl p-4 hover:bg-n-4 dark:hover:bg-n-900'>
						<div className='flex w-auto items-center gap-4 md:w-full md:items-start'>
							<motion.div layoutId={`image-${card.title}-${id}`} className='flex-shrink-0'>
								{card.src ? (
									<img
										width={56}
										height={56}
										src={card.src}
										alt={card.title}
										className='h-14 w-14 rounded-lg object-cover object-center'
									/>
								) : card.icon ? (
									<div className='flex h-full w-12 items-center justify-center rounded-lg bg-p py-1 dark:bg-p-3 lg:w-20'>
										{React.createElement(card.icon, { className: 'text-xl text-white stroke-[1.5px] lg:stroke-2' })}
									</div>
								) : (
									<div className='flex h-14 w-14 items-center justify-center rounded-lg bg-p dark:bg-p-3' />
								)}
							</motion.div>
							<div className='flex-grow'>
								<motion.h3
									layoutId={`title-${card.title}-${id}`}
									className='text-left font-medium text-neutral-800 dark:text-neutral-200'>
									{card.title}
								</motion.h3>
								<motion.p
									layoutId={`description-${card.description}-${id}`}
									className='text-left text-neutral-600 dark:text-neutral-400'>
									{card.description}
								</motion.p>
							</div>
						</div>
						<div className='flex items-center'>
							<motion.button
								layoutId={`button-${card.title}-${id}`}
								className='hidden w-auto rounded-2xl bg-p px-4 py-2 text-sm text-n-3 hover:bg-p-2 hover:text-black dark:bg-p-3 md:flex'>
								{card.ctaText}
							</motion.button>
							<IconChevronRight className='ml-2 text-n-6' />
						</div>
					</motion.div>
				))}
			</ul>
		</>
	)
}

type Card = {
	description: string
	title: string
	src?: string
	icon?: React.ComponentType<{ className?: string }>
	ctaText: string
	ctaLink: string
	content: () => React.ReactNode
}

const cards: Card[] = [
	{
		description: 'Simple & Easy',
		title: 'Our Process',
		icon: IconInfoCircle,
		ctaText: 'View',
		ctaLink: '',
		content: () => <TimeLine />,
	},
	{
		description: 'Overview of Our Services and Pricing',
		title: 'Our Services',
		icon: IconTag,
		ctaText: 'Explore',
		ctaLink: '',
		content: () => <PriceTable />,
	},

	{
		description: 'Founder Bio',
		title: 'Founder',
		src: 'https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/Alex-SzEU7blXzZfyYfDwscptYyqFiVkAbg.jpg',
		ctaText: 'Investigate',
		ctaLink: '',
		content: () => <Profile />,
	},
	{
		description: 'As we grow, we hope this will serve as a trusted resource.',
		title: 'Our Work',
		icon: IconMap,
		src: '',
		ctaText: 'Discover',
		ctaLink: '',
		content: () => <Map />,
	},
	{
		description: 'Questions? Ready to Get Started?',
		title: 'Contact',
		icon: IconMailBolt,
		src: '',
		ctaText: 'Begin',
		ctaLink: '',
		content: () => <ContactForm />,
	},
]
