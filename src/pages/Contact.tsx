import { BlockInTextCard } from '@/components/common/BlockInTextCard'
import { EnhancedForm } from '@/components/EnhancedForm'
import { StickyVComp } from '@/components/ui/sticky-comp-variant'

export const Contact = () => {
	return (
		<div id='contact' className="relative">
			<StickyVComp contentHeight={true}>
				<section className='px-4 py-4 antialiased md:flex-row lg:py-12 lg:subpixel-antialiased'>
				<div className="prose text-center md:text-start">
				<p className="Description prose text-left mb-12">You can <a className='italic text-a'>call,</a>{' '} <a className='italic text-a'>text,</a>{' '}or email or fill out the form below.</p>
					<h2 className="H2">Quick Question?</h2>

				</div>
        <div className="flex flex-col gap-8 w-full max-w-4xl md:w-full md:flex-row md:gap-12 md:pb-12 md:text-start">
					<div className="content-center justify-center overflow-x-clip lg:subpixel-antialiased py-8">
						<div className='mx-auto mb-24 w-80 lg:w-96  items-center justify-center text-n-9 dark:text-n-3'>
							<BlockInTextCard
								tag="/ Support"
								text={''
								}
								examples={[
									'How long does a typical website build take?',
									'Can you assist with rebranding my small business?',
									'What’s included in your website development fee?',
									'How are website updates handled without a CMS?',
									'How does Selynt’s pricing compare to agencies?',
									'What is the process for designing a custom logo?',
								]}
							/>
						</div>
						<div className="prose text-center md:text-start">
						<h2 className="H2">Or Ready to Get Started?</h2>
						<EnhancedForm />
					</div>
					</div>
				</div>
				</section>
			</StickyVComp>
		</div>
	)
}
