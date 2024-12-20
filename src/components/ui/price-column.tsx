import React from 'react'
import { IconCheck, IconX } from '@tabler/icons-react'

interface PlanColumnProps {
  title: string
  price: string
  description: string
  features: string[]
  nonFeatures: string[]
  buttonText: string
  comparison: string[]
  savings: string;
}

const PlanColumn: React.FC<PlanColumnProps> = ({
  title,
  price,
  description,
  features,
  nonFeatures,
  buttonText,
  comparison,
  savings
}) => {
  return (
    <div className="w-full p-2">
      <div className="flex h-full flex-col rounded-lg border border-a bg-white p-6 text-gray-800 shadow-md dark:border-s dark:bg-gray-800 dark:text-white">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-a-dark dark:text-s">{title}</h3>
          <p className="mt-2 text-3xl font-extrabold text-p">{price}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <IconCheck className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-p" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {nonFeatures.length > 0 && (
            <ul className="mt-4 space-y-2">
              {nonFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-500">
                  <IconX className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-red-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6">
          <button className="w-full rounded bg-p py-2 text-sm font-medium text-white hover:bg-p/90 dark:bg-s dark:text-black dark:hover:bg-s/90">
            {buttonText}
          </button>

          {comparison.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-a-dark dark:text-s">Compared to:</h4>
              <ul className="mt-2 space-y-1">
                {comparison.map((item, index) => (
                  <li key={index} className="text-xs text-gray-600 dark:text-gray-400">{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mt-4">
        <p className="text-sm font-bold text-red">{savings}</p>
      </div>
      </div>
    </div>
  )
}

export default PlanColumn