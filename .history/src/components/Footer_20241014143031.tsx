'use client'

export const Footer = () => {
	return (

			<footer className="bg-p-dark text-n-3 py-8 text-sm mx-auto">
    <p>&copy; <span className='pl-2'>{new Date().getFullYear()} </span> 			<a className='italic text-a hover:text-s' href='https://selynt.com'>
				Selynt.com
			</a> All rights reserved.</p>
</footer>
	)
}
