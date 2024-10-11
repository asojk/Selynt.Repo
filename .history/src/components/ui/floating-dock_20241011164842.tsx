import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { IconEyeClosed, IconMenu4 } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

interface DockProps {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
}

export const Dock: React.FC<DockProps> = ({ items, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className='fixed bottom-8 right-8 z-[1001] rounded-full bg-white p-4 text-3xl text-black shadow-lg transition-colors hover:text-indigo-500'
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? <IconEyeClosed /> : <IconMenu4 />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={cn(
              'fixed bottom-24 right-8 z-[1000] flex flex-col items-end gap-4',
              className
            )}
          >
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

function IconContainer({ title, icon, href, index }: IconContainerProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link to={href}>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
        className='relative flex items-center'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-md'
        >
          {icon}
        </motion.div>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className='absolute right-full mr-2 rounded-md bg-white px-2 py-1 text-sm shadow-md'
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  )
}
