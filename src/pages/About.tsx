/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable prettier/prettier */
import { StickyVComp } from '@/components/ui/sticky-comp-variant'
import { TimeLine } from '@/components/ui/timeline'
import { Profile } from '@/components/common/Profile'

export const About = () => {
	return (
		<>
			<div className="relative bg-B px-content-padding pb-12 pt-12 antialiased dark:bg-B-dark md:pt-14 lg:pt-20 lg:subpixel-antialiased">
				<StickyVComp heightMode="content">
					<h1 className="H1">About Us</h1>
					<div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2">
						<section className="relative w-full px-content-padding py-12">
							<div className="prose text-center md:text-start">
								<h2 className="H2">Our Mission</h2>
								<p className="Description prose text-left">
									At Selynt, we empower small businesses to thrive in a market dominated by larger corporations. We
									specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on
									clarity, simplicity, and affordability—because we believe that standing out shouldn’t mean
									overspending.
								</p>
							</div>
						</section>
						<section className="relative w-full px-content-padding py-12">
							<div className="prose text-center md:text-start">
								<h2 className="H2">Our Vision</h2>
								<p className="Description prose text-left">
									Our mission is built on the principles of simplicity, clarity, and affordability. “Selynt” is a
									mixture of “salience” - making your business noteworthy - and “lint” - to refine every detail of code
									and language syntax. Cut the clutter and amplify what matters.
								</p>
							</div>
						</section>
					</div>
				</StickyVComp>

				<StickyVComp heightMode="content">
					<div className="px-content-padding py-12">
						<TimeLine />
					</div>
				</StickyVComp>

				<StickyVComp heightMode="content">
					<Profile />
				</StickyVComp>

				<StickyVComp heightMode="content">
					<section className="relative w-full px-content-padding py-12">
						<h2 className="H2">Why Us?</h2>
						<ul className="prose-ul:li prose-disc Description-p prose list-disc pl-12 text-left">
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
