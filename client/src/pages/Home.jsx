import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DynamicIcon, ArrowRight, Check, Star, Sparkles } from "@/lib/icons";
import { appLogos } from "@/lib/appAssets";

export default function Home() {
  const [featuredApps, setFeaturedApps] = useState([]);

  useEffect(() => {
    fetch("/api/apps?featured=true").then(r => r.json()).then(setFeaturedApps).catch(() => {});
  }, []);

  const benefits = [
    { icon: "Layers", title: "All-in-One Platform", desc: "30+ integrated business apps working seamlessly together. No more juggling between disconnected tools.", image: "/images/feature-analytics.jpg", imageAlt: "Business analytics dashboard showing real-time metrics" },
    { icon: "Zap", title: "Lightning Fast Setup", desc: "Get started in minutes, not months. Pre-configured integrations mean your team is productive from day one.", image: "/images/feature-collaboration.jpg", imageAlt: "Team collaborating during a presentation meeting" },
    { icon: "Shield", title: "Enterprise Security", desc: "Bank-grade encryption, SOC 2 compliance, and advanced access controls protect your data at every level.", image: "/images/feature-mobile.jpg", imageAlt: "Mobile productivity on the go" },
    { icon: "Sparkles", title: "AI-Powered Intelligence", desc: "Built-in AI assists your team across every app — from sales predictions to automated customer support.", image: "/images/testimonial-bg.jpg", imageAlt: "Professional business environment" },
  ];


  const testimonials = [
    { name: "Sarah Chen", role: "CTO, TechForward", quote: "NexBusiness replaced 12 different tools we were using. Our team's productivity increased by 40% in the first quarter.", rating: 5 },
    { name: "Marcus Rivera", role: "COO, GrowthScale", quote: "The integration between apps is seamless. Data flows naturally from our CRM to accounting to project management.", rating: 5 },
    { name: "Aisha Patel", role: "VP Engineering, CloudNine", quote: "We evaluated Zoho, Salesforce, and HubSpot before choosing NexBusiness. The value proposition is unmatched.", rating: 5 },
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
                <span>Now with AI-powered features across all apps</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                The Operating System for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
                  Your Business
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary-200 mb-8 max-w-2xl">
                Run your entire company with one unified platform. 30+ integrated business applications for sales, marketing, finance, HR, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/apps" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-accent-500/25">
                  Explore All Apps <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-xl transition-all border border-white/20">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/hero-team.jpg"
                alt="Team collaborating together in a modern workspace"
                className="w-full h-auto rounded-2xl shadow-2xl shadow-black/30 object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Featured Applications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our most popular tools, each designed to streamline a critical part of your business.</p>
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
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/apps" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm">
              View all 30+ applications <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Why Choose NexBusiness?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We're not just another suite of tools — we're a unified business platform built from the ground up to work together.</p>
          </div>
          <div className="space-y-12">
            {benefits.map((b, i) => (
              <div key={b.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full md:w-1/2">
                  <img
                    src={b.image}
                    alt={b.imageAlt}
                    loading="lazy"
                    className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md"
                  />
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
          <img
            src="/images/testimonial-bg.jpg"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover opacity-[0.04]"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Trusted by Growing Businesses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-sm text-gray-800">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Join thousands of companies using NexBusiness to streamline their operations and accelerate growth.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-primary-600/25">
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 border-2 border-primary-200 hover:border-primary-600 text-primary-600 font-semibold px-8 py-3.5 rounded-xl transition-colors">
              Compare Plans
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Check size={14} className="text-accent-500" /> 14-day free trial</span>
            <span className="flex items-center gap-1"><Check size={14} className="text-accent-500" /> No credit card required</span>
            <span className="flex items-center gap-1"><Check size={14} className="text-accent-500" /> Cancel anytime</span>
          </div>
        </div>
      </section>
    </div>
  );
}
