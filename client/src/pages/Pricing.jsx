import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Sparkles } from "@/lib/icons";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "14",
      period: "/user/month",
      desc: "Perfect for small teams getting started",
      highlight: false,
      features: [
        { text: "Up to 5 users", included: true },
        { text: "5 core apps included", included: true },
        { text: "5GB storage per user", included: true },
        { text: "Email support", included: true },
        { text: "Basic analytics", included: true },
        { text: "API access", included: false },
        { text: "Custom branding", included: false },
        { text: "Advanced security", included: false },
        { text: "Dedicated account manager", included: false },
      ],
    },
    {
      name: "Professional",
      price: "29",
      period: "/user/month",
      desc: "Ideal for growing businesses",
      highlight: true,
      badge: "Most Popular",
      features: [
        { text: "Up to 50 users", included: true },
        { text: "15 apps included", included: true },
        { text: "20GB storage per user", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "API access", included: true },
        { text: "Custom branding", included: true },
        { text: "Advanced security", included: false },
        { text: "Dedicated account manager", included: false },
      ],
    },
    {
      name: "Enterprise",
      price: "49",
      period: "/user/month",
      desc: "For large organizations with complex needs",
      highlight: false,
      features: [
        { text: "Unlimited users", included: true },
        { text: "All 30+ apps included", included: true },
        { text: "100GB storage per user", included: true },
        { text: "24/7 phone, email & chat", included: true },
        { text: "Custom analytics & reports", included: true },
        { text: "Full API access & webhooks", included: true },
        { text: "Custom branding & domain", included: true },
        { text: "SSO, 2FA & audit logs", included: true },
        { text: "Dedicated account manager", included: true },
      ],
    },
  ];

  const faqs = [
    { q: "Can I try NexBusiness for free?", a: "Yes! All plans come with a 14-day free trial. No credit card required to get started." },
    { q: "Can I change plans later?", a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
    { q: "Is there a discount for annual billing?", a: "Yes, you save 20% when you choose annual billing. The prices shown above are for monthly billing." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for annual plans." },
    { q: "Do you offer custom pricing for large teams?", a: "Yes, for teams of 100+ users, contact our sales team for custom enterprise pricing." },
    { q: "What happens when my trial ends?", a: "You'll be prompted to choose a plan. Your data is preserved for 30 days, so you won't lose anything." },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-primary-200 max-w-xl mx-auto text-lg">Choose the plan that fits your business. Start free, scale as you grow.</p>
        </div>
      </section>

      <section className="py-16 -mt-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-7 border-2 transition-all ${
                  plan.highlight ? "border-primary-600 shadow-xl shadow-primary-600/10 scale-105" : "border-gray-100 shadow-sm"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                      <Sparkles size={12} /> {plan.badge}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-primary-800">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-800">${plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <Link
                  to="/contact"
                  className={`block text-center font-semibold py-2.5 rounded-xl transition-colors text-sm mb-6 ${
                    plan.highlight
                      ? "bg-primary-600 hover:bg-primary-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-primary-800"
                  }`}
                >
                  Start Free Trial
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      {f.included ? (
                        <Check size={14} className="text-accent-500 shrink-0" />
                      ) : (
                        <X size={14} className="text-gray-300 shrink-0" />
                      )}
                      <span className={f.included ? "text-gray-700" : "text-gray-400"}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-800 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/pricing-bg.jpg"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <h2 className="text-2xl font-bold text-white mb-3">Need a Custom Plan?</h2>
          <p className="text-primary-200 mb-6">For organizations with 100+ users or specific requirements, we offer custom enterprise plans.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Contact Sales <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
