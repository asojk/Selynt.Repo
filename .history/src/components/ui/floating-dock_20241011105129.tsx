import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils'; // Adjust the path based on your project structure
import { Link } from 'react-router-dom'; // Use named import

interface FloatingDockProps {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ items, className }) => {
  const mouseX = useMotionValue<number>(99999); // Initialize with a large number
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'relative flex items-center justify-center w-20 h-20 bg-primary rounded-full backdrop-blur-2xl',
        className
      )}
    >
      {items.map((item) => (
        <IconContainer key={item.title} {...item} hovered={hovered} />
      ))}
    </motion.div>
  );
};

interface IconContainerProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  hovered: boolean; // Add hovered prop
}

function IconContainer({ title, icon, href, hovered }: IconContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const angle = useTransform(hovered ? [0, 1] : [1, 0], [0, 2 * Math.PI]); // Adjust for circular arrangement

  const radius = 50; // Adjust as needed for the distance of icons from the center
  const numberOfIcons = 5; // Adjust to match the number of icons you have

  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        style={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          left: `calc(50% + ${Math.cos(angle} * radius}px)`,
          top: `calc(50% + ${Math.sin(angle)} * radius}px)`,
          transition: 'transform 0.2s',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className='flex items-center justify-center bg-white dark:bg-g-b'
      >
        {icon}
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
      </motion.div>
    </Link>
  );
}
