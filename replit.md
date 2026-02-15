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
│       ├── pages/          # Page components
│       └── lib/            # Utilities (api.js, icons.jsx)
├── server/                 # Backend (Express)
│   ├── index.js            # Express server (port 3000)
│   ├── db.js               # PostgreSQL connection
│   ├── routes/
│   │   └── apps.js         # API routes for apps
│   └── seed.js             # Database seeding script
├── vite.config.mjs         # Vite config (root: client, port 5000)
└── package.json            # Root package.json
```

## Color Scheme
- **Primary** (Dark Navy): #1e3a5f (shades 50-900)
- **Accent** (Teal/Cyan): #00d4aa (shades 50-900)

## Routes
- `/` - Home page (hero, featured apps, benefits, testimonials, CTA)
- `/apps` - App Center (filterable catalog with category sidebar)
- `/apps/:slug` - Individual app detail (features, description, related apps)
- `/pricing` - Pricing plans (Starter, Professional, Enterprise)
- `/about` - About page (story, values, milestones)
- `/contact` - Contact page (form, contact info)

## API Endpoints
- `GET /api/categories` - List app categories
- `GET /api/apps` - List all apps (supports ?category=, ?featured=true, ?search= params)
- `GET /api/apps/:slug` - Get app by slug (includes related apps)

## Key Features
- Zoho-style mega menu with category sidebar and app cards
- Responsive design with mobile hamburger menu
- 30 business apps across 13 categories
- Live search with auto-suggestions and direct app navigation
- Search and filter on App Center page
- Breadcrumb navigation on app detail pages
- Stock photography integrated across all pages (hero, about, contact, pricing)
- Custom logo (dark for header, white for footer)

## Development
- Frontend (Vite dev server): port 5000
- Backend (Express API): port 3000
- Vite proxies `/api` requests to the backend
- Run `npm run seed` to re-seed the database

## Recent Changes
- 2026-02-15: Added stock photography across all pages (hero, about, contact, pricing) for professional look
- 2026-02-15: Added live search with auto-suggestions dropdown and direct app navigation
- 2026-02-15: Updated logo - custom dark logo in header, white version in footer with tagline
- 2026-02-15: Full build of NexBusiness website with all pages, mega menu, database, and API
