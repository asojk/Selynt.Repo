/** @format */

import { Dispatch, SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'
import { IconEyeClosed, IconMenu4 } from '@tabler/icons-react'
import { Link } from 'react-router-dom' // Use named import

const FloatingDock = ({ items }: { items: { title: string; icon: React.ReactNode; href: string }[] }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<motion.button
				whileHover={{ rotate: '180deg' }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setIsOpen(true)}
				className="fixed bottom-8 right-8 z-[1000] rounded-full bg-white p-4 text-3xl text-black transition-colors hover:text-indigo-500">
				<IconMenu4 />
			</motion.button>
			<Nav isOpen={isOpen} setIsOpen={setIsOpen} items={items} />
		</>
	)
}

const Nav = ({
	isOpen,
	setIsOpen,
	items,
}: {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	items: { title: string; icon: React.ReactNode; href: string }[]
}) => {
	return (
		<motion.nav
			className="fixed bottom-0 top-0 w-screen bg-white"
			animate={isOpen ? 'open' : 'closed'}
			variants={navVariants}
			initial="closed">
			<motion.button
				className="absolute right-8 top-8 rounded-full border-[1px] border-transparent bg-white p-4 text-3xl text-black transition-colors hover:border-indigo-500 hover:text-indigo-500"
				whileHover={{ rotate: '180deg' }}
				onClick={() => setIsOpen(false)}
				whileTap={{ scale: 0.9 }}>
				<IconEyeClosed />
			</motion.button>
			<motion.div variants={linkWrapperVariants} className="absolute bottom-8 left-8 flex flex-col gap-4">
				{items.map((item, index) => (
					<NavLink key={index} text={item.title} icon={item.icon} href={item.href} />
				))}
			</motion.div>
		</motion.nav>
	)
}

const NavLink = ({ icon, href, text }: { text: string; icon: React.ReactNode; href: string }) => {
	return (
		<Link
			to={href}
			className="z-10 inline-block w-fit text-7xl font-black text-slate-800 transition-colors hover:text-indigo-500">
			<motion.div
				className="flex items-center gap-2"
				variants={navLinkVariants}
				transition={{
					type: 'spring',
					damping: 3,
				}}
				whileHover={{
					y: -15,
					rotate: '-7.5deg',
				}}>
				{icon}
				{text}
			</motion.div>
		</Link>
	)
}

{
	/*
interface NavLinkProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  index: number;
}

{/*

function IconContainer({ title, icon, href, index, isOpen, setIsOpen}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) =>
{/*
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);
  const [x, y] = useMousePosition();
  useEffect(() => {
    if (!isInView) return;
    animate(0, 1, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
    [isInView]);
  useEffect(() => {
    if (!isInView) return;
    animate(0, 1, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
    [isInView]);
}, [isInView]);

  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) translate(-${x}px, ${-y}px)`, // Negative values to place in the top-left
        }}
        whileHover={{ scale: 1.2 }} // Scale and dim on hover
        whileTap={{ scale: 0.9 }} // Scale down on click
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='flex items-center justify-center aspect-square rounded-full bg-white dark:bg-g-b transition-all duration-300'
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              key='tooltip'
              initial={{ opacity: 0, y: -10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -2, x: '-50%' }}
              className='absolute bottom-full left-1/2 mb-2 w-fit -translate-x-1/2 whitespace-pre rounded-md border border-g-400 bg-white px-2 py-0.5 text-xs text-g-900'
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className='flex items-center justify-center text-g-b dark:text-white'>
          {icon}
        </div>
      </motion.div>
    </Link>
  );
*/
}
export default FloatingDock

const navVariants = {
	open: {
		x: '0%',
		borderTopLeftRadius: '0vw',
		borderBottomLeftRadius: '0vw',
		opacity: 1,
	},
	closed: {
		x: '100%',
		borderTopLeftRadius: '50vw',
		borderBottomLeftRadius: '50vw',
		opacity: 0,
	},
}

const linkWrapperVariants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const navLinkVariants = {
	open: { x: 0 },
	closed: { x: 25 },
}
