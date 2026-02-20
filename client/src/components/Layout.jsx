import { useState, useEffect, useRef, useCallback } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Globe, ArrowRight } from "@/lib/icons";
import MegaMenu from "./MegaMenu";
import { fetchApps } from "@/lib/api";
import logoImg from "@assets/2_1771161242519.png";
import logoWhiteImg from "@assets/1_1771161809585.png";
import { appLogos } from "@/lib/appAssets";
import { useLanguage } from "@/lib/LanguageContext";

function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchInputRef = useRef(null);
  const debounceRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    setSearchOpen(false);
    setSearchQuery("");
    setSuggestions([]);
    setLangOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchApps = useCallback((query) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      try {
        const apps = await fetchApps({ search: query });
        setSuggestions(apps.slice(0, 6));
      } catch {
        setSuggestions([]);
      }
    }, 200);
  }, []);

  const handleQueryChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setSelectedIndex(-1);
    searchApps(val);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedIndex >= 0 && suggestions[selectedIndex]) {
      navigate(`/apps/${suggestions[selectedIndex].slug}`);
    } else if (searchQuery.trim()) {
      navigate(`/apps?search=${encodeURIComponent(searchQuery.trim())}`);
    }
    closeSearch();
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSuggestions([]);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Escape") {
      closeSearch();
    }
  };

  const navLinks = [
    { to: "/pricing", label: t("pricing") },
    { to: "/about", label: t("about") },
    { to: "/contact", label: t("contact") },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 relative" style={{ height: "64px" }}>
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center" onClick={() => { setMegaMenuOpen(false); setMobileMenuOpen(false); }}>
            <img src={logoImg} alt="NexBusiness" className="h-9" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${megaMenuOpen ? "text-primary-600 bg-primary-50" : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                }`}
            >
              {t("products")} <ChevronDown size={16} className={`transition-transform ${megaMenuOpen ? "rotate-180" : ""}`} />
            </button>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMegaMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === link.to
                  ? "text-primary-600 bg-primary-50"
                  : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => { setSearchOpen(!searchOpen); setMegaMenuOpen(false); }} className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
            <Search size={18} />
          </button>
          <div className="relative" ref={langRef}>
            <button
              onClick={() => { setLangOpen(!langOpen); setMegaMenuOpen(false); }}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors px-2 py-1 rounded-lg hover:bg-gray-50"
            >
              <span className="text-base leading-none">{lang === "EN" ? "🇺🇸" : "🇮🇩"}</span>
              <span>{lang}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 w-32 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-1 overflow-hidden">
                <button
                  onClick={() => { setLang("EN"); setLangOpen(false); }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${lang === "EN" ? "bg-primary-50 text-primary-600 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <span className="text-base">🇺🇸</span> English
                </button>
                <button
                  onClick={() => { setLang("ID"); setLangOpen(false); }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${lang === "ID" ? "bg-primary-50 text-primary-600 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <span className="text-base">🇮🇩</span> Bahasa
                </button>
              </div>
            )}
          </div>
          <a href="https://saas.nexbusiness.id/login" className="text-sm font-medium text-primary-600 hover:text-primary-700 px-4 py-2 transition-colors">
            {t("signIn")}
          </a>
          <Link to="/contact" className="text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors">
            {t("getStarted")}
          </Link>
        </div>
        <button className="lg:hidden p-2 text-gray-600" onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setMegaMenuOpen(false); }}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />

      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="flex items-center gap-3">
              <Search size={20} className="text-gray-400 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={handleQueryChange}
                onKeyDown={handleKeyDown}
                placeholder={t("searchPlaceholder")}
                className="flex-1 text-lg outline-none placeholder-gray-400"
              />
              <button type="button" onClick={closeSearch} className="p-1 text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </form>

            {(suggestions.length > 0 || (searchQuery.trim().length > 0 && suggestions.length === 0)) && (
              <div className="mt-3 border-t border-gray-100 pt-3">
                {suggestions.length > 0 ? (
                  <>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-2 px-1">{t("products")}</p>
                    {suggestions.map((app, i) => (
                      <Link
                        key={app.slug}
                        to={`/apps/${app.slug}`}
                        onClick={closeSearch}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${i === selectedIndex ? "bg-primary-50 text-primary-700" : "hover:bg-gray-50 text-gray-700"}`}
                      >
                        {appLogos[app.slug] ? (
                          <img src={appLogos[app.slug]} alt={app.name} className="w-8 h-8 rounded-lg object-cover shrink-0" />
                        ) : (
                          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 shrink-0 text-sm font-bold">
                            {app.name.charAt(0)}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{app.name}</p>
                          <p className="text-xs text-gray-400 truncate">{app.tagline}</p>
                        </div>
                        <ArrowRight size={14} className="text-gray-300 shrink-0" />
                      </Link>
                    ))}
                    {searchQuery.trim() && (
                      <button
                        type="button"
                        onClick={() => { navigate(`/apps?search=${encodeURIComponent(searchQuery.trim())}`); closeSearch(); }}
                        className="w-full mt-2 pt-2 border-t border-gray-100 text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center gap-1 py-2"
                      >
                        {t("viewAllResults")} "{searchQuery}" <ArrowRight size={14} />
                      </button>
                    )}
                  </>
                ) : (
                  <div className="py-4 text-center">
                    <p className="text-sm text-gray-400">{t("noAppsFoundFor")} "{searchQuery}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute top-full left-0 right-0 z-40">
          <div className="p-4 space-y-1">
            <Link to="/apps" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
              {t("products")}
            </Link>
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3 space-y-2">
              <a href="https://saas.nexbusiness.id/login" className="block text-center text-sm font-medium text-primary-600 px-4 py-2.5 border border-primary-600 rounded-lg">
                {t("signIn")}
              </a>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-center text-sm font-medium text-white bg-primary-600 px-4 py-2.5 rounded-lg">
                {t("getStarted")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useLanguage();
  const footerLinks = {
    [t("company")]: [
      { label: t("aboutUs"), to: "/about" },
      { label: t("contact"), to: "/contact" },
      { label: t("careers"), to: "/about" },
      { label: t("press"), to: "/about" },
    ],
    [t("resources")]: [
      { label: t("documentation"), to: "/contact" },
      { label: t("blog"), to: "/blog" },
      { label: t("community"), to: "/contact" },
      { label: t("partners"), to: "/about" },
    ],
    [t("support")]: [
      { label: t("helpCenter"), to: "/contact" },
      { label: t("status"), to: "/contact" },
      { label: t("apiDocs"), to: "/contact" },
      { label: t("security"), to: "/about" },
    ],
  };

  return (
    <footer className="bg-primary-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-3">
              <img src={logoWhiteImg} alt="NexBusiness" className="h-9" />
            </Link>
            <p className="text-xs text-gray-400 italic mb-3">{t("tagline")}</p>
            <p className="text-sm text-gray-400 mb-4">
              {t("footerDesc")}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com/NexBusiness" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 bg-primary-800 hover:bg-primary-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://twitter.com/NexBusiness" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-8 h-8 bg-primary-800 hover:bg-primary-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://instagram.com/NexBusiness" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 bg-primary-800 hover:bg-primary-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="https://linkedin.com/company/NexBusiness" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 bg-primary-800 hover:bg-primary-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://youtube.com/@NexBusiness" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 bg-primary-800 hover:bg-primary-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-gray-400 hover:text-accent-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; 2026 NexBusiness. {t("allRightsReserved")}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-300">{t("privacyPolicy")}</Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-300">{t("termsOfService")}</Link>
            <Link to="/cookies" className="text-sm text-gray-500 hover:text-gray-300">{t("cookiePolicy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
