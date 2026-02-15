import { Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How Integrated Business Apps Can Save Your Team 10+ Hours Per Week",
    excerpt: "Discover how consolidating your business tools into a single platform eliminates context-switching and boosts productivity across every department.",
    category: "Productivity",
    author: "Sarah Chen",
    date: "February 10, 2026",
    readTime: "6 min read",
    image: "/images/feature-analytics.jpg",
  },
  {
    id: 2,
    title: "The Future of CRM: AI-Powered Customer Insights for SMBs",
    excerpt: "Artificial intelligence is no longer reserved for enterprise companies. Learn how modern CRM tools are bringing smart insights to small and mid-size businesses.",
    category: "CRM",
    author: "James Rodriguez",
    date: "February 5, 2026",
    readTime: "8 min read",
    image: "/images/feature-collaboration.jpg",
  },
  {
    id: 3,
    title: "5 Signs Your Business Has Outgrown Spreadsheets",
    excerpt: "Still running your operations on spreadsheets? Here are the telltale signs it's time to upgrade to dedicated business applications.",
    category: "Operations",
    author: "Priya Sharma",
    date: "January 28, 2026",
    readTime: "5 min read",
    image: "/images/feature-mobile.jpg",
  },
  {
    id: 4,
    title: "Building a Data-Driven Culture: A Step-by-Step Guide",
    excerpt: "Data-driven organizations outperform their peers by 20%. Here's a practical roadmap for embedding analytics into your company's DNA.",
    category: "Analytics",
    author: "Michael Torres",
    date: "January 20, 2026",
    readTime: "7 min read",
    image: "/images/about-office.jpg",
  },
  {
    id: 5,
    title: "Streamlining HR Processes: From Hiring to Payroll in One Platform",
    excerpt: "Managing people shouldn't require a dozen tools. See how unified HR software simplifies recruitment, onboarding, time tracking, and payroll.",
    category: "HR",
    author: "Laura Kim",
    date: "January 12, 2026",
    readTime: "6 min read",
    image: "/images/about-team.jpg",
  },
  {
    id: 6,
    title: "Why Small Businesses Are Switching to Cloud-Based Accounting",
    excerpt: "Cloud accounting offers real-time visibility, automated reconciliation, and multi-user access. Here's why the shift is accelerating in 2026.",
    category: "Finance",
    author: "David Okonkwo",
    date: "January 5, 2026",
    readTime: "5 min read",
    image: "/images/contact-office.jpg",
  },
];

const categories = ["All", "Productivity", "CRM", "Operations", "Analytics", "HR", "Finance"];

export default function Blog() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            Insights, tips, and best practices for running a smarter business with integrated apps.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-primary-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
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
                        {post.date}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">More articles coming soon. Stay tuned!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
