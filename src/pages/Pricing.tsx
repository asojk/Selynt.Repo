import SlidePricing from '@/components/Prices'
import React from 'react'


const Pricing: React.FC = () => {
	return (
		<div className='min-h-screen items-center justify-center bg-n-light dark:bg-n-dark'>
      <SlidePricing />
		</div>
	)
}

export default Pricing
