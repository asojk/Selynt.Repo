'use client'

export const Footer = () => {
	return (
		<div className='justify-center bg-g-100 p-4 text-left text-xs text-g-b dark:bg-g-900 dark:text-g-50'>
			Built by{' '}
			<a className='italic text-primary hover:text-p-500' href='https://selynt.com'>
				Selynt.com
			</a>
			<span className='pl-1'>{new Date().getFullYear()} </span>
		</div>
	)
}
