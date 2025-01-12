import { useState, useRef, useEffect } from 'react'
import MapChart from './MapChart'
import { motion, AnimatePresence } from 'motion/react'
import { Client } from './MapChart'
import { images } from '../constants/assets'
import ErrorBoundary from '@/constants/error-boundary'

export const Map = () => {
    const [activeClient, setActiveClient] = useState<Client | null>(null)
    const [showPopup, setShowPopup] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowPopup(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="relative h-[400px] lg:h-[600px] w-full">
            <section className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative h-[400px] lg:h-[600px] w-full">
                    <ErrorBoundary>
                    <MapChart setActiveClient={setActiveClient} setShowPopup={setShowPopup} />
                    </ErrorBoundary>
                    <AnimatePresence>
                        {showPopup && activeClient && (
                            <motion.div
                                ref={popupRef}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="absolute left-1/4 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-2 shadow-lg dark:bg-n-7 border-2 border-p">
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="absolute right-3 top-3 text-n-5 hover:text-n-7 dark:text-n-3 dark:hover:text-n-1">
                                    <span className="sr-only">Close</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="mb-2 flex items-center">
                                    <img
                                        src={images[activeClient.logo]}
                                        alt={`${activeClient.name} logo`}
                                        className="mr-4 h-16 w-16 object-contain md:h-24 md:w-24"
                                    />
                                    <h3 className="break-words pr-8 text-base font-bold text-p-dark dark:text-s-light md:text-xl">
                                        {activeClient.name}
                                    </h3>
                                </div>
                                <p className="mb-4 text-base text-n-7 dark:text-n-3">{activeClient.description}</p>
																{activeClient && activeClient.url && (
  <a
    href={activeClient.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded bg-a-dark px-4 py-2 font-extrabold text-white transition-colors duration-200 hover:bg-a dark:bg-a-dark dark:hover:bg-a">
    Visit Website
  </a>
)}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    )
}
