import { IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export type NotificationType = {
	text: string
	subText: string
}

interface NotificationProps {
	initialDelay?: number
	displayDuration?: number
}

export const Notification: React.FC<NotificationProps> = ({ initialDelay = 1000 }) => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const showTimer = setTimeout(() => setShow(true), initialDelay)

		return () => clearTimeout(showTimer)
	}, [initialDelay])

	useEffect(() => {
		const showTimer = setTimeout(() => setShow(true), initialDelay)

		return () => clearTimeout(showTimer)
	}, [initialDelay])

	const notificationContent: NotificationType = {
		text: 'Pre-Launch Discounts',
		subText: "We're offering pre-launch discounts as we move into our active phase.",
	}

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 50, opacity: 0 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className="fixed bottom-4 left-1 md:left-4 z-50 max-w-[12rem] md:max-w-sm">
					<div className="rounded-lg border border-n-8 bg-n-1 p-4 shadow-xl shadow-n-8 dark:border-n-3 dark:bg-n-8">
						<div className="flex items-start space-x-4">
							<div className="flex-grow">
								<p className="text-sm font-semibold text-n-900 dark:text-white">{notificationContent.text}</p>
								<p className="mt-1 text-xs text-n-900 dark:text-n-2">{notificationContent.subText}</p>
							</div>
							<button
								onClick={() => setShow(false)}
								className="text-n-1 hover:text-n-3 focus:outline-none dark:text-n-4 dark:hover:text-n-2">
								<span className="sr-only">Close</span>
								<IconX size={16} className="text-n-9 dark:text-n-1" />
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
