# NexBusiness - Business App Center

## Overview
NexBusiness is a marketing/showcase website for a business application center (similar to Zoho). It features 30+ business apps organized by categories, with a Zoho-style mega menu, app catalog, pricing, and company pages.

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS 4, React Router, Lucide React icons
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL (via `pg` driver)
- **Styling**: Tailwind CSS 4 with custom @theme color definitions

## Project Structure
```
├── client/                 # Frontend (Vite + React)
│   ├── index.html          # Vite entry HTML
│   └── src/
│       ├── main.jsx        # React entry point
│       ├── App.jsx         # Main app with React Router
│       ├── index.css       # Global styles + Tailwind @theme
│       ├── components/     # Shared components (Layout, MegaMenu)
│       ├── pages/          # Page components (incl. admin pages)
│       └── lib/            # Utilities (api.js, icons.jsx)
├── server/                 # Backend (Express)
│   ├── index.js            # Express server (port 3000)
│   ├── db.js               # PostgreSQL connection
│   ├── middleware/
│   │   └── adminAuth.js    # Admin auth middleware (Bearer token)
│   ├── routes/
│   │   ├── apps.js         # API routes for apps
│   │   └── blog.js         # Blog CRUD + admin auth endpoints
│   └── seed.js             # Database seeding script
├── vite.config.mjs         # Vite config (root: client, port 5000)
└── package.json            # Root package.json
```

## Color Scheme
- **Primary** (Dark Navy): #1e3a5f (shades 50-900)
- **Accent** (Teal/Cyan): #00d4aa (shades 50-900)

## Routes
### Public
- `/` - Home page (hero, featured apps, benefits, testimonials, CTA)
- `/apps` - App Center (filterable catalog with category sidebar)
- `/apps/:slug` - Individual app detail (features, description, related apps)
- `/pricing` - Pricing plans (Starter, Professional, Enterprise)
- `/about` - About page (story, values, milestones)
- `/contact` - Contact page (form, contact info)
- `/blog` - Blog listing (database-driven, category filter)
- `/blog/:slug` - Blog article detail page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/cookies` - Cookie Policy

### Admin
- `/admin/login` - Admin login (password-protected)
- `/admin` - Admin dashboard (manage blog posts)
- `/admin/new` - Create new blog post
- `/admin/edit/:id` - Edit existing blog post

## API Endpoints
### Apps
- `GET /api/categories` - List app categories
- `GET /api/apps` - List all apps (supports ?category=, ?featured=true, ?search= params)
- `GET /api/apps/:slug` - Get app by slug (includes related apps)

### Blog
- `GET /api/blog` - List published blog posts (supports ?category= filter)
- `GET /api/blog/:slug` - Get single published blog post
- `GET /api/blog/admin/all` - List all posts incl. drafts (auth required)
- `POST /api/blog` - Create new blog post (auth required)
- `PUT /api/blog/:id` - Update blog post (auth required)
- `DELETE /api/blog/:id` - Delete blog post (auth required)
- `POST /api/auth/admin/login` - Admin login (returns token)

## Admin Access
- Admin panel at `/admin/login`
- Password stored in ADMIN_PASSWORD env var
- Token-based auth (ADMIN_TOKEN env var)

## Key Features
- Zoho-style mega menu with category sidebar and app cards
- Responsive design with mobile hamburger menu
- 30 business apps across 13 categories
- Live search with auto-suggestions and direct app navigation
- Search and filter on App Center page
- Breadcrumb navigation on app detail pages
- Stock photography integrated across all pages (hero, about, contact, pricing)
- Custom logo (dark for header, white for footer)
- Blog CMS with admin panel (create, edit, delete, draft/publish)

## Development
- Frontend (Vite dev server): port 5000
- Backend (Express API): port 3000
- Vite proxies `/api` requests to the backend
- Run `npm run seed` to re-seed the database

## Recent Changes
- 2026-02-15: Added blog CMS with admin panel (create/edit/delete posts, draft/publish status, password-protected admin area)
- 2026-02-15: Blog posts now stored in PostgreSQL database, clickable articles with full detail pages
- 2026-02-15: Added Blog page with 6 sample articles, category filter pills, and card layout
- 2026-02-15: Added dedicated Privacy Policy, Terms of Service, and Cookie Policy pages with proper footer links
- 2026-02-15: Added stock photography across all pages (hero, about, contact, pricing) for professional look
- 2026-02-15: Added live search with auto-suggestions dropdown and direct app navigation
- 2026-02-15: Updated logo - custom dark logo in header, white version in footer with tagline
- 2026-02-15: Full build of NexBusiness website with all pages, mega menu, database, and API
