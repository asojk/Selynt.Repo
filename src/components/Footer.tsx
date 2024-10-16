'use client'

export const Footer = () => {
	return (
		<footer className="bg-gradient-to-r from-p via-p-1 dark:via-p-4 dark:to-p-dark to-transparent text-n-3 text-xs mx-auto pl-2 py-3 border-none">
			<div className='flex flex-col items-center justify-center'>
		<p className='text-n-3 text-xs mx-auto ml-4 space-x-4'>&copy; {new Date().getFullYear()}
			<a className='italic text-a hover:text-s' href='https://selynt.com'>
					{' '}Selynt{' '}
					</a> All rights reserved.
				<a href='mailto:contact@selynt.com' className='hover:text-a'>contact@selynt.com</a>
				</p>
				</div>
	</footer>
	)
}