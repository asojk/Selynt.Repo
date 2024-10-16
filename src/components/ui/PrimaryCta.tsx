interface PrimaryCtaProps {
	h3default: string
	h3color: string
	p: string
	button: string
}

export const PrimaryCta = ({h3default, h3color, p, button}: PrimaryCtaProps) => {
	return (
		<section className='mx-auto max-w-screen-xl px-4 py-4 md:px-8'>
			<div className='max-w-xl'>
				<div className='py-4'>
					<h3 className='text-3xl font-semibold text-gray-800 md:text-4xl'>
						{h3default} <span className='text-indigo-600'>{h3color}</span>
					</h3>
					<p className='mt-3 leading-relaxed text-gray-500'>{p}</p>
				</div>
				<a
					className='group inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 font-medium text-indigo-600'
					href='javascript:void()'>
					{button}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='ml-1 h-6 w-6 duration-150 group-hover:translate-x-1'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M13 7l5 5m0 0l-5 5m5-5H6'
						/>
					</svg>
				</a>
			</div>
		</section>
	)
}
