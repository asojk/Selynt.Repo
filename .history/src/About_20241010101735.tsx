/** @format */

export const About = () => (
	<>
		{/* Navbar */}
		<header className="dark:bg-primary-dark bg-primary p-4 text-white">
			<div className="mx-auto flex max-w-7xl items-center justify-between">
				<h1 className="text-2xl font-bold">Selynt</h1>
				<nav>
					<a href="#" className="ml-6 hover:underline">
						Home
					</a>
					<a href="#" className="ml-6 hover:underline">
						About Us
					</a>
					<a href="#" className="ml-6 hover:underline">
						Services
					</a>
					<a href="#" className="ml-6 hover:underline">
						Contact
					</a>
				</nav>
			</div>
		</header>

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

		{/* Footer */}
		<footer className="bg-primary-dark py-8 text-white dark:bg-black">
			<div className="mx-auto max-w-7xl text-center">
				<p>&copy; 2024 Selynt. All rights reserved.</p>
			</div>
		</footer>
	</>
)
