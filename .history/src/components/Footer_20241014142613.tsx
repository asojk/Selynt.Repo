/** @format */

'use client'

export const Footer = () => {
	return (
		<div className="justify-center bg-g-100 p-4 text-left text-xs text-g-b dark:bg-g-900 dark:text-g-50">
			<footer className="bg-p-dark py-8 text-white dark:bg-black">
				<div className="mx-auto max-w-7xl text-center">
					<p>
						&copy; <span className="pl-1">{new Date().getFullYear()} </span>{' '}
						<a className="hover:text-p-500 italic text-primary" href="https://selynt.com">
							Selynt.com
						</a>{' '}
						All rights reserved.
					</p>
				</div>
			</footer>
			<span className="pl-1">{new Date().getFullYear()} </span>
		</div>
	)
}
