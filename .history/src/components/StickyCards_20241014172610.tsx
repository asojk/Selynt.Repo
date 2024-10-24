/** @format */

import {
	Icon24Hours,
	Icon360View,
	IconAccessible,
	IconAdjustmentsDown,
	IconArrowAutofitRight,
} from '@tabler/icons-react'
import { MotionValue, useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const StickyCards = () => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})

	return (
		<>
			<div ref={ref} className="relative">
				{CARDS.map((c, idx) => (
					<Card key={c.id} card={c} scrollYProgress={scrollYProgress} position={idx + 1} />
				))}
			</div>
			<div className="h-screen bg-black" />
		</>
	)
}

interface CardProps {
	position: number
	card: CardType
	scrollYProgress: MotionValue
}

const Card = ({ position, card, scrollYProgress }: CardProps) => {
	const scaleFromPct = (position - 1) / CARDS.length
	const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT])

	const isOddCard = position % 2

	return (
		<motion.div
			style={{
				height: CARD_HEIGHT,
				y: position === CARDS.length ? undefined : y,
				background: isOddCard ? 'black' : 'white',
				color: isOddCard ? 'white' : 'black',
			}}
			className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4">
			{React.createElement(card.Icon, { className: 'mb-4 text-4xl' })}
			<h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">{card.title}</h3>
			<p className="mb-8 max-w-lg text-center text-sm md:text-base">{card.description}</p>
			<a
				href={card.routeTo}
				className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
					card.ctaClasses
				} ${
					isOddCard
						? 'shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]'
						: 'shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]'
				}`}>
				<span>Learn more</span>
				<IconArrowAutofitRight className="text-lg" />
			</a>
		</motion.div>
	)
}
const CARD_HEIGHT = 500

interface IconType {
	className: string
}

type CardType = {
	id: number
	Icon: IconType
	title: string
	description: string
	ctaClasses: string
	routeTo: string
}

const CARDS: CardType[] = [
	{
		id: 1,
		Icon: IconAdjustmentsDown as unknown as IconType,
		title: 'A new type of Calendar',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!',
		ctaClasses: 'bg-violet-300',
		routeTo: '#',
	},
	{
		id: 2,
		Icon: Icon24Hours as unknown as IconType,
		title: '#1 in data privacy',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!',
		ctaClasses: 'bg-pink-300',
		routeTo: '#',
	},
	{
		id: 3,
		Icon: Icon360View as unknown as IconType,
		title: 'Use your existing tools',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!',
		ctaClasses: 'bg-red-300',
		routeTo: '#',
	},
	{
		id: 4,
		Icon: IconAccessible as unknown as IconType,
		title: 'Customers love us',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!',
		ctaClasses: 'bg-amber-300',
		routeTo: '#',
	},
]
