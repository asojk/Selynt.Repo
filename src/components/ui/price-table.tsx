import React from 'react'
import PlanColumn from './price-column'

const PriceTable: React.FC = () => {
	return (
		<div className='w-full'>
			<h2 className='mb-6 text-center text-2xl font-bold text-a-dark dark:text-s'>One-Time Pricing</h2>
			<div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'>
			<PlanColumn
  title="Website Essentials"
  price="$399"
  description="Custom design, configuration, and deployment with free hosting"
  features={["Custom Design", "Custom Configuration", "Full Deployment", "Free Hosting"]}
  nonFeatures={[]}
  buttonText="Get Started"
  comparison={[
    "Wix: $204/year",
    "Squarespace: $192/year",
    "Agencies: $800–$2,500",
    "**These base prices do not include additional (& often necessary) costs, fees, & time**",
  ]}
  savings="Save $401+ compared to agencies and $189+/year compared to Squarespace!"
/>

<PlanColumn
  title="Premium Site"
  price="$1299"
  description="Comprehensive customization with 4 free updates"
  features={[
    "All Essential Kit features",
    "Full Customization",
    "Comprehensive Solutions",
    "4 Free Updates",
  ]}
  nonFeatures={[]}
  buttonText="Upgrade Now"
  comparison={[
    "Agencies: $2,000–$6,000",
    "WordPress: potentially $50–100+/mo",
    "Squarespace: $49+/mo",
  ]}
  savings="Save $701+ upfront compared to agencies and $500+/year over premium platforms!"
/>

<PlanColumn
  title="Branding Essentials"
  price="$300"
  description="Essential branding elements for your business"
  features={["Logo Design", "Color Palette", "Basic Brand Guidelines"]}
  nonFeatures={[]}
  buttonText="Start Branding"
  comparison={["Canva/Fiverr: $50–$200", "Freelancers: $500–$1,500"]}
  savings="Save $200+ compared to freelancers for foundational branding!"
/>

<PlanColumn
  title="Premium Branding"
  price="$600"
  description="Complete branding solution with custom designs"
  features={[
    "Logo Design",
    "Color Palette",
    "Comprehensive Brand Guidelines",
    "Branded Templates",
    "Custom Branded Designs",
  ]}
  nonFeatures={[]}
  buttonText="Brand Your Business"
  comparison={["Freelancers: $1,000–$3,000"]}
  savings="Save $400–$2,400 compared to professional freelancers!"
/>
			</div>
		</div>
	)
}

export default PriceTable
