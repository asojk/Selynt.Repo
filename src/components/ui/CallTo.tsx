
import { StickyVComp } from '../ui/sticky-comp-variant'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'

export const CallTo = () => {

	return (
<div className="relative">
	<StickyVComp contentHeight={true}>
<section className="text-n-9 dark:text-n-3 relative w-full py-4 antialiased lg:subpixel-antialiased">



    <h2 className="text-3xl lg:text-4xl font-bold text-a-dark dark:text-s pb-12">Why us?</h2>
		<div className="max-w-2xl mx-auto text-center lg:grid lg:grid-cols-2 lg:gap-12">
    <div className="text-left space-y-2 lg:space-y-4 pb-8">
      <h3 className="text-xl lg:text-2xl font-semibold">We Craft:</h3>
      <ul className="space-y-2 pl-8 list-disc text-lg">
        <li><span className="font-medium">Websites</span></li>
        <li><span className="font-medium">&amp; Brand Identities</span></li>
      </ul>
    </div>

    <div className="text-left space-y-2 lg:space-y-4 pb-12">
      <h3 className="text-xl lg:text-2xl font-semibold">We Focus On:</h3>
      <ul className="space-y-2 pl-8 list-disc text-lg">
        <li>Clarity</li>
        <li>Simplicity</li>
        <li><span className="font-medium">&amp; Affordability</span></li>
      </ul>
    </div>
		</div>

    <p className="text-lg lg:text-xl leading-snug">...and because we believe that</p>
    <p className="text-2xl lg:text-3xl font-bold text-a-dark dark:text-s leading-snug">standing out should not mean <br /> overspending.</p>

					<div className='pt-6 grid grid-cols-1'>
					<Link to='/pricing'>
						<Button text='Compare'/>
						</Link>
						<p className="mt-3 text-sm lg:text-base">Our Prices // Traditional Options</p>
						</div>

				</section>
			</StickyVComp>
		</div>
	)
}


