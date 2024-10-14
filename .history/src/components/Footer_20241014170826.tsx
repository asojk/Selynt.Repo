'use client'

export const Footer = () => {
	return (
		<footer className="bg-p text-n-3 text-xs mx-auto pl-2 py-3">
			<div className='flex flex-row items-center justify-center gap-4'>
		<p className='text-n-3 text-xs mx-auto ml-2'>&copy; {new Date().getFullYear()}
			<a className='italic text-a hover:text-s' href='https://selynt.com'>
					{' '}Selynt{' '}
					</a> All rights reserved. </p>
				<div className='text-righ'>
					contact@selynt.com
				</div>
				</div>
	</footer>
	)
}
