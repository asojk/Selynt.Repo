/** @format */

'use client'

export const Footer = () => {
	return (
		<footer className="mx-auto bg-p pl-2 text-xs text-n-3">
			<p className="mx-auto ml-2 pb-3 text-xs text-n-3">
				&copy; {new Date().getFullYear()}
				<a className="italic text-a hover:text-s" href="https://selynt.com">
					{' '}
					Selynt{' '}
				</a>{' '}
				All rights reserved.{' '}
			</p>
		</footer>
	)
}
