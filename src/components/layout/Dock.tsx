import Dock from '@/components/ui/floating-dock'
import { navlinks } from '@/constants/navlinks'

export function IndexDock() {
	const links = [...navlinks]

	return (
		<Dock
			items={links.map(link => ({
				title: link.label,
				icon: <link.icon className="flex w-8 h-8 p-1 rounded-full stroke-[1.45px] lg:h-12 lg:w-12" />,
				href: link.href,
			}))}
		/>
	)
}
