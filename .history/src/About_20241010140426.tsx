/** @format */

export const About = () => (
	<>
		{/* Hero Section */}
		<section className="bg-p-dark py-20 text-white dark:bg-black">
			<div className="mx-auto max-w-6xl text-center">
				<h2 className="text-4xl font-semibold">Crafting Powerful Brand Identities</h2>
				<p className="prose prose-invert mt-4 text-lg">
					We bring creativity and precision together to help small businesses excel through clear, captivating branding.
				</p>
				<a
					href="#services"
					className="mt-8 inline-block rounded-lg bg-a px-6 py-3 text-white transition hover:bg-a-dark dark:bg-a-dark dark:hover:bg-a-light">
					Explore Our Services
				</a>
			</div>
		</section>

		{/* Services Section */}
		<section className="bg-n-light py-16 dark:bg-n-dark">
			<div className="mx-auto max-w-7xl text-center">
				<h3 className="text-3xl font-bold text-p-dark dark:text-white">What We Offer</h3>
				<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="rounded-lg bg-white p-6 shadow-lg dark:bg-p-light">
						<h4 className="text-xl font-semibold text-p">Branding &amp; Rebranding</h4>
						<p className="prose mt-2 text-n-dark dark:text-n-light">
							Comprehensive branding services tailored to make your brand stand out and thrive.
						</p>
					</div>
					<div className="rounded-lg bg-white p-6 shadow-lg dark:bg-p-light">
						<h4 className="text-xl font-semibold text-p">High-Quality Websites</h4>
						<p className="prose mt-2 text-n-dark dark:text-n-light">
							Professional, sleek websites for small businesses that don&apos;t break the bank.
						</p>
					</div>
					<div className="rounded-lg bg-white p-6 shadow-lg dark:bg-p-light">
						<h4 className="text-xl font-semibold text-p">Consulting &amp; Strategy</h4>
						<p className="prose mt-2 text-n-dark dark:text-n-light">
							Get expert advice on how to position your brand for success in a competitive market.
						</p>
					</div>
				</div>
			</div>
		</section>

		{/* Contact Section */}
		<section className="bg-p-light py-16 dark:bg-p-dark">
			<div className="mx-auto max-w-7xl text-center">
				<h3 className="text-3xl font-bold text-p-dark dark:text-white">Get in Touch</h3>
				<p className="prose mt-4 text-n-dark dark:text-n-light">
					Let&apos;s work together to create something amazing. Reach out to start your branding journey.
				</p>
				<a
					href="mailto:contact@selynt.com"
					className="mt-8 inline-block rounded-lg bg-a px-6 py-3 text-white transition hover:bg-a-dark dark:hover:bg-a-light">
					Contact Us
				</a>
			</div>
		</section>
		<ul className="timeline timeline-vertical timeline-compact timeline-snap-icon w-full">
			<span className="text-sm">April 1, 2024</span>
			{/* timeline item 1*/}
			<li>
				<div className="timeline-middle">
					<span className="size-4.5 flex items-center justify-center rounded-full bg-p/20">
						<span className="badge-p badge size-3 rounded-full p-0" />
					</span>
				</div>
				<div className="timeline-end m-3 ms-2 w-full rounded-lg">
					<div className="mb-3 pt-0.5 font-medium text-base-content/90">12 Invoices have been paid</div>
					<p className="mb-2">Invoices have been paid to the company</p>
					<button className="btn-soft btn-s btn btn-sm">
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

		<>
			{/* good looking form card*/}

			<div className="3xl:w-1/3 3xl:p-14 mx-auto flex w-full flex-col rounded-2xl bg-[#ffffff] p-8 shadow-xl md:w-1/2 md:p-10 xl:w-2/5 2xl:w-2/5 2xl:p-12">
				<div className="flex flex-row gap-3 pb-4">
					<div>
						<img src="/favicon.svg" width="50" alt="Logo" />
					</div>
					<h1 className="my-auto text-3xl font-bold text-p">Your Company</h1>
				</div>
				<div className="pb-8 text-sm font-light text-[#6B7280]">Login to your account on Your Company.</div>
				<form className="flex flex-col">
					<div className="pb-2">
						<label htmlFor="email" className="mb-2 block text-sm font-medium text-[#111827]">
							Email
						</label>
						<div className="relative text-gray-400">
							<span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-mail">
									<rect width="20" height="16" x="2" y="4" rx="2" />
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
								</svg>
							</span>
							<input
								type="email"
								name="email"
								id="email"
								className="mb-2 block w-full rounded-lg rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 px-4 py-3 pl-12 text-gray-600 ring ring-transparent focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-400 sm:text-sm"
								placeholder="name@company.com"
								autoComplete="off"
							/>
						</div>
					</div>
					<div className="pb-6">
						<label htmlFor="password" className="mb-2 block text-sm font-medium text-[#111827]">
							Password
						</label>
						<div className="relative text-gray-400">
							<span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-square-asterisk">
									<rect width="18" height="18" x="3" y="3" rx="2" />
									<path d="M12 8v8" />
									<path d="m8.5 14 7-4" />
									<path d="m8.5 10 7 4" />
								</svg>
							</span>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
								className="mb-2 block w-full rounded-lg rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 px-4 py-3 pl-12 text-gray-600 ring ring-transparent focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-400 sm:text-sm"
								autoComplete="new-password"
							/>
						</div>
					</div>
					<button
						type="submit"
						className="focus:ring-p-300 mb-6 w-full rounded-lg bg-[#2d2977] px-5 py-2.5 text-center text-sm font-medium text-[#FFFFFF] focus:outline-none focus:ring-4">
						Login
					</button>
					<div className="text-sm font-light text-[#6B7280]">
						Don&apos;t have an accout yet?{' '}
						<a href="#" className="font-medium text-[#2d2977] hover:underline">
							Sign Up
						</a>
					</div>
				</form>
				<div className="relative flex items-center py-8">
					<div className="flex-grow border-[1px] border-t border-gray-200" />{' '}
					<span className="mx-4 flex-shrink font-medium text-gray-500">OR</span>
					<div className="flex-grow border-[1px] border-t border-gray-200" />
				</div>
				<form>
					<div className="flex flex-row justify-center gap-2">
						<button className="flex w-32 flex-row gap-2 rounded-md bg-gray-600 p-2 text-gray-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-github">
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
								<path d="M9 18c-4.51 2-5-2-7-2" />
							</svg>{' '}
							<span className="mx-auto font-medium">Github</span>
						</button>
						<button className="flex w-32 flex-row gap-2 rounded-md bg-gray-600 p-2 text-gray-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-twitter">
								<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
							</svg>{' '}
							<span className="mx-auto font-medium">Twitter</span>
						</button>
					</div>
				</form>
			</div>

			{/* pricing card 2 */}
			<div className="mx-auto flex items-center justify-center">
				<div className="m-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
					<div className="flex w-full flex-col rounded-2xl bg-[#ffffff] text-[#374151] shadow-xl xl:w-96">
						<figure className="flex items-center justify-center">
							<img
								src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
								alt="Card Preview"
								className="rounded-t-2xl"
							/>
						</figure>
						<div className="flex h-full flex-col p-8">
							<div className="pb-6 text-center text-3xl font-bold">Basic</div>
							<div className="pb-12 text-center text-lg">Basic features. Get started completely for free.</div>
							<div className="flex flex-col gap-3 text-base">
								<div className="flex flex-row gap-3">
									<div className="text-green-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={3}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check">
											<path d="M20 6 9 17l-5-5" />
										</svg>
									</div>
									<div className="font-bold">Core Features</div>
								</div>
								<div className="flex flex-row gap-3">
									<div className="text-green-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={3}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check">
											<path d="M20 6 9 17l-5-5" />
										</svg>
									</div>
									<div>Limited Storage</div>
								</div>
								<div className="flex flex-row gap-3">
									<div className="text-green-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={3}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check">
											<path d="M20 6 9 17l-5-5" />
										</svg>
									</div>
									<div>Ticket Support</div>
								</div>
							</div>
							<div className="flex flex-grow" />
							<div className="flex pt-10">
								<button className="w-full transform rounded-lg bg-[#7e22ce] p-3 text-base font-bold text-[#ffffff] transition-transform hover:bg-purple-800 active:scale-95">
									Get started - 100% Free
								</button>
							</div>
						</div>
					</div>
					<div className="flex w-full flex-col rounded-2xl bg-[#ffffff] text-[#374151] shadow-xl xl:w-96">
						<figure className="flex items-center justify-center">
							<img
								src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
								alt="Card Preview"
								className="rounded-t-2xl"
							/>
						</figure>
						<div className="flex h-full flex-col p-8">
							<div className="pb-6 text-center text-3xl font-bold">Pro</div>
							<div className="pb-12 text-center text-lg">
								Get access to advanced features for increased productivity.
							</div>
							<div className="flex flex-col gap-3 text-base">
								<div className="flex flex-row gap-3">
									<div className="text-green-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={3}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check">
											<path d="M20 6 9 17l-5-5" />
										</svg>
									</div>
									<div className="font-bold">All features of the basic plan</div>
								</div>
								<div className="flex flex-row gap-3">
									<div className="text-green-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={3}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check">
											<path d="M20 6 9 17l-5-5" />
										</svg>
									</div>
									<div>Increased Storage</div>
								</div>
								<div className="flex flex-row gap-3">
									<div className="text-green-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={3}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check">
											<path d="M20 6 9 17l-5-5" />
										</svg>
									</div>
									<div>Advanced Analytics</div>
								</div>
								<div className="flex flex-row gap-3">
									<div className="text-green-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={3}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check">
											<path d="M20 6 9 17l-5-5" />
										</svg>
									</div>
									<div>Reporting Tools</div>
								</div>
								<div className="flex flex-row gap-3">
									<div className="text-green-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={3}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check">
											<path d="M20 6 9 17l-5-5" />
										</svg>
									</div>
									<div>Third-Party Integrations</div>
								</div>
								<div className="flex flex-row gap-3">
									<div className="text-green-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={3}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check">
											<path d="M20 6 9 17l-5-5" />
										</svg>
									</div>
									<div>E-Mail Support</div>
								</div>
							</div>
							<div className="flex flex-grow" />
							<div className="flex pt-10">
								<button className="w-full transform rounded-lg bg-[#7e22ce] p-3 text-base font-bold text-[#ffffff] transition-transform hover:bg-purple-800 active:scale-95">
									Buy Pro
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* footer item 2*/}
			<div className="flex h-fit w-full flex-col bg-[#374151] px-14 py-7 text-[#e5e7eb]">
				<div className="flex flex-row">
					<div className="flex w-[35%] flex-col justify-center gap-2">
						<div className="flex w-full items-center gap-4">
							<img src="https://tailwind-generator.b-cdn.net/favicon.png" width="91" alt="Logo Preview" />
							<div className="text-3xl font-bold">Your Company</div>
						</div>
						<div className="grid w-fit grid-cols-3 gap-6 p-4">
							<a href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="fill-current">
									<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
								</svg>
							</a>{' '}
							<a href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="fill-current">
									<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
								</svg>
							</a>{' '}
							<a href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="fill-current">
									<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
								</svg>
							</a>
						</div>
					</div>
					<div className="flex w-[65%] flex-row justify-end gap-16 text-nowrap">
						<div className="grid grid-cols-1 gap-6">
							<div className="flex flex-col gap-2">
								<div className="pb-3 font-bold uppercase text-[#9ca3af]">Legal</div>{' '}
								<a href="#xxx" className="hover:underline">
									Imprint
								</a>{' '}
								<a href="#xxx" className="hover:underline">
									Privacy Policy
								</a>{' '}
								<a href="#xxx" className="hover:underline">
									Terms of Use
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

		{/* Footer */}
		<footer className="bg-p-dark py-8 text-white dark:bg-black">
			<div className="mx-auto max-w-7xl text-center">
				<p>&copy; 2024 Selynt. All rights reserved.</p>
			</div>
		</footer>
	</>
)
