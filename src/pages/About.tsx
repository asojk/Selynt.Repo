//import { ReactNode, useRef } from "react";
//import { motion, useScroll, useTransform } from 'framer-motion';
//import About2 from '@/components/content/About2'
// import About3 from '@/components/content/About3'
// import Ribbon from '@/components/Ribbon'
//import {StickyComp} from '@/components/ui/sticky-component'
import {useImgPadding} from '@/constants/imgpadding'
import {StickyVComp} from '@/components/ui/sticky-comp-variant'

export const About = () => {
	useImgPadding()
	return (
		<div className='relative px-content-padding'>
			<StickyVComp contentHeight={true}>
				<div className='mx-auto max-w-4xl rounded-lg p-2 xl:p-8'>
					<header className='mb-6 text-center'>
						<h1 className='H1'>About Selynt</h1>
						<p className='Hero=p'>Boost Credibility with a Clear Identity</p>
					</header>

					<section className='mb-8'>
						<h2 className='H2'>Our Mission</h2>
						<p className='Description py-2 text-left'>
							At Selynt, we empower small businesses to thrive in a market dominated by larger
							corporations. We specialize in crafting beautiful, streamlined websites and polished
							brand identities, focusing on clarity, simplicity, and affordability—because we
							believe that standing out shouldn’t mean overspending.
						</p>
						<h2 className='H2'>Our Vision</h2>
						<p className='Description py-2 text-left'>
							Our mission is built on the principles of simplicity, clarity, and affordability.
							“Selynt” is a mixture of “salience” - making your business noteworthy - and “lint” -
							to refine every detail of code and language syntax. Cut the clutter and amplify what
							matters.
						</p>
					</section>
				</div>
				<div className='mx-auto max-w-4xl rounded-lg p-4 lg:p-8'>
					<section className='mb-8'>
						<h2 className='H2'>Why Us?</h2>
						<ul className='Description py-2 text-left'>
							<li>Marketing without the BS: Amplify what truly matters.</li>
							<li>Simplicity and Clarity: Convey your message effectively.</li>
							<li>Affordability: High-quality services that fit your budget.</li>
							<li>Personalized Attention: Dedicated focus and expertise.</li>
						</ul>
					</section>

					<section className='mb-8 text-center'>
						<h2 className='H2'>Ready to Boost Your Credibility?</h2>
						<p className='Description py-2 text-left'>
							Let’s create a compelling identity for your business.
						</p>
						<button className='bg-p-600 hover:bg-p-700 mt-4 rounded-lg px-6 py-2 font-bold text-white'>
							Get Started
						</button>
					</section>
				</div>
			</StickyVComp>

			{/*
			<About2 />
			<About3 />

			<div className='relative h-full w-full'>
				<div className='bottom relative z-10'>
					<Ribbon />
				</div>
			</div>
      */}
		</div>
	)
}

export default About
