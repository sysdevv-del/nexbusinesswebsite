import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/LanguageContext";

export default function TermsOfService() {
  const { lang, t } = useLanguage();

  const content = {
    EN: {
      title: "Terms of Service",
      lastUpdated: "Last updated: February 15, 2026",
      intro: "Welcome to NexBusiness. These Terms of Service govern your use of our platform, products, and services. By accessing or using NexBusiness, you agree to be bound by these terms.",
      sections: [
        {
          title: "1. Acceptance of Terms",
          text: "By creating an account or using any NexBusiness services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services."
        },
        {
          title: "2. Account Registration",
          text: "To use certain features of the platform, you must register for an account. You agree to:",
          list: [
            "Provide accurate, current, and complete information during registration",
            "Maintain and promptly update your account information",
            "Keep your password secure and confidential",
            "Accept responsibility for all activities that occur under your account",
            "Notify us immediately of any unauthorized use of your account"
          ]
        },
        {
          title: "3. Use of Services",
          text: "You agree to use NexBusiness services only for lawful purposes. You may not:",
          list: [
            "Violate any applicable laws or regulations",
            "Infringe upon the rights of others",
            "Attempt to gain unauthorized access to any part of the platform",
            "Interfere with or disrupt the integrity or performance of the services",
            "Use the platform to transmit malicious code or harmful content",
            "Resell or redistribute the services without authorization"
          ]
        },
        {
          title: "4. Subscription and Payment",
          text: "Certain NexBusiness services require a paid subscription. By subscribing, you agree to pay the applicable fees as described on our pricing page. Subscriptions automatically renew unless cancelled before the renewal date. All fees are non-refundable except as required by law."
        },
        {
          title: "5. Intellectual Property",
          text: "The NexBusiness platform, including all software, content, designs, logos, and trademarks, is the property of NexBusiness and is protected by intellectual property laws. You are granted a limited license to use the platform for your business purposes."
        },
        {
          title: "6. Data Ownership",
          text: "You retain ownership of all data you submit to the platform. By using our services, you grant NexBusiness a limited license to process your data as necessary to provide the services."
        },
        {
          title: "7. Service Availability",
          text: "We strive to maintain 99.9% uptime for our services. However, we do not guarantee uninterrupted access and may perform scheduled maintenance with advance notice."
        },
        {
          title: "8. Limitation of Liability",
          text: "To the maximum extent permitted by law, NexBusiness shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the services."
        },
        {
          title: "9. Termination",
          text: "We may suspend or terminate your access to the services at any time for violation of these terms. Upon termination, your right to use the services ceases immediately."
        },
        {
          title: "10. Changes to Terms",
          text: "We reserve the right to modify these terms at any time. We will notify you of material changes via email or through the platform."
        },
        {
          title: "11. Contact",
          text: "For questions about these Terms of Service, please contact us at:",
          address: "Email: legal@nexbusiness.id\nAddress: Sinbad Green Residence Blok C1 No 64, Sindang Barang, Bogor Barat, Kota Bogor, Indonesia 16117"
        }
      ],
      backBtn: "Back to Home"
    },
    ID: {
      title: "Ketentuan Layanan",
      lastUpdated: "Terakhir diperbarui: 15 Februari 2026",
      intro: "Selamat datang di NexBusiness. Ketentuan Layanan ini mengatur penggunaan Anda atas platform, produk, dan layanan kami. Dengan mengakses atau menggunakan NexBusiness, Anda setuju untuk terikat oleh ketentuan ini.",
      sections: [
        {
          title: "1. Penerimaan Ketentuan",
          text: "Dengan membuat akun atau menggunakan layanan NexBusiness apa pun, Anda mengakui bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh Ketentuan Layanan ini dan Kebijakan Privasi kami. Jika Anda tidak setuju dengan ketentuan ini, Anda tidak diperbolehkan menggunakan layanan kami."
        },
        {
          title: "2. Pendaftaran Akun",
          text: "Untuk menggunakan fitur tertentu dari platform, Anda harus mendaftar untuk sebuah akun. Anda setuju untuk:",
          list: [
            "Memberikan informasi yang akurat, terkini, dan lengkap selama pendaftaran",
            "Memelihara dan segera memperbarui informasi akun Anda",
            "Menjaga keamanan dan kerahasiaan kata sandi Anda",
            "Menerima tanggung jawab atas semua aktivitas yang terjadi di bawah akun Anda",
            "Segera memberi tahu kami tentang penggunaan akun Anda yang tidak sah"
          ]
        },
        {
          title: "3. Penggunaan Layanan",
          text: "Anda setuju untuk menggunakan layanan NexBusiness hanya untuk tujuan yang sah. Anda tidak diperbolehkan:",
          list: [
            "Melanggar hukum atau peraturan yang berlaku",
            "Melanggar hak-hak orang lain",
            "Mencoba mendapatkan akses tidak sah ke bagian mana pun dari platform",
            "Mengganggu atau mengacaukan integritas atau kinerja layanan",
            "Menggunakan platform untuk mengirimkan kode berbahaya atau konten berbahaya",
            "Menjual kembali atau mendistribusikan ulang layanan tanpa izin"
          ]
        },
        {
          title: "4. Langganan dan Pembayaran",
          text: "Layanan NexBusiness tertentu memerlukan langganan berbayar. Dengan berlangganan, Anda setuju untuk membayar biaya yang berlaku seperti yang dijelaskan pada halaman harga kami. Langganan diperpanjang secara otomatis kecuali dibatalkan sebelum tanggal perpanjangan. Semua biaya tidak dapat dikembalikan kecuali diwajibkan oleh hukum."
        },
        {
          title: "5. Kekayaan Intelektual",
          text: "Platform NexBusiness, termasuk semua perangkat lunak, konten, desain, logo, dan merek dagang, adalah milik NexBusiness dan dilindungi oleh undang-undang kekayaan intelektual. Anda diberikan lisensi terbatas untuk menggunakan platform ini untuk tujuan bisnis Anda."
        },
        {
          title: "6. Kepemilikan Data",
          text: "Anda tetap memiliki kepemilikan atas semua data yang Anda kirimkan ke platform. Dengan menggunakan layanan kami, Anda memberikan NexBusiness lisensi terbatas untuk memproses data Anda sebagaimana diperlukan untuk menyediakan layanan."
        },
        {
          title: "7. Ketersediaan Layanan",
          text: "Kami berusaha untuk mempertahankan 99,9% waktu aktif untuk layanan kami. Namun, kami tidak menjamin akses tanpa gangguan dan dapat melakukan pemeliharaan terjadwal dengan pemberitahuan sebelumnya."
        },
        {
          title: "8. Batasan Tanggung Jawab",
          text: "Sejauh diizinkan oleh hukum, NexBusiness tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau punitif yang dihasilkan dari penggunaan layanan Anda."
        },
        {
          title: "9. Penghentian",
          text: "Kami dapat menangguhkan atau menghentikan akses Anda ke layanan kapan saja karena pelanggaran ketentuan ini. Setelah penghentian, hak Anda untuk menggunakan layanan segera berakhir."
        },
        {
          title: "10. Perubahan Ketentuan",
          text: "Kami berhak mengubah ketentuan ini kapan saja. Kami akan memberi tahu Anda tentang perubahan material melalui email atau melalui platform."
        },
        {
          title: "11. Kontak",
          text: "Untuk pertanyaan tentang Ketentuan Layanan ini, silakan hubungi kami di:",
          address: "Email: legal@nexbusiness.id\nAlamat: Sinbad Green Residence Blok C1 No 64, Sindang Barang, Bogor Barat, Kota Bogor, Indonesia 16117"
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
              <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">{section.title}</h2>
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
