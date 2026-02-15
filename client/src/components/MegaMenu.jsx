import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DynamicIcon, ChevronRight, X } from "@/lib/icons";

export default function MegaMenu({ isOpen, onClose }) {
  const [categories, setCategories] = useState([]);
  const [apps, setApps] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    fetch("/api/categories").then(r => r.json()).then(data => {
      setCategories(data);
      if (data.length > 0) setActiveCategory(data[0].slug);
    });
    fetch("/api/apps").then(r => r.json()).then(setApps);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredApps = apps.filter(a => a.category_slug === activeCategory);

  return (
    <div className="fixed inset-0 z-50 bg-black/20" style={{ top: "64px" }}>
      <div ref={menuRef} className="bg-white shadow-2xl border-t border-gray-100 max-h-[calc(100vh-64px)] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
            <div className="flex gap-6 text-sm font-medium">
              <Link to="/apps" onClick={onClose} className="text-primary-600 border-b-2 border-primary-600 pb-1">Apps</Link>
              <Link to="/pricing" onClick={onClose} className="text-gray-500 hover:text-primary-600 pb-1">Suite</Link>
              <Link to="/apps" onClick={onClose} className="text-gray-500 hover:text-primary-600 pb-1">Marketplace</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/apps" onClick={onClose} className="text-sm text-accent-500 hover:text-accent-600 font-medium flex items-center gap-1">
                BROWSE ALL PRODUCTS <ChevronRight size={14} />
              </Link>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="flex" style={{ minHeight: "420px" }}>
            <div className="w-56 border-r border-gray-100 py-3 overflow-y-auto max-h-[420px]">
              {categories.map(cat => (
                <button
                  key={cat.slug}
                  onMouseEnter={() => setActiveCategory(cat.slug)}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`w-full flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${
                    activeCategory === cat.slug
                      ? "text-primary-600 bg-primary-50 font-medium border-r-2 border-primary-600"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  }`}
                >
                  <span>{cat.name}</span>
                  <ChevronRight size={14} className={activeCategory === cat.slug ? "text-primary-600" : "text-gray-300"} />
                </button>
              ))}
              <div className="px-5 pt-4 pb-2">
                <Link
                  to="/apps"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-lg transition-colors w-full justify-center"
                >
                  BROWSE ALL PRODUCTS <ChevronRight size={14} />
                </Link>
              </div>
            </div>
            <div className="flex-1 p-6 overflow-y-auto max-h-[420px]">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {categories.find(c => c.slug === activeCategory)?.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredApps.map(app => (
                  <Link
                    key={app.slug}
                    to={`/apps/${app.slug}`}
                    onClick={onClose}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: app.color + "15", color: app.color }}
                    >
                      <DynamicIcon name={app.icon} size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-sm text-gray-800 group-hover:text-primary-600 transition-colors">
                          {app.name}
                        </h4>
                        {app.is_suite && (
                          <span className="text-[10px] font-bold bg-primary-100 text-primary-700 px-1.5 py-0.5 rounded uppercase">Suite</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{app.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
