interface CTAProps {
	h2: string
	p: string
	button: string
}

export const CTA = ({h2, p, button}: CTAProps) => {
	return (
		<section className='py-14'>
			<div className='mx-auto max-w-screen-xl justify-between gap-x-12 px-4 md:flex md:px-8'>
				<div className='max-w-xl'>
					<h2 className='text-3xl font-semibold text-gray-800 sm:text-4xl'>{h2}</h2>
					<p className='mt-3 text-gray-600'>{p}</p>
				</div>
				<div className='mt-4 flex-none md:mt-0'>
					<a
						href='javascript:void(0)'
						className='inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-md duration-150 hover:bg-indigo-500 hover:shadow-none active:bg-indigo-700'>
						{button}
					</a>
				</div>
			</div>
		</section>
	)
}
