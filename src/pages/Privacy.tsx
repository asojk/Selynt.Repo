import { images } from '@/lib/assets'

export const Privacy = () => {
  return (
<div className="min-h-screen">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="mb-8 text-center">
          <img src={images.logo} alt="logo" className="w-16 h-16 mx-auto mb-4" />

            <h1 className="prose-n-900 sm:text-4xl">
              Selynt LLC Privacy Policy
            </h1>
            <p className="mt-2 text-sm prose-n-9">
              Effective Date: 09/24/2024
            </p>
          </div>

          <div className="prose-n-900 max-w-none space-y-4">
            <p>
              At <strong>Selynt LLC</strong> ("we," "us," or "our"), we are committed to
              respecting and protecting the privacy of our clients and visitors to our website,{' '}
              <a className="text-s"> selynt.com</a>. This Privacy Policy describes the types of information we collect, how we use it, and your rights regarding your
              information.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect personal information only when you voluntarily provide it. This may include:</p>
            <ul>
              <li>
                <strong>Contact Information</strong>: When you reach out via our contact form, we may collect your name, email
                address, phone number, and other details you choose to share.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information you provide for:</p>
            <ul>
              <li>
                <strong>Communication</strong>: Responding to inquiries, providing customer support, and sending updates.
              </li>
              <li>
                <strong>Billing and Record Keeping</strong>: Maintaining accurate records for billing and project management.
              </li>
              <li>
                <strong>Future Contact</strong>: We may retain your information to contact you about services, updates, or
                relevant offers in the future, if applicable.
              </li>
            </ul>

            <h2>3. Data Security</h2>
            <p>
              We are committed to safeguarding your information and use commercially reasonable measures to protect it. However,
              please note that no data transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>4. Sharing with Third Parties</h2>
            <p>We do not share your personal information with third parties, except:</p>
            <ul>
              <li>
                <strong>If Required by Law</strong>: We may disclose information if required to comply with legal obligations.
              </li>
            </ul>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to, correction, or deletion of your personal information.</li>
              <li>Opt-out of any future communications.</li>
            </ul>
            <p>
              If you wish to exercise these rights, please contact us at{' '}
              <a href="mailto:contact@selynt.com" className="text-blue-600 hover:text-blue-800">
                contact@selynt.com
              </a>.
            </p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
              effective date.
            </p>
            <p>
              If you have questions or concerns regarding this policy, please contact us at{' '}
              <a href="mailto:contact@selynt.com" className="text-blue-600 hover:text-blue-800">
                contact@selynt.com
              </a>.
            </p>
          </div>
        </div>
      </div>
  );
};