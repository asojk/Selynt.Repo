import { BlockInTextCard } from '@/components/common/BlockInTextCard'
import FormZ from '@/components/ui/formz'
import { StickyVComp } from '@/components/ui/sticky-comp-variant'

export const Contact = () => {
	return (
		<div id="contact" className="relative">
			<StickyVComp contentHeight={true}>
				<section className="mx-auto w-full max-w-6xl px-4 py-12">
					<div className="prose mx-auto mb-12 max-w-4xl text-center">
						<h2 className="H2">Get in Touch</h2>
					</div>
					<div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-between">
						<div className="w-full max-w-md lg:max-w-xl">
							<BlockInTextCard text={' '} />
						</div>
						<div className="w-full max-w-md lg:max-w-xl">
							<FormZ />
						</div>
					</div>
				</section>
			</StickyVComp>
		</div>
	)
}
