import { Link } from "react-router-dom";
import { ArrowRight } from "@/lib/icons";
import { useLanguage } from "@/lib/LanguageContext";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <SEOHead
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
      />
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="text-8xl font-bold text-primary-100 mb-2">404</div>
        <h1 className="text-3xl font-bold text-primary-800 mb-4">
          {t("notFoundTitle")}
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          {t("notFoundDesc")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {t("goHome")} <ArrowRight size={18} />
          </Link>
          <Link
            to="/apps"
            className="inline-flex items-center gap-2 border-2 border-primary-200 hover:border-primary-600 text-primary-600 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {t("exploreApps")}
          </Link>
        </div>
      </div>
    </div>
  );
}
