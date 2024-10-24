/** @format */

'use client'

export const Footer = () => {
	return (
		<footer className="mx-auto bg-p py-4 pl-2 text-xs text-n-3 dark:bg-p-dark">
			<p>
				&copy; {new Date().getFullYear()}
				<a className="italic text-a hover:text-s" href="https://selynt.com">
					{' '}
					Selynt{' '}
				</a>{' '}
			</p>
			<p className="pb-4">All rights reserved.</p>
		</footer>
	)
}
