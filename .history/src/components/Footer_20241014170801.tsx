'use client'

export const Footer = () => {
	return (
		<footer className="bg-p text-n-3 text-xs mx-auto pl-2">
			<div className='flex flex-col items-center justify-center gap-4'>
		<p className='pt-3 text-n-3 text-xs mx-auto ml-2'>&copy; {new Date().getFullYear()}
			<a className='italic text-a hover:text-s' href='https://selynt.com'>
					{' '}Selynt{' '}
					</a> All rights reserved. </p>
				<div className='text-right pb-3'>
					contact@selynt.com
				</div>
				</div>
	</footer>
	)
}
