import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DynamicIcon, ArrowRight, Check, Star, Sparkles } from "@/lib/icons";
import { appLogos } from "@/lib/appAssets";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { lang, t } = useLanguage();
  const [featuredApps, setFeaturedApps] = useState([]);

  useEffect(() => {
    fetch("/api/apps?featured=true").then(r => r.json()).then(setFeaturedApps).catch(() => { });
  }, []);

  const benefits = [
    {
      icon: "Layers",
      title: lang === "EN" ? "All-in-One Platform" : "Platform Terpadu",
      desc: lang === "EN" ? "30+ integrated business apps working seamlessly together. No more juggling between disconnected tools." : "30+ aplikasi bisnis terintegrasi yang bekerja bersama dengan mulus. Tidak perlu lagi berpindah-pindah di antara alat yang terputus.",
      image: "/images/feature-analytics.jpg"
    },
    {
      icon: "Zap",
      title: lang === "EN" ? "Lightning Fast Setup" : "Pengaturan Sangat Cepat",
      desc: lang === "EN" ? "Get started in minutes, not months. Pre-configured integrations mean your team is productive from day one." : "Mulai dalam hitungan menit, bukan bulan. Integrasi yang telah dikonfigurasi sebelumnya berarti tim Anda produktif sejak hari pertama.",
      image: "/images/feature-collaboration.jpg"
    },
    {
      icon: "Shield",
      title: lang === "EN" ? "Enterprise Security" : "Keamanan Perusahaan",
      desc: lang === "EN" ? "Bank-grade encryption, SOC 2 compliance, and advanced access controls protect your data at every level." : "Enskripsi setingkat bank, kepatuhan SOC 2, dan kontrol akses tingkat lanjut melindungi data Anda di setiap level.",
      image: "/images/feature-mobile.jpg"
    },
    {
      icon: "Sparkles",
      title: lang === "EN" ? "AI-Powered Intelligence" : "Kecerdasan Berbasis AI",
      desc: lang === "EN" ? "Built-in AI assists your team across every app — from sales predictions to automated customer support." : "AI bawaan membantu tim Anda di setiap aplikasi — mulai dari prediksi penjualan hingga dukungan pelanggan otomatis.",
      image: "/images/testimonial-bg.jpg"
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen", role: "CTO, TechForward",
      quote: lang === "EN" ? "NexBusiness replaced 12 different tools we were using. Our team's productivity increased by 40% in the first quarter." : "NexBusiness menggantikan 12 alat berbeda yang kami gunakan. Produktivitas tim kami meningkat sebesar 40% di kuartal pertama.",
      rating: 5
    },
    {
      name: "Marcus Rivera", role: "COO, GrowthScale",
      quote: lang === "EN" ? "The integration between apps is seamless. Data flows naturally from our CRM to accounting to project management." : "Integrasi antar aplikasi sangat mulus. Data mengalir secara alami dari CRM kami ke akuntansi hingga manajemen proyek.",
      rating: 5
    },
    {
      name: "Aisha Patel", role: "VP Engineering, CloudNine",
      quote: lang === "EN" ? "We evaluated Zoho, Salesforce, and HubSpot before choosing NexBusiness. The value proposition is unmatched." : "Kami mengevaluasi Zoho, Salesforce, dan HubSpot sebelum memilih NexBusiness. Proposisi nilainya tidak tertandingi.",
      rating: 5
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-6">
                <Sparkles size={14} className="text-accent-400" />
                <span>{lang === "EN" ? "Now with AI-powered features across all apps" : "Kini dengan fitur berbasis AI di semua aplikasi"}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                {t("heroTitle")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
                  {t("heroHighlight")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary-200 mb-8 max-w-2xl">
                {t("heroDesc")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/apps" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-accent-500/25">
                  {t("exploreApps")} <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-xl transition-all border border-white/20">
                  {t("viewPricing")}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/hero-team.jpg"
                alt="Team collaborating together"
                className="w-full h-auto rounded-2xl shadow-2xl shadow-black/30 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">{t("featuredApps")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("featuredDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredApps.slice(0, 8).map(app => (
              <Link key={app.slug} to={`/apps/${app.slug}`} className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-primary-200">
                <div className="flex items-center gap-3 mb-3">
                  {appLogos[app.slug] ? (
                    <img src={appLogos[app.slug]} alt={app.name} className="w-11 h-11 rounded-xl object-cover" />
                  ) : (
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: app.color + "15", color: app.color }}>
                      <DynamicIcon name={app.icon} size={22} />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">{app.name}</h3>
                    <span className="text-xs text-gray-400">{app.category_name}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{app.tagline}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {lang === "EN" ? "Learn more" : "Pelajari lebih lanjut"} <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/apps" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm">
              {t("viewAllApps")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">{t("whyChoose")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("whyDesc")}</p>
          </div>
          <div className="space-y-12">
            {benefits.map((b, i) => (
              <div key={b.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full md:w-1/2">
                  <img src={b.image} alt={b.title} loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md" />
                </div>
                <div className="w-full md:w-1/2 flex gap-5 p-6">
                  <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-xl flex items-center justify-center shrink-0">
                    <DynamicIcon name={b.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">{b.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/testimonial-bg.jpg" alt="" loading="lazy" className="w-full h-full object-cover opacity-[0.04]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">{t("trustedBy")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(item => (
              <div key={item.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">"{item.quote}"</p>
                <div>
                  <div className="font-semibold text-sm text-gray-800">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">{t("readyToTransform")}</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">{t("joinThousands")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-primary-600/25">
              {t("startTrial")} <ArrowRight size={18} />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 border-2 border-primary-200 hover:border-primary-600 text-primary-600 font-semibold px-8 py-3.5 rounded-xl transition-colors">
              {t("comparePlans")}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Check size={14} className="text-accent-500" /> {t("trialFeature1")}</span>
            <span className="flex items-center gap-1"><Check size={14} className="text-accent-500" /> {t("trialFeature2")}</span>
            <span className="flex items-center gap-1"><Check size={14} className="text-accent-500" /> {t("trialFeature3")}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

