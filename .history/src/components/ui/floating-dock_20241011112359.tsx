import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Use named import
import { cn } from "@/lib/utils";

interface FloatingDockProps {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}
interface CentralIconProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const CentralIcon: React.FC<CentralIconProps> = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
	};
	
	return (
		<motion.div
			className='absolute top-0 right-0 flex items-center justify-center aspect-square rounded-full bg-white dark:bg-g-b'
			onClick={handleClick}
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
		>
			{/* Replace with your central icon */}
			<span className='text-g-b dark:text-white'>🌟</span>
		</motion.div>
	);

interface IconContainerProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  index: number;
  isOpen: boolean;
}

function IconContainer({ title, icon, href, index, isOpen }: IconContainerProps) {
  const radius = 50; // Adjust this value for more or less spacing

  // Position the icons in the top-left quadrant
  const angle = (Math.PI / 4) * index; // Adjust to position in the top-left quadrant
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <Link to={href}>
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) translate(-${x}px, ${-y}px)`,
        }}
        initial={{ opacity: 0, scale: 0.5 }} // Start hidden
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }} // Animate in and out
        transition={{ duration: 0.3 }}
        className='flex items-center justify-center aspect-square rounded-full bg-white dark:bg-g-b transition-all duration-300'
      >
        <div className='flex items-center justify-center text-g-b dark:text-white'>
          {icon}
        </div>
      </motion.div>
    </Link>
  );
	};

	const FloatingDock: React.FC<FloatingDockProps> = ({
		items,
		className,
	}) => {
		const [isOpen, setIsOpen] = useState(false);
	
		return (
			<motion.div
				className={cn(
					'fixed bottom-8 right-8 z-[1000] flex items-center justify-center',
					className
				)}
			>
				<div className='relative w-16 h-16 rounded-full bg-primary flex items-center justify-center'>
					<CentralIcon isOpen={isOpen} setIsOpen={setIsOpen} />
					{items.map((item, index) => (
						<IconContainer key={item.title} index={index} {...item} isOpen={isOpen} />
					))}
				</div>
			</motion.div>
		);
	};