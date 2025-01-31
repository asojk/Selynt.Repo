/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useOutsideClick } from '../../hooks/use-outside-click'
import { TimeLine } from './timeline'
import { Profile } from './Profile'
import ContactForm from '../ContactForm'
import { IconChevronRight, IconInfoCircle, IconMailBolt, IconTag } from '@tabler/icons-react'
import React from 'react'
import PriceTable from '@/components/Pricing'
import { CloseIcon2 } from './close-icon'

export function ExpandableCards() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const id = useId()

    useEffect(() => {
        // Check for URL hash or parameter
        const hash = window.location.hash.substring(1)
        if (hash) {
            const card = cards.find((card) => card.title.toLowerCase() === hash.toLowerCase())
            if (card) {
                setActive(card)
            }
        }

        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActive(false)
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [active])

    useOutsideClick(ref, () => setActive(null))

    return (
        <>
            {active && typeof active === 'object' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='fixed inset-0 z-20 h-full w-full bg-black/60'
                />
            )}
            
            <AnimatePresence>
                {active && typeof active === 'object' ? (
                    <div className='fixed inset-0 z-30 flex items-center justify-center p-2 md:p-4'>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className='rounded-3xl bg-white p-6 max-h-[90vh] max-w-[90%] min-h-[50vh] shadow-2xl dark:bg-neutral-900 overflow-y-scroll'
                        >
                            <div className='flex flex-col'>
                                <div className='mb-4'>
                                    <motion.h3 
                                        layoutId={`title-${active.title}-${id}`}
                                        className='text-lg font-bold text-n-9 dark:text-n-2 md:text-xl'
                                    >
                                        {active.title}
                                    </motion.h3>
                                </div>

                                <div className='flex-1 overflow-y-auto pb-8 mb-8'>
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className='flex flex-col items-start gap-4 text-xs text-n-9 dark:text-n-5 md:text-sm lg:text-base custom-scrollbar'
                                    >
                                        {typeof active.content === 'function' ? active.content() : active.content}
                                    </motion.div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='fixed bottom-4 right-4 rounded-2xl px-3 py-2 text-white '
                                    onClick={() => setActive(null)}
                                >
                                    <span className='inline-flex items-center'>
                                        <CloseIcon2 />
                                        <span className='hidden md:ml-2 md:inline'>Close</span>
                                    </span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <ul className='mx-auto w-full max-w-3xl gap-2 py-6 md:py-12'>
                {cards.map((card, _index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className='flex cursor-pointer flex-row items-center justify-between rounded-xl p-3 hover:bg-n-4 dark:hover:bg-n-900 md:p-4'
                    >
                        <div className='flex w-auto items-center gap-3 md:w-full md:items-start md:gap-4'>
                            <motion.div layoutId={`image-${card.title}-${id}`} className='flex-shrink-0'>
                                {card.src ? (
                                    <img
                                        src={card.src}
                                        alt={card.title}
                                        className='h-8 w-12 rounded-lg bg-p object-cover object-center py-1 dark:bg-p-3 md:h-10 md:w-16 lg:h-12 lg:w-20'
                                    />
                                ) : card.icon ? (
                                    <div className='flex h-8 w-12 items-center justify-center rounded-lg bg-p py-1 dark:bg-p-3 md:h-10 md:w-16 lg:h-12 lg:w-20'>
                                        {React.createElement(card.icon, { className: 'text-xl text-white stroke-[1.5px] lg:stroke-2' })}
                                    </div>
                                ) : (
                                    <div className='flex h-8 w-12 items-center justify-center rounded-lg bg-p dark:bg-p-3 md:h-10 md:w-16 lg:h-12 lg:w-20' />
                                )}
                            </motion.div>
                            <div className='flex-grow'>
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className='text-left text-sm font-medium text-neutral-800 dark:text-neutral-200 md:text-base'
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className='text-left text-xs text-neutral-600 dark:text-neutral-400 md:text-sm'
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className='flex items-center gap-2 rounded-2xl bg-p px-3 py-1.5 text-xs text-white hover:bg-p-2 hover:text-black dark:bg-p-3 dark:font-semibold md:px-4 md:py-2 md:text-sm'
                            onClick={() => setActive(card)}
                        >
                            <span className='hidden md:inline'>
                                {card.ctaText}
                            </span>
                            <IconChevronRight className='text-n-9 dark:text-s' />
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    )
}

type Card = {
    description: string
    title: string
    src?: string
    icon?: React.ComponentType<{ className?: string }>
    ctaText: string
    ctaLink: string
    content: () => React.ReactNode
}

const cards: Card[] = [
    {
        description: 'Services and Pricing',
        title: 'Pay Once, Get It All!',
        icon: IconTag,
        ctaText: 'Explore',
        ctaLink: '',
        content: () => <PriceTable />,
    },
    {
        description: 'Simple & Easy',
        title: 'Our Process',
        icon: IconInfoCircle,
        ctaText: 'View',
        ctaLink: '',
        content: () => <TimeLine />,
    },
    {
        description: 'Founder Bio',
        title: 'Founder',
        src: 'https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/public/Self-mIeJ9HIOeOC6inJI5Ehsig2YpzyOdw.jpeg',
        ctaText: 'Investigate',
        ctaLink: '',
        content: () => <Profile />,
    },
    {
        description: 'Questions? Ready to Get Started?',
        title: 'Contact',
        icon: IconMailBolt,
        src: '',
        ctaText: 'Begin',
        ctaLink: '',
        content: () => <ContactForm />,
    },
]

{/*
      {
        description: 'As we grow, we hope this will serve as a trusted resource.',
        title: 'Our Work',
        icon: IconMap,
        src: '',
        ctaText: 'Discover',
        ctaLink: '',
        content: () => <Map />,
    },
  
  */}