import { BlockInTextCard } from '@/components/common/BlockInTextCard'

export const Contact = () => {
	return (
		<div className="min-h-screen content-center justify-center overflow-x-clip bg-white antialiased dark:bg-n-9 lg:subpixel-antialiased">
			<div className="flex w-full items-center justify-center px-8 py-24 text-n-9 dark:text-n-3">
				<BlockInTextCard
					tag="/ Support"
					text={
						<>
							<strong>Have questions?</strong> Got a project in mind?
						</>
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
		</div>
	)
}
