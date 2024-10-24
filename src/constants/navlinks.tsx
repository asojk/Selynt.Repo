/** @format */

import { IconBrandGithub, IconBrandLinkedin, IconHome, IconPlug, IconTextIncrease } from '@tabler/icons-react'
import { images } from '@/lib/assets'

// eslint-disable-next-line react-refresh/only-export-components
const TildeWrapper = () => {
	return (
		<img src={images.tilde} alt="About" className="rounded-full" /> // Adjust size as needed
	)
}

export const navlinks = [
	{ label: 'Home', icon: IconHome, href: '/' },
	{ label: 'GitHub', icon: IconBrandGithub, href: 'https://www.github.com/asojk' },
	{ label: 'LinkedIn', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/selynt' },
	{ label: 'About', icon: TildeWrapper, href: '/about' },
	{ label: 'Contact', icon: IconPlug, href: '/contact' },
	{ label: 'Pricing', icon: IconTextIncrease, href: '/pricing' },
]
