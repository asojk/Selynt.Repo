'use client'

export const Footer = () => {
	return (

			<footer className="bg-p-dark text-white py-8">
  <div className="max-w-7xl mx-auto text-center">
    <p>&copy; <span className='pl-1'>{new Date().getFullYear()} </span> 			<a className='italic text-primary hover:text-p-500' href='https://selynt.com'>
				Selynt.com
			</a> All rights reserved.</p>
  </div>
</footer>
	)
}
