import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-primary-200">Last updated: February 15, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed">
            Welcome to NexBusiness. These Terms of Service govern your use of our platform, products, and services. By accessing or using NexBusiness, you agree to be bound by these terms.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By creating an account or using any NexBusiness services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">2. Account Registration</h2>
          <p className="text-gray-600 leading-relaxed">To use certain features of the platform, you must register for an account. You agree to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your password secure and confidential</li>
            <li>Accept responsibility for all activities that occur under your account</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">3. Use of Services</h2>
          <p className="text-gray-600 leading-relaxed">You agree to use NexBusiness services only for lawful purposes. You may not:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Attempt to gain unauthorized access to any part of the platform</li>
            <li>Interfere with or disrupt the integrity or performance of the services</li>
            <li>Use the platform to transmit malicious code or harmful content</li>
            <li>Resell or redistribute the services without authorization</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">4. Subscription and Payment</h2>
          <p className="text-gray-600 leading-relaxed">
            Certain NexBusiness services require a paid subscription. By subscribing, you agree to pay the applicable fees as described on our pricing page. Subscriptions automatically renew unless cancelled before the renewal date. All fees are non-refundable except as required by law or as expressly stated in these terms.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            The NexBusiness platform, including all software, content, designs, logos, and trademarks, is the property of NexBusiness and is protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the platform for your business purposes in accordance with these terms.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">6. Data Ownership</h2>
          <p className="text-gray-600 leading-relaxed">
            You retain ownership of all data you submit to the platform. By using our services, you grant NexBusiness a limited license to process your data as necessary to provide the services. We will not use your data for any purpose other than providing and improving our services.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">7. Service Availability</h2>
          <p className="text-gray-600 leading-relaxed">
            We strive to maintain 99.9% uptime for our services. However, we do not guarantee uninterrupted access and may perform scheduled maintenance with advance notice. We are not liable for any downtime or service interruptions beyond our reasonable control.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            To the maximum extent permitted by law, NexBusiness shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the services.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">9. Termination</h2>
          <p className="text-gray-600 leading-relaxed">
            We may suspend or terminate your access to the services at any time for violation of these terms. Upon termination, your right to use the services ceases immediately. You may export your data within 30 days of termination, after which it may be permanently deleted.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">10. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these terms at any time. We will notify you of material changes via email or through the platform. Your continued use of the services after changes are posted constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">11. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> legal@nexbusiness.com<br />
            <strong>Address:</strong> Sinbad Green Residence Blok C1 No 64, Sindang Barang, Bogor Barat, Kota Bogor, Indonesia 16117
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
