import { Dispatch, ReactNode, SetStateAction, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconBrandInstagram, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { images } from '@/lib/assets'
import Modal from '../Modal'

export const CornerNav = () => {
	const [active, setActive] = useState(false)

	return (
		<>
			<HamburgerButton active={active} setActive={setActive} />
			<AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
		</>
	)
}

const LinksOverlay = () => {
	return (
		<nav className="fixed right-4 top-4 z-40 h-[calc(70vh_-_3.5rem)] w-[calc(100%_-_3.5rem)] overflow-hidden md:h-[calc(15vh_-_rem)]">
			<LinksContainer />
		</nav>
	)
}

const LinksContainer = () => {
	const [isOpen, setIsOpen] = useState(false)

	const closeModal = () => setIsOpen(false)
	const openModal = () => setIsOpen(true)

	return (
		<motion.div className="grid grid-cols-2 items-start gap-2 space-y-3 px-4 pt-12 text-left text-sm text-white md:flex md:flex-row md:items-center md:gap-6 md:space-y-0 md:pt-4 md:text-base xl:px-8 xl:text-lg">
			<motion.img
				initial={{ opacity: 0, y: -12 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { delay: 0.5, duration: 0.5, ease: 'easeInOut' },
				}}
				exit={{ opacity: 0, y: -12 }}
				src={images.tilde}
				alt="brand decoration"
				className="hidden w-10 md:block md:w-14 xl:w-16"
			/>
			{LINKS.map((l, idx) => {
				return (
					<NavLink key={l.title} to={l.to} idx={idx}>
						{l.title}
					</NavLink>
				)
			})}
			{SOCIAL_CTAS.map((l, idx) => {
				return (
					<motion.a
						key={idx}
						href={l.href}
						initial={{ opacity: 0, y: -8 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								delay: 1 + idx * 0.125,
								duration: 0.5,
								ease: 'easeInOut',
							},
						}}
						exit={{ opacity: 0, y: -8 }}>
						<l.Component className="h-6 w-6 stroke-1 hover:text-s-2 group-hover:scale-110 lg:h-8 lg:w-8 xl:stroke-[1.5]" />
					</motion.a>
				)
			})}
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
				className="-ml-4 mr-4 rounded-full bg-a-dark px-4 py-2 text-white shadow-lg md:mx-2 md:self-start"
				onClick={openModal}>
				<span className="">Contact</span>
			</motion.button>
			<Modal isOpen={isOpen} onClose={closeModal} />
		</motion.div>
	)
}

const NavLink = ({ children, to, idx }: { children: ReactNode; to: string; idx: number }) => {
	return (
		<motion.a
			variants={itemVariants}
			initial={{ opacity: 0, y: -8 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					delay: 0.75 + idx * 0.125,
					duration: 0.5,
					ease: 'easeInOut',
				},
			}}
			exit={{ opacity: 0, y: -8 }}
			className="flex flex-col flex-wrap">
			<Link to={to} className="block overflow-hidden">
				<motion.div whileHover={{ y: -20 }} transition={{ ease: 'backInOut', duration: 0.5 }} className="h-[20px]">
					<span className="flex h-[20px] items-center">{children}</span>
					<span className="flex h-[20px] items-center text-a">{children}</span>
				</motion.div>
			</Link>
		</motion.a>
	)
}

const useScreenSize = () => {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768)
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return isDesktop ? 'desktop' : 'mobile'
}

