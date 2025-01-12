import React from 'react'
import PlanColumn from '@/components/ui/price-column'

const PriceTable: React.FC = () => {
    return (
        <div className='mx-auto w-full max-w-7xl'>
      <h2 className='text-2xl mb-2 font-bold text-center text-n-900 dark:text-n-5'>Beyond the Price Tag</h2>

      <p className='text-sm text-center text-n-7 dark:text-n-4 mb-8'>We want to save you money! While slightly cheaper alternatives may exist, consider the value of working closely with a dedicated expert who crafts tailored solutions for your unique business needs. Our personalized approach ensures transparency, no surprise fees, and ongoing support to help you achieve your goals. Plus, no subscriptions!
        </p>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <PlanColumn
                    title='Website Essentials'
                    price='$399'
                    priceStyle='gradient'
                    description='Get started with a personalized design and collaborative process.'
                    features={['Expertly crafted website', 'Tailored to your needs', 'Personal, hands-on support']}
                    nonFeatures={[]}
                    comparison={['Agencies: $1,000–$3,000', 'Squarespace: $16–$49/mo']}
                    savings='Save $401+ compared to agencies and $189+/year compared to Squarespace!'/>

				<PlanColumn
					title='Premium Site'
					price='$1299'
					priceStyle='generic'
					description='Comprehensive customization with ongoing support'
					features={['Full design flexibility to match your unique brand, Get 4 free updates to keep your site fresh']}
					nonFeatures={[]}
					comparison={['Agencies: $2,000–$6,000', 'WordPress: potentially $50–100+/mo', 'Squarespace: $49+/mo']}
					savings='Save $701+ upfront compared to agencies and $500+/year over premium platforms!'/>

				<PlanColumn
					title='Branding Essentials'
					price='$300'
					priceStyle='generic'
					description='Foundational branding elements for instant recognition'
					features={['Timeless logo design", "Consistent color palette"']}
					nonFeatures={[]}
					comparison={['Canva/Fiverr: $50–$200', 'Agencies: $1000+']}
					savings='Save $200+ compared to freelancers for foundational branding!'/>

				<PlanColumn
					title='Premium Branding'
					price='$600'
					priceStyle='gradient'
					description='Comprehensive brand transformation for lasting impressions'
					features={[
						'Expertly crafted brand guidelines", "Custom-designed templates'
					]}
					nonFeatures={[]}
					comparison={['Freelancers: $1,000–$3,000']}
					savings='Save $400–$2,400 compared to freelancers!'/>
			</div>
		</div>
	)
}

export default PriceTable
