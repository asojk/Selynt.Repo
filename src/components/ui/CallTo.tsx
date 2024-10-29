
import { StickyVComp } from '../ui/sticky-comp-variant'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'

export const CallTo = () => {

	return (
		<div className="relative">
			<StickyVComp contentHeight={true}>
				<section className="relative w-full py-4 antialiased lg:subpixel-antialiased lg:py-24">
					<div className="space-y-4 prose">
						<h2 className="mb-8 H2">Our Standards</h2>
						<h3 className='prose text-left H3'>
							We empower small businesses to thrive in a market dominated by larger corporations.
						</h3>
						<p className='prose text-left Description' data-aos="fade-in-left">
							We specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity, simplicity, and affordability—because we believe that <a className='Description font-bold'>standing out should not mean overspending.</a> We never compromise on the quality of our work, ensuring that every project meets the highest standards of design and functionality.
						</p>
					</div>
					<div className='pt-6 grid grid-cols-1'>
					<Link to='/pricing'>
						<Button text='Compare'/>
						</Link>
					<p className='Description-p pt-4'>Our Prices // Traditional Options</p>
						</div>
				</section>
			</StickyVComp>
		</div>
	)
}
