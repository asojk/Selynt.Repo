import Dock from './ui/floating-dock'

import {navlinks} from '@/constants/navlinks'
import {socials} from '@/constants/socials'

export function IndexDock() {
	const links = [...navlinks, ...socials]

	return (
		<Dock
			items={links.map((link) => ({
				title: link.label,
				icon: <link.icon className='h-8 w-8 lg:h-12 lg:w-12' />, // Adjusted icon size
				href: link.href
			}))}
		/>
	)
}
