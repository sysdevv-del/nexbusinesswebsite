import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Globe } from "@/lib/icons";
import MegaMenu from "./MegaMenu";
import logoImg from "@assets/2_1771161242519.png";

function Navbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/pricing", label: "Pricing" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40" style={{ height: "64px" }}>
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center" onClick={() => { setMegaMenuOpen(false); setMobileMenuOpen(false); }}>
            <img src={logoImg} alt="NexBusiness" className="h-9" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                megaMenuOpen ? "text-primary-600 bg-primary-50" : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
              }`}
            >
              Products <ChevronDown size={16} className={`transition-transform ${megaMenuOpen ? "rotate-180" : ""}`} />
            </button>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMegaMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.to
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
          <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
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
    "Products": [
      { label: "NexCRM", to: "/apps/nexcrm" },
      { label: "NexFlow", to: "/apps/nexflow" },
      { label: "NexBooks", to: "/apps/nexbooks" },
      { label: "NexHR", to: "/apps/nexhr" },
      { label: "NexDesk", to: "/apps/nexdesk" },
      { label: "All Products", to: "/apps" },
    ],
    "Company": [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Careers", to: "/about" },
      { label: "Press", to: "/about" },
    ],
    "Resources": [
      { label: "Documentation", to: "/contact" },
      { label: "Blog", to: "/about" },
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
              <img src={logoImg} alt="NexBusiness" className="h-9 brightness-0 invert" />
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
            <Link to="/about" className="text-sm text-gray-500 hover:text-gray-300">Privacy Policy</Link>
            <Link to="/about" className="text-sm text-gray-500 hover:text-gray-300">Terms of Service</Link>
            <Link to="/about" className="text-sm text-gray-500 hover:text-gray-300">Cookie Policy</Link>
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
