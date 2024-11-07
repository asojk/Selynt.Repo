import { StickyVComp } from '@/components/ui/sticky-comp-variant'
//import MintCard from '@/components/common/MintCard'
import { Button } from '@/components/common/Button'
import { Link } from 'react-router-dom'
import { TimeLine } from '@/components/ui/timeline'

export const About = () => {
	return (
		<div className="relative bg-n-9 px-content-padding antialiased dark:bg-n-6 lg:subpixel-antialiased">
			<StickyVComp contentHeight={true}>
				<section className="relative w-full py-4 px-6 pb-12">
					<header className="mb-6 text-center">
						<h1 className="H2">About Selynt</h1>
						<p className="Hero-p">Boost Credibility with a Clear Identity</p>
					</header>

					<h2 className="H3 text-left">Our Mission</h2>
					<p className="Description-p prose pb-6 text-left">
						At Selynt, we empower small businesses to thrive in a market dominated by larger corporations. We specialize
						in crafting beautiful, streamlined websites and polished brand identities, focusing on clarity, simplicity,
						and affordability—because we believe that standing out shouldn’t mean overspending.
					</p>
					<h2 className="H3 text-left">Our Vision</h2>
					<p className="Description-p prose pb-6 text-left">
						Our mission is built on the principles of simplicity, clarity, and affordability. “Selynt” is a mixture of
						“salience” - making your business noteworthy - and “lint” - to refine every detail of code and language
						syntax. Cut the clutter and amplify what matters.
					</p>

					<h2 className="H3 text-left">Why Us?</h2>
					<ul className="prose-ul:li prose-disc Description-p prose list-disc pl-12 text-left">
						<li className="prose-li">Marketing without the BS: Amplify what truly matters.</li>
						<li className="prose-li">Simplicity and Clarity: Convey your message effectively.</li>
						<li className="prose-li">Affordability: High-quality services that fit your budget.</li>
						<li className="prose-li">Personalized Attention: Dedicated focus and expertise.</li>
					</ul>
				</section>
			</StickyVComp>
			<StickyVComp contentHeight={true}>
				<header className="mb-6 text-center">
					<h2 className="H2">Our Process</h2>
				</header>
				<TimeLine />
			</StickyVComp>
			<StickyVComp contentHeight={true}>
				<h2 className="H3 text-center">Ready to Boost Your Credibility?</h2>
				<p className="Description-p prose pb-2">Let’s create a compelling identity for your business.</p>
				<Link to="/contact">
					<Button text="Get Started" />
				</Link>
			</StickyVComp>
			{/*
			<StickyVComp contentHeight={true}>
					<div className="grid grid-cols-1 gap-8 auto-rows-fr md:grid-cols-2">
						<MintCard
							avatar="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/icon-XA1wAih8gI77GE2Pq6xWHI45PxPYxh.png"
							info="Proofs/Map Desc"
							info1="Unify Txt/H's"
							info2="Contact form"
							content1="Pricing"
							content2="rm comments&cmnt outs"/>

						<MintCard
							avatar="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/icon-XA1wAih8gI77GE2Pq6xWHI45PxPYxh.png"
							info="SEO & Meta Tags"
							info1="Dep Analysis"
							info2="Accessibility"
							content1="(WCAG guidelines)"
							content2="Image Optimization"/>

					</div>
			</StickyVComp>
			*/}
		</div>
	)
}

export default About
