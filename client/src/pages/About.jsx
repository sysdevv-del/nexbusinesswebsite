import { Link } from "react-router-dom";
import { Building2, Heart, Award, Users, ArrowRight, Globe } from "@/lib/icons";

export default function About() {
  const values = [
    { icon: Heart, title: "Customer First", desc: "Every decision we make starts with the question: how does this help our customers succeed?" },
    { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in design, engineering, and customer experience." },
    { icon: Users, title: "Collaboration", desc: "We believe the best products are built by diverse teams working together towards a shared vision." },
    { icon: Globe, title: "Accessibility", desc: "Enterprise-grade tools should be accessible to businesses of every size, everywhere in the world." },
  ];

  const milestones = [
    { year: "2018", title: "Founded", desc: "NexBusiness was founded with a mission to unify business software." },
    { year: "2019", title: "First 5 Apps", desc: "Launched NexCRM, NexBooks, NexHR, NexMail, and NexDesk." },
    { year: "2020", title: "10K Customers", desc: "Reached 10,000 active companies using the platform." },
    { year: "2022", title: "Series B Funding", desc: "Raised $50M to accelerate product development and global expansion." },
    { year: "2024", title: "30+ Apps", desc: "Expanded the platform to over 30 integrated business applications." },
    { year: "2026", title: "AI Integration", desc: "Launched AI-powered features across all apps for intelligent automation." },
  ];

  const stats = [
    { value: "50K+", label: "Companies" },
    { value: "500+", label: "Team Members" },
    { value: "150+", label: "Countries" },
    { value: "30+", label: "Products" },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Building the Future of Business Software</h1>
            <p className="text-lg text-primary-200 leading-relaxed">
              We believe every business deserves access to powerful, integrated tools. NexBusiness is on a mission to create the operating system that helps companies of all sizes work smarter, not harder.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>NexBusiness was born from a simple frustration: running a business shouldn't require stitching together dozens of disconnected software tools. Our founders experienced this firsthand while scaling their previous companies.</p>
                <p>We set out to build a unified platform where every business application — from CRM and accounting to HR and project management — works seamlessly together. No more data silos, no more integration headaches, no more context switching.</p>
                <p>Today, over 50,000 companies across 150+ countries trust NexBusiness to run their operations. And we're just getting started.</p>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  src="/images/about-team.jpg"
                  alt="NexBusiness team brainstorming and collaborating"
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
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-12">Our Values</h2>
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

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-100 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="hidden md:flex w-12 h-12 bg-primary-600 text-white rounded-full items-center justify-center shrink-0 text-sm font-bold z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-bold text-primary-600 md:hidden">{m.year}</span>
                      <span className="text-sm font-bold text-primary-600 hidden md:inline">{m.year}</span>
                      <h3 className="font-semibold text-gray-800">{m.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-office.jpg"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/85" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">We're always looking for talented people who share our passion for building great software.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            View Open Positions <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
