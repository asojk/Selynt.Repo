import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useImgPadding } from '@/constants/imgpadding'

export function Lamp({ contentHeight = false }) {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	})

	const transition = {
		type: 'spring',
		stiffness: 70,
		damping: 20,
		mass: 1.5,
		restDelta: 0.005,
	}

	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95])
	const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.98, 0.95, 0.9])
	const paddingX = useTransform(scrollYProgress, [0, 0.5, 1], ['0.5rem', '0.25rem', '0rem'])
	const paddingY = useTransform(scrollYProgress, [0, 0.5, 1], ['1rem', '0.75rem', '0.5rem'])
	const width = useTransform(scrollYProgress, [0, 0.5, 1], ['100%', '97.5%', '95%'])

	useImgPadding(contentHeight)

	return (
		<div className="relative px-content-padding">
			<motion.div
				ref={targetRef}
				style={{
					scale,
					width,
					maxWidth: '1440px',
					margin: '0 auto',
					paddingLeft: paddingX,
					paddingRight: paddingX,
					paddingTop: paddingY,
					paddingBottom: paddingY,
					opacity: opacity,
				}}
				transition={transition}
				className="stickyV z-0 mx-auto overflow-hidden rounded-3xl bg-white bg-cover bg-center dark:bg-p-dark">
				<motion.div
					className="relative flex items-center justify-center"
					style={{
						minHeight: contentHeight ? 'auto' : 'calc(100vh - var(--content-padding))',
					}}
					transition={transition}>
					<LampGradient />
					<div className="relative z-10 px-4 py-4 lg:py-8 xl:px-8">
						<LampContent />
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}

const LampContent = () => (
	<div className="relative z-50 mx-auto flex w-full max-w-4xl flex-col items-center px-5">
		<motion.h1
			initial={{ opacity: 0.5, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.3,
				duration: 0.8,
				ease: 'easeInOut',
			}}
			className="relative z-[999] w-full animate-text2 bg-gradient-to-br from-p-5 via-p-4 to-p-5 bg-clip-text pt-4 text-center text-3xl font-black tracking-tight text-transparent dark:from-n-3 dark:via-p-1 dark:to-white sm:text-4xl md:text-6xl lg:pt-32">
			Standing out <br /> shouldn't mean <br /> overspending.
		</motion.h1>
		<motion.div
			initial={{ opacity: 0.5, y: 20 }}
			whileInView={{ opacity: 1, y: 100 }}
			transition={{
				delay: 0.3,
				duration: 0.8,
				ease: 'easeInOut',
			}}
			className="relative z-[999] flex flex-col items-center pt-4">
			<Link to="/pricing">
				<motion.button
					whileHover={{ scale: 1.015 }}
					whileTap={{ scale: 0.985 }}
					className="mt-8 w-full max-w-48 rounded-lg border-[1px] border-s bg-a-dark px-4 py-4 text-lg font-semibold uppercase tracking-widest text-white shadow-neu1 dark:shadow-neu2 lg:px-8 lg:py-6">
					Compare
				</motion.button>
			</Link>
			<p className="mt-3 text-center text-sm text-n-9 dark:text-n-3 lg:text-base">Our Prices // Traditional Options</p>
		</motion.div>
	</div>
)

const LampGradient = () => (
	<div className="absolute left-0 right-0 top-0 z-0 flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-white dark:bg-p-dark sm:min-h-[70vh]">
		<div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
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
				className="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-s-dark via-transparent to-transparent text-p [--conic-position:from_70deg_at_center_top]">
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
				className="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-s-dark text-white [--conic-position:from_290deg_at_center_top]">
				<div className="absolute bottom-0 right-0 z-20 h-[100%] w-40 bg-white [mask-image:linear-gradient(to_left,white,transparent)] dark:bg-p-dark" />
				<div className="absolute bottom-0 right-0 z-20 h-40 w-[100%] bg-white [mask-image:linear-gradient(to_top,white,transparent)] dark:bg-p-dark" />
			</motion.div>
			<div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white blur-2xl dark:bg-p-dark"></div>
			<div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
			<div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-s-dark opacity-50 blur-3xl"></div>
			<motion.div
				initial={{ width: '8rem' }}
				whileInView={{ width: '16rem' }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
				className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-s blur-2xl"></motion.div>
			<motion.div
				initial={{ width: '15rem' }}
				whileInView={{ width: '30rem' }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
				className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-s"></motion.div>

			<div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white dark:bg-p-dark"></div>
		</div>
	</div>
)
