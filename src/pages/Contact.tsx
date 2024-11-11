import { BlockInTextCard } from '@/components/common/BlockInTextCard'
import FormZ from '@/components/ui/formz'
import { StickyVComp } from '@/components/ui/sticky-comp-variant'

export const Contact = () => {
	return (
		<div id="contact" className="relative">
			<StickyVComp contentHeight={true}>
				<section className="container py-12">
					<div className="max-w-4xl mx-auto mb-12 prose">
						<h2 className="justify-center text-center H2">Get in Touch</h2>
					</div>
					<div className="flex flex-col items-start justify-center gap-8 px-4 lg:flex-row">
						<div className="items-center justify-center mx-auto mb-6 w-96 text-n-900 dark:text-white lg:w-1/3 lg:pt-8">
							<BlockInTextCard
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
						<div className="w-full max-w-2xl mx-auto lg:w-3/5">
							<FormZ />
						</div>
					</div>
				</section>
			</StickyVComp>
		</div>
	)
}
