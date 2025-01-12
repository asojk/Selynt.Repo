import React, { useState } from 'react'
import { IconCheck, IconChevronDown, IconX } from '@tabler/icons-react'

interface PlanColumnProps {
    title: string
    price: string
    description: string
    features: string[]
    nonFeatures: string[]
    comparison: string[]
    savings: string
    priceStyle?: 'gradient' | 'generic'
}

const PlanColumn: React.FC<PlanColumnProps> = ({
    title,
    price,
    description,
    features,
    nonFeatures,
    comparison,
    savings,
    priceStyle = 'gradient',
}) => {
  const [isComparisonVisible, setIsComparisonVisible] = useState(false)

  return (
    <div className='w-full max-w-sm mx-auto flex flex-col justify-between rounded-xl border-[1px] border-slate-300 bg-white p-4 text-n-900 shadow-md dark:border-slate-700 dark:bg-n-900/80 dark:text-white lg:p-6 h-full'>
        <div className='bg-card text-card-foreground flex w-full flex-col justify-between rounded-lg text-left h-full'>
            <div className='flex flex-col space-y-4'>
                <div className='flex flex-row justify-between items-start lg:flex-col lg:items-start'>
                    <h3 className='text-xl font-bold lg:text-2xl'>{title}</h3>
                    <p
                        className={`text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl lg:mt-2 ${
                            priceStyle === 'gradient'
                                ? 'animate-text bg-gradient-to-r from-p via-p-2 to-p-dark bg-clip-text text-transparent'
                                : 'text-p dark:text-n-5'
                        }`}>
                        <span className="text-lg align-top">$</span>{price}
                    </p>
                </div>
          <p className='text-sm text-n-7 dark:text-n-4'>{description}</p>
        </div>

        <div className='mt-6 flex-grow'>
          <ul className='space-y-3'>
            {features.map((feature, index) => (
              <li key={index} className='flex items-start text-sm'>
                <IconCheck className='mr-2 mt-1 h-4 w-4 flex-shrink-0 text-a dark:text-s' />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {nonFeatures.length > 0 && (
            <ul className='mt-4 space-y-3'>
              {nonFeatures.map((feature, index) => (
                <li key={index} className='flex items-start text-sm text-n-6'>
                  <IconX className='mr-2 mt-1 h-4 w-4 flex-shrink-0 text-red' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {comparison.length > 0 && (
          <div className='mt-4'>
            <p className='text-sm text-red dark:text-red-light'>{savings}</p>
            <h4 
              className='mt-2 text-sm font-semibold text-a-dark dark:text-s cursor-pointer flex items-center'
              onClick={() => setIsComparisonVisible(!isComparisonVisible)}
            >
              Compared to:
              <IconChevronDown className={`h-4 w-4 inline-block ml-1 text-a-dark dark:text-s transition-transform ${isComparisonVisible ? 'rotate-180' : ''}`} />
            </h4>
            {isComparisonVisible && (
              <ul className='mt-2 space-y-2'>
                {comparison.map((item, index) => (
                  <li key={index} className='text-xs text-n-7 dark:text-n-4'>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}


      </div>
    </div>
  )
}

export default PlanColumn