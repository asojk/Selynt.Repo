/** @format */

'use client'

export const Footer = () => {
	return (
		<footer className="mx-auto bg-p-dark py-8 pl-2 text-sm text-n-3">
			<p>
				&copy; {new Date().getFullYear()}
				<a className="italic text-a hover:text-s" href="https://selynt.com">
					{' '}
					Selynt{' '}
				</a>{' '}
			</p>
			<p>All rights reserved.</p>
		</footer>
	)
}
