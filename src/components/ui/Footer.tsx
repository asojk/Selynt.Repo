import { images } from '../../constants/assets'

export const Footer = () => {
	return (
		<footer className="overflow-x-clip antialiased lg:subpixel-antialiased">
			<div className="mx-auto max-w-screen-md px-5 lg:px-8">
				<div className="border-t border-p-light py-4">
					<div className="flex flex-col items-center justify-center space-y-4">
						<div className="flex flex-col items-center">
							<div className="mb-2 block h-20 w-20 dark:hidden lg:h-24 lg:w-24">
								<img src={images.logo} alt="Selynt logo" className="h-full w-full object-contain" />
							</div>
							<div className="mb-2 hidden h-20 w-20 dark:block lg:h-24 lg:w-24">
								<img src={images.dlogo} alt="Selynt logo" className="h-full w-full object-contain" />
							</div>
							<p className="text-center text-sm text-n-7 dark:text-n-3">
								&copy; {new Date().getFullYear()}
								<span className="italic text-a"> Selynt </span>
								All rights reserved.
							</p>
						</div>

						<div className="flex flex-col items-center space-y-2 pb-2">
							<a
								href="mailto:contact@selynt.com"
								className="text-sm text-n-7 hover:text-a dark:text-n-3 dark:hover:text-white">
								contact@selynt.com
							</a>

							<div className="flex space-x-4">
								<a
									className="text-sm text-n-7 hover:text-a dark:text-n-3 dark:hover:text-white"
									href=""
									target="_blank"
									rel="noopener noreferrer">
									privacy
								</a>
								<a
									className="text-sm text-n-7 hover:text-a dark:text-n-3 dark:hover:text-white"
									href=""
									target="_blank"
									rel="noopener noreferrer">
									terms
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
