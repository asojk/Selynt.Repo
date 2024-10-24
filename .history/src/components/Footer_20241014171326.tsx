/** @format */

'use client'

export const Footer = () => {
	return (
		<footer className="mx-auto bg-p py-3 pl-2 text-xs text-n-3">
			<div className="flex flex-row items-center justify-center gap-4">
				<p className="mx-auto ml-2 text-xs text-n-3">
					&copy; {new Date().getFullYear()}
					<a className="italic text-a hover:text-s" href="https://selynt.com">
						{' '}
						Selynt{' '}
					</a>{' '}
					All rights reserved.{' '}
				</p>
				<div className="pr-4 text-right">contact@selynt.com</div>
			</div>
		</footer>
	)
}
