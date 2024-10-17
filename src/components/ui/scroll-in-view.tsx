import {ReactNode} from 'react'
import {TextParallaxContent} from '@/components/TextParallaxContent'

interface ParallaxProps {
	heading: string
	imgUrl: string
	subheading: string
	customContent?: ReactNode
}

export const TextParallax = ({heading, imgUrl, subheading, customContent}: ParallaxProps) => {
	return (
		<div className='bg-p antialiased lg:subpixel-antialiased'>
			<TextParallaxContent imgUrl={imgUrl} subheading={subheading} heading={heading}>
				{customContent && <div className=''>{customContent}</div>}
			</TextParallaxContent>
		</div>
	)
}
