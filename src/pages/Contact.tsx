import { AltContact } from '@/components/common/AltContactButtons'
import FormZ from '@/components/ui/formz'
import { StickyVComp } from '@/components/ui/sticky-comp-variant'

export const Contact = () => {
	return (
		<div id="contact" className="relative">
			<StickyVComp heightMode="content">
				<section className="mx-auto w-full max-w-7xl py-4 md:px-4 lg:px-8">
					<div className="prose mx-auto mb-4 max-w-3xl text-center lg:mb-12">
						<h2 className="H2">Get in Touch</h2>
					</div>
					<div className="mt-4 grid gap-4 lg:mt-12 lg:grid-cols-2">
						<AltContact />

						<FormZ />
					</div>
				</section>
			</StickyVComp>
		</div>
	)
}
