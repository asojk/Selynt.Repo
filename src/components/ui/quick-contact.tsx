import { ReactNode } from 'react'

export const AltContact = () => {
	return (
		<div className="mx-auto w-full pb-2">

			<div className="flex flex-row items-center justify-start space-x-4 ">
				<ContactButton
					link="tel:+17634642656"
					text="Call"
					icon={
						<svg
							className="ml-1 h-4 w-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
					}
				/>
				<ContactButton
					link="sms:+17634642656"
					text="Text"
					icon={
						<svg
							className="ml-1 h-4 w-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
							/>
						</svg>
					}
				/>
				<ContactButton
					link="mailto:contact@selynt.com"
					text="Email"
					icon={
						<svg
							className="ml-1 h-4 w-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					}
				/>
			</div>

		</div>
	)
}

const ContactButton = ({ link, text, icon }: { link: string; text: string; icon: ReactNode }) => (
	<a
		href={link}
		className="inline-flex gap-2 w-24 items-center justify-center rounded-full bg-p px-4 py-2 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-p-4 hover:text-s my-3">
					{icon}
		{text}

	</a>
)
