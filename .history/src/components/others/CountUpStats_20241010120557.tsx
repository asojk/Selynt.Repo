/** @format */

import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

export const CountUpStats = () => {
	return (
		<div className="mx-auto max-w-3xl px-4 md:py-24">
			<div className="lg:grid-none mx-auto grid grid-rows-2 place-items-center py-12 lg:flex lg:items-center lg:justify-center">
				<h2 className="text-center font-semibold text-g-b dark:text-white md:text-lg">
					BOOST CREDIBILITY &amp; TRUST WITH A{' '}
				</h2>
				<a className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-3xl font-black text-transparent lg:pl-4">
					{' '}
					CLEAR IDENTITY
				</a>
			</div>
			<div className="flex flex-col items-center justify-center sm:flex-row">
				<Stat num={45} suffix="%" subheading="Lorem ipsum dolor sit amet consectetur" />
				<div className="bg-s-200 h-[1px] w-12 sm:h-12 sm:w-[1px]" />
				<Stat num={15.5} decimals={1} suffix="K+" subheading="Lorem ipsum dolor sit amet consectetur" />
				<div className="bg-s-200 h-[1px] w-12 sm:h-12 sm:w-[1px]" />
				<Stat num={20} suffix="B+" subheading="Lorem ipsum dolor sit amet consectetur" />
			</div>
		</div>
	)
}

interface Props {
	num: number
	suffix: string
	decimals?: number
	subheading: string
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
	const ref = useRef<HTMLSpanElement | null>(null)
	const isInView = useInView(ref)

	useEffect(() => {
		if (!isInView) return

		animate(0, num, {
			duration: 2.5,
			onUpdate(value) {
				if (!ref.current) return

				ref.current.textContent = value.toFixed(decimals)
			},
		})
	}, [num, decimals, isInView])

	return (
		<div className="flex w-72 flex-col items-center py-8 sm:py-0">
			<p className="text-neutral-dark dark:text-neutral-light mb-2 text-center text-7xl font-semibold sm:text-6xl">
				<span ref={ref}></span>
				{suffix}
			</p>
			<p className="max-w-48 text-center text-g-900 dark:text-g-100">{subheading}</p>
		</div>
	)
}
