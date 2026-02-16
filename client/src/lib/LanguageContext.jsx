import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
    EN: {
        // Navbar
        products: "Products",
        pricing: "Pricing",
        about: "About",
        contact: "Contact",
        signIn: "Sign In",
        getStarted: "Get Started",
        searchPlaceholder: "Search apps... (e.g. CRM, invoicing)",

        // Footer
        tagline: "Scaling Business to the Nex Level.",
        footerDesc: "The operating system for your business. 30+ integrated apps to run your entire company.",
        company: "Company",
        resources: "Resources",
        support: "Support",
        aboutUs: "About Us",
        careers: "Careers",
        press: "Press",
        documentation: "Documentation",
        blog: "Blog",
        community: "Community",
        partners: "Partners",
        helpCenter: "Help Center",
        status: "Status",
        apiDocs: "API Docs",
        security: "Security",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
        allRightsReserved: "All rights reserved.",

        // Home
        heroTitle: "The Operating System for",
        heroHighlight: "Your Business",
        heroDesc: "Run your entire company with one unified platform. 30+ integrated business applications for sales, marketing, finance, HR, and more.",
        exploreApps: "Explore All Apps",
        viewPricing: "View Pricing",
        featuredApps: "Featured Applications",
        featuredDesc: "Discover our most popular tools, each designed to streamline a critical part of your business.",
        viewAllApps: "View all 30+ applications",
        whyChoose: "Why Choose NexBusiness?",
        whyDesc: "We're not just another suite of tools — we're a unified business platform built from the ground up to work together.",
        trustedBy: "Trusted by Growing Businesses",
        readyToTransform: "Ready to Transform Your Business?",
        joinThousands: "Join thousands of companies using NexBusiness to streamline their operations and accelerate growth.",
        startTrial: "Start Free Trial",
        comparePlans: "Compare Plans",
        trialFeature1: "14-day free trial",
        trialFeature2: "No credit card required",
        trialFeature3: "Cancel anytime",

        // Contact
        contactTitle: "Get in Touch",
        contactDesc: "Have a question, need a demo, or want to discuss how NexBusiness can help your team? We'd love to hear from you.",
        sendMessage: "Send us a Message",
        fullName: "Full Name",
        emailAddress: "Email Address",
        subject: "Subject",
        message: "Message",
        sendBtn: "Send Message",
        loading: "Sending...",
        successMsg: "Message Sent!",
        successDesc: "Thank you for reaching out. Our team will get back to you within 24 hours.",
        sendAnother: "Send another message",
        office: "Office",
        phone: "Phone",
        businessHours: "Business Hours",
        supportHead: "Looking for support?",
        supportDesc: "Our help center has answers to the most common questions.",
        visitHelp: "Visit Help Center",
        bogorOffice: "Our Bogor Office",
    },
    ID: {
        // Navbar
        products: "Produk",
        pricing: "Harga",
        about: "Tentang",
        contact: "Kontak",
        signIn: "Masuk",
        getStarted: "Mulai Sekarang",
        searchPlaceholder: "Cari aplikasi... (misalnya CRM, penagihan)",

        // Footer
        tagline: "Meningkatkan Bisnis ke Level Selanjutnya.",
        footerDesc: "Sistem operasi untuk bisnis Anda. 30+ aplikasi terintegrasi untuk menjalankan seluruh perusahaan Anda.",
        company: "Perusahaan",
        resources: "Sumber Daya",
        support: "Dukungan",
        aboutUs: "Tentang Kami",
        careers: "Karir",
        press: "Pers",
        documentation: "Dokumentasi",
        blog: "Blog",
        community: "Komunitas",
        partners: "Mitra",
        helpCenter: "Pusat Bantuan",
        status: "Status",
        apiDocs: "Dokumentasi API",
        security: "Keamanan",
        privacyPolicy: "Kebijakan Privasi",
        termsOfService: "Ketentuan Layanan",
        cookiePolicy: "Kebijakan Cookie",
        allRightsReserved: "Seluruh hak cipta dilindungi undang-undang.",

        // Home
        heroTitle: "Sistem Operasi untuk",
        heroHighlight: "Bisnis Anda",
        heroDesc: "Jalankan seluruh perusahaan Anda dengan satu platform terpadu. 30+ aplikasi bisnis terintegrasi untuk penjualan, pemasaran, keuangan, HR, dan lainnya.",
        exploreApps: "Jelajahi Semua Aplikasi",
        viewPricing: "Lihat Harga",
        featuredApps: "Aplikasi Unggulan",
        featuredDesc: "Temukan alat paling populer kami, masing-masing dirancang untuk merampingkan bagian penting dari bisnis Anda.",
        viewAllApps: "Lihat semua 30+ aplikasi",
        whyChoose: "Mengapa Memilih NexBusiness?",
        whyDesc: "Kami bukan hanya sekumpulan alat — kami adalah platform bisnis terpadu yang dibangun dari awal untuk bekerja sama.",
        trustedBy: "Dipercaya oleh Bisnis yang Berkembang",
        readyToTransform: "Siap Mentransformasi Bisnis Anda?",
        joinThousands: "Bergabunglah dengan ribuan perusahaan yang menggunakan NexBusiness untuk merampingkan operasi mereka dan mempercepat pertumbuhan.",
        startTrial: "Mulai Uji Coba Gratis",
        comparePlans: "Bandingkan Paket",
        trialFeature1: "Uji coba gratis 14 hari",
        trialFeature2: "Tidak perlu kartu kredit",
        trialFeature3: "Batalkan kapan saja",

        // Contact
        contactTitle: "Hubungi Kami",
        contactDesc: "Punya pertanyaan, butuh demo, atau ingin mendiskusikan bagaimana NexBusiness dapat membantu tim Anda? Kami akan senang mendengar dari Anda.",
        sendMessage: "Kirim Pesan",
        fullName: "Nama Lengkap",
        emailAddress: "Alamat Email",
        subject: "Subjek",
        message: "Pesan",
        sendBtn: "Kirim Pesan",
        loading: "Mengirim...",
        successMsg: "Pesan Terkirim!",
        successDesc: "Terima kasih telah menghubungi kami. Tim kami akan menghubungi Anda dalam waktu 24 jam.",
        sendAnother: "Kirim pesan lain",
        office: "Kantor",
        phone: "Telepon",
        businessHours: "Jam Kerja",
        supportHead: "Mencari dukungan?",
        supportDesc: "Pusat bantuan kami memiliki jawaban untuk pertanyaan yang paling umum.",
        visitHelp: "Kunjungi Pusat Bantuan",
        bogorOffice: "Kantor Bogor Kami",
    }
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("EN");

    const t = (key) => {
        return translations[lang][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
