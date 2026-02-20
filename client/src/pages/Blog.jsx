import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import SEOHead from "@/components/SEOHead";

const categoryOptions = ["All", "Productivity", "CRM", "Operations", "Analytics", "HR", "Finance"];

export default function Blog() {
  const { lang, t } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchPosts();
  }, [activeCategory]);

  async function fetchPosts() {
    try {
      setLoading(true);
      const params = activeCategory !== "All" ? `?category=${activeCategory}` : "";
      const res = await fetch(`/api/blog${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching blog posts:", err);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString(lang === "EN" ? "en-US" : "id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div>
      <SEOHead
        title={lang === "EN" ? "Blog - Business Insights & Tips" : "Blog - Wawasan & Tips Bisnis"}
        description={lang === "EN" ? "Read the latest insights, tips, and best practices for running a smarter business with NexBusiness integrated apps. Productivity, CRM, operations, and more." : "Baca wawasan, tips, dan praktik terbaik terbaru untuk menjalankan bisnis yang lebih cerdas dengan aplikasi terintegrasi NexBusiness."}
      />
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t("blogHeroTitle")}</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            {t("blogHeroDesc")}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-12">
            {categoryOptions.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === activeCategory
                  ? "bg-primary-700 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {t(cat.toLowerCase())}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-700 mx-auto"></div>
              <p className="text-gray-500 mt-4">{t("loadingArticles")}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">{t("noArticlesFound")}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group block"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.cover_image || "/images/feature-analytics.jpg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-accent-50 text-accent-700 text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-lg font-bold text-primary-800 mb-2 line-clamp-2 group-hover:text-accent-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.created_at)}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.read_time}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">{t("moreSoon")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
