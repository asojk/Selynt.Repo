/** @format */

export const About = () => (
	<>
		{/* Hero Section */}
		<section className="bg-primary-dark py-20 text-white dark:bg-black">
			<div className="mx-auto max-w-6xl text-center">
				<h2 className="text-4xl font-semibold">Crafting Powerful Brand Identities</h2>
				<p className="prose prose-invert mt-4 text-lg">
					We bring creativity and precision together to help small businesses excel through clear, captivating branding.
				</p>
				<a
					href="#services"
					className="bg-alternative dark:bg-alternative-dark hover:bg-alternative-dark dark:hover:bg-alternative-light mt-8 inline-block rounded-lg px-6 py-3 text-white transition">
					Explore Our Services
				</a>
			</div>
		</section>

		{/* Services Section */}
		<section id="services" className="bg-neutral-light dark:bg-neutral-dark py-16">
			<div className="mx-auto max-w-7xl text-center">
				<h3 className="text-primary-dark text-3xl font-bold dark:text-white">What We Offer</h3>
				<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="dark:bg-primary-light rounded-lg bg-white p-6 shadow-lg">
						<h4 className="text-xl font-semibold text-primary">Branding &amp; Rebranding</h4>
						<p className="text-neutral-dark dark:text-neutral-light prose mt-2">
							Comprehensive branding services tailored to make your brand stand out and thrive.
						</p>
					</div>
					<div className="dark:bg-primary-light rounded-lg bg-white p-6 shadow-lg">
						<h4 className="text-xl font-semibold text-primary">High-Quality Websites</h4>
						<p className="text-neutral-dark dark:text-neutral-light prose mt-2">
							Professional, sleek websites for small businesses that don&apos;t break the bank.
						</p>
					</div>
					<div className="dark:bg-primary-light rounded-lg bg-white p-6 shadow-lg">
						<h4 className="text-xl font-semibold text-primary">Consulting &amp; Strategy</h4>
						<p className="text-neutral-dark dark:text-neutral-light prose mt-2">
							Get expert advice on how to position your brand for success in a competitive market.
						</p>
					</div>
				</div>
			</div>
		</section>

		{/* Contact Section */}
		<section className="bg-primary-light dark:bg-primary-dark py-16">
			<div className="mx-auto max-w-7xl text-center">
				<h3 className="text-primary-dark text-3xl font-bold dark:text-white">Get in Touch</h3>
				<p className="text-neutral-dark dark:text-neutral-light prose mt-4">
					Let&apos;s work together to create something amazing. Reach out to start your branding journey.
				</p>
				<a
					href="mailto:contact@selynt.com"
					className="bg-alternative hover:bg-alternative-dark dark:hover:bg-alternative-light mt-8 inline-block rounded-lg px-6 py-3 text-white transition">
					Contact Us
				</a>
			</div>
		</section>
		<ul className="timeline timeline-vertical timeline-compact timeline-snap-icon w-full">
			<span className="text-sm">April 1, 2024</span>
			{/* timeline item 1*/}
			<li>
				<div className="timeline-middle">
					<span className="size-4.5 flex items-center justify-center rounded-full bg-primary/20">
						<span className="badge badge-primary size-3 rounded-full p-0" />
					</span>
				</div>
				<div className="timeline-end m-3 ms-2 w-full rounded-lg">
					<div className="mb-3 pt-0.5 font-medium text-base-content/90">12 Invoices have been paid</div>
					<p className="mb-2">Invoices have been paid to the company</p>
					<button className="btn-soft btn btn-secondary btn-sm">
						<span className="icon-[tabler--file-type-pdf] text-error" />
						invoices.pdf
					</button>
				</div>
				<hr />
			</li>
			{/* /timeline item 1*/}
			<span className="mt-2 text-sm">March 31, 2024</span>
			{/* timeline item 2*/}
			<li>
				<div className="timeline-middle">
					<span className="size-4.5 flex items-center justify-center rounded-full bg-success/20">
						<span className="badge badge-success size-3 rounded-full p-0" />
					</span>
				</div>
				<div className="timeline-end m-3 ms-2 w-full rounded-lg">
					<div className="mb-3 pt-0.5 font-medium text-base-content/90">Client meeting</div>
					<p className="mb-2">Project meeting with john @10:15am</p>
					<div className="flex gap-2">
						<div className="avatar">
							<div className="size-8 rounded-full">
								<img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" aria-label="User Avatar" />
							</div>
						</div>
						<div className="text-sm">
							<p className="font-medium">Lester McCarthy (Client)</p>
							<p>CEO of ThemeSelection</p>
						</div>
					</div>
				</div>
				<hr />
			</li>
			{/* /timeline item 2*/}
			<span className="mt-2 text-sm">March 31, 2024</span>
			{/* timeline item 3*/}
			<li>
				<div className="timeline-middle">
					<span className="size-4.5 flex items-center justify-center rounded-full bg-info/20">
						<span className="badge badge-info size-3 rounded-full p-0" />
					</span>
				</div>
				<div className="timeline-end m-3 ms-2 w-full rounded-lg">
					<div className="mb-3 pt-0.5 font-medium text-base-content/90">Create a new project for client</div>
					<p className="mb-2">6 team members in a project</p>
					<div className="pull-up avatar-group -space-x-4 rtl:space-x-reverse">
						<div className="avatar">
							<div className="w-8">
								<img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" aria-label="User Avatar" />
							</div>
						</div>
						<div className="avatar">
							<div className="w-8">
								<img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" aria-label="User Avatar" />
							</div>
						</div>
						<div className="avatar">
							<div className="w-8">
								<img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-4.png" aria-label="User Avatar" />
							</div>
						</div>
						<div className="avatar placeholder">
							<div className="w-8 bg-neutral text-neutral-content">
								<span>+3</span>
							</div>
						</div>
					</div>
				</div>
				<hr />
			</li>
			{/* /timeline item 3*/}
		</ul>

		{/* Footer */}
		<footer className="bg-primary-dark py-8 text-white dark:bg-black">
			<div className="mx-auto max-w-7xl text-center">
				<p>&copy; 2024 Selynt. All rights reserved.</p>
			</div>
		</footer>
	</>
)
