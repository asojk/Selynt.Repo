import { useState, useEffect, useRef } from 'react'
import { HeroParallaxContent } from '@/components/content/HeroParallaxContent'
import { IconX } from '@tabler/icons-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { MapParallaxContent } from '@/components/content/MapParallaexSection'
import { useImgPadding } from '@/constants/imgpadding'
import { CallTo } from '@/components/ui/CallTo'
import TimelineE from '@/components/ui/TimeTable'
import { Tech } from '@/components/Tech'
import Ribbon from '@/components/ui/Ribbon'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true })
  }, [])

  useImgPadding()
  const [showPopup, setShowPopup] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false)
      }
    }

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showPopup])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="overflow-x-clip bg-n-9 antialiased dark:bg-n-6 lg:subpixel-antialiased">
        <div className="">
          <Ribbon />
        </div>
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div
                ref={popupRef}
                className="relative max-w-md rounded-lg bg-s p-6 shadow-xl dark:bg-n-8"
              >
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute right-2 top-2 text-n-1 hover:text-n-3 dark:text-n-4 dark:hover:text-n-2"
                >
                  <IconX size={24} />
                </button>
                <h2 className="mb-4 text-2xl font-bold text-n-900 dark:text-white">Pre-Launch Discounts</h2>
                <p className="mb-6 text-base text-n-900 dark:text-n-2">
                  Costs of projects can vary, but we're offering pre-launch discounts as we move into our active phase.
                </p>
                <Link to='/contact'>
                <a
                  onClick={() => setShowPopup(false)}
                  className="inline-block rounded bg-p px-4 py-2 font-semibold text-white transition-colors hover:bg-p-dark"
                >
                  Contact Us
                </a>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <HeroParallaxContent />
        <CallTo />
        <TimelineE />
        <MapParallaxContent />
        <Tech />
      </div>
    </>
  )
}

export default Home