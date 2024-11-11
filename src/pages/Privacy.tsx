/* eslint-disable tailwindcss/no-custom-classname */

export const Privacy = () => {
	return (
		<>
			<section className="">
				<div className="w-full px-12 pt-24 text-white bg-center bg-no-repeat bg-cover bg-p pb-14">
					<h1 className="mb-8 text-3xl font-bold leading-tight text-center lg:text-5xl">Selynt LLC Privacy Policy</h1>
				</div>
				<section className="relative w-full py-16 overflow-hidden bg-n-1 text-n-9 dark:bg-n-8 dark:text-n-3 lg:py-28">
					<div className="px-12 xl:px-20">
						<div className="flex flex-col w-full gap-8 md:flex-row">
							<div className="w-full tab-pane max-md:px-4">
								<div className="flex items-center gap-3 mb-8 lg:mb-10">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M12.0054 8V12.5322C12.0054 12.8286 12.1369 13.1098 12.3645 13.2998L15 15.5M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
											stroke="#4F46E5"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="text-xl font-medium leading-8 text-indigo-600 dark:text-p-2">
										Effective Date: 09/24/2024
									</p>
								</div>
								<p className="mb-8 text-lg font-normal leading-8 text-n-8 dark:text-n-3 lg:mb-10">
									At <strong>Selynt LLC</strong> ("we," "us," or "our"), we are committed to respecting and protecting
									the privacy of our clients and visitors to our website, <a className="text-s"> selynt.com</a>. This
									Privacy Policy describes the types of information we collect, how we use it, and your rights regarding
									your information.
								</p>
								<ul className="flex flex-col gap-10 ml-8 text-3xl font-bold list-decimal list-outside text-n-9 dark:text-n-3">
									<li id="01" className="list-decimal">
										<h2 className="text-2xl font-bold text-n-9 dark:text-n-1">Information We Collect</h2>
										<p className="mt-5 text-lg font-normal leading-8 text-n-9 dark:text-n-3">
											<p>We collect personal information only when you voluntarily provide it. This may include:</p>
											<ul className="pb-3">
												<li className="list-disc list-inside">
													<strong>Contact Information</strong>: When you reach out via our contact form, we may collect
													your name, email address, phone number, and other details you choose to share.
												</li>
											</ul>
										</p>
									</li>
									<li id="02" className="list-decimal">
										<h2 className="text-2xl font-bold text-n-9 dark:text-n-1 lg:text-3xl">
											How We Use Your Information
										</h2>
										<p className="mt-5 text-lg font-normal leading-8 text-n-9 dark:text-n-3">
											<p>We use the information you provide for:</p>
											<ul className="pb-3">
												<li className="list-disc list-inside">
													<strong>Communication</strong>: Responding to inquiries, providing customer support, and
													sending updates.
												</li>
												<li className="list-disc list-inside">
													<strong>Billing and Record Keeping</strong>: Maintaining accurate records for billing and
													project management.
												</li>
												<li className="list-disc list-inside">
													<strong>Future Contact</strong>: We may retain your information to contact you about services,
													updates, or relevant offers in the future, if applicable.
												</li>
											</ul>
										</p>
									</li>
									<li id="03" className="list-decimal">
										<h2 className="text-2xl font-bold text-n-9 dark:text-n-1 lg:text-3xl"> Data Security</h2>
										<p className="mt-5 text-lg font-normal leading-8 text-n-9 dark:text-n-3">
											{' '}
											We are committed to safeguarding your information and use commercially reasonable measures to
											protect it. However, please note that no data transmission over the Internet is 100% secure, and
											we cannot guarantee absolute security.
										</p>
									</li>
									<li id="04" className="list-decimal">
										<h2 className="text-2xl font-bold text-n-9 dark:text-n-1 lg:text-3xl">
											Sharing with Third Parties
										</h2>
										<p className="mt-5 text-lg font-normal leading-8 text-n-9 dark:text-n-3">
											We do not share your personal information with third parties, except:
											<ul className="pb-3">
												<li className="list-disc list-inside">
													<strong>If Required by Law</strong>: We may disclose information if required to comply with
													legal obligations.
												</li>
											</ul>
										</p>
									</li>
									<li id="05" className="list-decimal">
										<h2 className="text-2xl font-bold text-n-9 dark:text-n-1 lg:text-3xl"> Your Rights</h2>
										<p className="mt-5 text-lg font-normal leading-8 text-n-9 dark:text-n-3">
											If you wish to exercise these rights, please contact us at{' '}
											<a href="mailto:contact@selynt.com" className="text-blue-600 hover:text-blue-800">
												contact@selynt.com
											</a>
											.
										</p>
									</li>
									<li id="06" className="list-decimal">
										<h2 className="text-2xl font-bold text-n-9 dark:text-n-1 lg:text-3xl">
											Changes to This Privacy Policy
										</h2>
										<p className="mt-5 text-lg font-normal leading-8 text-n-9 dark:text-n-3">
											We may update this Privacy Policy from time to time. Any changes will be posted on this page with
											an updated effective date. If you have questions or concerns regarding this policy, please contact
											us at
											<a href="mailto:contact@selynt.com" className="text-blue-600 hover:text-blue-800">
												contact@selynt.com
											</a>
											.
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</section>
		</>
	)
}
