import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, Check } from "@/lib/icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@nexbusiness.com", desc: "We'll respond within 24 hours" },
    { icon: Phone, label: "Phone", value: "+62 853-8504-5549", desc: "Mon-Fri, 9am-6pm WIB" },
    { icon: MapPin, label: "Office", value: "Bogor, Indonesia", desc: "Sinbad Green Residence Blok C1 No 64, Sindang Barang, Bogor Barat" },
    { icon: Clock, label: "Business Hours", value: "Mon-Fri, 9-6 WIB", desc: "Weekend support for Enterprise" },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-primary-200 max-w-xl text-lg">Have a question, need a demo, or want to discuss how NexBusiness can help your team? We'd love to hear from you.</p>
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
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">Message Sent!</h2>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", subject: "", message: "" }); }} className="text-primary-600 font-medium hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h2 className="text-xl font-bold text-primary-800 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                        <select
                          value={formData.subject}
                          onChange={e => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select a topic</option>
                          <option value="demo">Request a Demo</option>
                          <option value="sales">Sales Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <button type="submit" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm">
                      Send Message <ArrowRight size={16} />
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
                <h3 className="font-semibold text-primary-800 mb-2">Looking for support?</h3>
                <p className="text-sm text-gray-600 mb-4">Our help center has answers to the most common questions.</p>
                <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1">
                  Visit Help Center <ArrowRight size={14} />
                </a>
              </div>

              <div className="mt-6">
                <img
                  src="/images/contact-office.jpg"
                  alt="NexBusiness office reception in Bogor"
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-xl shadow-sm"
                />
                <p className="text-xs text-gray-400 mt-2 text-center">Our Bogor Office</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
