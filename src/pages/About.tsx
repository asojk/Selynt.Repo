/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable prettier/prettier */
import { StickyVComp } from '@/components/ui/sticky-comp-variant'
import { TimeLine } from '@/components/ui/timeline'
import { Profile } from '@/components/common/Profile'

export const About = () => {
	return (<>
			<div className="relative pt-12 pb-12 antialiased bg-B px-content-padding dark:bg-B-dark md:pt-14 lg:pt-20 lg:subpixel-antialiased ">
				<div className="mb-16 w-[20vw] rounded-3xl px-8 py-2 text-center dark:bg-p-dark md:text-start">
					<h1 className="py-0 mb-0 pH1 px-content-padding dark:text-white">About Selynt</h1>
				</div>

				<StickyVComp contentHeight={true}>
					<div className="grid grid-cols-1 auto-rows-fr md:grid-cols-2">
						<section className="relative w-full py-12 px-content-padding">
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
						<section className="relative w-full py-12 px-content-padding">
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
					<div className="py-12 px-content-padding">
						<TimeLine />
					</div>
				</StickyVComp>

				<StickyVComp contentHeight={true}>
					<Profile />
				</StickyVComp>

				<StickyVComp contentHeight={true}>
					<section className="relative w-full py-12 px-content-padding">
						<h2 className="H2">Why Us?</h2>
						<ul className="pl-12 prose text-left list-disc prose-ul:li prose-disc Description-p">
							<li className="prose-li">Marketing without the BS: Amplify what truly matters.</li>
							<li className="prose-li">Simplicity and Clarity: Convey your message effectively.</li>
							<li className="prose-li">Affordability: High-quality services that fit your budget.</li>
							<li className="prose-li">Personalized Attention: Dedicated focus and expertise.</li>
						</ul>
					</section>
				</StickyVComp>
			</div>
		</>
	)
}

export default About
