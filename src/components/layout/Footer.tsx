import { Link } from 'react-router-dom'

export const Footer = () => {
	const footerNavs = [
		{
			link: '/terms',
			name: 'Terms',
		},
		{
			link: '/privacy',
			name: 'Privacy',
		},
	]
	return (
		<footer className="overflow-x-clip bg-n-9 antialiased dark:bg-n-6 lg:subpixel-antialiased">
			<div className="mx-auto max-w-screen-xl px-4 text-n-3 md:px-12">
				<div className="flex flex-col border-t py-2 md:flex-row md:items-center md:justify-between">
					<div className="mb-4 flex flex-col md:mb-0 md:flex-row md:items-center">
						<p className="mb-2 text-sm text-n-3 md:mb-0 md:mr-4">
							&copy; {new Date().getFullYear()}
							<span className="italic text-s"> Selynt </span>
							All rights reserved.
						</p>
						<a href="mailto:contact@selynt.com" className="text-sm underline hover:text-a md:mr-4">
							contact@selynt.com
						</a>
						<ul className="mt-2 flex flex-wrap items-center gap-2 text-sm md:mt-0">
							{footerNavs.map((item, idx) => (
								<li key={idx} className="italic text-n-3 duration-150 hover:text-s">
									<Link to={item.link}>{item.name}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
