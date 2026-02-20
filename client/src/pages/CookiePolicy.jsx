import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/LanguageContext";
import SEOHead from "@/components/SEOHead";

export default function CookiePolicy() {
  const { lang, t } = useLanguage();

  const content = {
    EN: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: February 15, 2026",
      intro: "This Cookie Policy explains how NexBusiness uses cookies and similar technologies to recognize you when you visit our platform. It explains what these technologies are, why we use them, and your rights to control our use of them.",
      sections: [
        {
          title: "1. What Are Cookies?",
          text: "Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide reporting information."
        },
        {
          title: "2. Types of Cookies We Use",
          sub: "Essential Cookies",
          text: "These cookies are strictly necessary for the platform to function. They enable core features like security, account authentication, and session management."
        },
        {
          sub: "Performance Cookies",
          text: "These cookies collect information about how you use our platform, such as which pages you visit most often. This data helps us improve the performance and user experience."
        },
        {
          sub: "Functional Cookies",
          text: "These cookies allow the platform to remember choices you make (such as your language preference) and provide enhanced, personalized features."
        },
        {
          sub: "Analytics Cookies",
          text: "We use analytics cookies to understand how visitors interact with our platform, which helps us analyze web traffic and improve our services."
        },
        {
          title: "3. How to Control Cookies",
          text: "You have the right to decide whether to accept or reject cookies. You can manage your preferences through your browser settings, allowing you to:",
          list: [
            "View and delete stored cookies",
            "Block third-party cookies",
            "Block cookies from specific sites",
            "Delete all cookies when you close your browser"
          ]
        },
        {
          title: "4. Third-Party Cookies",
          text: "In some cases, we use cookies provided by trusted third parties, such as Google Analytics and payment processors, to analyze traffic and process transactions."
        },
        {
          title: "5. Updates to This Policy",
          text: "We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices."
        },
        {
          title: "6. Contact Us",
          text: "If you have any questions about our use of cookies, please contact us at:",
          address: "Email: privacy@nexbusiness.id\nAddress: Sinbad Green Residence Blok C1 No 64, Sindang Barang, Bogor Barat, Kota Bogor, Indonesia 16117"
        }
      ],
      backBtn: "Back to Home"
    },
    ID: {
      title: "Kebijakan Cookie",
      lastUpdated: "Terakhir diperbarui: 15 Februari 2026",
      intro: "Kebijakan Cookie ini menjelaskan bagaimana NexBusiness menggunakan cookie dan teknologi serupa untuk mengenali Anda saat Anda mengunjungi platform kami. Ini menjelaskan apa itu teknologi tersebut, mengapa kami menggunakannya, dan hak Anda untuk mengontrol penggunaannya.",
      sections: [
        {
          title: "1. Apa Itu Cookie?",
          text: "Cookie adalah file teks kecil yang disimpan di perangkat Anda (komputer, tablet, atau ponsel) saat Anda mengunjungi situs web. Mereka banyak digunakan untuk membuat situs web bekerja lebih efisien dan untuk memberikan informasi pelaporan."
        },
        {
          title: "2. Jenis Cookie yang Kami Gunakan",
          sub: "Cookie Esensial",
          text: "Cookie ini sangat diperlukan agar platform dapat berfungsi. Mereka mengaktifkan fitur inti seperti keamanan, autentikasi akun, dan manajemen sesi."
        },
        {
          sub: "Cookie Kinerja",
          text: "Cookie ini mengumpulkan informasi tentang bagaimana Anda menggunakan platform kami, seperti halaman mana yang paling sering Anda kunjungi. Data ini membantu kami meningkatkan kinerja dan pengalaman pengguna."
        },
        {
          sub: "Cookie Fungsional",
          text: "Cookie ini memungkinkan platform untuk mengingat pilihan yang Anda buat (seperti preferensi bahasa Anda) dan menyediakan fitur yang ditingkatkan dan dipersonalisasi."
        },
        {
          sub: "Cookie Analitik",
          text: "Kami menggunakan cookie analitik untuk memahami bagaimana pengunjung berinteraksi dengan platform kami, yang membantu kami menganalisis lalu lintas web dan meningkatkan layanan kami."
        },
        {
          title: "3. Cara Mengontrol Cookie",
          text: "Anda memiliki hak untuk memutuskan apakah akan menerima atau menolak cookie. Anda dapat mengelola preferensi Anda melalui pengaturan browser Anda, yang memungkinkan Anda untuk:",
          list: [
            "Melihat dan menghapus cookie yang tersimpan",
            "Memblokir cookie pihak ketiga",
            "Memblokir cookie dari situs tertentu",
            "Menghapus semua cookie saat Anda menutup browser"
          ]
        },
        {
          title: "4. Cookie Pihak Ketiga",
          text: "Dalam beberapa kasus, kami menggunakan cookie yang disediakan oleh pihak ketiga yang tepercaya, seperti Google Analytics dan pemroses pembayaran, untuk menganalisis lalu lintas dan memproses transaksi."
        },
        {
          title: "5. Pembaruan Kebijakan Ini",
          text: "Kami dapat memperbarui Kebijakan Cookie ini dari waktu ke waktu untuk mencerminkan perubahan dalam teknologi, peraturan, atau praktik bisnis kami."
        },
        {
          title: "6. Hubungi Kami",
          text: "Jika Anda memiliki pertanyaan tentang penggunaan cookie kami, silakan hubungi kami di:",
          address: "Email: privacy@nexbusiness.id\nAlamat: Sinbad Green Residence Blok C1 No 64, Sindang Barang, Bogor Barat, Kota Bogor, Indonesia 16117"
        }
      ],
      backBtn: "Kembali ke Beranda"
    }
  };

  const current = content[lang] || content.EN;

  return (
    <div>
      <SEOHead
        title={lang === "EN" ? "Cookie Policy" : "Kebijakan Cookie"}
        description={lang === "EN" ? "NexBusiness Cookie Policy - Learn how we use cookies and similar technologies on our platform." : "Kebijakan Cookie NexBusiness - Pelajari bagaimana kami menggunakan cookie dan teknologi serupa di platform kami."}
      />
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{current.title}</h1>
          <p className="text-primary-200">{current.lastUpdated}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray prose-headings:text-primary-800">
          <p className="text-gray-600 leading-relaxed mb-8">{current.intro}</p>

          {current.sections.map((section, idx) => (
            <div key={idx} className="mb-10">
              {section.title && <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">{section.title}</h2>}
              {section.sub && <h3 className="text-lg font-semibold text-primary-700 mt-6 mb-2">{section.sub}</h3>}
              <p className="text-gray-600 leading-relaxed">{section.text}</p>
              {section.list && (
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                  {section.list.map((item, lIdx) => <li key={lIdx}>{item}</li>)}
                </ul>
              )}
              {section.address && (
                <p className="text-gray-600 mt-4 whitespace-pre-line font-medium">{section.address}</p>
              )}
            </div>
          ))}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              &larr; {current.backBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
