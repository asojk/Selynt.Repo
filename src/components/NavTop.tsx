import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'
import { images } from '@/lib/assets'
import { IconBrandGithub, IconBrandLinkedin, IconMenu2 } from '@tabler/icons-react'

const socials = [
	{ label: 'GitHub', Icon: IconBrandGithub, href: 'https://www.github.com/asojk' },
	{ label: 'LinkedIn', Icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/selynt' },
]

{
	/*}
const contactMethods = [
	{ href: 'tel:+17634642656', Icon: IconPhone, label: 'Call' },
	{ href: 'mailto:contact@selynt.com', Icon: IconMail, label: 'Email' },
	{ href: 'sms:+17634642656', Icon: IconMessageCircle, label: 'Text' },
]
	*/
}

export const NavTop: React.FC = () => {
	const [isCollapsed, setIsCollapsed] = useState(false)
	const controls = useAnimation()

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsCollapsed(true)
				controls.start('collapsed')
			} else {
				setIsCollapsed(false)
				controls.start('expanded')
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [controls])

	return (
		<nav className="fixed left-[50%] top-2 z-50 flex w-fit -translate-x-[45vw] items-center gap-4 rounded-full border-[1px] border-n-3 bg-n-6 px-3 py-3 text-sm text-n-1 antialiased backdrop-blur-lg transition-transform duration-1000 dark:border-p-2 dark:bg-n-9 md:gap-8 lg:subpixel-antialiased">
			<AnimatePresence initial={false}>
				{isCollapsed ? (
					<motion.button
						key="menu-button"
						initial={{ opacity: 0, scale: 1 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 1 }}
						transition={{ duration: 0.25 }}
						onClick={() => setIsCollapsed(false)}
						whileHover={{ scale: 1 }}
						whileTap={{ scale: 0.9 }}
						className="flex items-center justify-center rounded-full bg-n-1 p-2 text-p transition-colors hover:bg-n-2 dark:bg-n-5 dark:text-a dark:hover:bg-n-8">
						<IconMenu2 className="h-3 w-3 md:h-5 md:w-5 lg:h-7 lg:w-7" />
					</motion.button>
				) : (
					<motion.div
						key="nav-items"
						variants={navVariants}
						initial="collapsed"
						animate="expanded"
						exit="collapsed"
						className="flex items-center gap-4 text-sm text-white md:text-base xl:text-lg">
						<motion.img
							variants={itemVariants}
							src={images.tilde}
							alt="brand decoration"
							className="w-10 md:w-14 xl:w-16"
						/>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/pricing">Pricing</NavLink>

						<motion.div variants={itemVariants} className="h-6 w-px bg-n-6 dark:bg-p-2" />
						{socials.map((social) => (
							<SocialLink key={social.label} {...social} />
						))}
						{/*
						<motion.div variants={itemVariants} className="h-6 w-px bg-n-6 dark:bg-p-2" />

		
						{contactMethods.map((method) => (
							<ContactLink key={method.label} {...method} />
						))}
								*/}
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

const NavLink: React.FC<{ children: string; to: string }> = ({ children, to }) => {
	return (
		<motion.div variants={itemVariants}>
			<Link to={to} className="block overflow-hidden">
				<motion.div whileHover={{ y: -10 }} transition={{ ease: 'backInOut', duration: 0.5 }} className="h-[20px]">
					<span className="flex h-[20px] items-center">{children}</span>
					<span className="flex h-[20px] items-center text-white">{children}</span>
				</motion.div>
			</Link>
		</motion.div>
	)
}

const SocialLink: React.FC<{ label: string; Icon: React.ElementType; href: string }> = ({ label, Icon, href }) => {
	return (
		<motion.a
			variants={itemVariants}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={label}
			className="group transition-colors hover:text-s-2">
			<Icon className="h-6 w-6 stroke-1 transition-transform group-hover:scale-110 lg:h-8 lg:w-8 xl:stroke-[1.5]" />
		</motion.a>
	)
}

{
	/*
const ContactLink: React.FC<{ href: string; Icon: React.ElementType; label: string }> = ({ href, Icon, label }) => {
	return (
		<motion.a variants={itemVariants} href={href} aria-label={label} className="group transition-colors hover:text-s-2">
			<Icon className="h-6 w-6 stroke-1 transition-transform group-hover:scale-110 lg:h-8 lg:w-8 xl:stroke-[1.5]" />
		</motion.a>
	)
}
*/
}

const navVariants = {
	expanded: {
		height: 'auto',
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
	collapsed: {
		height: 0,
		opacity: 0,
		scale: 0.8,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			staggerChildren: 0.05,
			staggerDirection: -1,
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
