import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { images } from '@/lib/assets'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

const socials = [
	{ label: 'GitHub', Icon: IconBrandGithub, href: 'https://www.github.com/asojk' },
	{ label: 'LinkedIn', Icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/selynt' },
]

export const NavTop: React.FC = () => {
	return (
		<nav className="fixed left-[50%] top-8 z-50 flex w-fit -translate-x-[50%] items-center gap-6 rounded-full border border-n-6 bg-n-8/90 px-6 py-3 text-sm text-n-1 backdrop-blur-sm">
			<img src={images.tilde} alt="brand decoration" className="w-14" />
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/pricing">Pricing</NavLink>
			{socials.map((social) => (
				<SocialLink key={social.label} {...social} />
			))}
		</nav>
	)
}

const NavLink: React.FC<{ children: string; to: string }> = ({ children, to }) => {
	return (
		<Link to={to} className="block overflow-hidden">
			<motion.div whileHover={{ y: -20 }} transition={{ ease: 'backInOut', duration: 0.5 }} className="h-[20px]">
				<span className="flex h-[20px] items-center">{children}</span>
				<span className="flex h-[20px] items-center text-neutral-50">{children}</span>
			</motion.div>
		</Link>
	)
}

const SocialLink: React.FC<{ label: string; Icon: React.ElementType; href: string }> = ({ label, Icon, href }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={label}
			className="group transition-colors hover:text-s-2">
			<Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
		</a>
	)
}
