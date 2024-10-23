import Dock from '@/components/ui/floating-dock'
import {navlinks} from '@/constants/navlinks'

export function IndexDock() {
	const links = [...navlinks]

	return (
<Dock
			items={links.map((link) => ({
				title: link.label,
				icon: <link.icon className='h-8 w-8 lg:h-12 lg:w-12 stroke-1 p-1 flex rounded-full styled-button' />,
				href: link.href
			}))} />
	)
}
