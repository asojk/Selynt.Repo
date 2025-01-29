/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useOutsideClick } from '../../hooks/use-outside-click'
import { TimeLine } from './timeline'
import { Profile } from './Profile'
import ContactForm from '../ContactForm'
import { IconChevronRight, IconInfoCircle, IconMailBolt, IconMap, IconTag } from '@tabler/icons-react'
import React from 'react'
import { Map } from '../Map'
import PriceTable from '@/components/Pricing'
import { CloseIcon } from './close-icon'

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
        <AnimatePresence>
          {active && typeof active === 'object' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-20 h-full w-full bg-black/60'
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === 'object' ? (
                         <div className='fixed p-4 md:p-8 lg:p-24 inset-0 z-20 h-full w-full bg-black/60 overflow-y-scroll'
                          >
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className='items-end rounded-full p-1 text-black   dark:text-white  transition-all duration-300'
                onClick={() => setActive(null)}>
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className='fixed inset-0 m-auto flex h-auto max-h-[calc(100vh-2rem)] w-auto max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl bg-white p-4 dark:bg-neutral-900 sm:max-h-[calc(100vh-4rem)] sm:max-w-[calc(100vw-4rem)] md:relative'>
                <div className='flex h-full flex-col'>
                  <div className='mb-2 p-2 md:p-4'>
                    <motion.h3 layoutId={`title-${active.title}-${id}`} className='text-lg font-bold text-n-9 dark:text-n-2 md:text-xl'>
                      {active.title}
                    </motion.h3>
                  </div>
                  <div className='custom-scrollbar flex-grow overflow-y-auto px-2 pt-2 md:px-4'>
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='flex flex-col items-start gap-4 text-xs text-n-9 dark:text-n-5 md:text-sm lg:text-base'>
                      {typeof active.content === 'function' ? active.content() : active.content}
                    </motion.div>
                  </div>
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
              className='flex cursor-pointer flex-row items-center justify-between rounded-xl p-3 hover:bg-n-4 dark:hover:bg-n-900 md:p-4'>
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
                    className='text-left text-sm font-medium text-neutral-800 dark:text-neutral-200 md:text-base'>
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className='text-left text-xs text-neutral-600 dark:text-neutral-400 md:text-sm'>
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <div className='flex items-center'>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className='hidden w-auto rounded-2xl bg-p px-3 py-1.5 text-xs text-white dark:font-semibold hover:bg-p-2 hover:text-black dark:bg-p-3 md:flex md:px-4 md:py-2 md:text-sm'>
                  {card.ctaText}
                </motion.button>
                <IconChevronRight className='ml-2 text-n-9 dark:text-s' />
              </div>
            </motion.div>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='fixed bottom-4 right-4 rounded-2xl bg-a-dark px-3 py-2 text-white shadow-lg'
          onClick={() => setActive(cards.find((card) => card.title === 'Contact') || null)}>
          <span className='inline-flex items-center'>
            <IconMailBolt className='h-5 w-5' />
            <span className='hidden md:ml-2 md:inline'>Contact</span>
          </span>
        </motion.button>
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
		title: 'Pay Once, No Subscriptions!',
		icon: IconTag,
		ctaText: 'Explore',
		ctaLink: '',
		content: () => <PriceTable />,
	},


	{
		description: 'As we grow, we hope this will serve as a trusted resource.',
		title: 'Our Work',
		icon: IconMap,
		src: '',
		ctaText: 'Discover',
		ctaLink: '',
		content: () => <Map />,
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
