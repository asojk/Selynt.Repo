/* eslint-disable @typescript-eslint/no-empty-object-type */

import { StickyVComp } from '../ui/sticky-comp-variant'
import { Greet } from './greet'
import Code from './Code'
import { Chat } from './Chat'
import Window from './Window'
import Phone from './Phone'
import { useImgPadding } from '@/constants/imgpadding'

interface TimelineItemProps
	extends React.PropsWithChildren<{
		heading: string
    subhead: string
		isLeft: boolean
	}> {}

const TimelineItem: React.FC<TimelineItemProps> = ({ heading, subhead, children, isLeft }) => {
	return (
    <div className={`mb-4 flex justify-${isLeft ? 'start' : 'end'} ${isLeft ? 'lg:pr-24' : 'lg:pl-24'}`}>
      <div className="flex flex-col w-full max-w-md md:max-w-lg xl:max-w-xl">
          <div className={`justify-${isLeft ? 'start' : 'end'} ${isLeft ? 'lg:pr-64' : 'lg:pl-64'}`}>
            <h3 className='px-2 py-1 bg-white rounded-xl dark:bg-n-9 lg:bg-none H2'>{heading}</h3>
            <p className={`items-center gap-2 text-n-8 dark:text-n-5 italic text-base justify-${isLeft ? 'start' : 'end'} ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>{subhead}</p>
        </div>
        <div className="px-4 py-4">{children}</div>
      </div>
    </div>
	)
}

interface VerticalTimelineProps extends React.PropsWithChildren<{}> {}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ children }) => {
	return (
<div className="container flex justify-center p-4 pt-6 mx-auto">
            <div className="relative">
                <div className="absolute inset-0 flex justify-center">
                    <div className="flex flex-col items-center">
                        {/* Top Dot */}
												<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-6 h-6 fill-p'>
						<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd'/>
					</svg>
                        {/* Vertical Line */}
                        <div className="h-[85%] w-0.5 bg-gradient-to-b from-n-6 to-n-900" />
                        {/* Bottom Dot */}
												<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
						<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd'/>
					</svg>
                    </div>
                </div>
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </div>
	)
}


const TimelineE = () => {
	return (
    useImgPadding(),
		<div className="relative">
			<StickyVComp contentHeight={true}>
			<section className="flex flex-col items-center justify-center gap-6 px-4 py-4 md:gap-12 md:flex-row">
						<h2 className="H2">Our Process</h2>
						<div className='block'>
						<p className="prose text-left Description-p">
              Meet. Create. Feedback. Iterate. Deliver.</p>
							<p className="prose text-left Description-p">
							Simple, right?
            </p>
						</div>
					</section>
				<VerticalTimeline>
					<TimelineItem isLeft={true} heading='1. Meet' subhead='virtual, or not!'>
          <div className="w-1/2">
							<Greet />
              </div>
					</TimelineItem>
					<TimelineItem isLeft={false} heading='2. Create' subhead=''>
						<div className="ml-auto w-[90%]">
							<Window />
						</div>
					</TimelineItem>
					<TimelineItem isLeft={true} heading='3. Feedback' subhead=''>
						<div className="w-full">
							<Chat />
						</div>
					</TimelineItem>
					<TimelineItem isLeft={false} heading='4. Iterate' subhead=''>
						<div className="max-w-md">
							<Code />
						</div>
					</TimelineItem>
					<TimelineItem isLeft={true} heading='5. Deliver' subhead=''>
						<div className="-mt-16 scale-75 -mb-96">
              <Phone />
            </div>
					</TimelineItem>
				</VerticalTimeline>
			</StickyVComp>
		</div>
	)
}

export default TimelineE
