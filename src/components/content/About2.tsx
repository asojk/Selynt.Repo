import {StickyComp} from '@/components/ui/sticky-component'
export const About2 = () => {
	return (
		<div className='bg-n-9 antialiased dark:bg-n-6 lg:subpixel-antialiased'>
			<StickyComp>
				<div className='relative z-20 w-full text-left text-black'>
					<h1>About</h1>
					<p>
						The About Page is where visitors go to learn more about your business in detail. It
						should provide comprehensive information that might be too detailed for the Home Page.
					</p>
					<ul>
						<li>
							Intro: Mission, Vision
							<li>
								Expand on the mission and vision with more detailed information and context.
								<p>Team Photo or Office Image</p>
							</li>
						</li>
						<li>
							Values: Business Philosophy
							<p>
								Discuss your business philosophy and core values in detail to give visitors a deeper
								understanding of your principles.
								<li>
									A short paragraph or bulleted list of your key principles, and why they matter to
									you and your clients.
								</li>
							</p>
							<p>Examples</p>
							<li>
								* Transparency: We believe in open communication and clear expectations at every
								step of the process.
							</li>
							<li>
								* Affordability: We know that small businesses need powerful solutions without
								breaking the bank, and that’s what we deliver.
							</li>
							<li>
								* Simplicity: In both design and code, we cut the clutter to focus on what matters
								most for your business.
							</li>
							<p> Illustrations or Conceptual Images</p>
						</li>
						<li>
							Certifications, Skills, and tools
							<p>
								Provide detailed information about any certifications, skills, and tools that
								demonstrate your qualifications and expertise.
								<li>
									"We specialize in cutting-edge web technologies like React and TypeScript,
									ensuring that your website is not only beautiful but also optimized for
									performance and scalability. Our expertise extends to design frameworks like
									Tailwind CSS for seamless user experiences."
								</li>
							</p>
							<p>Logos or certificates</p>
						</li>
						<li>
							What We Do: Process and Services
							<p>
								Offer a more detailed explanation of your services and processes, possibly including
								examples or case studies.
								<li>
									Detailed Infographics or Process Diagrams to explain your processes. This can help
									visitors understand the intricacies of your services.
								</li>
							</p>
						</li>
						<li>
							Testis
							<p>
								examples
								<li>
									"Selynt transformed our outdated website into a sleek, modern platform that has
									boosted our online presence and customer engagement. The whole process was smooth,
									and we couldn’t be happier!" – Client Name, Small Business Owner.
								</li>
								<li>
									"The team at Selynt has been a game-changer for our business. Their expertise in
									web design and development has helped us stand out in a crowded market. Highly
									recommended!" – Client Name, Small Business Owner.
								</li>
							</p>
							<p>Detailed Case Study Images or Graphs</p>
						</li>
					</ul>
				</div>
			</StickyComp>
		</div>
	)
}

export default About2
