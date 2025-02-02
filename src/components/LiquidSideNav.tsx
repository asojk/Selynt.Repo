import { Dispatch, SetStateAction, useState, useRef } from "react";
import { motion } from "motion/react";
import { IconMapBolt, IconX } from "@tabler/icons-react";
import MapChart from "./MapChart";
import { useKbdOutside } from '@/hooks/use-kbd-or-outside';

const LiquidSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useKbdOutside(isOpen, () => setIsOpen(false));
  return (
    <div className="h-16 grid place-content-center relative">
      <div className="flex items-center text-white">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="text-3xlmx-auto flex h-12 items-center justify-center rounded-lg px-8 text-base font-black text-white transition duration-200 md:text-lg bg-red hover:bg-red/90 p-4"
        >
          <a className='mr-2'>Our Work</a> <IconMapBolt />
        </motion.button>
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} navRef={navRef} />
    </div>
  );
};

const Nav = ({
  isOpen,
  setIsOpen,
  navRef,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  navRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 bottom-0 w-screen z-50 bg-p-3"
      animate={isOpen ? "open" : "closed"}
      variants={navVariants}
      initial="closed"
    >
      <motion.button
        className="text-xl bg-white text-black hover:text-a-dark border-[2px] border-transparent hover:border-s-1 transition-colors p-3 rounded-full absolute top-8 right-8 z-[55]"
        whileHover={{ rotate: "180deg" }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <IconX />
      </motion.button>
      <MapChart setActiveClient={() => {}} setShowPopup={() => {}} />
    </motion.nav>
  );
};

export default LiquidSideNav;

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