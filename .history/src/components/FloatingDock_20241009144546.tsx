/** @format */

import React from 'react'
import { FloatingDock } from '@/components/ui/floating-dock'
import { navlinks } from '@/constants/navlinks'
import { socials } from '@/constants/socials'

export function FloatingDockDemo() {
	const links = [...navlinks, ...socials]

	return (
		<div className="fixed bottom-0 z-[1000] flex w-full items-center justify-center">
			<div className="mx-auto max-w-lg">
				<FloatingDock
					className="mx-auto"
					items={links.map(link => ({
						title: link.label,
						icon: React.createElement(link.icon, { className: 'h-4 w-4' }),
						href: link.href,
					}))}
				/>
			</div>
		</div>
	)
}
