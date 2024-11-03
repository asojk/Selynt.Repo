import { motion } from 'framer-motion'
import {
	IconClick,
} from '@tabler/icons-react'

const PingButton = () => {
	return (
		<div className="grid place-content-center px-4 py-12 cursor-default">
			<Ping />
		</div>
	)
}

const LOOP_DURATION = 4

const Ping = () => {
	return (
		<div className="relative -z-1">
        <Logo />
			<Band delay={0} />
			<Band delay={LOOP_DURATION * 0.25} />
			<Band delay={LOOP_DURATION * 0.5} />
			<Band delay={LOOP_DURATION * 0.75} />
		</div>
	)
}

const Logo = () => {
	return (

		<motion.text
			className="flex flex-col items-center group relative cursor-pointer z-10 text-md md:text-lg lg:text-xl xl:text-2xl text-white font-semibold decoration-none"
			initial={{
				opacity: 0.7,
				scale: 0.85,
			}}
			animate={{
				opacity: 1,
				scale: 1,
			}}
			transition={{
				duration: 1,
				ease: 'easeOut',
			}}>Get in touch
			<IconClick className="flex items-center justify-center text-md md:text-lg lg:text-xl xl:text-2xl text-n-1 stroke-1 xl:stroke-[1.5]" />
      </motion.text>


	)
}

const Band = ({ delay }: { delay: number }) => {
	return (
		<motion.span
			style={{
				translateX: '-50%',
				translateY: '-50%',
			}}
			initial={{
				opacity: 0,
				scale: 0.25,
			}}
			animate={{
				opacity: [0, 1, 1, 0],
				scale: 1,
			}}
			transition={{
				repeat: Infinity,
				repeatType: 'loop',
				times: [0, 0.5, 0.75, 1],
				duration: LOOP_DURATION,
				ease: 'linear',
				delay,
			}}
			className="absolute left-[50%] top-[50%] z-0 h-48 w-48 rounded-full border-[1px] border-a bg-gradient-to-br from-a/50 to-a-darker/20 shadow-xl shadow-a/40"
		/>
	)
}

export default PingButton
