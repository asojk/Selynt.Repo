import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import FloatingButton from '@/components/ContactButton'
import Modal from '@/components/Modal'
import { IconSun, IconMoon } from '@tabler/icons-react'

interface DarkModeToggleProps {
	mode: 'light' | 'dark'
	setMode: Dispatch<SetStateAction<'dark' | 'light'>>
}

const TOGGLE_CLASSES = 'text-sm font-medium flex items-center gap-2 px-3 py-2 transition-colors relative z-10'

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ mode, setMode }) => {
	const [isCompact, setIsCompact] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsCompact(window.scrollY > 100)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className="fixed right-2 top-24 z-50 flex flex-col items-end">
			<div className="relative flex flex-col items-center">
				<button
					className={`${TOGGLE_CLASSES} ${mode === 'light' ? 'text-s' : 'text-p-1'}`}
					onClick={() => setMode('light')}>
					<IconSun className="relative z-10 text-lg" />
					{!isCompact && <span className="relative z-10">Light</span>}
				</button>
				<button
					className={`${TOGGLE_CLASSES} ${mode === 'dark' ? 'text-s' : 'text-p-2'}`}
					onClick={() => setMode('dark')}>
					<IconMoon className="relative z-10 text-lg" />
					{!isCompact && <span className="relative z-10">Dark</span>}
				</button>
				<motion.div
					className="absolute inset-0 z-0"
					animate={{
						top: mode === 'dark' ? '50%' : '0%',
						height: '50%',
					}}
					transition={{ type: 'spring', damping: 15, stiffness: 250 }}>
					<div className="h-full w-full rounded-full border-[1px] border-s bg-gradient-to-r from-B-4/70 to-B-2/80 shadow-sm shadow-B-4" />
				</motion.div>
			</div>
			<div className="relative mt-6 flex flex-col items-center">
				<Contacting isCompact={isCompact} />
			</div>
		</div>
	)
}

const Contacting: React.FC<{ isCompact: boolean }> = ({ isCompact }) => {
	const [isOpen, setIsOpen] = useState(false)
	const closeModal = () => setIsOpen(false)
	const openModal = () => setIsOpen(true)

	return (
		<div className="">
			{isCompact ? (
				<FloatingButton />
			) : (
				<button className="rounded-full bg-a-dark p-3 text-white shadow-lg" onClick={openModal}>
					Contact Us
				</button>
			)}
			<Modal isOpen={isOpen} onClose={closeModal} />
		</div>
	)
}
