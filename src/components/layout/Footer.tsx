import { Link } from 'react-router-dom'
import { images } from '@/lib/assets'

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
		<footer className="antialiased overflow-x-clip bg-n-9 dark:bg-n-6 lg:subpixel-antialiased">
			<div className="max-w-screen-md px-5 mx-auto lg:px-8">
				<div className="py-4 border-t border-p-light">
					<div className="flex flex-col items-center justify-center space-y-4">
						<div className="flex flex-col items-center">
							<div className="hidden w-20 h-20 mb-2 dark:block lg:h-24 lg:w-24">
								<img src={images.logo} alt="Selynt logo" className="object-contain w-full h-full" />
							</div>
							<div className="block w-20 h-20 mb-2 dark:hidden lg:h-24 lg:w-24">
								<img src={images.dlogo} alt="Selynt logo" className="object-contain w-full h-full" />
							</div>
							<p className="text-sm text-center text-n-3">
								&copy; {new Date().getFullYear()}
								<span className="italic text-white"> Selynt </span>
								All rights reserved.
							</p>
						</div>

						<div className="flex flex-col items-center pb-2 space-y-2">
							<a href="mailto:contact@selynt.com" className="text-sm text-n-3 hover:text-white">
								contact@selynt.com
							</a>

							<div className="flex space-x-4">
								{footerNavs.map((item, idx) => (
									<Link key={idx} to={item.link} className="text-sm text-n-3 hover:text-white">
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
