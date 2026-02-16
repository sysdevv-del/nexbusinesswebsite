import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Check, X, ArrowRight, Sparkles } from "@/lib/icons";
import { useLanguage } from "@/lib/LanguageContext";

export default function Pricing() {
  const { lang, t } = useLanguage();

  const plans = useMemo(() => [
    {
      name: t("planStarter"),
      price: t("priceStarter"),
      currency: t("currency"),
      period: t("perUserMonth"),
      desc: t("starterDesc"),
      highlight: false,
      discountBadge: lang === "ID" ? t("discountLabel") : null,
      features: [
        { text: lang === "EN" ? "Up to 5 users" : "Hingga 5 pengguna", included: true },
        { text: lang === "EN" ? "5 core apps included" : "Termasuk 5 aplikasi inti", included: true },
        { text: lang === "EN" ? "5GB storage per user" : "Penyimpanan 5GB per pengguna", included: true },
        { text: lang === "EN" ? "Email support" : "Dukungan email", included: true },
        { text: lang === "EN" ? "Basic analytics" : "Analitik dasar", included: true },
        { text: lang === "EN" ? "API access" : "Akses API", included: false },
        { text: lang === "EN" ? "Custom branding" : "Branding kustom", included: false },
        { text: lang === "EN" ? "Advanced security" : "Keamanan tingkat lanjut", included: false },
        { text: lang === "EN" ? "Dedicated account manager" : "Manajer akun khusus", included: false },
      ],
    },
    {
      name: t("planProfessional"),
      price: t("priceProfessional"),
      currency: t("currency"),
      period: t("perUserMonth"),
      desc: t("professionalDesc"),
      highlight: true,
      badge: t("mostPopular"),
      discountBadge: lang === "ID" ? t("discountLabel") : null,
      features: [
        { text: lang === "EN" ? "Up to 50 users" : "Hingga 50 pengguna", included: true },
        { text: lang === "EN" ? "15 apps included" : "Termasuk 15 aplikasi", included: true },
        { text: lang === "EN" ? "20GB storage per user" : "Penyimpanan 20GB per pengguna", included: true },
        { text: lang === "EN" ? "Priority email & chat support" : "Dukungan email & chat prioritas", included: true },
        { text: lang === "EN" ? "Advanced analytics" : "Analitik tingkat lanjut", included: true },
        { text: lang === "EN" ? "API access" : "Akses API", included: true },
        { text: lang === "EN" ? "Custom branding" : "Branding kustom", included: true },
        { text: lang === "EN" ? "Advanced security" : "Keamanan tingkat lanjut", included: false },
        { text: lang === "EN" ? "Dedicated account manager" : "Manajer akun khusus", included: false },
      ],
    },
    {
      name: t("planEnterprise"),
      price: t("priceEnterprise"),
      currency: t("currency"),
      period: t("perUserMonth"),
      desc: t("enterpriseDesc"),
      highlight: false,
      discountBadge: lang === "ID" ? t("discountLabel") : null,
      features: [
        { text: lang === "EN" ? "Unlimited users" : "Pengguna tak terbatas", included: true },
        { text: lang === "EN" ? "All 30+ apps included" : "Termasuk semua 30+ aplikasi", included: true },
        { text: lang === "EN" ? "100GB storage per user" : "Penyimpanan 100GB per pengguna", included: true },
        { text: lang === "EN" ? "24/7 phone, email & chat" : "Telepon, email & chat 24/7", included: true },
        { text: lang === "EN" ? "Custom analytics & reports" : "Analitik & laporan kustom", included: true },
        { text: lang === "EN" ? "Full API access & webhooks" : "Akses API penuh & webhook", included: true },
        { text: lang === "EN" ? "Custom branding & domain" : "Branding & domain kustom", included: true },
        { text: lang === "EN" ? "SSO, 2FA & audit logs" : "SSO, 2FA & log audit", included: true },
        { text: lang === "EN" ? "Dedicated account manager" : "Manajer akun khusus", included: true },
      ],
    },
  ], [lang, t]);

  const faqs = useMemo(() => [
    {
      q: lang === "EN" ? "Can I try NexBusiness for free?" : "Dapatkah saya mencoba NexBusiness secara gratis?",
      a: lang === "EN" ? "Yes! All plans come with a 14-day free trial. No credit card required to get started." : "Ya! Semua paket dilengkapi dengan uji coba gratis 14 hari. Tidak perlu kartu kredit untuk memulai."
    },
    {
      q: lang === "EN" ? "Can I change plans later?" : "Dapatkah saya mengubah paket nanti?",
      a: lang === "EN" ? "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." : "Tentu saja. Anda dapat meningkatkan atau menurunkan paket Anda kapan saja. Perubahan akan berlaku pada siklus penagihan berikutnya."
    },
    {
      q: lang === "EN" ? "Is there a discount for annual billing?" : "Apakah ada diskon untuk penagihan tahunan?",
      a: lang === "EN" ? "Yes, you save 20% when you choose annual billing. The prices shown above are for monthly billing." : "Ya, Anda hemat 20% jika memilih penagihan tahunan. Harga yang tertera di atas adalah untuk penagihan bulanan."
    },
    {
      q: lang === "EN" ? "What payment methods do you accept?" : "Metode pembayaran apa yang Anda terima?",
      a: lang === "EN" ? "We accept all major credit cards, PayPal, and bank transfers for annual plans." : "Kami menerima semua kartu kredit utama, PayPal, dan transfer bank untuk paket tahunan."
    },
    {
      q: lang === "EN" ? "Do you offer custom pricing for large teams?" : "Apakah Anda menawarkan harga kustom untuk tim besar?",
      a: lang === "EN" ? "Yes, for teams of 100+ users, contact our sales team for custom enterprise pricing." : "Ya, untuk tim dengan 100+ pengguna, hubungi tim penjualan kami untuk harga enterprise kustom."
    },
    {
      q: lang === "EN" ? "What happens when my trial ends?" : "Apa yang terjadi jika uji coba saya berakhir?",
      a: lang === "EN" ? "You'll be prompted to choose a plan. Your data is preserved for 30 days, so you won't lose anything." : "Anda akan diminta untuk memilih paket. Data Anda akan disimpan selama 30 hari, jadi Anda tidak akan kehilangan apa pun."
    },
  ], [lang]);

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t("pricingHeroTitle")}</h1>
          <p className="text-primary-200 max-w-2xl mx-auto text-lg leading-relaxed">{t("pricingHeroDesc")}</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-primary-800 mb-8">{t("howPricingWorks")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-primary-600 font-bold text-lg border border-gray-100">1</div>
              <h3 className="font-semibold text-gray-800 mb-2">{t("pricingStep1Title")}</h3>
              <p className="text-sm text-gray-500">{t("pricingStep1Desc")}</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-primary-600 font-bold text-lg border border-gray-100">2</div>
              <h3 className="font-semibold text-gray-800 mb-2">{t("pricingStep2Title")}</h3>
              <p className="text-sm text-gray-500">{t("pricingStep2Desc")}</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-primary-600 font-bold text-lg border border-gray-100">3</div>
              <h3 className="font-semibold text-gray-800 mb-2">{t("pricingStep3Title")}</h3>
              <p className="text-sm text-gray-500">{t("pricingStep3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-7 border-2 transition-all ${plan.highlight ? "border-primary-600 shadow-xl shadow-primary-600/10 scale-105" : "border-gray-100 shadow-sm"
                  }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                      <Sparkles size={12} /> {plan.badge}
                    </span>
                  </div>
                )}
                {plan.discountBadge && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-200 uppercase tracking-wide">
                      {plan.discountBadge}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-primary-800">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-800">{plan.currency}{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <Link
                  to="/contact"
                  className={`block text-center font-semibold py-2.5 rounded-xl transition-colors text-sm mb-6 ${plan.highlight
                    ? "bg-primary-600 hover:bg-primary-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-primary-800"
                    }`}
                >
                  {t("startTrial")}
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
          <p className="text-center text-sm text-gray-500 mt-8 italic max-w-2xl mx-auto">
            {t("pricingDisclaimer")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-800 text-center mb-10">{t("faqTitle")}</h2>
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
          <h2 className="text-2xl font-bold text-white mb-3">{t("customPlanTitle")}</h2>
          <p className="text-primary-200 mb-6">{t("customPlanDesc")}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            {t("contactSales")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
