const pool = require("./db");
require("dotenv").config();

async function seed() {
  try {
    console.log("Seeding database...");

    await pool.query(`
      DROP TABLE IF EXISTS apps CASCADE;
      DROP TABLE IF EXISTS categories CASCADE;
    `);

    await pool.query(`
      CREATE TABLE categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        slug VARCHAR(100) UNIQUE NOT NULL,
        icon VARCHAR(50),
        sort_order INT DEFAULT 0
      );

      CREATE TABLE apps (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        slug VARCHAR(100) UNIQUE NOT NULL,
        tagline VARCHAR(255),
        description TEXT,
        icon VARCHAR(50),
        color VARCHAR(20),
        category_id INT REFERENCES categories(id),
        is_featured BOOLEAN DEFAULT false,
        is_suite BOOLEAN DEFAULT false,
        features TEXT[],
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    const categories = [
      { name: "Sales", slug: "sales", icon: "TrendingUp", sort_order: 1 },
      { name: "Marketing", slug: "marketing", icon: "Megaphone", sort_order: 2 },
      { name: "Commerce", slug: "commerce", icon: "ShoppingCart", sort_order: 3 },
      { name: "Customer Support", slug: "customer-support", icon: "Headphones", sort_order: 4 },
      { name: "Finance", slug: "finance", icon: "DollarSign", sort_order: 5 },
      { name: "Email & Collaboration", slug: "email-collaboration", icon: "Mail", sort_order: 6 },
      { name: "Human Resources", slug: "human-resources", icon: "Users", sort_order: 7 },
      { name: "Legal", slug: "legal", icon: "Scale", sort_order: 8 },
      { name: "Security & IT", slug: "security-it", icon: "Shield", sort_order: 9 },
      { name: "BI & Analytics", slug: "bi-analytics", icon: "BarChart3", sort_order: 10 },
      { name: "Project Management", slug: "project-management", icon: "FolderKanban", sort_order: 11 },
      { name: "Developer Platform", slug: "developer-platform", icon: "Code", sort_order: 12 },
      { name: "IoT", slug: "iot", icon: "Wifi", sort_order: 13 },
    ];

    for (const cat of categories) {
      await pool.query(
        "INSERT INTO categories (name, slug, icon, sort_order) VALUES ($1, $2, $3, $4)",
        [cat.name, cat.slug, cat.icon, cat.sort_order]
      );
    }

    const apps = [
      { name: "NexCRM", slug: "nexcrm", tagline: "Convert leads and close deals faster", description: "A comprehensive CRM platform that helps you manage your sales pipeline, track customer interactions, and close deals more efficiently. NexCRM provides powerful automation tools, detailed analytics, and seamless integrations to supercharge your sales team.", icon: "Target", color: "#e74c3c", category: "sales", featured: true, features: ["Lead Management", "Pipeline Tracking", "Email Integration", "Sales Analytics", "Contact Management", "Deal Forecasting", "Task Automation", "Mobile CRM"] },
      { name: "NexFlow", slug: "nexflow", tagline: "Automate your business workflows effortlessly", description: "NexFlow is a powerful workflow automation platform that streamlines your business processes. Build custom workflows with drag-and-drop simplicity, connect your favorite apps, and eliminate repetitive tasks. From approval chains to data synchronization, NexFlow handles it all.", icon: "Workflow", color: "#3498db", category: "sales", featured: true, features: ["Visual Workflow Builder", "Conditional Logic", "App Integrations", "Approval Workflows", "Real-time Notifications", "Audit Trails", "Template Library", "API Access"] },
      { name: "NexSign", slug: "nexsign", tagline: "Digital signatures for modern business", description: "Send, sign, and manage documents digitally with NexSign. Get legally binding signatures from anywhere in the world. Streamline your document workflow with templates, bulk sending, and automated reminders.", icon: "PenTool", color: "#2ecc71", category: "sales", featured: false, features: ["E-Signatures", "Document Templates", "Bulk Sending", "Audit Trail", "Mobile Signing", "Team Management", "API Integration", "Compliance"] },
      { name: "NexForms", slug: "nexforms", tagline: "Build online forms for every need", description: "Create professional online forms, surveys, and questionnaires with NexForms. Collect data, payments, and file uploads with ease. Powerful form logic and integrations make data collection seamless.", icon: "FileText", color: "#9b59b6", category: "sales", featured: false, features: ["Drag-and-Drop Builder", "Conditional Logic", "Payment Collection", "File Uploads", "Analytics Dashboard", "Email Notifications", "Custom Themes", "Embed Options"] },
      { name: "NexChat", slug: "nexchat", tagline: "Live chat for customer engagement", description: "Engage website visitors in real-time with NexChat. Convert visitors into customers with proactive chat triggers, chatbots, and detailed visitor tracking. Integrate with your CRM for a complete customer view.", icon: "MessageSquare", color: "#e67e22", category: "sales", featured: false, features: ["Live Chat Widget", "Chatbot Builder", "Visitor Tracking", "Proactive Triggers", "Chat Analytics", "CRM Integration", "Canned Responses", "File Sharing"] },
      { name: "NexBookings", slug: "nexbookings", tagline: "Online appointment scheduling made easy", description: "Let your customers book appointments online with NexBookings. Sync with your calendar, send automated reminders, and reduce no-shows. Perfect for consultations, demos, and service appointments.", icon: "Calendar", color: "#1abc9c", category: "sales", featured: false, features: ["Online Booking Page", "Calendar Sync", "Automated Reminders", "Buffer Times", "Team Scheduling", "Payment Integration", "Custom Fields", "Reporting"] },

      { name: "NexCampaigns", slug: "nexcampaigns", tagline: "Email marketing that drives results", description: "Create, send, and track email campaigns that convert. NexCampaigns offers powerful automation, A/B testing, and detailed analytics to help you reach your audience effectively.", icon: "Send", color: "#e74c3c", category: "marketing", featured: true, features: ["Email Builder", "Marketing Automation", "A/B Testing", "List Segmentation", "Campaign Analytics", "Template Library", "Drip Campaigns", "Personalization"] },
      { name: "NexSocial", slug: "nexsocial", tagline: "Manage all your social media in one place", description: "Schedule posts, monitor mentions, and analyze performance across all social media platforms. NexSocial helps you maintain a consistent brand presence and engage with your audience effectively.", icon: "Share2", color: "#3498db", category: "marketing", featured: false, features: ["Multi-Platform Posting", "Content Calendar", "Social Listening", "Analytics Dashboard", "Team Collaboration", "Content Library", "Auto-Scheduling", "Report Generation"] },
      { name: "NexSurvey", slug: "nexsurvey", tagline: "Gather insights with powerful surveys", description: "Create engaging surveys and collect actionable feedback. NexSurvey offers advanced question types, branching logic, and comprehensive analytics to help you understand your audience.", icon: "ClipboardList", color: "#9b59b6", category: "marketing", featured: false, features: ["Survey Builder", "Question Branching", "Response Analytics", "Custom Branding", "Email Distribution", "Real-time Results", "Export Options", "Template Gallery"] },

      { name: "NexStore", slug: "nexstore", tagline: "Launch your online store in minutes", description: "Build a beautiful, fully-featured online store with NexStore. From product management to payment processing, everything you need to sell online is included.", icon: "Store", color: "#2ecc71", category: "commerce", featured: true, features: ["Product Management", "Shopping Cart", "Payment Gateway", "Inventory Tracking", "Order Management", "Shipping Integration", "SEO Tools", "Mobile Responsive"] },
      { name: "NexPay", slug: "nexpay", tagline: "Accept payments anywhere, anytime", description: "Process payments securely with NexPay. Support for credit cards, digital wallets, and bank transfers. Get paid faster with automated invoicing and recurring billing.", icon: "CreditCard", color: "#e67e22", category: "commerce", featured: false, features: ["Payment Processing", "Digital Wallets", "Recurring Billing", "Invoice Generation", "PCI Compliance", "Multi-Currency", "Payment Links", "Fraud Detection"] },

      { name: "NexDesk", slug: "nexdesk", tagline: "Deliver exceptional customer support", description: "Manage customer tickets, build a knowledge base, and provide multi-channel support with NexDesk. Empower your support team with automation, SLA tracking, and detailed performance metrics.", icon: "Headphones", color: "#3498db", category: "customer-support", featured: true, features: ["Ticket Management", "Knowledge Base", "Multi-Channel Support", "SLA Tracking", "Automation Rules", "Customer Portal", "Agent Collaboration", "Performance Reports"] },
      { name: "NexAssist", slug: "nexassist", tagline: "AI-powered customer assistance", description: "Deploy intelligent chatbots and virtual assistants to handle customer queries 24/7. NexAssist uses AI to provide instant answers, route complex issues, and continuously improve from interactions.", icon: "Bot", color: "#9b59b6", category: "customer-support", featured: false, features: ["AI Chatbot", "Intent Recognition", "Knowledge Integration", "Human Handoff", "Conversation Analytics", "Multi-Language", "Custom Training", "API Access"] },

      { name: "NexBooks", slug: "nexbooks", tagline: "Smart accounting for growing businesses", description: "Manage your finances with ease using NexBooks. From invoicing and expense tracking to financial reports and tax compliance, NexBooks keeps your books in order so you can focus on growing your business.", icon: "BookOpen", color: "#2ecc71", category: "finance", featured: true, features: ["Invoicing", "Expense Tracking", "Bank Reconciliation", "Financial Reports", "Tax Compliance", "Multi-Currency", "Project Billing", "Recurring Invoices"] },
      { name: "NexExpense", slug: "nexexpense", tagline: "Effortless expense management", description: "Simplify expense reporting and approval with NexExpense. Snap receipts, auto-categorize expenses, and get reimbursed faster. Managers get full visibility into team spending.", icon: "Receipt", color: "#e74c3c", category: "finance", featured: false, features: ["Receipt Scanning", "Auto-Categorization", "Approval Workflows", "Policy Compliance", "Mileage Tracking", "Corporate Cards", "Analytics", "Integration"] },
      { name: "NexPayroll", slug: "nexpayroll", tagline: "Payroll processing made simple", description: "Run payroll accurately and on time with NexPayroll. Automatic tax calculations, direct deposits, and compliance management make payroll effortless.", icon: "Wallet", color: "#3498db", category: "finance", featured: false, features: ["Payroll Processing", "Tax Calculations", "Direct Deposit", "Pay Stubs", "Tax Filing", "Benefits Management", "Time Integration", "Compliance"] },

      { name: "NexMail", slug: "nexmail", tagline: "Professional email for your business", description: "Get professional email hosting with your domain. NexMail offers a clean, fast interface with powerful features like calendar integration, file sharing, and advanced search.", icon: "Mail", color: "#e67e22", category: "email-collaboration", featured: true, features: ["Custom Domain Email", "Calendar Integration", "File Attachments", "Contact Management", "Spam Protection", "Email Filters", "Mobile Apps", "Admin Controls"] },
      { name: "NexMeet", slug: "nexmeet", tagline: "Video meetings and webinars", description: "Host crystal-clear video meetings and webinars with NexMeet. Screen sharing, recording, virtual backgrounds, and breakout rooms make remote collaboration seamless.", icon: "Video", color: "#3498db", category: "email-collaboration", featured: false, features: ["HD Video Calls", "Screen Sharing", "Meeting Recording", "Virtual Backgrounds", "Breakout Rooms", "Webinar Mode", "Calendar Integration", "Chat"] },
      { name: "NexDocs", slug: "nexdocs", tagline: "Collaborate on documents in real-time", description: "Create, edit, and collaborate on documents, spreadsheets, and presentations in real-time. NexDocs keeps your team aligned with version history, comments, and sharing controls.", icon: "FileEdit", color: "#2ecc71", category: "email-collaboration", featured: false, features: ["Document Editor", "Spreadsheets", "Presentations", "Real-time Collaboration", "Version History", "Comments", "Sharing Controls", "Templates"] },

      { name: "NexHR", slug: "nexhr", tagline: "Complete HR management platform", description: "Manage your entire employee lifecycle with NexHR. From recruitment and onboarding to performance reviews and offboarding, NexHR streamlines every HR process.", icon: "Users", color: "#9b59b6", category: "human-resources", featured: true, features: ["Employee Database", "Leave Management", "Attendance Tracking", "Performance Reviews", "Recruitment", "Onboarding", "Training Management", "HR Analytics"] },
      { name: "NexRecruit", slug: "nexrecruit", tagline: "Find and hire the best talent", description: "Streamline your hiring process with NexRecruit. Post jobs, track applicants, schedule interviews, and collaborate with your hiring team all in one place.", icon: "UserPlus", color: "#1abc9c", category: "human-resources", featured: false, features: ["Job Posting", "Applicant Tracking", "Interview Scheduling", "Resume Parsing", "Hiring Pipeline", "Team Collaboration", "Offer Management", "Career Page"] },

      { name: "NexVault", slug: "nexvault", tagline: "Secure document management", description: "Store, manage, and share documents securely with NexVault. Advanced permissions, audit trails, and encryption keep your sensitive documents safe.", icon: "Lock", color: "#e74c3c", category: "legal", featured: false, features: ["Document Storage", "Access Controls", "Audit Trails", "Encryption", "Version Control", "E-Signatures", "Compliance", "Search"] },

      { name: "NexShield", slug: "nexshield", tagline: "Enterprise security management", description: "Protect your organization with NexShield. Monitor threats, manage access, and ensure compliance across your entire IT infrastructure.", icon: "Shield", color: "#34495e", category: "security-it", featured: false, features: ["Threat Monitoring", "Access Management", "Compliance Reporting", "Vulnerability Scanning", "Incident Response", "Policy Management", "Endpoint Security", "SIEM Integration"] },
      { name: "NexAdmin", slug: "nexadmin", tagline: "IT asset and device management", description: "Manage all your IT assets, devices, and software licenses from a single dashboard. NexAdmin helps IT teams maintain control over their infrastructure.", icon: "Monitor", color: "#3498db", category: "security-it", featured: false, features: ["Asset Tracking", "Device Management", "Software Licenses", "Remote Access", "Patch Management", "Inventory Reports", "Helpdesk Integration", "Compliance"] },

      { name: "NexAnalytics", slug: "nexanalytics", tagline: "Business intelligence for everyone", description: "Transform your data into actionable insights with NexAnalytics. Connect your data sources, build interactive dashboards, and make data-driven decisions with confidence.", icon: "BarChart3", color: "#e67e22", category: "bi-analytics", featured: true, features: ["Interactive Dashboards", "Data Connectors", "Custom Reports", "Real-time Analytics", "Data Visualization", "Scheduled Reports", "Embedded Analytics", "AI Insights"] },

      { name: "NexProject", slug: "nexproject", tagline: "Project management for modern teams", description: "Plan, track, and deliver projects on time with NexProject. Kanban boards, Gantt charts, time tracking, and team collaboration tools keep your projects on track.", icon: "FolderKanban", color: "#2ecc71", category: "project-management", featured: true, features: ["Kanban Boards", "Gantt Charts", "Time Tracking", "Task Dependencies", "Team Collaboration", "Resource Planning", "Milestones", "Project Reports"] },
      { name: "NexSprint", slug: "nexsprint", tagline: "Agile project management", description: "Manage agile sprints, backlogs, and releases with NexSprint. Built for development teams that follow Scrum or Kanban methodologies.", icon: "Zap", color: "#9b59b6", category: "project-management", featured: false, features: ["Sprint Planning", "Backlog Management", "Burndown Charts", "Story Points", "Release Tracking", "Retrospectives", "Integration with Git", "Custom Workflows"] },

      { name: "NexCreator", slug: "nexcreator", tagline: "Low-code application platform", description: "Build custom business applications without writing code. NexCreator's drag-and-drop builder lets you create apps, workflows, and integrations that perfectly fit your business needs.", icon: "Code", color: "#1abc9c", category: "developer-platform", featured: false, features: ["Drag-and-Drop Builder", "Pre-built Components", "Workflow Automation", "Database Integration", "API Builder", "Custom Scripts", "Mobile Apps", "Deployment"] },
      { name: "NexAPI", slug: "nexapi", tagline: "API management and integration hub", description: "Design, deploy, and manage APIs with NexAPI. A comprehensive API management platform for building and monitoring integrations between your applications.", icon: "Globe", color: "#3498db", category: "developer-platform", featured: false, features: ["API Design", "API Gateway", "Rate Limiting", "Analytics", "Developer Portal", "SDK Generation", "Testing Tools", "Version Management"] },

      { name: "NexIoT", slug: "nexiot", tagline: "IoT device management platform", description: "Connect, monitor, and manage your IoT devices at scale. NexIoT provides real-time monitoring, alerts, and analytics for your connected devices.", icon: "Wifi", color: "#e74c3c", category: "iot", featured: false, features: ["Device Management", "Real-time Monitoring", "Alerts & Notifications", "Data Analytics", "Remote Configuration", "OTA Updates", "Security", "API Access"] },
    ];

    for (const app of apps) {
      const catResult = await pool.query("SELECT id FROM categories WHERE slug = $1", [app.category]);
      const categoryId = catResult.rows[0].id;
      await pool.query(
        `INSERT INTO apps (name, slug, tagline, description, icon, color, category_id, is_featured, is_suite, features)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [app.name, app.slug, app.tagline, app.description, app.icon, app.color, categoryId, app.featured, false, app.features]
      );
    }

    console.log("Database seeding complete!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await pool.end();
  }
}

seed();
