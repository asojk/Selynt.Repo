/** @format */

import { Dispatch, SetStateAction, useState } from 'react'

import { motion } from 'framer-motion'
import { IconArrowAutofitRight, IconEyeClosed, IconMenu4 } from '@tabler/icons-react'

const LiquidSideNav = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="relative grid h-screen place-content-center bg-gradient-to-br from-violet-600 to-indigo-600">
			<div className="flex items-center text-white">
				<span className="text-sm">Open nav</span>
				<IconArrowAutofitRight className="ml-2 mr-4" />
				<motion.button
					whileHover={{ rotate: '180deg' }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsOpen(true)}
					className="rounded-full bg-white p-4 text-3xl text-black transition-colors hover:text-indigo-500">
					<IconMenu4 />
				</motion.button>
			</div>
			<Nav isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}

const Nav = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
	return (
		<motion.nav
			className="fixed bottom-0 top-0 w-screen bg-white"
			animate={isOpen ? 'open' : 'closed'}
			variants={navVariants}
			initial="closed">
			<motion.button
				className="absolute right-8 top-8 rounded-full border-[1px] border-transparent bg-white p-4 text-3xl text-black transition-colors hover:border-indigo-500 hover:text-indigo-500"
				whileHover={{ rotate: '180deg' }}
				onClick={() => setIsOpen(false)}
				whileTap={{ scale: 0.9 }}>
				<IconEyeClosed />
			</motion.button>
			<motion.div variants={linkWrapperVariants} className="absolute bottom-8 left-8 flex flex-col gap-4">
				<NavLink text="Home" />
				<NavLink text="Work" />
				<NavLink text="Careers" />
				<NavLink text="Contact" />
			</motion.div>
		</motion.nav>
	)
}

const NavLink = ({ text }: { text: string }) => {
	return (
		<motion.a
			className="z-10 inline-block w-fit text-7xl font-black text-slate-800 transition-colors hover:text-indigo-500"
			variants={navLinkVariants}
			transition={{
				type: 'spring',
				damping: 3,
			}}
			whileHover={{
				y: -15,
				rotate: '-7.5deg',
			}}
			rel="nofollow"
			href="#">
			{text}
		</motion.a>
	)
}

export default LiquidSideNav

const navVariants = {
	open: {
		x: '0%',
		borderTopLeftRadius: '0vw',
		borderBottomLeftRadius: '0vw',
		opacity: 1,
	},
	closed: {
		x: '100%',
		borderTopLeftRadius: '50vw',
		borderBottomLeftRadius: '50vw',
		opacity: 0,
	},
}

const linkWrapperVariants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const navLinkVariants = {
	open: { x: 0 },
	closed: { x: 25 },
}
