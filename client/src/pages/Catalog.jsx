import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/LanguageContext";
import { fetchApps } from "@/lib/api";
import { appLogos } from "@/lib/appAssets";
import { DynamicIcon, Printer, ArrowLeft } from "@/lib/icons";
import SEOHead from "@/components/SEOHead";
import logoImg from "@assets/2_1771161242519.png";

export default function Catalog() {
  const { lang, t } = useLanguage();
  const [categories, setCategories] = useState([]);
  const [groupedApps, setGroupedApps] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/categories").then(res => res.json()),
      fetchApps()
    ]).then(([cats, appsData]) => {
        setCategories(cats);
        const grouped = appsData.reduce((acc, app) => {
           acc[app.category_slug] = acc[app.category_slug] || [];
           acc[app.category_slug].push(app);
           return acc;
        }, {});
        setGroupedApps(grouped);
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-700"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white text-gray-800 font-sans print:p-0">
      <SEOHead 
        title={lang === "EN" ? "Product Catalog - NexBusiness" : "Katalog Produk - NexBusiness"}
        description={lang === "EN" ? "Comprehensive catalog of all NexBusiness applications suitable for executive review." : "Katalog komprehensif semua aplikasi NexBusiness yang cocok untuk tinjauan eksekutif."}
      />
      
      {/* Top Bar for Web View (Hidden in Print) */}
      <div className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between sticky top-0 z-10 print:hidden shadow-sm">
        <div className="flex items-center gap-4">
            <Link to="/apps" className="text-gray-500 hover:text-primary-600 transition-colors p-2 bg-gray-50 rounded-full">
                <ArrowLeft size={20} />
            </Link>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">NexBusiness Catalog</h1>
        </div>
        <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
        >
            <Printer size={18} />
            {lang === "EN" ? "Print or Save to PDF" : "Cetak atau Simpan PDF"}
        </button>
      </div>

      {/* Catalog Document */}
      <div className="max-w-[900px] mx-auto p-10 print:p-0 print:max-w-none print:w-full bg-white shadow-xl print:shadow-none min-h-screen my-8 print:my-0 rounded-2xl print:rounded-none">
        
        {/* Cover Section */}
        <div className="mb-20 print:break-after-page flex flex-col items-center justify-center text-center py-24 print:py-32 print:h-screen">
            <img src={logoImg} alt="NexBusiness" className="h-20 mb-10 print:h-28 grayscale contrast-200 opacity-90" width="320" height="80" />
            <h1 className="text-5xl print:text-6xl font-extrabold text-primary-900 mb-6 tracking-tight">Product Suite</h1>
            <p className="text-xl text-gray-500 max-w-2xl mb-16 leading-relaxed">
                {lang === "EN" 
                  ? "A comprehensive catalog of integrated enterprise applications to manage every aspect of your business."
                  : "Katalog komprehensif aplikasi perusahaan terintegrasi untuk mengelola setiap aspek bisnis Anda."}
            </p>
            <div className="text-sm text-gray-400 mt-20 uppercase tracking-widest font-bold">
                CONFIDENTIAL & PROPRIETARY
            </div>
            <div className="text-xs text-gray-400 mt-4 uppercase tracking-widest font-semibold">
                {new Date().toLocaleDateString(lang === "EN" ? "en-US" : "id-ID", { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-16">
            {categories.map((cat) => {
                const categoryApps = groupedApps[cat.slug];
                if (!categoryApps || categoryApps.length === 0) return null;
                
                return (
                    <div key={cat.slug} className="print:break-inside-avoid">
                        <div className="flex items-center gap-4 border-b-2 border-primary-200 pb-4 mb-8">
                            <div className="w-12 h-12 bg-primary-50 text-primary-700 flex items-center justify-center rounded-xl">
                                <DynamicIcon name={cat.icon} size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-primary-900">{t(cat.slug) || cat.name}</h2>
                            <div className="ml-auto text-sm font-semibold bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                                {categoryApps.length} Apps
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 w-full">
                            {categoryApps.map(app => (
                                <div key={app.slug} className="bg-white border-2 border-gray-100 print:border border-gray-300 rounded-xl p-6 break-inside-avoid w-full">
                                    <div className="flex items-start gap-4 mb-4">
                                        {appLogos[app.slug] ? (
                                            <img src={appLogos[app.slug]} alt={app.name} className="w-14 h-14 rounded-xl object-cover shrink-0" width="56" height="56" />
                                        ) : (
                                            <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: app.color + "15", color: app.color }}>
                                                <DynamicIcon name={app.icon} size={28} />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-xl text-gray-900 mb-1 leading-tight">{app.name}</h3>
                                            <span className="inline-block px-2 text-[10px] uppercase font-bold text-gray-500 bg-gray-100 rounded tracking-wider">
                                                {app.platform === 'B2B' ? 'Enterprise B2B' : 'B2C Platform'}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-5 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                                        {app.tagline}
                                    </p>
                                    
                                    {app.features && app.features.length > 0 && (
                                        <div className="pt-4 border-t border-gray-100 print:border-gray-200">
                                            <p className="text-xs font-bold text-primary-800 mb-3 uppercase tracking-wide">Key Capabilities</p>
                                            <ul className="text-sm text-gray-600 space-y-2">
                                                {app.features.slice(0, 3).map((f, i) => (
                                                    <li key={i} className="flex items-start gap-2 h-10 overflow-hidden text-ellipsis">
                                                        <span className="text-primary-500 mt-0.5">•</span>
                                                        <span className="leading-snug line-clamp-2">{f}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>

        {/* Back Cover / Footer */}
        <div className="text-center pt-24 pb-12 text-gray-400 text-sm print:break-before-page print:flex print:flex-col print:justify-center print:min-h-screen">
            <img src={logoImg} alt="NexBusiness" className="h-10 mx-auto mb-6 grayscale opacity-50" width="160" height="40" loading="lazy" />
            <p className="font-semibold text-gray-600">The Operating System for Your Business</p>
            <p className="mt-4">© {new Date().getFullYear()} NexBusiness. All rights reserved.</p>
            <p className="mt-1">For inquiries or a custom demo, visit <strong className="text-gray-600">nexbusiness.id</strong> or contact <strong className="text-gray-600">sales@nexbusiness.id</strong></p>
        </div>
      </div>
    </div>
  );
}
