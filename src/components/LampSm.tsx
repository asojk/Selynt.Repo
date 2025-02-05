import { motion } from 'motion/react';

export function MobileLamp() {
  const transition = {
    type: 'spring',
    stiffness: 80,
    damping: 18,
    mass: 1.2,
    restDelta: 0.005,
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="relative w-full max-w-md mx-auto flex flex-col justify-between"
          style={{ height: '70vh' }}
          transition={transition}
        >
          <div className="flex-1">
            <MobileLampGradient />
          </div>
          <div className="flex-1 flex">
            <MobileLampContent />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

const MobileLampContent = () => (
  <div className="z-50 w-full">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.9,
        duration: 1,
        ease: 'easeOut',
      }}
      className="w-full text-center relative z-50 flex items-start"
    >
      <MobileLampText />
    </motion.div>
  </div>
);

const MobileLampGradient = () => (
  <div className="absolute left-0 right-0 top-0 z-0 flex min-h-[40vh] w-full flex-col items-center justify-center bg-white dark:bg-p-dark">
    <div className="relative isolate z-0 flex w-full flex-1 items-center justify-center">
      <motion.div
        initial={{ opacity: 0, width: '20vw' }}
        whileInView={{ opacity: 1, width: '60vw' }}
        transition={{
          delay: 0.5,
          duration: 0.6,
          ease: 'easeOut',
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="bg-gradient-conic absolute inset-auto right-[50%] h-48 w-full overflow-visible from-s-dark via-transparent to-transparent text-p [--conic-position:from_70deg_at_center_top]"
      >
        <div className="absolute bottom-0 left-0 z-20 h-20 w-[100%] bg-white [mask-image:linear-gradient(to_top,white,transparent)] dark:bg-p-dark" />
        <div className="absolute bottom-0 left-0 z-20 h-[100%] w-20 bg-white [mask-image:linear-gradient(to_right,white,transparent)] dark:bg-p-dark" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, width: '20vw' }}
        whileInView={{ opacity: 1, width: '60vw' }}
        transition={{
          delay: 0.5,
          duration: 0.6,
          ease: 'easeOut',
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="bg-gradient-conic absolute inset-auto left-[50%] h-48 w-[80vw] from-transparent via-transparent to-s-dark text-white [--conic-position:from_290deg_at_center_top]"
      >
        <div className="absolute bottom-0 right-0 z-20 h-[100%] w-20 bg-white [mask-image:linear-gradient(to_left,white,transparent)] dark:bg-p-dark" />
        <div className="absolute bottom-0 right-0 z-20 h-20 w-[100%] bg-white [mask-image:linear-gradient(to_top,white,transparent)] dark:bg-p-dark" />
      </motion.div>
      <div className="absolute top-1/2 w-full scale-x-150 bg-p-dark blur-xl"></div>
      <div className="absolute top-1/2 w-full scale-x-150 bg-white blur-xl"></div>
      <div className="absolute top-1/2 z-50 h-24 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
      <div className="absolute inset-auto z-50 h-36 w-[60vw] rounded-full bg-s-dark opacity-50 blur-3xl"></div>
      <motion.div
        initial={{ width: '10vw' }}
        whileInView={{ width: '20vw' }}
        transition={{
          delay: 0.5,
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="absolute inset-auto z-30 h-24 w-32 -translate-y-[4rem] rounded-full bg-s blur-2xl"
      ></motion.div>
      <motion.div
        initial={{ width: '20vw' }}
        whileInView={{ width: '60vw' }}
        transition={{
          delay: 0.5,
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="absolute inset-auto z-50 h-0.5 w-[screen] -translate-y-[5rem] bg-s"
      ></motion.div>
      <div className="absolute inset-auto z-40 h-24 w-full -translate-y-[8rem] bg-white dark:bg-p-dark"></div>
    </div>
  </div>
);

const MobileLampText = () => (
  <div className="text-[6vmin] mx-auto max-w-md font-black tracking-tight leading-none">
    <h1 className="bg-gradient-to-b from-s-2 to-black bg-clip-text p-2 text-transparent dark:from-s dark:to-white text-balance">
      Standing out <br /> shouldn’t mean <br /> overspending.
    </h1>
  </div>
);