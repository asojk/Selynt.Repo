/** @format */

'use client'

export const Footer = () => {
	return (
		<footer className="texxt-sm bg-p-dark py-8 text-n-3">
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
	)
}
