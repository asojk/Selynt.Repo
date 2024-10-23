// src/components/DarkModeToggle.tsx
import {Dispatch, SetStateAction} from 'react'
import {motion} from 'framer-motion'
import {IconCarambolaFilled, IconCloudFilled} from '@tabler/icons-react'

interface DarkModeToggleProps {
	mode: 'light' | 'dark'
	setMode: Dispatch<SetStateAction<'dark' | 'light'>>
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({mode, setMode}) => {
	return (
		<button
			onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
			className={`md:w-18 relative flex rounded-full bg-gradient-to-b p-2 shadow-md lg:mt-4 lg:w-24 ${
				mode === 'light'
					? 'justify-end from-blue-500 to-sky-300'
					: 'justify-start from-indigo-600 to-indigo-400'
			}`}>
			<Thumb mode={mode} />
			{mode === 'light' && <Clouds />}
			{mode === 'dark' && <Stars />}
		</button>
	)
}

const Thumb = ({mode}: {mode: 'light' | 'dark'}) => {
	return (
		<motion.div
			layout
			transition={{
				duration: 0.75,
				type: 'spring'
			}}
			className='relative h-4 w-4 overflow-hidden rounded-full shadow-lg md:h-8 md:w-8'>
			<div
				className={`absolute inset-0 ${
					mode === 'dark'
						? 'bg-slate-100'
						: 'animate-pulse rounded-full bg-gradient-to-tr from-amber-300 to-yellow-500'
				}`}
			/>
			{mode === 'light' && <SunCenter />}
			{mode === 'dark' && <MoonSpots />}
		</motion.div>
	)
}

const SunCenter = () => <div className='absolute inset-1 rounded-full bg-amber-300' />

const MoonSpots = () => (
	<>
		<motion.div
			initial={{x: -4, opacity: 0}}
			animate={{x: 0, opacity: 1}}
			transition={{delay: 0.15, duration: 0.35}}
			className='absolute bottom-1 right-2 h-1.5 w-1.5 rounded-full bg-slate-300 md:h-3 md:w-3'
		/>
		<motion.div
			initial={{x: -4, opacity: 0}}
			animate={{x: 0, opacity: 1}}
			transition={{delay: 0.2, duration: 0.35}}
			className='absolute bottom-3 left-1 h-1 w-1 rounded-full bg-slate-300 md:h-3 md:w-3'
		/>
		<motion.div
			initial={{x: -4, opacity: 0}}
			animate={{x: 0, opacity: 1}}
			transition={{delay: 0.25, duration: 0.35}}
			className='absolute right-1 top-1 h-0.5 w-0.5 rounded-full bg-slate-300 md:h-2 md:w-2'
		/>
	</>
)

const Stars = () => {
	return (
		<>
			<motion.span
				animate={{
					scale: [0.75, 1, 0.75],
					opacity: [0.75, 1, 0.75]
				}}
				transition={{
					repeat: Infinity,
					duration: 5,
					ease: 'easeIn'
				}}
				className='absolute right-8 top-1 hidden text-xs text-slate-300 md:block'>
				<IconCarambolaFilled />
			</motion.span>
			<motion.span
				animate={{
					scale: [1, 0.75, 1],
					opacity: [0.5, 0.25, 0.5]
				}}
				transition={{
					repeat: Infinity,
					duration: 3.5,
					ease: 'easeIn'
				}}
				style={{rotate: '-45deg'}}
				className='absolute right-2 top-2 hidden text-lg text-slate-300 md:block'>
				<IconCarambolaFilled />
			</motion.span>
			<motion.span
				animate={{
					scale: [1, 0.5, 1],
					opacity: [1, 0.5, 1]
				}}
				style={{rotate: '45deg'}}
				transition={{
					repeat: Infinity,
					duration: 2.5,
					ease: 'easeIn'
				}}
				className='absolute right-6 top-6 hidden text-slate-300 md:block'>
				<IconCarambolaFilled />
			</motion.span>
		</>
	)
}

const Clouds = () => {
	return (
		<>
			<motion.span
				animate={{x: [-20, -15, -10, -5, 0], opacity: [0, 1, 0.75, 1, 0]}}
				transition={{
					duration: 10,
					repeat: Infinity,
					delay: 0.25
				}}
				className='absolute left-8 top-1 text-xs text-white'>
				<IconCloudFilled />
			</motion.span>
			<motion.span
				animate={{x: [-10, 0, 10, 20, 30], opacity: [0, 1, 0.75, 1, 0]}}
				transition={{
					duration: 20,
					repeat: Infinity,
					delay: 0.5
				}}
				className='absolute left-3 top-4 text-lg text-white'>
				<IconCloudFilled />
			</motion.span>
			<motion.span
				animate={{x: [-7, 0, 7, 14, 21], opacity: [0, 1, 0.75, 1, 0]}}
				transition={{
					duration: 12.5,
					repeat: Infinity
				}}
				className='absolute left-7 top-8 text-white'>
				<IconCloudFilled />
			</motion.span>
			<motion.span
				animate={{x: [-15, 0, 15, 30, 45], opacity: [0, 1, 0.75, 1, 0]}}
				transition={{
					duration: 25,
					repeat: Infinity,
					delay: 0.75
				}}
				className='absolute left-12 top-4 text-xs text-white'>
				<IconCloudFilled />
			</motion.span>
		</>
	)
}
