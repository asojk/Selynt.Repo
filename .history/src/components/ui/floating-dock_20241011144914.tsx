import { useRef, useState } from 'react';
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { IconEyeClosed, IconMenu4 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

interface DockProps {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}

export const Dock: React.FC<DockProps> = ({ items, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mouseX = useMotionValue<number>(99999);

  // Animation properties
  const scale = useSpring(isOpen ? 1 : 0.1, {
    mass: 0.1,
    stiffness: 200,
    damping: 20,
  });
  const borderRadius = useSpring(isOpen ? 50 : 0, {
    mass: 0.1,
    stiffness: 200,
    damping: 20,
  });

  return (
    <>
      {/* Toggle Button for the Floating Dock */}
      <motion.button
        whileHover={{ rotate: '180deg' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[1000] text-3xl bg-white text-black hover:text-indigo-500 transition-colors p-4 rounded-full"
      >
        <IconMenu4 />
      </motion.button>

      {/* Floating Dock Navigation */}
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(99999)} // Set to large number when mouse leaves
        animate={isOpen ? 'open' : 'closed'}
        variants={navVariants}
        initial="closed"
        className={cn(
          "fixed bottom-0 right-0 p-4 z-[1000] mx-auto flex h-16 items-center justify-between gap-2 bg-primary px-4 pb-3 pt-4 backdrop-blur-2xl rounded-t-2xl",
          className
        )}
        style={{
          scale,
          borderRadius,
          width: isOpen ? '300px' : '100px', // Adjust based on your design
        }}
      >
        {/* Close Button inside the Dock */}
        <motion.button
          className="text-3xl bg-white text-black hover:text-indigo-500 border-[1px] border-transparent hover:border-indigo-500 transition-colors p-4 rounded-full absolute top-8 right-8"
          whileHover={{ rotate: '180deg' }}
          onClick={() => setIsOpen(false)}
          whileTap={{ scale: 0.9 }}
        >
          <IconEyeClosed />
        </motion.button>

        {/* Render Dock Items */}
        {items.map((item, index) => (
          <IconContainer key={item.title} mouseX={mouseX} {...item} index={index} totalItems={items.length} />
        ))}
      </motion.div>
    </>
  );
};

interface IconContainerProps {
  mouseX: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
  href: string;
  index: number; // Index of the icon
  totalItems: number; // Total number of icons
}

// Individual NavLink for each dock item
function IconContainer({ mouseX, title, icon, href, index, totalItems }: IconContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const angle = (index / totalItems) * 360; // Calculate the angle for placement
  const radius = 120; // Adjust radius for the circular arrangement

  // Compute the icon's position based on its angle
  const x = useTransform(distance, [0, 1], [
    0,
    radius * Math.cos((angle * Math.PI) / 180),
  ]);
  const y = useTransform(distance, [0, 1], [
    0,
    radius * Math.sin((angle * Math.PI) / 180),
  ]);

  const [hovered, setHovered] = useState(false);
  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        style={{
          position: 'absolute',
          left: `calc(50% + ${x}px)`, // Adjusted for center positioning
          bottom: `calc(50% + ${y}px)`, // Adjusted for center positioning
        }} 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='relative flex aspect-square items-center justify-center rounded-xl bg-white dark:bg-g-b'
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              key='tooltip' // Add a unique key
              initial={{ opacity: 0, y: -10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -2, x: '-50%' }}
              className='absolute bottom-full left-1/2 mb-2 w-fit -translate-x-1/2 whitespace-pre rounded-md border border-g-400 bg-white px-2 py-0.5 text-xs text-g-900'
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className='flex items-center justify-center text-g-b dark:text-white'
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}

// Animation Variants for Opening and Closing the Dock
const navVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.5 },
  },
};