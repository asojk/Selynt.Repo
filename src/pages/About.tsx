import { StickyVComp } from '@/components/ui/sticky-comp-variant'
import { Button } from '@/components/common/Button'
import { Link } from 'react-router-dom'
import { TimeLine } from '@/components/ui/timeline'
import { Profile } from '@/components/common/Profile'

export const About = () => {
	return (
		<>
			<div className="relative antialiased bg-B dark:bg-B-dark px-content-padding lg:subpixel-antialiased">
				<div className="w-full text-center md:text-start">
					<h1 className="pt-12 pb-12 pH1 px-content-padding md:pt-14 lg:pt-20">About Selynt</h1>
				</div>

				<StickyVComp contentHeight={true}>
					<div className="grid grid-cols-1 auto-rows-fr md:grid-cols-2">
						<section className="relative w-full py-8 px-content-padding">
							<div className="prose text-center md:text-start">
								<h2 className="H2">Our Mission</h2>
								<p className="prose text-left Description">
									At Selynt, we empower small businesses to thrive in a market dominated by larger corporations. We
									specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on
									clarity, simplicity, and affordability—because we believe that standing out shouldn’t mean
									overspending.
								</p>
							</div>
						</section>
						<section className="relative w-full py-8 px-content-padding">
							<div className="prose text-center md:text-start">
								<h2 className="H2">Our Vision</h2>
								<p className="prose text-left Description">
									Our mission is built on the principles of simplicity, clarity, and affordability. “Selynt” is a
									mixture of “salience” - making your business noteworthy - and “lint” - to refine every detail of code
									and language syntax. Cut the clutter and amplify what matters.
								</p>
							</div>
						</section>
					</div>
				</StickyVComp>

				<StickyVComp contentHeight={true}>
					<div className="py-8 px-content-padding">
						<TimeLine />
					</div>
				</StickyVComp>

				<StickyVComp contentHeight={true}>
					<Profile />
				</StickyVComp>

				<StickyVComp contentHeight={true}>
					<section className="relative w-full py-8 px-content-padding">
						<h2 className="H2">Why Us?</h2>
						<ul className="pl-12 prose text-left list-disc prose-ul:li prose-disc Description-p">
							<li className="prose-li">Marketing without the BS: Amplify what truly matters.</li>
							<li className="prose-li">Simplicity and Clarity: Convey your message effectively.</li>
							<li className="prose-li">Affordability: High-quality services that fit your budget.</li>
							<li className="prose-li">Personalized Attention: Dedicated focus and expertise.</li>
						</ul>
					</section>
				</StickyVComp>

				<StickyVComp contentHeight={true}>
					<section className="relative w-full py-8 px-content-padding">
						<h2 className="text-center H3">Ready to Boost Your Credibility?</h2>
						<p className="pb-2 prose Description-p">Let’s create a compelling identity for your business.</p>
						<Link to="/contact">
							<Button text="Get Started" />
						</Link>
					</section>
				</StickyVComp>
			</div>
		</>
	)
}

export default About
