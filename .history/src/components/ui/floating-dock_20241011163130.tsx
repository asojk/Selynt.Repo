import {useState} from 'react'
import {motion, useSpring, AnimatePresence} from 'framer-motion'
import {cn} from '@/lib/utils'
import {IconEyeClosed, IconMenu4} from '@tabler/icons-react'
import {Link} from 'react-router-dom'

interface DockProps {
	items: {title: string; icon: React.ReactNode; href: string}[]
	className?: string
}

export const Dock: React.FC<DockProps> = ({items, className}) => {
	const [isOpen, setIsOpen] = useState(false)

	// Animation properties
	const scale = useSpring(isOpen ? 1 : 0.5, {
		mass: 0.1,
		stiffness: 200,
		damping: 20
	})

	return (
		<>
			{/* Toggle Button for the Floating Dock */}
			<motion.button
				whileHover={{rotate: isOpen ? '0deg' : '180deg'}}
				whileTap={{scale: 0.9}}
				onClick={() => setIsOpen(!isOpen)}
				className='fixed bottom-8 right-8 z-[1001] rounded-full bg-white p-4 text-3xl text-black transition-colors hover:text-indigo-500'
				animate={{rotate: isOpen ? '180deg' : '0deg'}}>
				{isOpen ? <IconEyeClosed /> : <IconMenu4 />}
			</motion.button>

			{/* Floating Dock Navigation */}
      <motion.div
  animate={isOpen ? 'open' : 'closed'}
  variants={navVariants}
  initial='closed'
  transition={{
    type: 'spring',
    stiffness: 50,
    damping: 100
  }}
>
  <div
    className={cn(
      'fixed bottom-0 right-0 z-[1000] flex items-end justify-end transition-all duration-300',
      isOpen ? 'h-[min(100vw,800px)] w-[min(100vw,800px)]' : 'h-20 w-20',
      'origin-bottom-right rounded-tl-full overflow-hidden',
      className
    )}
    style={{
      scale: scale.get(),
    }}
  >
    {isOpen && (
      <div className="absolute inset-0 rounded-tl-full border-[6rem] border-white border-b-0 border-r-0" 
           style={{
             borderImage: 'linear-gradient(to bottom right, white, white, transparent, transparent) 1',
           }}
      />
    )}
    {/* Render Dock Items */}
    {isOpen &&
      items.map((item, index) => (
        <IconContainer
          key={item.title}
          {...item}
          index={index}
          totalItems={items.length}
          isOpen={isOpen}
        />
      ))}
  </div>
</motion.div>

		</>
	)
}

interface IconContainerProps {
	title: string
	icon: React.ReactNode
	href: string
	index: number
	totalItems: number
	isOpen: boolean
}

function IconContainer({title, icon, href, index, totalItems, isOpen}: IconContainerProps) {
	const angle = (index / (totalItems - 1)) * (Math.PI / 2)
	const radius = isOpen ? 'min(47.5vw, 380px)' : '0px'

	const x = `calc(${Math.cos(angle)} * ${radius})`
	const y = `calc(${Math.sin(angle)} * ${radius})`

	const [hovered, setHovered] = useState(false)

	return (
		<Link to={href}>
			<motion.div
				style={{
					position: 'absolute',
					right: x,
					bottom: y,
					width: '48px',
					height: '200px'
				}}
				className='flex items-center justify-center rounded-full bg-white dark:bg-g-b'
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}>
				<AnimatePresence>
					{hovered && (
						<motion.div
							key='tooltip'
							initial={{opacity: 0, y: -10, x: '-50%'}}
							animate={{opacity: 1, y: 0, x: '-50%'}}
							exit={{opacity: 0, y: -2, x: '-50%'}}
							className='absolute bottom-full left-1/2 mb-4 w-fit -translate-x-1/2 whitespace-pre rounded-md border border-g-400 bg-white px-2 py-2 text-xs text-g-900'>
							{title}
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div className='flex items-center justify-center text-g-b dark:text-white'>
					{icon}
				</motion.div>
			</motion.div>
		</Link>
	)
}

// Animation Variants for Opening and Closing the Dock
const navVariants = {
	open: {
		scale: 0.8,
		opacity: 1,
		x: 0,
		transition: {duration: 0.25}
	},
	closed: {
		opacity: 0,
		x: '100%',
		transition: {duration: 0.25}
	}
}