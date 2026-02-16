import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

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

        // Pricing
        pricingHeroTitle: "Simple, Transparent Pricing",
        pricingHeroDesc: "Flexible pricing based on the apps you choose, number of users, and storage needs. Start with what you need and scale as you grow.",
        pricingDisclaimer: "Note: Final price varies based on specific application selection and add-ons.",
        mostPopular: "Most Popular",
        perUserMonth: "/user/month",
        howPricingWorks: "How Our Pricing Works",
        pricingStep1Title: "Select Apps",
        pricingStep1Desc: "Pay only for the applications your business needs.",
        pricingStep2Title: "Add Users",
        pricingStep2Desc: "Pricing scales with your team size.",
        pricingStep3Title: "Storage & Extras",
        pricingStep3Desc: "Add more storage or premium features as required.",
        faqTitle: "Frequently Asked Questions",
        customPlanTitle: "Need a Custom Plan?",
        customPlanDesc: "For organizations with 100+ users or specific requirements, we offer custom enterprise plans.",
        contactSales: "Contact Sales",
        planStarter: "Starter",
        planProfessional: "Professional",
        planEnterprise: "Enterprise",
        starterDesc: "Perfect for small teams getting started",
        professionalDesc: "Ideal for growing businesses",
        enterpriseDesc: "For large organizations with complex needs",

        // About
        aboutHeroTitle: "Building the Future of Business Software",
        aboutHeroDesc: "We believe every business deserves access to powerful, integrated tools. NexBusiness is on a mission to create the operating system that helps companies of all sizes work smarter, not harder.",
        ourStoryTitle: "Our Story",
        ourStoryP1: "NexBusiness was born from a simple frustration: running a business shouldn't require stitching together dozens of disconnected software tools. Our founders experienced this firsthand while scaling their previous companies.",
        ourStoryP2: "We set out to build a unified platform where every business application — from CRM and accounting to HR and project management — works seamlessly together. No more data silos, no more integration headaches, no more context switching.",
        ourStoryP3: "Today, over 50,000 companies across 150+ countries trust NexBusiness to run their operations. And we're just getting started.",
        ourValuesTitle: "Our Values",
        ourJourneyTitle: "Our Journey",
        joinTeamTitle: "Join Our Team",
        joinTeamDesc: "We're always looking for talented people who share our passion for building great software.",
        openPositions: "View Open Positions",
        companies: "Companies",
        teamMembers: "Team Members",
        countries: "Countries",
        products: "Products",

        // App Center
        appCenterTitle: "App Center",
        appCenterDesc: "Browse our complete suite of 30+ business applications. Find the perfect tools to power every part of your organization.",
        categories: "Categories",
        allProducts: "All Products",
        noAppsFound: "No apps found matching your search.",
        popularBadge: "Popular",
        all: "All",
        apps_count: "apps",
        learnMore: "Learn more",

        // App Detail
        appNotFound: "App Not Found",
        appNotFoundDesc: "The app you're looking for doesn't exist.",
        browseAllApps: "Browse all apps",
        requestDemo: "Request Demo",
        aboutApp: "About",
        appPreview: "Application Preview",
        whyChooseApp: "Why choose",
        keyFeatures: "Key Features",
        getStartedToday: "Get Started Today",
        tryFree: "Try free for 14 days. No credit card required.",
        details: "Details",
        category: "Category",
        platform: "Platform",
        rating: "Rating",
        relatedApps: "Related Apps in",
        marketplace: "Marketplace",
        suite: "Suite",

        // Categories
        all: "All",
        sales: "Sales",
        marketing: "Marketing",
        commerce: "Commerce",
        "customer-support": "Customer Support",
        finance: "Finance",
        "email-collaboration": "Email & Collaboration",
        "human-resources": "Human Resources",
        legal: "Legal",
        "security-it": "Security & IT",
        "bi-analytics": "BI & Analytics",
        "project-management": "Project Management",
        "developer-platform": "Developer Platform",
        iot: "IoT",
        productivity: "Productivity",
        crm: "CRM",
        operations: "Operations",
        analytics: "Analytics",
        hr: "HR",

        // Blog
        blogHeroTitle: "Blog",
        blogHeroDesc: "Insights, tips, and best practices for running a smarter business with integrated apps.",
        loadingArticles: "Loading articles...",
        noArticlesFound: "No articles found in this category.",
        moreSoon: "More articles coming soon. Stay tuned!",
        backToBlog: "Back to Blog",
        articleNotFound: "Article not found",
        viewAllResults: "View all results for",
        noAppsFoundFor: "No apps found for",
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

        // Pricing
        pricingHeroTitle: "Harga yang Sederhana dan Transparan",
        pricingHeroDesc: "Harga fleksibel berdasarkan aplikasi yang Anda pilih, jumlah pengguna, dan kebutuhan penyimpanan. Mulai dengan yang Anda butuhkan dan skalakan seiring pertumbuhan Anda.",
        pricingDisclaimer: "Catatan: Harga akhir bervariasi berdasarkan pemilihan aplikasi spesifik dan tambahan.",
        mostPopular: "Paling Populer",
        perUserMonth: "/pengguna/bulan",
        howPricingWorks: "Cara Kerja Harga Kami",
        pricingStep1Title: "Pilih Aplikasi",
        pricingStep1Desc: "Bayar hanya untuk aplikasi yang dibutuhkan bisnis Anda.",
        pricingStep2Title: "Tambah Pengguna",
        pricingStep2Desc: "Harga menyesuaikan dengan ukuran tim Anda.",
        pricingStep3Title: "Penyimpanan & Tambahan",
        pricingStep3Desc: "Tambahkan penyimpanan atau fitur premium sesuai kebutuhan.",
        faqTitle: "Pertanyaan yang Sering Diajukan",
        customPlanTitle: "Butuh Paket Khusus?",
        customPlanDesc: "Untuk organisasi dengan 100+ pengguna atau persyaratan khusus, kami menawarkan paket enterprise khusus.",
        contactSales: "Hubungi Penjualan",
        planStarter: "Starter",
        planProfessional: "Professional",
        planEnterprise: "Enterprise",
        starterDesc: "Sempurna untuk tim kecil yang baru memulai",
        professionalDesc: "Ideal untuk bisnis yang sedang berkembang",
        enterpriseDesc: "Untuk organisasi besar dengan kebutuhan kompleks",

        // About
        aboutHeroTitle: "Membangun Masa Depan Perangkat Lunak Bisnis",
        aboutHeroDesc: "Kami percaya setiap bisnis layak mendapatkan akses ke alat yang kuat dan terintegrasi. NexBusiness memiliki misi untuk menciptakan sistem operasi yang membantu perusahaan dari segala ukuran bekerja lebih cerdas, bukan lebih keras.",
        ourStoryTitle: "Cerita Kami",
        ourStoryP1: "NexBusiness lahir dari rasa frustrasi yang sederhana: menjalankan bisnis seharusnya tidak memerlukan penggabungan lusinan perangkat lunak yang tidak terhubung. Pendiri kami mengalami hal ini secara langsung saat mengembangkan perusahaan mereka sebelumnya.",
        ourStoryP2: "Kami berangkat untuk membangun platform terpadu di mana setiap aplikasi bisnis — mulai dari CRM dan akuntansi hingga HR dan manajemen proyek — bekerja bersama dengan mulus. Tidak ada lagi silo data, tidak ada lagi masalah integrasi, tidak ada lagi perpindahan konteks.",
        ourStoryP3: "Hari ini, lebih dari 50.000 perusahaan di 150+ negara mempercayai NexBusiness untuk menjalankan operasi mereka. Dan kami baru saja memulai.",
        ourValuesTitle: "Nilai-Nilai Kami",
        ourJourneyTitle: "Perjalanan Kami",
        joinTeamTitle: "Bergabung dengan Tim Kami",
        joinTeamDesc: "Kami selalu mencari orang-orang berbakat yang berbagi hasrat kami dalam membangun perangkat lunak hebat.",
        openPositions: "Lihat Posisi Terbuka",
        companies: "Perusahaan",
        teamMembers: "Anggota Team",
        countries: "Negara",
        products: "Produk",

        // App Center
        appCenterTitle: "Pusat Aplikasi",
        appCenterDesc: "Telusuri rangkaian lengkap 30+ aplikasi bisnis kami. Temukan alat yang sempurna untuk memberdayakan setiap bagian dari organisasi Anda.",
        categories: "Kategori",
        allProducts: "Semua Produk",
        noAppsFound: "Tidak ada aplikasi yang ditemukan sesuai dengan pencarian Anda.",
        popularBadge: "Populer",
        all: "Semua",
        apps_count: "aplikasi",
        learnMore: "Pelajari lebih lanjut",

        // App Detail
        appNotFound: "Aplikasi Tidak Ditemukan",
        appNotFoundDesc: "Aplikasi yang Anda cari tidak ada.",
        browseAllApps: "Telusuri semua aplikasi",
        requestDemo: "Minta Demo",
        aboutApp: "Tentang",
        appPreview: "Pratinjau Aplikasi",
        whyChooseApp: "Mengapa memilih",
        keyFeatures: "Fitur Utama",
        getStartedToday: "Mulai Hari Ini",
        tryFree: "Coba gratis selama 14 hari. Tidak perlu kartu kredit.",
        details: "Detail",
        category: "Kategori",
        platform: "Platform",
        rating: "Peringkat",
        relatedApps: "Aplikasi Terkait di",
        marketplace: "Marketplace",
        suite: "Suite",

        // Categories
        all: "Semua",
        sales: "Penjualan",
        marketing: "Pemasaran",
        commerce: "Perdagangan",
        "customer-support": "Dukungan Pelanggan",
        finance: "Keuangan",
        "email-collaboration": "Email & Kolaborasi",
        "human-resources": "Sumber Daya Manusia",
        legal: "Hukum",
        "security-it": "Keamanan & IT",
        "bi-analytics": "BI & Analitik",
        "project-management": "Manajemen Proyek",
        "developer-platform": "Platform Pengembang",
        iot: "IoT",
        productivity: "Produktivitas",
        crm: "CRM",
        operations: "Operasi",
        analytics: "Analitik",
        hr: "HR",

        // Blog
        blogHeroTitle: "Blog",
        blogHeroDesc: "Wawasan, tips, dan praktik terbaik untuk menjalankan bisnis yang lebih cerdas dengan aplikasi terintegrasi.",
        loadingArticles: "Memuat artikel...",
        noArticlesFound: "Tidak ada artikel ditemukan dalam kategori ini.",
        moreSoon: "Lebih banyak artikel segera hadir. Tetaplah disini!",
        backToBlog: "Kembali ke Blog",
        articleNotFound: "Artikel tidak ditemukan",
        viewAllResults: "Lihat semua hasil untuk",
        noAppsFoundFor: "Tidak ada aplikasi ditemukan untuk",
    }
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        const stored = localStorage.getItem("nex_lang");
        if (stored === "ID" || stored === "id") return "ID";
        return "EN";
    });

    useEffect(() => {
        localStorage.setItem("nex_lang", lang);
        document.documentElement.lang = lang === "EN" ? "en" : "id";
    }, [lang]);

    const t = useCallback((key) => {
        const langTranslations = translations[lang];
        if (!langTranslations) return translations["EN"][key] || key;
        return langTranslations[key] || translations["EN"][key] || key;
    }, [lang]);

    const contextValue = useMemo(() => ({
        lang,
        setLang,
        t
    }), [lang, t]);

    return (
        <LanguageContext.Provider value={contextValue}>
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
