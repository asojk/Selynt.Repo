'use client'

export const Footer = () => {
	return (
		<div className='justify-center bg-g-100 p-4 text-left text-xs text-g-b dark:bg-g-900 dark:text-g-50'>
			<footer className="bg-p-dark dark:bg-black text-white py-8">
  <div className="max-w-7xl mx-auto text-center">
    <p>&copy; <span className='pl-1'>{new Date().getFullYear()} </span> 			<a className='italic text-primary hover:text-p-500' href='https://selynt.com'>
				Selynt.com
			</a> All rights reserved.</p>
  </div>
</footer>
			<span className='pl-1'>{new Date().getFullYear()} </span>
		</div>
	)
}
