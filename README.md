# NexBusiness - Business App Center

NexBusiness is a marketing and showcase website for a unified business application platform, similar to Zoho. It features 30+ integrated business apps organized across 13 categories, with a modern design, interactive navigation, and a built-in blog CMS.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS 4, React Router |
| Backend | Express.js, Node.js |
| Database | PostgreSQL |
| Icons | Lucide React |
| Styling | Tailwind CSS 4 with custom theme |

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database

### Installation

```bash
npm install
```

### Database Setup

Seed the database with categories, apps, and sample blog posts:

```bash
npm run seed
```

### Development

```bash
npm run dev
```

This starts both the frontend (port 5000) and backend (port 3000) concurrently. The Vite dev server proxies `/api` requests to the Express backend.

### Production

```bash
npm run build
npm start
```

## Project Structure

```
├── client/                     # Frontend (Vite + React)
│   ├── index.html              # Vite entry HTML
│   ├── public/
│   │   └── images/             # Static images (logos, previews, stock photos)
│   └── src/
│       ├── main.jsx            # React entry point
│       ├── App.jsx             # Main app with React Router
│       ├── index.css           # Global styles + Tailwind @theme
│       ├── components/
│       │   ├── Layout.jsx      # Header, footer, search, mobile menu
│       │   └── MegaMenu.jsx    # Zoho-style product dropdown menu
│       ├── pages/
│       │   ├── Home.jsx        # Landing page
│       │   ├── AppCenter.jsx   # Filterable app catalog
│       │   ├── AppDetail.jsx   # Individual app detail page
│       │   ├── Pricing.jsx     # Pricing plans
│       │   ├── About.jsx       # Company info
│       │   ├── Contact.jsx     # Contact form
│       │   ├── Blog.jsx        # Blog listing
│       │   ├── BlogPost.jsx    # Blog article detail
│       │   ├── AdminLogin.jsx  # Admin authentication
│       │   ├── AdminDashboard.jsx # Blog management
│       │   ├── AdminPostEditor.jsx # Create/edit blog posts
│       │   ├── Privacy.jsx     # Privacy Policy
│       │   ├── Terms.jsx       # Terms of Service
│       │   └── Cookies.jsx     # Cookie Policy
│       └── lib/
│           ├── api.js          # API helper functions
│           ├── icons.jsx       # Icon re-exports from Lucide
│           └── appAssets.js    # Custom app logos and preview mappings
├── server/                     # Backend (Express)
│   ├── index.js                # Express server setup
│   ├── db.js                   # PostgreSQL connection pool
│   ├── seed.js                 # Database seeding script
│   ├── middleware/
│   │   └── adminAuth.js        # Admin Bearer token middleware
│   └── routes/
│       ├── apps.js             # App and category API endpoints
│       └── blog.js             # Blog CRUD and admin auth endpoints
├── package.json
└── vite.config.mjs             # Vite config (port 5000, API proxy)
```

## Features

### Marketing Website
- Responsive landing page with hero section, featured apps, benefits, and testimonials
- Zoho-style mega menu with category sidebar and app cards
- App Center with category filtering and search
- Individual app detail pages with features, description, preview screenshots, and related apps
- Pricing page with three tiers (Starter, Professional, Enterprise)
- About page with company story, values, and milestones
- Contact page with form and contact information

### Navigation & Search
- Live search with auto-suggestions and direct app navigation
- Breadcrumb navigation on app detail pages
- Mobile-responsive hamburger menu

### Blog CMS
- Public blog listing with category filter pills
- Full blog article pages with markdown-style formatting
- Password-protected admin panel at `/admin`
- Create, edit, delete, and draft/publish blog posts
- 6 pre-seeded sample articles

### Design
- Custom color scheme: dark navy primary (#1e3a5f), teal accent (#00d4aa)
- Custom branding with dark/white logo variants
- Stock photography across all pages
- Custom app logos for select products (NexFlow, NexCoach)

## API Reference

### Apps
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | List all app categories |
| GET | `/api/apps` | List apps (supports `?category=`, `?featured=true`, `?search=`) |
| GET | `/api/apps/:slug` | Get app by slug with related apps |

### Blog
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blog` | List published posts (supports `?category=`) |
| GET | `/api/blog/:slug` | Get single published post |
| GET | `/api/blog/admin/all` | List all posts including drafts (auth required) |
| POST | `/api/blog` | Create new post (auth required) |
| PUT | `/api/blog/:id` | Update post (auth required) |
| DELETE | `/api/blog/:id` | Delete post (auth required) |

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/admin/login` | Admin login (returns Bearer token) |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `ADMIN_PASSWORD` | Password for admin panel login |
| `ADMIN_TOKEN` | Secret token for admin API authentication |

## App Categories

The platform includes 30+ apps across these categories:

- Sales
- Marketing
- Commerce
- Customer Support
- Finance
- Email & Collaboration
- Human Resources
- Legal
- Security & IT
- Business Intelligence
- Project Management
- Developer Tools
- Custom Solutions

## License

Proprietary - All rights reserved.