const HamburgerButton = ({ active, setActive }: { active: boolean; setActive: Dispatch<SetStateAction<boolean>> }) => {
	const screenSize = useScreenSize()

	return (
		<>
			<motion.div
				initial={false}
				animate={active ? 'open' : 'closed'}
				variants={{
					open: {
						width: 'calc(100% - 3.5rem)',
						height: screenSize === 'desktop' ? 'calc(15vh - 6.75rem)' : 'calc(60vh - 3.5rem)',
						transition: { type: 'spring', mass: 3, stiffness: 400, damping: 50 },
					},
					closed: {
						width: screenSize === 'desktop' ? '4rem' : '2.5rem',
						height: screenSize === 'desktop' ? '4rem' : '2.5rem',
						transition: {
							delay: 0.75,
							type: 'spring',
							mass: 3,
							stiffness: 400,
							damping: 50,
						},
					},
				}}
				custom={screenSize}
				style={{ top: 24, right: 24 }}
				className="fixed z-10 rounded-lg border border-a bg-gradient-to-br from-p to-p-4 shadow-lg shadow-p-dark/20 dark:border-n-8 dark:from-n-9 dark:to-n-900 dark:shadow-black/20 md:rounded-2xl"
			/>

			<motion.button
				initial={false}
				animate={active ? 'open' : 'closed'}
				onClick={() => setActive((pv) => !pv)}
				className={`group fixed right-6 top-[1.25rem] z-50 h-10 w-10 bg-white/0 transition-all md:right-8 md:top-5 md:h-16 md:w-10 ${
					active ? 'rounded-bl-xl rounded-tr-xl' : 'rounded-xl'
				}`}>
				<motion.span
					variants={HAMBURGER_VARIANTS.top}
					className="absolute block h-1 w-4 rounded bg-white group-hover:bg-s md:w-7 lg:w-10"
					style={{ y: '-50%', left: '50%', x: '-50%' }}
				/>
				<motion.span
					variants={HAMBURGER_VARIANTS.middle}
					className="absolute block h-1 w-4 rounded bg-white group-hover:bg-s md:w-7 lg:w-10"
					style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
				/>
				<motion.span
					variants={HAMBURGER_VARIANTS.bottom}
					className="absolute -ml-[6px] block h-1 w-2 rounded bg-white group-hover:bg-s md:ml-0 md:w-4 lg:w-5"
					style={{ x: '-50%', y: '50%' }}
				/>
			</motion.button>
		</>
	)
}

const LINKS = [
	{
		title: 'home',
		to: '/',
	},
	{
		title: 'about',
		to: '/about',
	},
	{
		title: 'pricing',
		to: '/pricing',
	},
	{
		title: 'careers',
		to: '*',
	},
]

const SOCIAL_CTAS = [
	{
		Component: IconBrandInstagram,
		href: '*',
	},
	{
		Component: IconBrandLinkedin,
		href: 'https://www.linkedin.com/company/selynt',
	},
	{
		Component: IconBrandGithub,
		href: 'https://www.github.com/asojk',
	},
]

{
	/*
const UNDERLAY_VARIANTS = {
	open: {
		width: 'calc(100% - 32px)',
		height: {
			mobile: 'calc(40vh - 32px)',
			desktop: 'calc(20vh - 32px)',
		},
		transition: { type: 'spring', mass: 3, stiffness: 400, damping: 50 },
	},
	closed: {
		width: '20px',
		height: '80px',
		transition: {
			delay: 0.75,
			type: 'spring',
			mass: 3,
			stiffness: 400,
			damping: 50,
		},
	},
}
	*/
}

const HAMBURGER_VARIANTS = {
	top: {
		open: {
			rotate: ['0deg', '0deg', '45deg'],
			top: ['35%', '50%', '50%'],
		},
		closed: {
			rotate: ['45deg', '0deg', '0deg'],
			top: ['50%', '50%', '35%'],
		},
	},
	middle: {
		open: {
			rotate: ['0deg', '0deg', '-45deg'],
		},
		closed: {
			rotate: ['-45deg', '0deg', '0deg'],
		},
	},
	bottom: {
		open: {
			rotate: ['0deg', '0deg', '45deg'],
			bottom: ['35%', '50%', '50%'],
			left: '50%',
		},
		closed: {
			rotate: ['45deg', '0deg', '0deg'],
			bottom: ['50%', '50%', '35%'],
			left: 'calc(50% + 10px)',
		},
	},
}

const itemVariants = {
	expanded: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3, ease: 'easeOut' },
	},
	collapsed: {
		opacity: 0,
		y: -10,
		transition: { duration: 0.3, ease: 'easeIn' },
	},
}
