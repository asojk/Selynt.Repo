/** @format */

'use client'

export const Footer = () => {
	return (
		<footer className="mx-auto bg-p-dark py-8 text-sm text-n-3">
			<p>
				&copy; <span className="pl-2">{new Date().getFullYear()} </span>{' '}
				<a className="italic text-a hover:text-s" href="https://selynt.com">
					Selynt.com
				</a>{' '}
				All rights reserved.
			</p>
		</footer>
	)
}
