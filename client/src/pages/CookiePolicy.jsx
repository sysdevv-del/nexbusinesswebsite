import { Link } from "react-router-dom";

export default function CookiePolicy() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-primary-200">Last updated: February 15, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed">
            This Cookie Policy explains how NexBusiness uses cookies and similar technologies to recognize you when you visit our platform. It explains what these technologies are, why we use them, and your rights to control our use of them.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">1. What Are Cookies?</h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide reporting information. Cookies set by the website owner are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies."
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">2. Types of Cookies We Use</h2>

          <h3 className="text-lg font-semibold text-primary-700 mt-6 mb-2">Essential Cookies</h3>
          <p className="text-gray-600 leading-relaxed">
            These cookies are strictly necessary for the platform to function. They enable core features like security, account authentication, and session management. You cannot opt out of these cookies as the platform would not work without them.
          </p>

          <h3 className="text-lg font-semibold text-primary-700 mt-6 mb-2">Performance Cookies</h3>
          <p className="text-gray-600 leading-relaxed">
            These cookies collect information about how you use our platform, such as which pages you visit most often and if you encounter error messages. This data helps us improve the performance and user experience of our platform. All information collected is aggregated and anonymous.
          </p>

          <h3 className="text-lg font-semibold text-primary-700 mt-6 mb-2">Functional Cookies</h3>
          <p className="text-gray-600 leading-relaxed">
            These cookies allow the platform to remember choices you make (such as your language preference or region) and provide enhanced, personalized features. They may also be used to provide services you have requested.
          </p>

          <h3 className="text-lg font-semibold text-primary-700 mt-6 mb-2">Analytics Cookies</h3>
          <p className="text-gray-600 leading-relaxed">
            We use analytics cookies to understand how visitors interact with our platform. This helps us analyze data about web traffic and improve our platform to tailor it to user needs. We use this information for statistical analysis purposes only.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">3. How to Control Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through your browser settings. Most browsers allow you to:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
            <li>View what cookies are stored and delete them individually</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from specific sites</li>
            <li>Block all cookies from being set</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            Please note that blocking certain cookies may impact your experience on our platform, and some features may not function properly.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">4. Third-Party Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            In some cases, we use cookies provided by trusted third parties. These include analytics providers (such as Google Analytics) and payment processors. These third parties may use cookies to collect information about your online activities across different websites.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">5. Updates to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">6. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about our use of cookies, please contact us at:
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> privacy@nexbusiness.com<br />
            <strong>Address:</strong> 100 Market Street, Suite 400, San Francisco, CA 94105
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
