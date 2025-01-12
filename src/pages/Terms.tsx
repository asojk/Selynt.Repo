import { images } from '@/lib/assets'

export const Terms = () => {
	return (
		<div className="min-h-screen text-n-9 dark:text-n-3 ">
			<div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				<div className="mb-8 text-center">
					<img src={images.logo} alt="Selynt logo" className="mx-auto mb-4 h-12 w-auto" />
					<h1 className="prose-n-900 text-3xl sm:text-4xl">Selynt LLC Terms of Service</h1>
					<p className="prose-n-9 mt-2 text-sm">Effective Date: 09/24/2024</p>
				</div>

				<div className="prose-n-900 max-w-none space-y-4">
					<p>
						Welcome to <a className="text-s">selynt.com</a>, owned and operated by <strong>Selynt LLC</strong>. By
						accessing or using our website, you agree to comply with these Terms of Service.
					</p>

					<h2>1. Use of Our Site</h2>
					<ul>
						<li>
							<strong>Eligibility</strong>: By accessing our site, you represent that you are at least 18 years old and
							have the legal authority to enter into this agreement.
						</li>
						<li>
							<strong>Permitted Use</strong>: You agree to use our website solely for lawful purposes and not to
							interfere with its operation or attempt unauthorized access.
						</li>
					</ul>

					<h2>2. Intellectual Property</h2>
					<ul>
						<li>
							All content, graphics, design elements, and code are the intellectual property of{' '}
							<strong> Selynt LLC </strong>
							and may not be reproduced, distributed, or used without permission.
						</li>
					</ul>

					<h2>3. Limitations of Liability</h2>
					<ul>
						<li>
							<strong>No Warranty</strong>: Our website is provided "as-is" without warranties of any kind, whether
							express or implied. We do not guarantee the accuracy or completeness of information on our site.
						</li>
						<li>
							<strong>Limitation of Liability</strong>: <strong>Selynt LLC</strong> shall not be liable for any damages
							(including but not limited to direct, indirect, incidental, or consequential damages) resulting from the
							use or inability to use our site, even if we have been advised of the possibility of such damages.
						</li>
					</ul>

					<h2>4. Third-Party Links and Services</h2>
					<ul>
						<li>
							Our website may contain links to third-party websites. We are not responsible for the content or practices
							of these sites and encourage you to review their policies.
						</li>
					</ul>

					<h2>5. Changes to Terms</h2>
					<ul>
						<li>
							We may update these Terms of Service periodically. Any changes will be posted here with an updated
							effective date.
						</li>
					</ul>

					<h2>6. Governing Law</h2>
					<ul>
						<li>
							These terms are governed by the laws of the State of Iowa. Any disputes arising from these terms shall be
							resolved in accordance with Iowa law.
						</li>
					</ul>

					<p>
						For questions or concerns about these Terms of Service, please contact us at{' '}
						<a href="mailto:contact@selynt.com" className="text-blue-600 hover:text-blue-800">
							contact@selynt.com
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	)
}
