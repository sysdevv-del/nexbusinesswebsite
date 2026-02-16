import { useState, useEffect, useRef, useCallback } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Globe, ArrowRight } from "@/lib/icons";
import MegaMenu from "./MegaMenu";
import { fetchApps } from "@/lib/api";
import logoImg from "@assets/2_1771161242519.png";
import logoWhiteImg from "@assets/1_1771161809585.png";
import { appLogos } from "@/lib/appAssets";

function Navbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
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
  }, [location]);

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
    { to: "/pricing", label: "Pricing" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
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
              Products <ChevronDown size={16} className={`transition-transform ${megaMenuOpen ? "rotate-180" : ""}`} />
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
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600 transition-colors">
            <Globe size={16} /> EN
          </button>
          <a href="https://saas.nexbusiness.id/login" className="text-sm font-medium text-primary-600 hover:text-primary-700 px-4 py-2 transition-colors">
            Sign In
          </a>
          <Link to="/contact" className="text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors">
            Get Started
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
                placeholder="Search apps... (e.g. CRM, invoicing, project management)"
                className="flex-1 text-lg outline-none placeholder-gray-400"
              />
              <button type="button" onClick={closeSearch} className="p-1 text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </form>
            {suggestions.length > 0 && (
              <div className="mt-3 border-t border-gray-100 pt-3">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2 px-1">Apps</p>
                {suggestions.map((app, i) => (
                  <Link
                    key={app.slug}
                    to={`/apps/${app.slug}`}
                    onClick={closeSearch}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${i === selectedIndex ? "bg-primary-50 text-primary-700" : "hover:bg-gray-50 text-gray-700"
                      }`}
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
                    View all results for "{searchQuery}" <ArrowRight size={14} />
                  </button>
                )}
              </div>
            )}
            {searchQuery.trim().length > 0 && suggestions.length === 0 && (
              <div className="mt-3 border-t border-gray-100 pt-4 pb-2 text-center">
                <p className="text-sm text-gray-400">No apps found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      )}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="p-4 space-y-1">
            <Link to="/apps" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
              Products
            </Link>
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3 space-y-2">
              <a href="https://saas.nexbusiness.id/login" className="block text-center text-sm font-medium text-primary-600 px-4 py-2.5 border border-primary-600 rounded-lg">
                Sign In
              </a>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-center text-sm font-medium text-white bg-primary-600 px-4 py-2.5 rounded-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const footerLinks = {
    "Company": [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Careers", to: "/about" },
      { label: "Press", to: "/about" },
    ],
    "Resources": [
      { label: "Documentation", to: "/contact" },
      { label: "Blog", to: "/blog" },
      { label: "Community", to: "/contact" },
      { label: "Partners", to: "/about" },
    ],
    "Support": [
      { label: "Help Center", to: "/contact" },
      { label: "Status", to: "/contact" },
      { label: "API Docs", to: "/contact" },
      { label: "Security", to: "/about" },
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
            <p className="text-xs text-gray-400 italic mb-3">Scaling Business to the Nex Level.</p>
            <p className="text-sm text-gray-400 mb-4">
              The operating system for your business. 30+ integrated apps to run your entire company.
            </p>
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
          <p className="text-sm text-gray-500">&copy; 2026 NexBusiness. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-300">Terms of Service</Link>
            <Link to="/cookies" className="text-sm text-gray-500 hover:text-gray-300">Cookie Policy</Link>
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
