/** @format */

import { BlockInTextCard } from '@/components/common/BlockInTextCard'
import { StickyVComp } from '@/components/ui/sticky-comp-variant'

export const Contact = () => {
	return (
		<div className="min-h-screen content-center justify-center overflow-x-clip bg-n-9 antialiased dark:bg-n-6 lg:subpixel-antialiased">
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
								'Does your product work for SMBs?',
								'Can I pause my membership without losing my data?',
								'How does seat based pricing work?',
								"What's the meaning of life?",
							]}
						/>
					</StickyVComp>
				</div>
			</div>
		</div>
	)
}
