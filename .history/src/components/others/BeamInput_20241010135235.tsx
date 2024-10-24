/** @format */

import { IconArrowAutofitRight } from '@tabler/icons-react'
import { animate, useMotionTemplate, useMotionValue, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

/**
 IMPORTANT!!

 This component requires the following class for cross browser masking support

.mask-with-browser-support {
  mask: linear-gradient(black, black), linear-gradient(black, black);
  mask-clip: content-box, border-box;
  mask-composite: exclude;
  -webkit-mask:
    linear-gradient(black, black) content-box,
    linear-gradient(black, black);
  -webkit-mask-clip: content-box, border-box;
  -webkit-mask-composite: xor;
}
 */

const BeamInput = () => {
	const inputRef = useRef<HTMLInputElement | null>(null)

	const turn = useMotionValue(0)

	useEffect(() => {
		animate(turn, 1, {
			ease: 'linear',
			duration: 5,
			repeat: Infinity,
		})
	}, [])

	const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, #a78bfa00 75%, #AEE1CF 100%)`

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
			}}
			onClick={() => {
				inputRef.current?.focus()
			}}
			className="to-p-900 relative flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-primary py-1.5 pl-6 pr-1.5 dark:border-black/20">
			<input
				ref={inputRef}
				type="email"
				placeholder="Enter your email"
				className="w-full bg-transparent text-sm text-black placeholder-black/80 focus:outline-0 dark:text-white dark:placeholder-white/80"
			/>

			<button
				onClick={e => e.stopPropagation()}
				type="submit"
				className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-br from-gray-50 to-gray-400 px-4 py-3 text-sm font-medium text-gray-900 transition-transform active:scale-[0.985]">
				<span>Join Waitlist</span>
				<IconArrowAutofitRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45" />
			</button>

			<div className="pointer-events-none absolute inset-0 z-10 rounded-full">
				<motion.div
					style={{
						backgroundImage,
					}}
					className="mask-with-browser-support bg-origin-g-400 absolute -inset-[1px] rounded-full border border-transparent"
				/>
			</div>
		</form>
	)
}

export default BeamInput
