import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {Link} from 'react-router-dom'
import {IconEyeClosed, IconMenu4} from '@tabler/icons-react'

interface DockProps {
	items: {title: string; icon: React.ReactNode; href: string}[]
	className?: string
}

const Dock: React.FC<DockProps> = ({items, className = ''}) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<motion.button
				whileHover={{scale: 1.05}}
				whileTap={{scale: 0.95}}
				onClick={() => setIsOpen(!isOpen)}
				className='fixed bottom-6 right-6 z-[1001] rounded-full bg-n-2 p-3 text-p shadow-lg transition-colors hover:bg-n-3 dark:bg-n-8 dark:text-s dark:hover:bg-n-7'
				animate={{rotate: isOpen ? 180 : 0}}>
				{isOpen ? <IconEyeClosed /> : <IconMenu4 />}
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0, y: 20}}
						transition={{type: 'spring', stiffness: 300, damping: 25}}
						className={`fixed bottom-20 right-6 z-[1000] flex flex-col items-end gap-3 ${className}`}>
						{items.map((item, index) => (
							<IconContainer key={item.title} {...item} index={index} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

interface IconContainerProps {
	title: string
	icon: React.ReactNode
	href: string
	index: number
}

const IconContainer: React.FC<IconContainerProps> = ({title, icon, href, index}) => {
	const [hovered, setHovered] = useState(false)

	return (
		<Link to={href}>
			<motion.div
				initial={{opacity: 0, x: 20}}
				animate={{opacity: 1, x: 0}}
				transition={{delay: index * 0.05}}
				className='relative flex items-center'
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}>
				<motion.div
					whileHover={{scale: 1.05}}
					whileTap={{scale: 0.95}}
					className='flex h-12 w-12 items-center justify-center rounded-full bg-n-1 text-p shadow-md transition-colors hover:bg-n-2 dark:bg-n-9 dark:text-s dark:hover:bg-n-8'>
					{icon}
				</motion.div>
				<AnimatePresence>
					{hovered && (
						<motion.div
							initial={{opacity: 0, x: 10}}
							animate={{opacity: 1, x: 0}}
							exit={{opacity: 0, x: 10}}
							className='absolute right-full mr-3 rounded-md bg-n-2 px-3 py-1 text-sm font-medium text-p shadow-md dark:bg-n-8 dark:text-s'>
							{title}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</Link>
	)
}

export default Dock
