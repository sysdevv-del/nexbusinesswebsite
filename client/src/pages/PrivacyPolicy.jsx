import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPolicy() {
  const { lang, t } = useLanguage();

  const content = {
    EN: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: February 15, 2026",
      intro: "At NexBusiness, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.",
      sections: [
        {
          title: "1. Information We Collect",
          sub: "Personal Information",
          text: "We may collect personal information that you voluntarily provide to us when you register on the platform, express an interest in obtaining information about us or our products, or otherwise contact us. This includes:",
          list: [
            "Name and contact information (email address, phone number)",
            "Company name and job title",
            "Billing and payment information",
            "Account credentials",
            "Communication preferences"
          ]
        },
        {
          sub: "Usage Data",
          text: "We automatically collect certain information when you visit, use, or navigate the platform. This includes device and usage information such as your IP address, browser type, operating system, referring URLs, and information about how you interact with our platform."
        },
        {
          title: "2. How We Use Your Information",
          text: "We use the information we collect for the following purposes:",
          list: [
            "To provide, operate, and maintain our platform and services",
            "To improve, personalize, and expand our services",
            "To process transactions and send related information",
            "To communicate with you about updates, promotions, and support",
            "To detect, prevent, and address technical issues and fraud",
            "To comply with legal obligations"
          ]
        },
        {
          title: "3. Data Sharing and Disclosure",
          text: "We do not sell your personal information. We may share your information in the following situations:",
          list: [
            "Service Providers: We may share your data with third-party vendors who perform services on our behalf.",
            "Business Transfers: In connection with a merger, acquisition, or sale of assets, your information may be transferred.",
            "Legal Requirements: We may disclose your information where required by law or to respond to legal processes."
          ]
        },
        {
          title: "4. Data Security",
          text: "We implement appropriate technical and organizational security measures to protect your personal information. This includes encryption, access controls, and regular security assessments. However, no method of transmission over the Internet is 100% secure."
        },
        {
          title: "5. Data Retention",
          text: "We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law."
        },
        {
          title: "6. Your Rights",
          text: "Depending on your location, you may have the following rights regarding your personal data:",
          list: [
            "Right to access your personal information",
            "Right to correct inaccurate data",
            "Right to request deletion of your data",
            "Right to restrict or object to processing",
            "Right to data portability",
            "Right to withdraw consent"
          ]
        },
        {
          title: "7. Contact Us",
          text: "If you have questions about this Privacy Policy, please contact us at:",
          address: "Email: privacy@nexbusiness.id\nAddress: Sinbad Green Residence Blok C1 No 64, Sindang Barang, Bogor Barat, Kota Bogor, Indonesia 16117"
        }
      ],
      backBtn: "Back to Home"
    },
    ID: {
      title: "Kebijakan Privasi",
      lastUpdated: "Terakhir diperbarui: 15 Februari 2026",
      intro: "Di NexBusiness, kami menjaga privasi Anda dengan serius. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda menggunakan platform dan layanan kami.",
      sections: [
        {
          title: "1. Informasi yang Kami Kumpulkan",
          sub: "Informasi Pribadi",
          text: "Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara sukarela kepada kami saat Anda mendaftar di platform, menyatakan minat untuk mendapatkan informasi tentang kami atau produk kami, atau menghubungi kami. Ini termasuk:",
          list: [
            "Nama dan informasi kontak (alamat email, nomor telepon)",
            "Nama perusahaan dan jabatan",
            "Informasi penagihan dan pembayaran",
            "Kredensial akun",
            "Preferensi komunikasi"
          ]
        },
        {
          sub: "Data Penggunaan",
          text: "Kami secara otomatis mengumpulkan informasi tertentu saat Anda mengunjungi, menggunakan, atau menavigasi platform. Ini termasuk informasi perangkat dan penggunaan seperti alamat IP Anda, jenis browser, sistem operasi, URL perujuk, dan informasi tentang bagaimana Anda berinteraksi dengan platform kami."
        },
        {
          title: "2. Bagaimana Kami Menggunakan Informasi Anda",
          text: "Kami menggunakan informasi yang kami kumpulkan untuk tujuan berikut:",
          list: [
            "Untuk menyediakan, mengoperasikan, dan memelihara platform dan layanan kami",
            "Untuk meningkatkan, mempersonalisasi, dan memperluas layanan kami",
            "Untuk memproses transaksi dan mengirimkan informasi terkait",
            "Untuk berkomunikasi dengan Anda tentang pembaruan, promosi, dan dukungan",
            "Untuk mendeteksi, mencegah, dan menangani masalah teknis dan penipuan",
            "Untuk mematuhi kewajiban hukum"
          ]
        },
        {
          title: "3. Berbagi Informasi dan Pengungkapan",
          text: "Kami tidak menjual informasi pribadi Anda. Kami dapat membagikan informasi Anda dalam situasi berikut:",
          list: [
            "Penyedia Layanan: Kami dapat membagikan data Anda dengan vendor pihak ketiga yang melakukan layanan atas nama kami.",
            "Transfer Bisnis: Sehubungan dengan merger, akuisisi, atau penjualan aset, informasi Anda dapat dialihkan.",
            "Persyaratan Hukum: Kami dapat mengungkapkan informasi Anda jika diperlukan oleh hukum atau untuk menanggapi proses hukum."
          ]
        },
        {
          title: "4. Keamanan Data",
          text: "Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi informasi pribadi Anda. Ini termasuk enkripsi, kontrol akses, dan penilaian keamanan rutin. Namun, tidak ada metode transmisi melalui Internet yang 100% aman."
        },
        {
          title: "5. Retensi Data",
          text: "Kami akan menyimpan informasi pribadi Anda hanya selama diperlukan untuk memenuhi tujuan yang diuraikan dalam Kebijakan Privasi ini, kecuali periode penyimpanan yang lebih lama diwajibkan atau diizinkan oleh hukum."
        },
        {
          title: "6. Hak-Hak Anda",
          text: "Tergantung pada lokasi Anda, Anda mungkin memiliki hak-hak berikut terkait data pribadi Anda:",
          list: [
            "Hak untuk mengakses informasi pribadi Anda",
            "Hak untuk memperbaiki data yang tidak akurat",
            "Hak untuk meminta penghapusan data Anda",
            "Hak untuk membatasi atau menolak pemrosesan",
            "Hak atas portabilitas data",
            "Hak untuk menarik persetujuan"
          ]
        },
        {
          title: "7. Hubungi Kami",
          text: "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:",
          address: "Email: privacy@nexbusiness.id\nAlamat: Sinbad Green Residence Blok C1 No 64, Sindang Barang, Bogor Barat, Kota Bogor, Indonesia 16117"
        }
      ],
      backBtn: "Kembali ke Beranda"
    }
  };

  const current = content[lang] || content.EN;

  return (
    <div>
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
