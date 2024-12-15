'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import { useState, useEffect } from 'react'

const CheckIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={cn('h-6 w-6', className)}>
			<path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
		</svg>
	)
}

const CheckFilled = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={cn('h-6 w-6', className)}>
			<path
				fillRule="evenodd"
				d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}

type LoadingState = {
	text: string
}

const LoaderCore = ({ loadingStates, value = 0 }: { loadingStates: LoadingState[]; value?: number }) => {
	return (
		<div className="relative mx-auto mt-20 flex max-w-lg md:max-w-xl lg:max-w-2xl flex-col justify-start">
			{loadingStates.map((loadingState, index) => {
				const distance = Math.abs(index - value)
				const opacity = Math.max(1 - distance * 0.2, 0) // Minimum opacity is 0, keep it 0.2 if you're sane.

				return (
					<motion.div
						key={index}
						className={cn('mb-4 flex gap-2 text-left text-xl')}
						initial={{ opacity: 0, y: -(value * 40) }}
						animate={{ opacity: opacity, y: -(value * 40) }}
						transition={{ duration: 0.5 }}>
						<div>
							{index > value && <CheckIcon className="text-black dark:text-white" />}
							{index <= value && (
								<CheckFilled
									className={cn(
										'text-black dark:text-white',
										value === index && 'text-black opacity-100 dark:text-a'
									)}
								/>
							)}
						</div>
						<span
							className={cn(
								'text-black dark:text-white',
								value === index && 'text-black opacity-100 dark:text-a'
							)}>
							{loadingState.text}
						</span>
					</motion.div>
				)
			})}
      {value === loadingStates.length && (
        <motion.div
          className="absolute bottom-[-100px] right-[-100px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <ArrowIcon className="text-black dark:text-white transform rotate-45" />
        </motion.div>
      )}
    </div>
  )
}

export const MultiStepLoader = ({
	loadingStates,
	loading,
	duration = 2500,
	loop = false,
}: {
	loadingStates: LoadingState[]
	loading?: boolean
	duration?: number
	loop?: boolean
}) => {
	const [currentState, setCurrentState] = useState(0)

	useEffect(() => {
		if (!loading) {
			setCurrentState(0)
			return
		}
		const timeout = setTimeout(() => {
			setCurrentState((prevState) =>
				loop
					? prevState === loadingStates.length - 1
						? 0
						: prevState + 1
					: Math.min(prevState + 1, loadingStates.length - 1)
			)
		}, duration)

		return () => clearTimeout(timeout)
	}, [currentState, loading, loop, loadingStates.length, duration])
	return (
		<AnimatePresence mode="wait">
			{loading && (
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					exit={{
						opacity: 0,
					}}
					className="fixed inset-0 z-[100] flex items-center justify-center">
                    <div className="relative h-full md:h-[85vh] lg:h-[65vh] w-full md:w-[85vw] lg:w-[65vw] max-w-4xl rounded-xl backdrop-blur-2xl border-2 border-p">
                        <div className="absolute inset-0 flex items-center justify-center px-12">
                            <LoaderCore value={currentState} loadingStates={loadingStates} />
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-white bg-gradient-to-t [mask-image:radial-gradient(900px_at_center,transparent_30%,white)] dark:bg-black" />
                    </div>
                </motion.div>
            )}
		</AnimatePresence>
	)
}


export const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('h-12 w-12', className)}>
      <path d="M7.5 3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9a.75.75 0 01-1.5 0V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" />
    </svg>
  )
}