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
        const opacity = Math.max(1 - distance * 0.2, 0)

        return (
          <motion.div
            key={index}
            className={cn('mb-4 flex gap-2 text-left text-xl')}
            initial={{ opacity: 0, y: -(value * 40) }}
            animate={{ opacity: opacity, y: -(value * 40) }}
            transition={{ duration: index === 0 ? 0.3 : 0.5 }}>
                        <div>
                            {index > value && <CheckIcon className="text-black dark:text-white" />}
                            {index <= value && (
                                <CheckFilled
                                    className={cn(
                                        'text-black dark:text-white',
                                        value === index && ' opacity-100 text-a-dark'
                                    )}
                                />
                            )}
                        </div>
						<span
							className={cn(
								'text-n-3',
								value === index && 'opacity-100 text-a-light dark:text-a'
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
          transition={{ delay: 3, duration: 0.4 }}
        >
          <ArrowIcon className="text-black dark:text-white" />
        </motion.div>
      )}
    </div>
  )
}

export const MultiStepLoader = ({
	loadingStates,
	loading,
	duration = 2000,
	loop = false,
}: {
	loadingStates: LoadingState[]
	loading?: boolean
	duration?: number
	loop?: boolean
}) => {
	const [currentState, setCurrentState] = useState(0)
	const [showArrow, setShowArrow] = useState(false)
	const [dots, setDots] = useState('')
	const [showDots, setShowDots] = useState(true)

	useEffect(() => {
			if (!loading) {
					setCurrentState(0)
					setShowArrow(false)
					setDots('')
					setShowDots(true)
					return
			}

			// Animate dots
			const dotInterval = setInterval(() => {
					if (showDots) {
							setDots(prev => (prev.length < 3 ? prev + '.' : ''))
					}
			}, 500)

			const timeout = setTimeout(() => {
					setCurrentState((prevState) => {
							const nextState = loop
									? (prevState + 1) % loadingStates.length
									: Math.min(prevState + 1, loadingStates.length - 1)
							if (nextState === loadingStates.length - 1) {
									// Stop dots animation and show arrow when the last state is reached
									setTimeout(() => {
											setShowDots(false)
											setShowArrow(true)
									}, duration)
							}
							return nextState
					})
			}, currentState === 0 ? duration / 4 : duration)

			return () => {
					clearTimeout(timeout)
					clearInterval(dotInterval)
			}
	}, [currentState, loading, loop, loadingStates.length, duration, showDots])

	return (
			<AnimatePresence initial={false} mode="wait">
					{loading && (
							<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.2 }}
									className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
									<div className="relative h-full md:h-[85vh] lg:h-[65vh] w-full md:w-[85vw] lg:w-[65vw] max-w-4xl rounded-xl backdrop-blur-3xl border-2 border-p overflow-hidden">
											<AnimatePresence>
													{showDots && (
															<motion.div 
																	className="absolute top-4 left-4 text-2xl font-bold text-a"
																	initial={{ opacity: 0 }}
																	animate={{ opacity: 1 }}
																	exit={{ opacity: 0 }}
																	transition={{ duration: 0.5 }}
															>
																	{dots}
															</motion.div>
													)}
											</AnimatePresence>
											<div className="absolute inset-0 flex items-center justify-center px-12">
													<LoaderCore value={currentState} loadingStates={loadingStates} />
											</div>

											<AnimatePresence>
													{showArrow && (
															<motion.div
																	className="absolute bottom-16 right-1/2"
																	initial={{ opacity: 0, scale: 0 }}
																	animate={{ opacity: 1, scale: [0, 1.2, 1]}}
																	exit={{ opacity: 0, scale: 0 }}
																	transition={{ duration: 0.8, ease: "easeOut" }}
															>
																	<ArrowIcon className="text-a w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-pulse" />
															</motion.div>
													)}
											</AnimatePresence>
									</div>
							</motion.div>
					)}
			</AnimatePresence>
	)
}


export const ArrowIcon = ({ className }: { className?: string }) => {
  return (

		<svg height="24" width="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"
		className={cn('h-12 w-12', className)}>
		<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
		<path d="M22 4 12 14.01l-3-3"/>
	</svg>
  )
}