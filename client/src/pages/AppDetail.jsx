import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { DynamicIcon, Check, ArrowRight, ExternalLink, Star } from "@/lib/icons";
import { appLogos, appPreviews } from "@/lib/appAssets";

export default function AppDetail() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/apps/${slug}`)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!data || !data.app) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">App Not Found</h1>
        <p className="text-gray-500 mb-6">The app you're looking for doesn't exist.</p>
        <Link to="/apps" className="text-primary-600 font-medium">Browse all apps</Link>
      </div>
    );
  }

  const { app, related } = data;
  const assets = { logo: appLogos[app.slug], preview: appPreviews[app.slug] };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center gap-2 text-sm text-primary-300 mb-6">
            <Link to="/apps" className="hover:text-white">Apps</Link>
            <span>/</span>
            <Link to={`/apps?category=${app.category_slug}`} className="hover:text-white">{app.category_name}</Link>
            <span>/</span>
            <span className="text-white">{app.name}</span>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-6">
            {assets?.logo ? (
              <img src={assets.logo} alt={app.name} className="w-16 h-16 rounded-2xl object-cover" />
            ) : (
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: app.color + "20", color: "white" }}>
                <DynamicIcon name={app.icon} size={32} />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{app.name}</h1>
              <p className="text-lg text-primary-200 mb-6 max-w-2xl">{app.tagline}</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors">
                  Start Free Trial <ArrowRight size={16} />
                </Link>
                <Link to="/pricing" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors border border-white/20">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">About {app.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{app.description}</p>

              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-lg font-semibold text-primary-800 mb-4">Application Preview</h3>
                {assets?.preview ? (
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img src={assets.preview} alt={`${app.name} Dashboard Preview`} className="w-full h-auto" />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-3" style={{ backgroundColor: app.color + "15", color: app.color }}>
                        <DynamicIcon name={app.icon} size={32} />
                      </div>
                      <p className="text-sm text-gray-500">{app.name} Dashboard Preview</p>
                    </div>
                  </div>
                )}
              </div>

              <h3 className="text-lg font-semibold text-primary-800 mb-4">Why choose {app.name}?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Easy to Use", desc: "Intuitive interface designed for teams of all technical levels." },
                  { title: "Powerful Integrations", desc: "Connects seamlessly with all other NexBusiness apps." },
                  { title: "Real-time Collaboration", desc: "Work together with your team in real-time." },
                  { title: "Enterprise Ready", desc: "Built to scale with your business needs." },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <Check size={18} className="text-accent-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm text-gray-800">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="sticky top-20 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-primary-800 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {(app.features || []).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <Check size={14} className="text-accent-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-primary-800 mb-2">Get Started Today</h3>
                  <p className="text-sm text-gray-600 mb-4">Try {app.name} free for 14 days. No credit card required.</p>
                  <Link to="/contact" className="block text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm">
                    Start Free Trial
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-primary-800 mb-3">Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Category</span>
                      <span className="text-gray-800 font-medium">{app.category_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Platform</span>
                      <span className="text-gray-800 font-medium">Web, Mobile, API</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Rating</span>
                      <span className="flex items-center gap-1 text-gray-800 font-medium">
                        <Star size={12} className="fill-amber-400 text-amber-400" /> 4.8
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related && related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Related Apps in {app.category_name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map(relApp => (
                <Link
                  key={relApp.slug}
                  to={`/apps/${relApp.slug}`}
                  className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: relApp.color + "15", color: relApp.color }}>
                      <DynamicIcon name={relApp.icon} size={20} />
                    </div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">{relApp.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{relApp.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
