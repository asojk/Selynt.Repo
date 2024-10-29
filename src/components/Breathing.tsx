import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BreathingExercise = () => {
  const [breathePhase, setBreathePhase] = useState<'in' | 'hold' | 'out'>('in')

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathePhase(prev => {
        if (prev === 'in') return 'hold'
        if (prev === 'hold') return 'out'
        return 'in'
      })
    }, 4000) // Change phase every 4 seconds

    return () => clearInterval(interval)
  }, [])


  const circleVariants = {
    in: {
      scale: 1,
      opacity: 1,
      transition: { duration: 4, ease: "easeInOut" }
    },
    hold: {
      scale: 1,
      opacity: 1,
      transition: { duration: 4, ease: "linear" }
    },
    out: {
      scale: 0.5,
      opacity: 0.5,
      transition: { duration: 4, ease: "easeInOut" }
    }
  }

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  return (
    <section className='flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-p-light to-p-dark'>
      <motion.div
        className="relative w-80 h-80"
        variants={circleVariants}
        animate={breathePhase}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-s-light to-s-dark"
          style={{ filter: 'blur(20px)' }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-a-light to-a-dark opacity-70"
        />
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.p
          key={breathePhase}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className='text-2xl font-semibold text-white mt-8'
        >
          {breathePhase === 'in' ? 'Breathe in...' :
           breathePhase === 'hold' ? 'Hold...' : 'Breathe out...'}
        </motion.p>
      </AnimatePresence>
    </section>
  )
}

export default BreathingExercise