'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export const TypewriterEffectSmooth = ({
	words,
	className,
	cursorClassName,
}: {
	words: {
		text: string
		className?: string
	}[]
	className?: string
	cursorClassName?: string
}) => {
	// split text inside of words into array of characters
	const wordsArray = words.map((word) => {
		return {
			...word,
			text: word.text.split(''),
		}
	})
	const renderWords = () => {
		return (
			<div>
				{wordsArray.map((word, idx) => {
					return (
						<div key={`word-${idx}`} className="inline-block">
							{word.text.map((char, index) => (
								<span key={`char-${index}`} className={cn(`text-black dark:text-white`, word.className)}>
									{char}
								</span>
							))}
							&nbsp;
						</div>
					)
				})}
			</div>
		)
	}

	return (
		<div className={cn('my-2 flex md:mt-12 lg:pt-24', className)}>
			<motion.div
				className="overflow-hidden pb-2"
				initial={{
					width: '0%',
				}}
				whileInView={{
					width: 'fit-content',
				}}
				transition={{
					duration: 2,
					ease: 'linear',
					delay: 1,
				}}>
				<div
					className="text-xs tracking-tight md:text-xl md:font-bold md:tracking-wide lg:text-3xl xl:text-5xl"
					style={{
						whiteSpace: 'nowrap',
					}}>
					{renderWords()}{' '}
				</div>{' '}
			</motion.div>
			<motion.span
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.8,

					repeat: Infinity,
					repeatType: 'reverse',
				}}
				className={cn(
					'block h-[.8rem] w-[2px] rounded-sm bg-blue-500 md:h-6 md:w-[4px] xl:h-12',
					cursorClassName
				)}></motion.span>
		</div>
	)
}
