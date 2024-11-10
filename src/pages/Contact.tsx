import { BlockInTextCard } from '@/components/common/BlockInTextCard'
import { EnhancedForm } from '@/components/EnhancedForm'
import { StickyVComp } from '@/components/ui/sticky-comp-variant'

export const Contact = () => {
	return (
		<div id="contact" className="relative">
			<StickyVComp contentHeight={true}>
				<section className="container mx-auto px-4 py-12 lg:py-24">
					<div className="prose mx-auto mb-12 max-w-4xl">
						<h2 className="H2 text-center">Get in Touch</h2>
						<p className="w-64 md:w-full mx-auto Description mb-6 text-center">
							You can{' '}
							<a href="tel:+17634642656" className="italic text-a hover:underline">
								call
							</a>
							,{' '}
							<a href="sms:+17634643656" className="italic text-a hover:underline">
								text
							</a>
							, or email or fill out the form below.
						</p>
					</div>

					<div className="flex flex-col items-start justify-center gap8 lg:flex-row">
						<div className="mx-auto mb-6 w-96 items-center justify-center lg:pt-8 lg:w-1/3 text-n-900 dark:text-white">
							<BlockInTextCard
								tag="/ Quick Question?"
								text={''}
								examples={[
									'How long does a typical website build take?',
									'Can you assist with rebranding my small b..',
									'What’s included in your website developme..',
									'How are site updates handled without a CM..',
									'How does Selynt’s pricing compare to agen..',
									'What is the process like for designing lo..',
								]}
							/>
						</div>
						<div className="mx-auto w-full max-w-2xl lg:w-3/5">
							<h3 className="H3 mb-6 px-8 text-left lg:text-center">Or ready to get started?</h3>
							<EnhancedForm />
						</div>
					</div>
				</section>
			</StickyVComp>
		</div>
	)
}
