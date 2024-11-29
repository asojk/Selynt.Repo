import React from 'react'
import { StickyVComp } from '@/components/ui/sticky-comp-variant'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Modal from './Modal'

export const This = () => {
	const [isOpen, setIsOpen] = useState(false)
	const closeModal = () => setIsOpen(false)
	const openModal = () => setIsOpen(true)
	return (
		<StickyVComp heightMode="content">
			<section className="flex w-full cursor-default flex-col gap-8 px-4 py-6 antialiased md:flex-row lg:py-12 lg:subpixel-antialiased">
				<Copy />
				<motion.button
					initial={{ opacity: 0, y: 8 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							delay: 1.125,
							duration: 0.5,
							ease: 'easeInOut',
						},
					}}
					exit={{ opacity: 0, y: 8 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="absolute bottom-4 right-8 mx-auto rounded-full bg-a-dark px-4 py-2 text-white shadow-lg"
					onClick={openModal}>
					<span className="">Let's Talk</span>
				</motion.button>
				<Modal isOpen={isOpen} onClose={closeModal} />
			</section>
		</StickyVComp>
	)
}

const Copy = () => (
	<div className="mx-auto flex max-w-2xl flex-col items-start py-4 text-left md:px-4 lg:px-0">
		<h2 className="H2 text-3xl sm:text-4xl md:text-5xl">
			Websites & Branding
			<br className="hidden sm:block" />
			<span className="text-a dark:text-n-1"> Without the BS</span>
		</h2>
		<p className="mb-4 text-left text-base text-n-9 dark:text-n-1 md:text-lg lg:text-xl">
			You are entitled to whichever methods you prefer when working with us, but
			<span className="font-bold italic text-a"> here you will find:</span>
		</p>
		<div className="grid w-full grid-cols-1 gap-4 text-left text-n-900 dark:text-n-1 md:grid-cols-3 md:place-items-center md:gap-0">
			<ListItem>No Tracking</ListItem>
			<ListItem>No Ads</ListItem>
			<ListItem>No Jargon</ListItem>
		</div>
		<p className="my-4 mt-8 text-sm leading-relaxed text-n-9 dark:text-n-1">
			We respect your privacy & do not employ manipulative tactics. We won't even embed a YouTube video here.{' '}
			<span className="text-xs font-light italic text-n-7 dark:text-n-5 sm:text-sm">(because they track you)</span>
		</p>
	</div>
)

const ListItem = ({ children }: { children: React.ReactNode }) => (
	<div className="flex items-center justify-start">
		<svg
			className="mr-2 h-4 w-4 text-s sm:h-5 sm:w-5"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
		</svg>
		<span className="text-lg font-semibold tracking-tight text-n-9 dark:text-n-1 sm:text-xl lg:text-2xl">
			{children}
		</span>
	</div>
)
