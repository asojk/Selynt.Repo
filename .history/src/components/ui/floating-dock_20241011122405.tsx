import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { IconBriefcase2Filled, IconEyeClosed, IconHome, IconMenu4, IconMessage } from "@tabler/icons-react";
import { Link } from 'react-router-dom'; // Use named import

const FloatingDock = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <><motion.button
      whileHover={{ rotate: "180deg" }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsOpen(true)}
      className="fixed bottom-8 right-8 z-[1000] text-3xl bg-white text-black hover:text-indigo-500 transition-colors p-4 rounded-full"
    >
      <IconMenu4 />
    </motion.button>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} /></>

  );
};

const Nav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.nav
      className="fixed top-0 bottom-0 w-screen bg-white"
      animate={isOpen ? "open" : "closed"}
      variants={navVariants}
      initial="closed"
    >
      <motion.button
        className="text-3xl bg-white text-black hover:text-indigo-500 border-[1px] border-transparent hover:border-indigo-500 transition-colors p-4 rounded-full absolute top-8 right-8"
        whileHover={{ rotate: "180deg" }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <IconEyeClosed />
      </motion.button>
      <motion.div
        variants={linkWrapperVariants}
        className="flex flex-col gap-4 absolute bottom-8 left-8"
      >
        <NavLink text="Home" icon={<IconHome />} href="/" />
        <NavLink text="Work" icon={<IconBriefcase2Filled />} href="/work" />
        <NavLink text="Contact" icon={<IconMessage />} href="/contact" />
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ icon, href, text }: { text: string, icon: React.ReactNode, href: string}) => {
  return (
    <Link to={href} className="text-slate-800 hover:text-indigo-500 transition-colors">
    <motion.a
      className="inline-block z-10 text-slate-800 w-fit font-black text-7xl hover:text-indigo-500 transition-colors"
      variants={navLinkVariants}
      transition={{
        type: "spring",
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: "-7.5deg",
      }}
      rel="nofollow"
      href="#"
    >
      {icon}
      {text}
      </motion.a>
      </Link>
  );
};



{/*
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
*/}
export default FloatingDock;

const navVariants = {
  open: {
    x: "0%",
    borderTopLeftRadius: "0vw",
    borderBottomLeftRadius: "0vw",
    opacity: 1,
  },
  closed: {
    x: "100%",
    borderTopLeftRadius: "50vw",
    borderBottomLeftRadius: "50vw",
    opacity: 0,
  },
};

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
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};