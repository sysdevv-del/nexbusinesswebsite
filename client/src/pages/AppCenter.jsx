import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DynamicIcon, Search, ArrowRight, ChevronRight } from "@/lib/icons";
import { appLogos } from "@/lib/appAssets";
import { useLanguage } from "@/lib/LanguageContext";

export default function AppCenter() {
  const { lang, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [apps, setApps] = useState([]);
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/categories").then(r => r.json()).then(setCategories).catch(() => { });
    fetch("/api/apps").then(r => r.json()).then(setApps).catch(() => { });
  }, []);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filteredApps = apps.filter(app => {
    const matchesCategory = activeCategory === "all" || app.category_slug === activeCategory;
    const matchesSearch = !searchQuery || app.name.toLowerCase().includes(searchQuery.toLowerCase()) || app.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeCategoryName = activeCategory === "all" ? t("allProducts") : t(activeCategory) || categories.find(c => c.slug === activeCategory)?.name || "";

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{t("appCenterTitle")}</h1>
          <p className="text-primary-200 max-w-xl">{t("appCenterDesc")}</p>
          <div className="mt-6 relative max-w-lg">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400 text-sm"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-20">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t("categories")}</h3>
              <nav className="space-y-0.5">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${activeCategory === "all" ? "bg-primary-50 text-primary-700 font-medium" : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {t("allProducts")}
                  <span className="text-xs text-gray-400">{apps.length}</span>
                </button>
                {categories.map(cat => {
                  const count = apps.filter(a => a.category_slug === cat.slug).length;
                  return (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${activeCategory === cat.slug ? "bg-primary-50 text-primary-700 font-medium" : "text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        <DynamicIcon name={cat.icon} size={14} />
                        {t(cat.slug)}
                      </span>
                      <span className="text-xs text-gray-400">{count}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="lg:hidden mb-4 overflow-x-auto">
              <div className="flex gap-2 pb-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`whitespace-nowrap px-3 py-1.5 text-sm rounded-full transition-colors ${activeCategory === "all" ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                >
                  {t("all")}
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`whitespace-nowrap px-3 py-1.5 text-sm rounded-full transition-colors ${activeCategory === cat.slug ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {t(cat.slug)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-primary-800">{activeCategoryName}</h2>
              <span className="text-sm text-gray-500">{filteredApps.length} {t("apps_count")}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredApps.map(app => (
                <Link
                  key={app.slug}
                  to={`/apps/${app.slug}`}
                  className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    {appLogos[app.slug] ? (
                      <img src={appLogos[app.slug]} alt={app.name} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                    ) : (
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: app.color + "15", color: app.color }}>
                        <DynamicIcon name={app.icon} size={24} />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">{app.name}</h3>
                        {app.is_featured && (
                          <span className="text-[10px] font-bold bg-accent-50 text-accent-700 px-1.5 py-0.5 rounded">{t("popularBadge")}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{app.tagline}</p>
                      <div className="flex items-center gap-1 text-xs font-medium text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        {t("learnMore")} <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredApps.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500">{t("noAppsFound")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
