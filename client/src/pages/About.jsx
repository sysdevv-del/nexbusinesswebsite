import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Building2, Heart, Award, Users, ArrowRight, Globe } from "@/lib/icons";
import { useLanguage } from "@/lib/LanguageContext";
import SEOHead from "@/components/SEOHead";

export default function About() {
  const { lang, t } = useLanguage();

  const values = useMemo(() => [
    {
      icon: Heart,
      title: lang === "EN" ? "Customer First" : "Pelanggan Utama",
      desc: lang === "EN" ? "Every decision we make starts with the question: how does this help our customers succeed?" : "Setiap keputusan yang kami buat dimulai dengan pertanyaan: bagaimana hal ini membantu pelanggan kami sukses?"
    },
    {
      icon: Award,
      title: lang === "EN" ? "Excellence" : "Keunggulan",
      desc: lang === "EN" ? "We hold ourselves to the highest standards in design, engineering, and customer experience." : "Kami memegang standar tertinggi dalam desain, teknik, dan pengalaman pelanggan."
    },
    {
      icon: Users,
      title: lang === "EN" ? "Collaboration" : "Kolaborasi",
      desc: lang === "EN" ? "We believe the best products are built by diverse teams working together towards a shared vision." : "Kami percaya produk terbaik dibangun oleh tim yang beragam yang bekerja bersama menuju visi bersama."
    },
    {
      icon: Globe,
      title: lang === "EN" ? "Accessibility" : "Aksesibilitas",
      desc: lang === "EN" ? "Enterprise-grade tools should be accessible to businesses of every size, everywhere in the world." : "Alat kelas enterprise harus dapat diakses oleh bisnis dari segala ukuran, di mana pun di dunia."
    },
  ], [lang]);


  const stats = useMemo(() => [
    { value: "50K+", label: t("companies") },
    { value: "500+", label: t("teamMembers") },
    { value: "150+", label: t("countries") },
    { value: "30+", label: t("products") },
  ], [t]);

  return (
    <div>
      <SEOHead
        title={lang === "EN" ? "About NexBusiness - Our Mission & Story" : "Tentang NexBusiness - Misi & Cerita Kami"}
        description={lang === "EN" ? "Learn about NexBusiness, the unified business platform trusted by 50,000+ companies in 150+ countries. Discover our story, values, and mission to transform business software." : "Pelajari tentang NexBusiness, platform bisnis terpadu yang dipercaya oleh 50.000+ perusahaan di 150+ negara. Temukan cerita, nilai, dan misi kami."}
      />
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{t("aboutHeroTitle")}</h1>
            <p className="text-lg text-primary-200 leading-relaxed">
              {t("aboutHeroDesc")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-4">{t("ourStoryTitle")}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t("ourStoryP1")}</p>
                <p>{t("ourStoryP2")}</p>
                <p>{t("ourStoryP3")}</p>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  src="/images/about-team.jpg"
                  alt={lang === "EN" ? "NexBusiness team brainstorming" : "Tim NexBusiness sedang brainstorming"}
                  loading="lazy"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {stats.map(stat => (
                    <div key={stat.label} className="bg-primary-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-primary-700">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-12">{t("ourValuesTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center border border-gray-100">
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} />
                </div>
                <h3 className="font-semibold text-primary-800 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-office.jpg"
            alt="NexBusiness modern office workspace in Bogor"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/85" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold text-white mb-4">{t("joinTeamTitle")}</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">{t("joinTeamDesc")}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            {t("openPositions")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
