import { IconBrandGithub, IconBrandLinkedin, IconHome, IconInfoCircle, IconMail, IconTag } from '@tabler/icons-react'

export const navlinks = [
	{ label: 'Home', icon: IconHome, href: '/' },
	{ label: 'GitHub', icon: IconBrandGithub, href: 'https://www.github.com/asojk' },
	{ label: 'LinkedIn', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/selynt' },
	{ label: 'About', icon: IconInfoCircle, href: '/about' },
	{ label: 'Contact', icon: IconMail, href: '#contact', scroll: true },
	{ label: 'Pricing', icon: IconTag, href: '/pricing' },
]
