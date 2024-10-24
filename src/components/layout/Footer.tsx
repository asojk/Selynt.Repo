/** @format */

'use client'

export const Footer = () => {
	return (
		<footer className="mx-auto border-none bg-gradient-to-r from-p via-p-1 to-transparent py-3 pl-2 text-xs text-n-3 dark:via-p-4 dark:to-p-dark">
			<div className="flex flex-col items-center justify-center">
				<p className="mx-auto ml-4 space-x-4 text-xs text-n-3">
					&copy; {new Date().getFullYear()}
					<a className="italic text-a hover:text-s" href="https://selynt.com">
						{' '}
						Selynt{' '}
					</a>{' '}
					All rights reserved.
					<a href="mailto:contact@selynt.com" className="hover:text-a">
						contact@selynt.com
					</a>
				</p>
			</div>
		</footer>
	)
}
