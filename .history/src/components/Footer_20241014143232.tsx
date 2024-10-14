'use client'

export const Footer = () => {
	return (
	<footer className="bg-p-dark text-n-3 py-8 text-sm mx-auto pl-2">
		<p>&copy; {new Date().getFullYear()}
			<a className='italic text-a hover:text-s' href='https://selynt.com'>
					{' '}Selynt{' '}
				</a> </p>
			<p>All rights reserved.</p>
	</footer>
	)
}
