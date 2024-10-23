import { IconAlertTriangle } from "@tabler/icons-react";
import { motion } from "framer-motion";

const Ribbon = () => {
  return (
    <>
      <div className="flex translate-y-[50%] rotate-[7deg] scale-110 overflow-hidden  bg-amber-200">
      <TranslateWrapper>
        <LogoItemsTop />
      </TranslateWrapper>
      <TranslateWrapper>
        <LogoItemsTop />
      </TranslateWrapper>
      <TranslateWrapper>
        <LogoItemsTop />
      </TranslateWrapper>
    </div><div className="flex -translate-y-[50%] -rotate-[7deg] scale-110 overflow-hidden  bg-amber-200">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div></>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ name }: { name: string }) => {
  return (
    <a
      className="flex items-center justify-center gap-4 px-4 py-4 text-black border-y-4 border-dashed border-n-900 md:py-6"
    >
      <IconAlertTriangle size='3rem' stroke='1px' className='relative right-2' />
      <span className="whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl">
        {name}
      </span>
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
    <LogoItem name='Not for those who want the status quo' />
  </>
);

export default Ribbon;