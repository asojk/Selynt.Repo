'use client'

export const Footer = () => {
	return (
	<footer className="bg-p-dark text-n-3 py-4 text-xs mx-auto pl-2">
		<p>&copy; {new Date().getFullYear()}
			<a className='italic text-a hover:text-s' href='https://selynt.com'>
					{' '}Selynt{' '}
				</a> </p>
			<p className='pb-4'>All rights reserved.</p>
	</footer>
	)
}
