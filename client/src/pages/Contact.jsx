import { useState, useMemo } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, Check } from "@/lib/icons";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = useMemo(() => [
    {
      icon: Mail,
      label: "Email",
      value: "hello@nexbusiness.com",
      desc: lang === "EN" ? "We'll respond within 24 hours" : "Kami akan merespons dalam 24 jam"
    },
    {
      icon: Phone,
      label: t("phone"),
      value: "+62 853-8504-5549",
      desc: lang === "EN" ? "Mon-Fri, 9am-6pm WIB" : "Sen-Jum, 9am-6pm WIB"
    },
    {
      icon: MapPin,
      label: t("office"),
      value: lang === "EN" ? "Bogor, Indonesia" : "Bogor, Indonesia",
      desc: "Sinbad Green Residence Blok C1 No 64, Sindang Barang, Bogor Barat"
    },
    {
      icon: Clock,
      label: t("businessHours"),
      value: lang === "EN" ? "Mon-Fri, 9-6 WIB" : "Sen-Jum, 9-6 WIB",
      desc: lang === "EN" ? "Weekend support for Enterprise" : "Dukungan akhir pekan untuk Enterprise"
    },
  ], [lang, t]);

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t("contactTitle")}</h1>
          <p className="text-primary-200 max-w-xl text-lg">{t("contactDesc")}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-accent-50 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">{t("successMsg")}</h2>
                  <p className="text-gray-600 mb-6">{t("successDesc")}</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", subject: "", message: "" }); }} className="text-primary-600 font-medium hover:underline">
                    {t("sendAnother")}
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h2 className="text-xl font-bold text-primary-800 mb-6">{t("sendMessage")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("fullName")}</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("emailAddress")}</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{lang === "EN" ? "Company" : "Perusahaan"}</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("subject")}</label>
                        <select
                          value={formData.subject}
                          onChange={e => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                        >
                          <option value="">{lang === "EN" ? "Select a topic" : "Pilih topik"}</option>
                          <option value="demo">{lang === "EN" ? "Request a Demo" : "Minta Demo"}</option>
                          <option value="sales">{lang === "EN" ? "Sales Inquiry" : "Pertanyaan Penjualan"}</option>
                          <option value="support">{lang === "EN" ? "Technical Support" : "Dukungan Teknis"}</option>
                          <option value="partnership">{lang === "EN" ? "Partnership" : "Kemitraan"}</option>
                          <option value="other">{lang === "EN" ? "Other" : "Lainnya"}</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("message")}</label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder={lang === "EN" ? "Tell us how we can help..." : "Beritahu kami bagaimana kami bisa membantu..."}
                      />
                    </div>
                    <button type="submit" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm">
                      {t("sendBtn")} <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {contactInfo.map(info => (
                <div key={info.label} className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center shrink-0">
                      <info.icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-gray-800">{info.label}</h3>
                      <p className="text-sm text-primary-600 font-medium">{info.value}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{info.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-primary-50 rounded-xl p-6 mt-6">
                <h3 className="font-semibold text-primary-800 mb-2">{t("supportHead")}</h3>
                <p className="text-sm text-gray-600 mb-4">{t("supportDesc")}</p>
                <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1">
                  {t("visitHelp")} <ArrowRight size={14} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

