import { AltContact } from '@/components/common/AltContactButtons'
import FormZ from '@/components/ui/formz'
import { StickyVComp } from '@/components/ui/sticky-comp-variant'

export const Contact = () => {
	return (
		<div id="contact" className="relative">
			<StickyVComp heightMode="content">
				<section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="prose mx-auto mb-12 max-w-3xl text-center">
						<h2 className="H2">Get in Touch</h2>
					</div>
					<div className="mt-12 grid gap-8 lg:grid-cols-2">
						<div className="space-y-8">
							<AltContact />
						</div>
						<div className="rounded-lg bg-white p-6 shadow-lg dark:bg-n-8">
							<FormZ />
						</div>
					</div>
				</section>
			</StickyVComp>
		</div>
	)
}
