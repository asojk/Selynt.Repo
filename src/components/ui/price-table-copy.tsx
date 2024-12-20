export const PriceTable = () => {
	return (
			<div className='flex w-full items-center justify-center overflow-x-clip overflow-y-scroll lg:overflow-y-hidden '>
					<div className='w-full max-w-xl lg:scale-110 lg:transform lg:p-8'>

									<div className='grid w-full grid-cols-5 gap-2'>
											<div className='col-span-3 text-left text-xs font-medium uppercase tracking-wider underline'>Service</div>
											<div className='col-span-2 text-left text-xs font-medium uppercase tracking-wider underline'>Pricing</div>
											
											{/* Row 1 */}
											<div className='col-span-3'>
													<SpanItem text='Essential Kit' />
													<ListItem>Custom Design</ListItem>
													<ListItem>Custom Configuration</ListItem>
													<ListItem>Full Deployment</ListItem>
													<ListItem>Free Hosting</ListItem>
											</div>
											<div className='col-span-2'>
													<SelPrice text='Selynt $399' />
													<ListItem2>Wix: $204/year</ListItem2>
													<ListItem2>Squarespace: $192/year</ListItem2>
													<ListItem2>Agencies: $800–$2,500</ListItem2>
											</div>

											{/* Row 2 */}
											<div className='col-span-3 pb-4'>
													<SpanItem text='Custom Solution' />
													<ListItem>All of the above, plus:</ListItem>
													<ListItem>Full Customization</ListItem>
													<ListItem>Comprehensive Solutions</ListItem>
													<ListItem className='font-semibold italic text-a-dark dark:text-s'>4 Free Updates</ListItem>
											</div>
											<div className='col-span-2 pb-4'>
													<SelPrice text='Selynt $1299' />
													<ListItem2>Canva/Fiverr: $50–$200</ListItem2>
													<ListItem2>Agencies: $2,000–$6,000</ListItem2>
											</div>

											{/* Row 3 */}

											<div className='col-span-3'>
													<SpanItem text='Branding' />
													<ListItem>Logo Design</ListItem>
													<ListItem>Accompanying Palette</ListItem>
													<ListItem>No Templates!</ListItem>
													<ListItem>Custom Design</ListItem>
											</div>
											<div className='col-span-2'>
													<SelPrice text='Selynt $300' />
													<ListItem2>Canva/Fiverr: $50–$200</ListItem2>
													<ListItem2>Freelancers: $500–$1,500</ListItem2>
											</div>

											{/* Row 4 */}
											<div className='col-span-3'>
													<SpanItem text='Branding 2' />
													<ListItem>Logo</ListItem>
													<ListItem>Color Palette</ListItem>
													<ListItem>Brand Guidelines</ListItem>
											</div>
											<div className='col-span-2'>
													<SelPrice text='Selynt $600' />
													<ListItem2>Freelancers: $1,000–$3,000</ListItem2>
											</div>

											{/* Row 5 */}
											<div className='col-span-3'>
													<SpanItem text='Branding 3' />
													<ListItem>All of the above, plus:</ListItem>
													<ListItem>Branded Templates</ListItem>
													<ListItem>Custom Branded Designs</ListItem>
											</div>
											<div className='col-span-2'>
													<SelPrice text='Selynt $1000' />
													<ListItem2>Freelancers: $2,500–$5,000</ListItem2>
											</div>
									</div>

					</div>
			</div>
	)
}

// ... (rest of the component definitions remain the same)
const ListItem = ({ children, className }: { children: React.ReactNode; className?: string }) => (
	<div className={`flex items-start justify-start ${className}`}>
		<svg
			className='mr-1 mt-1 h-3 text-s sm:w-3 md:h-4 md:w-4'
			fill='none'
			stroke='currentColor'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
		</svg>
		<span className={`text-xs font-light lg:text-sm ${className}`}>{children}</span>
	</div>
)

const ListItem2 = ({ children, className }: { children: React.ReactNode; className?: string }) => (
	<div className={`flex items-start justify-start ${className}`}>
		<svg
			className='mr-1 mt-1 h-3 w-3 text-red-2 md:w-4 lg:w-4'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M18 6l-12 12' />
			<path d='M6 6l12 12' />
		</svg>
		<span className={`text-xs font-light lg:text-sm ${className}`}>{children}</span>
	</div>
)

export default PriceTable

const SpanItem = ({ text }: { text: React.ReactNode }) => (
	<span className='text-sm font-semibold lg:text-base'>{text}</span>
)

const SelPrice = ({ text }: { text: React.ReactNode }) => (
	<span className='text-sm font-semibold text-a-dark dark:text-s lg:text-base'>{text}</span>
)
