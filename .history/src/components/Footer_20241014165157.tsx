'use client'

export const Footer = () => {
	return (
	<footer className="bg-p text-n-3 text-xs mx-auto pl-2">
		<p className='pb-3 text-n-3 text-xs mx-auto ml-2'>&copy; {new Date().getFullYear()}
			<a className='italic text-a hover:text-s' href='https://selynt.com'>
					{' '}Selynt{' '}
				</a> All rights reserved. </p>
	</footer>
	)
}
