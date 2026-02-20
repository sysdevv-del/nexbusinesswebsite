import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import SEOHead from "@/components/SEOHead";

function renderContent(content) {
  if (!content) return null;
  return content.split("\n").map((line, i) => {
    if (line.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-primary-800 mt-8 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    }
    if (line.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-semibold text-primary-700 mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    }
    if (line.trim() === "") {
      return <div key={i} className="h-4" />;
    }
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-gray-600 leading-relaxed mb-3">
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j} className="text-gray-800">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  });
}

export default function BlogPost() {
  const { lang, t } = useLanguage();
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) {
          if (res.status === 404) {
            setError(t("articleNotFound"));
          } else {
            setError(lang === "EN" ? "Failed to load article" : "Gagal memuat artikel");
          }
          return;
        }
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(lang === "EN" ? "Failed to load article" : "Gagal memuat artikel");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug, lang, t]);

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString(lang === "EN" ? "en-US" : "id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-700"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{error || t("articleNotFound")}</h1>
        <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
          &larr; {t("backToBlog")}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {post && (
        <SEOHead
          title={post.title}
          description={post.excerpt || post.title}
          image={post.cover_image || "/images/feature-analytics.jpg"}
          type="article"
        />
      )}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-200 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t("backToBlog")}
          </Link>
          <span className="inline-block px-3 py-1 bg-accent-500/20 text-accent-300 text-xs font-semibold rounded-full mb-4">
            {t(post.category.toLowerCase())}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary-200">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.created_at)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.read_time}
            </span>
          </div>
        </div>
      </section>

      {post.cover_image && (
        <div className="max-w-4xl mx-auto px-4 -mt-4">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      )}

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          {post.excerpt && (
            <p className="text-lg text-gray-500 italic border-l-4 border-accent-500 pl-4 mb-8">
              {post.excerpt}
            </p>
          )}
          <div className="prose max-w-none">
            {renderContent(post.content)}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              &larr; {t("backToBlog")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
