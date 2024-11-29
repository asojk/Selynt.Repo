import React from 'react'
import { StickyVComp } from '@/components/ui/sticky-comp-variant'
import { MotionButton } from '@/components/ui/motion-button'

export const This = () => {
	return (
		<StickyVComp heightMode="content">
			<section className="flex w-full cursor-default flex-col items-center justify-center gap-12 px-4 py-4 antialiased md:flex-row lg:py-12 lg:subpixel-antialiased">
				<Copy />
				<RightColumn />
			</section>
		</StickyVComp>
	)
}

const Copy = () => (
	<div className="mx-auto flex max-w-2xl flex-col items-center text-center md:items-start md:text-left">
		<h2 className="H2">
			Websites & Branding
			<br />
			<span className="text-a dark:text-n-1">Without the BS</span>
		</h2>
		<p className="mb-6 text-lg text-n-9 dark:text-n-1">
			You are entitled to whichever methods you prefer when working with us, but
			<span className="font-bold italic text-a"> here you will find:</span>
		</p>
		<div className="grid w-full grid-cols-1 gap-8 text-n-900 dark:text-n-1 md:grid-cols-3">
			<ListItem>No Tracking</ListItem>
			<ListItem>No Ads</ListItem>
			<ListItem>No Jargon</ListItem>
		</div>
		<p className="mt-6 text-lg leading-relaxed text-n-9 dark:text-n-1">
			We respect your privacy & do not employ manipulative tactics. We won't even embed a YouTube video here.{' '}
			<span className="text-sm font-light italic text-n-7 dark:text-n-5">(because they track you)</span>
		</p>
		<div className="mt-8">
			<MotionButton btntxt="Let's Talk" link="/contact" />
		</div>
	</div>
)

const RightColumn = () => (
	<div className="hidden md:block">
		{/* You can add a visual element here if needed, similar to the LogoRolodex in Tech.tsx */}
	</div>
)

const ListItem = ({ children }: { children: React.ReactNode }) => (
	<div className="flex items-center justify-center md:justify-start">
		<svg
			className="mr-2 h-5 w-5 text-s"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
		</svg>
		<span className="text-xl font-semibold tracking-tight text-n-9 dark:text-n-1 lg:text-2xl">{children}</span>
	</div>
)
