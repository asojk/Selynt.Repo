/** @format */

import { BlockInTextCard } from '@/components/common/BlockInTextCard'
import { StickyVComp } from '@/components/ui/sticky-comp-variant'

export const Contact = () => {
	return (
		<div className="content-center justify-center min-h-screen antialiased overflow-x-clip bg-n-9 dark:bg-n-6 lg:subpixel-antialiased">
			<div className="px-content-padding">
				<div className="flex items-center justify-center px-8 py-24 text-n-9 dark:text-n-3">
					<StickyVComp contentHeight={true}>
						<BlockInTextCard
							tag="/ Support"
							text={
								<>
									<strong>Have questions?</strong> We'd love to help! Contact support for any issue you may face.
								</>
							}
							examples={[
									'Do you offer a free consultation?',
                  'How do I contact support?',
									'How do I get a quote for my project?',
									'What payment methods do you accept?',
									'How long can I expect to wait for my project to be completed?',
							]}
						/>
					</StickyVComp>
				</div>
			</div>
		</div>
	)
}
