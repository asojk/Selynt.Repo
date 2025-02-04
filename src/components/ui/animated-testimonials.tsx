import { IconArrowLeft, IconArrowRight, IconArrowRightToArc } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import { ImageKeys, images } from '@/constants/assets'
import { useSwipeable } from 'react-swipeable'

type Testimonial = {
  quote: string
  name: string
  designation: string
  src: ImageKeys
  url: string
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[]
  autoplay?: boolean
}) => {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  const backgroundColors = [
    'bg-[conic-gradient(from_90deg_at_50%_50%,#AEE1CF_0%,#33B588_50%,#AEE1CF_100%)]',
    'bg-[conic-gradient(from_90deg_at_50%_50%,#607483_0%,#243038_50%,#607483_100%)]',
    'bg-[conic-gradient(from_90deg_at_50%_50%,#43525c_0%,#1e2529_50%,#43525c_100%)]',
    'bg-[conic-gradient(from_90deg_at_50%_50%,#011e14_0%,#6a7b73_50%,#011e14_100%)]',
    'bg-[conic-gradient(from_90deg_at_50%_50%,#8e9fad_0%,#dfdfdf_50%,#8e9fad_100%)]',
    'bg-[conic-gradient(from_90deg_at_50%_50%,#D3F4E8_0%,#7FBFA5_50%,#D3F4E8_100%)]',
  ]

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackTouch: true,
  })

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
  }

  return (
    <><div className="max-w-lg md:max-w-xl mx-auto flex flex-col items-start text-left md:px-4 lg:px-0 pt-20 ">
      <div className="pb-8 mb-8 text-4xl font-black tracking-tight text-black dark:text-white md:text-6xl">
        <h2 className="">
          Featured Clients
        </h2>
      </div>
    </div>
      <div className='mx-auto max-w-sm px-4 pb-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12' {...swipeHandlers} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>

        <div className='relative grid grid-cols-1 gap-20 md:grid-cols-2'>
          <div>
            <div className='relative mx-auto h-64 w-64 lg:h-80 lg:w-full'>
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index) ? 50 : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeInOut',
                    }}
                    className='absolute inset-0 origin-bottom'>
                    <a
                      href={testimonial.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group absolute h-full w-full overflow-hidden rounded-3xl object-cover object-center p-[1px] duration-500 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                      <span
                        className={`absolute inset-[-1000%] animate-[spin_6s_linear_infinite] ${backgroundColors[index % backgroundColors.length]}`} />

                      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
                        <IconArrowRightToArc className='group absolute right-4 top-4 h-12 w-12 rounded-full bg-p-dark text-center text-white opacity-80 duration-500 ease-out group-hover:-rotate-12 group-hover:opacity-100' />
                        <img
                          src={images[testimonial.src]}
                          alt={testimonial.name}
                          width={500}
                          height={500}
                          draggable={false}
                          className='group h-full w-full rounded-3xl object-cover object-center' />
                      </span>
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className='flex gap-8 pt-12'>
              <button
                onClick={handlePrev}
                className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-p'>
                <IconArrowLeft className='h-5 w-5 text-white transition-transform duration-300 group-hover/button:rotate-12' />
              </button>
              <button
                onClick={handleNext}
                className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-p'>
                <IconArrowRight className='h-5 w-5 text-white transition-transform duration-300 group-hover/button:-rotate-12' />
              </button>
            </div>
          </div>
          <div className='flex flex-col justify-between py-4'>
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }}>
              <h3 className='text-2xl font-bold text-black dark:text-white'>{testimonials[active].name}</h3>
              <p className='text-sm text-gray-500 dark:text-neutral-500'>{testimonials[active].designation}</p>
              <motion.p className='mt-8 text-lg text-gray-500 dark:text-neutral-300'>
                {testimonials[active].quote.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: 'blur(10px)',
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: 'blur(0px)',
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: 'easeInOut',
                      delay: 0.02 * index,
                    }}
                    className='inline-block'>
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div></>
  )
}
