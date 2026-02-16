import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-primary-200">Last updated: February 15, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray prose-headings:text-primary-800">
          <p className="text-gray-600 leading-relaxed">
            At NexBusiness, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">1. Information We Collect</h2>
          <h3 className="text-lg font-semibold text-primary-700 mt-6 mb-2">Personal Information</h3>
          <p className="text-gray-600 leading-relaxed">
            We may collect personal information that you voluntarily provide to us when you register on the platform, express an interest in obtaining information about us or our products, or otherwise contact us. This includes:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
            <li>Name and contact information (email address, phone number)</li>
            <li>Company name and job title</li>
            <li>Billing and payment information</li>
            <li>Account credentials</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-lg font-semibold text-primary-700 mt-6 mb-2">Usage Data</h3>
          <p className="text-gray-600 leading-relaxed">
            We automatically collect certain information when you visit, use, or navigate the platform. This includes device and usage information such as your IP address, browser type, operating system, referring URLs, and information about how you interact with our platform.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed">We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
            <li>To provide, operate, and maintain our platform and services</li>
            <li>To improve, personalize, and expand our services</li>
            <li>To process transactions and send related information</li>
            <li>To communicate with you about updates, promotions, and support</li>
            <li>To detect, prevent, and address technical issues and fraud</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">3. Data Sharing and Disclosure</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell your personal information. We may share your information in the following situations:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
            <li><strong>Service Providers:</strong> We may share your data with third-party vendors who perform services on our behalf, such as payment processing, data analytics, and customer support.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information where required by law or to respond to legal processes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">4. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal information. This includes encryption, access controls, and regular security assessments. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">5. Data Retention</h2>
          <p className="text-gray-600 leading-relaxed">
            We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">6. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
            <li>Right to access your personal information</li>
            <li>Right to correct inaccurate data</li>
            <li>Right to request deletion of your data</li>
            <li>Right to restrict or object to processing</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">7. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> privacy@nexbusiness.com<br />
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
