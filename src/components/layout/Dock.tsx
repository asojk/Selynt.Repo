/** @format */

import Dock from '@/components/ui/floating-dock'
import { navlinks } from '@/constants/navlinks'

export function IndexDock() {
	const links = [...navlinks]

	return (
		<Dock
			items={links.map(link => ({
				title: link.label,
				icon: <link.icon className="styled-button flex h-8 w-8 rounded-full stroke-1 p-1 lg:h-12 lg:w-12" />,
				href: link.href,
			}))}
		/>
	)
}
