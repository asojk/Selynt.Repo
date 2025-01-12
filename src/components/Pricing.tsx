import React from 'react';
import PlanColumn from '@/components/ui/price-column';

const PriceTable: React.FC = () => {
  return (
    <div className='mx-auto w-full max-w-7xl'>
      <h2 className='text-3xl mb-4 font-extrabold text-center text-n-900 dark:text-n-5'>Transparent Pricing, Exceptional Value</h2>
      <p className='text-base mx-auto text-center text-n-7 dark:text-n-4 mb-12 max-w-[70%]'>
        At Selynt, we deliver professional, personalized solutions tailored to your needs.
        <br />Our transparent, <a className='text-a'>  one-time </a>pricing ensures 
        no hidden costs or subscription fees.
      </p>


      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <PlanColumn
          title='Website Essentials'
          price='375'
          priceStyle='gradient'
          description='Perfect for small businesses starting their digital journey'
          features={[
            'Expertly crafted website',
            'Tailored to your business goals',
            'Personal, hands-on support',
          ]}
					nonFeatures={[]} 
          comparison={[
            'Agencies: $1,000–$3,000',
            'Squarespace: $192–$588/year',
          ]}
          savings='Potential savings of $400+ annually.'
        />

        <PlanColumn
          title='Premium Website'
          price='1,300'
          priceStyle='generic'
          description='Custom design with long-term support to grow your brand'
          features={[
            'Full design flexibility',
            '4 free annual updates',
            'Optimized for branding and scalability',
          ]}
					nonFeatures={[]} 
          comparison={[
            'Agencies: $2,000–$100k+',
            'WordPress: ~$1,200+/year',
          ]}
          savings='Save thousands compared to traditional platforms'
        />

        <PlanColumn
          title='Branding Essentials'
          price='200'
          priceStyle='generic'
          description='Get recognized with foundational branding tools'
          features={[
            'Timeless logo design',
            'Consistent color palette',
          ]}
					nonFeatures={[]} 
          comparison={[
            'Canva/Fiverr: $50–$200',
            'Agencies: $1,000+',
          ]}
          savings='Save $500+ compared to other agencies'
        />

        <PlanColumn
          title='Premium Branding'
          price='1,200'
          priceStyle='gradient'
          description='Transform your business with a comprehensive branding suite'
          features={[
            'Expert brand guidelines',
            'Custom-designed templates',
          ]}
					nonFeatures={[]} 
          comparison={[
            'Freelancers: $1,000–$3,000',
						'Agencies: $2,000–$40k+',
          ]}
          savings='Save thousands compared to others'
        />
      </div>
      <p className='text-base mx-auto text-center text-n-7 dark:text-n-4 mt-8 max-w-[70%]'>
        Our plans and prices are flexible, just like your needs. We offer a range of personalized, hands-on, and expertly crafted solutions.</p>
        <p className='text-base mx-auto text-center text-n-7 dark:text-n-4 mt-8 mb-12 max-w-[70%]'>
        All purchases come with 30 days of free support, so you can rest easy knowing you'll get what you need.</p>
    </div>
  );
};

export default PriceTable;