import React, {ReactNode} from 'react'

interface ContentSectionProps {
	title: string
	subtitle?: string
	description?: string
	button?: {
		text: string
		onClick: () => void
	}
	customContent?: ReactNode
	className?: string
}

const ContentSection: React.FC<ContentSectionProps> = ({
	title,
	subtitle,
	description,
	button,
	customContent,
	className = ''
}) => {
	return (
		<section className={`${className}`}>
			<div className='antialised mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 md:grid-cols-12 lg:subpixel-antialiased'>
				<h2 className='col-span-1 text-3xl font-bold text-a-dark dark:text-s md:col-span-4'>
					{title}
				</h2>
				<div className='col-span-1 md:col-span-8'>
					{subtitle && (
						<h3 className='mb-4 text-xl font-bold text-n-9 dark:text-n-1 md:text-2xl'>
							{subtitle}
						</h3>
					)}
					{description && (
						<p className='mb-8 text-xl text-n-9 dark:text-n-1 md:text-2xl'>{description}</p>
					)}
					{button && (
						<button
							onClick={button.onClick}
							className='inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-md duration-150 hover:bg-indigo-500 hover:shadow-none active:bg-indigo-700'>
							{button.text}
						</button>
					)}
				</div>
			</div>
			{customContent && <div className=''>{customContent}</div>}
		</section>
	)
}

export default ContentSection
