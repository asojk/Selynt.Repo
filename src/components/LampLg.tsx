import { motion } from 'motion/react'

export function Lamp() {
  const transition = {
    type: 'spring',
    stiffness: 70,
    damping: 20,
    mass: 1.5,
    restDelta: 0.005,
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-full max-w-7xl mx-auto flex flex-col justify-between"
          style={{ height: '80vh' }}
          transition={transition}
        >
          <div className="flex-1">
            <LampGradient />
          </div>
          <div className="flex-1 flex items-end">
            <LampContent />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

const LampContent = () => (
  <div className="z-50 w-full">
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 1,
        ease: 'easeOut',
      }}
      className="w-full text-center relative z-50 flex items-start"
    >
      <LampText />
    </motion.div>
  </div>
)

const LampGradient = () => (
	<div className="absolute left-0 right-0 top-0 z-0 flex min-h-[50vh] w-full flex-col items-center justify-center  bg-white dark:bg-p-dark">
		<div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
			<motion.div
				initial={{ opacity: 0, width: '30vw' }}
				whileInView={{ opacity: 1, width: '60vw' }}
				transition={{
					delay: 0.65,
					duration: 0.8,
					ease: 'easeOut',
				}}
				style={{
					backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
				}}
				className="bg-gradient-conic absolute inset-auto right-1/2 h-14 w-full overflow-visible from-s-dark via-transparent to-transparent text-p [--conic-position:from_70deg_at_center_top] sm:h-28 sm:w-3/4 md:h-56 md:w-[60vw]">
				<div className="absolute bottom-0 left-0 z-20 h-40 w-[100%] bg-white [mask-image:linear-gradient(to_top,white,transparent)] dark:bg-p-dark" />
				<div className="absolute bottom-0 left-0 z-20 h-[100%] w-40 bg-white [mask-image:linear-gradient(to_right,white,transparent)] dark:bg-p-dark" />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, width: '30vw' }}
				whileInView={{ opacity: 1, width: '60vw' }}
				transition={{
					delay: 0.65,
					duration: 0.8,
					ease: 'easeOut',
				}}
				style={{
					backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
				}}
				className="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[60vw] from-transparent via-transparent to-s-dark text-white [--conic-position:from_290deg_at_center_top]">
				<div className="absolute bottom-0 right-0 z-20 h-[100%] w-40 bg-white [mask-image:linear-gradient(to_left,white,transparent)] dark:bg-p-dark" />
				<div className="absolute bottom-0 right-0 z-20 h-40 w-[100%] bg-white [mask-image:linear-gradient(to_top,white,transparent)] dark:bg-p-dark" />
			</motion.div>
			<div className="absolute top-1/2 w-full scale-x-150 bg-p-dark blur-2xl"></div>
			<div className="absolute top-1/2 w-full scale-x-150 bg-white blur-2xl"></div>
			<div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
			<div className="absolute inset-auto z-50 h-36 w-[50vw] rounded-full bg-s-dark opacity-50 blur-3xl lg:w-[70vw]"></div>
			<motion.div
				initial={{ width: '12vw' }}
				whileInView={{ width: '30vw' }}
				transition={{
					delay: 0.65,
					duration: 0.8,
					ease: 'easeOut',
				}}
				className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-s blur-2xl"></motion.div>
			<motion.div
				initial={{ width: '30vw' }}
				whileInView={{ width: '60vw' }}
				transition={{
					delay: 0.65,
					duration: 0.8,
					ease: 'easeOut',
				}}
				className="absolute inset-auto z-50 h-0.5 w-[60vw] -translate-y-[7rem] bg-s"></motion.div>

			<div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white dark:bg-p-dark"></div>
		</div>
	</div>
)

const LampText = () => (
  <div className="text-[8vw] mx-auto xl:text-[5vw] max-w-[1200px] font-black tracking-tight leading-none">
    <h1 className="bg-gradient-to-b from-s-2 to-black bg-clip-text p-2 text-transparent dark:from-s dark:to-white text-balance">
      Standing out <br className='lg:hidden'/> shouldn't mean <br className=''/> overspending.
    </h1>
  </div>
)

/*
				<Link to="/pricing">
				<motion.button
					whileHover={{ scale: 1.015 }}
					whileTap={{ scale: 0.985 }}
					className="mt-8 w-64 rounded-lg bg-p py-4 font-semibold uppercase text-white dark:bg-a">
					Compare
				</motion.button>
			</Link>
	*/
