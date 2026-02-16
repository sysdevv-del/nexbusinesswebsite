# NexBusiness - Business App Center

NexBusiness is a full-featured marketing and showcase website for a unified business application platform, similar to Zoho. It presents 31+ integrated business apps organized across 13 categories, with a polished modern UI, interactive Zoho-style navigation, and a built-in blog content management system.

**Live site features:** Product catalog with mega menu navigation, live search, individual app detail pages with custom branding, a three-tier pricing page, company pages, legal pages, a public blog, and a password-protected admin panel for content management.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture Overview](#architecture-overview)
- [Database Schema](#database-schema)
- [API Reference](#api-reference)
- [Frontend Pages & Routes](#frontend-pages--routes)
- [Key Features](#key-features)
- [Admin Panel](#admin-panel)
- [Custom App Branding](#custom-app-branding)
- [Design System](#design-system)
- [Environment Variables](#environment-variables)
- [NPM Scripts](#npm-scripts)
- [Deployment](#deployment)

---

## Tech Stack

| Layer        | Technology                                      |
|-------------|------------------------------------------------|
| Frontend    | React 18, React Router v6, Vite 5              |
| Styling     | Tailwind CSS 4 with custom `@theme` definitions |
| Icons       | Lucide React                                    |
| Backend     | Express.js 4, Node.js                           |
| Database    | PostgreSQL (via `pg` driver)                    |
| Build Tool  | Vite (dev server + production bundler)           |
| Dev Tools   | Concurrently (parallel dev servers)              |

### Key Dependencies

```
react 18.3           react-dom 18.3         react-router-dom 6.30
express 4.22         pg 8.18                cors 2.8
dotenv 16.6          lucide-react 0.454     concurrently 9.2
tailwindcss 4.1      @vitejs/plugin-react   @tailwindcss/vite
```

---

## Getting Started

### Prerequisites

- **Node.js** 20 or higher
- **PostgreSQL** database (local or hosted)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root (or set them in your hosting environment):

```env
DATABASE_URL=postgresql://user:password@host:port/dbname
ADMIN_PASSWORD=your-admin-password
ADMIN_TOKEN=your-secret-token
```

### 3. Seed the database

This creates all tables (`categories`, `apps`, `blog_posts`) and populates them with 13 categories, 31 apps, and 6 sample blog articles:

```bash
npm run seed
```

### 4. Start development

```bash
npm run dev
```

This runs two servers concurrently:
- **Vite dev server** on port `5000` (frontend with hot reload)
- **Express API server** on port `3000` (backend)

Vite automatically proxies all `/api` requests to the Express server.

### 5. Build for production

```bash
npm run build
npm start
```

In production, Express serves both the API and the static frontend build from a single port (`5000`).

---

## Project Structure

```
nexbusiness/
├── client/                         # Frontend application
│   ├── index.html                  # Vite entry HTML file
│   ├── public/
│   │   └── images/                 # Static assets
│   │       ├── hero-team.jpg       # Homepage hero image
│   │       ├── about-office.jpg    # About page imagery
│   │       ├── about-team.jpg      # About page team photo
│   │       ├── contact-office.jpg  # Contact page imagery
│   │       ├── feature-*.jpg       # Feature section photos
│   │       ├── pricing-bg.jpg      # Pricing page background
│   │       ├── testimonial-bg.jpg  # Testimonials background
│   │       ├── nexflow-logo.png    # NexFlow custom logo
│   │       ├── nexflow-preview.png # NexFlow dashboard screenshot
│   │       ├── nexcoach-logo.png   # NexCoach custom logo
│   │       └── nexcoach-preview.png# NexCoach dashboard screenshot
│   └── src/
│       ├── main.jsx                # React DOM entry point
│       ├── App.jsx                 # Router configuration
│       ├── index.css               # Tailwind imports + @theme config
│       ├── components/
│       │   ├── Layout.jsx          # App shell: Navbar + Footer + Search
│       │   └── MegaMenu.jsx        # Zoho-style product dropdown
│       ├── pages/
│       │   ├── Home.jsx            # Landing page
│       │   ├── AppCenter.jsx       # Filterable app catalog
│       │   ├── AppDetail.jsx       # Individual app page
│       │   ├── Pricing.jsx         # Pricing tiers
│       │   ├── About.jsx           # Company info
│       │   ├── Contact.jsx         # Contact form
│       │   ├── Blog.jsx            # Blog listing
│       │   ├── BlogPost.jsx        # Blog article detail
│       │   ├── AdminLogin.jsx      # Admin login form
│       │   ├── AdminDashboard.jsx  # Blog post management
│       │   ├── AdminPostEditor.jsx # Blog post create/edit form
│       │   ├── PrivacyPolicy.jsx   # Privacy Policy page
│       │   ├── TermsOfService.jsx  # Terms of Service page
│       │   └── CookiePolicy.jsx    # Cookie Policy page
│       └── lib/
│           ├── api.js              # Fetch wrapper functions
│           ├── icons.jsx           # Lucide icon re-exports
│           ├── appAssets.js        # Custom logo/preview mappings
│           └── LanguageContext.jsx  # i18n context provider
│
├── server/                         # Backend application
│   ├── index.js                    # Express app setup & static serving
│   ├── db.js                       # PostgreSQL connection pool
│   ├── seed.js                     # Database seeding script
│   ├── middleware/
│   │   └── adminAuth.js            # Bearer token auth middleware
│   └── routes/
│       ├── apps.js                 # /api/categories, /api/apps endpoints
│       └── blog.js                 # /api/blog, /api/auth endpoints
│
├── attached_assets/                # Source assets (logos, screenshots)
├── package.json                    # Dependencies and scripts
├── vite.config.mjs                 # Vite configuration
├── replit.md                       # Internal project documentation
└── README.md                       # This file
```

---

## Architecture Overview

```
┌─────────────────────────────────────────────┐
│                   Browser                    │
│                                              │
│  React SPA (React Router handles routing)    │
│  ┌─────────┐ ┌──────────┐ ┌──────────────┐  │
│  │ Layout  │ │ MegaMenu │ │ Search Bar   │  │
│  │ (Shell) │ │ Dropdown │ │ w/ Suggest.  │  │
│  └────┬────┘ └──────────┘ └──────────────┘  │
│       │                                      │
│  ┌────┴──────────────────────────────────┐   │
│  │           Page Components             │   │
│  │  Home | AppCenter | AppDetail | Blog  │   │
│  │  Pricing | About | Contact | Admin    │   │
│  └───────────────────────────────────────┘   │
└──────────────┬───────────────────────────────┘
               │  HTTP (fetch /api/*)
               ▼
┌──────────────────────────────────────────────┐
│              Express.js Server               │
│                                              │
│  ┌──────────────┐  ┌─────────────────────┐   │
│  │ /api/apps    │  │ /api/blog           │   │
│  │ /api/categ.  │  │ /api/auth           │   │
│  └──────┬───────┘  └─────────┬───────────┘   │
│         │     adminAuth.js   │               │
│         │    middleware       │               │
│         └────────┬───────────┘               │
└──────────────────┼───────────────────────────┘
                   │  SQL queries (pg)
                   ▼
┌──────────────────────────────────────────────┐
│              PostgreSQL Database             │
│                                              │
│  ┌────────────┐ ┌──────┐ ┌──────────────┐   │
│  │ categories │ │ apps │ │ blog_posts   │   │
│  └────────────┘ └──────┘ └──────────────┘   │
└──────────────────────────────────────────────┘
```

**Development mode:** Vite runs on port 5000, Express on port 3000. Vite proxies `/api` to Express.

**Production mode:** Express serves both the API and the built frontend from port 5000.

---

## Database Schema

### `categories`

| Column     | Type         | Description                    |
|-----------|-------------|-------------------------------|
| id        | serial (PK) | Auto-incrementing ID           |
| name      | varchar     | Category display name          |
| slug      | varchar     | URL-friendly identifier        |
| icon      | varchar     | Lucide icon name               |
| sort_order| integer     | Display ordering (default: 0)  |

### `apps`

| Column      | Type         | Description                        |
|------------|-------------|-----------------------------------|
| id         | serial (PK) | Auto-incrementing ID               |
| name       | varchar     | App display name                   |
| slug       | varchar     | URL-friendly identifier            |
| tagline    | varchar     | Short description                  |
| description| text        | Full description                   |
| icon       | varchar     | Lucide icon name                   |
| color      | varchar     | Brand color hex code               |
| category_id| integer (FK)| References categories.id           |
| is_featured| boolean     | Shown on homepage                  |
| is_suite   | boolean     | Part of the suite offering         |
| features   | text[]      | Array of feature names             |
| created_at | timestamp   | Creation timestamp                 |

### `blog_posts`

| Column      | Type         | Description                        |
|------------|-------------|-----------------------------------|
| id         | serial (PK) | Auto-incrementing ID               |
| title      | varchar     | Post title                         |
| slug       | varchar     | URL-friendly identifier            |
| excerpt    | text        | Short summary for listings         |
| content    | text        | Full post content (markdown-style) |
| category   | varchar     | Post category label                |
| author     | varchar     | Author name                        |
| cover_image| varchar     | Cover image URL                    |
| read_time  | varchar     | Estimated read time                |
| status     | varchar     | "published" or "draft"             |
| created_at | timestamp   | Creation timestamp                 |
| updated_at | timestamp   | Last update timestamp              |

### Relationships

```
categories (1) ──── (N) apps
```

Blog posts are standalone (no foreign keys).

---

## API Reference

### App Endpoints

#### `GET /api/categories`
Returns all app categories ordered by `sort_order`.

**Response:** `[{ id, name, slug, icon, sort_order }]`

#### `GET /api/apps`
Returns apps with optional filtering.

**Query Parameters:**
| Param      | Type    | Description                       |
|-----------|--------|----------------------------------|
| category  | string | Filter by category slug           |
| featured  | string | Set to `"true"` for featured only |
| search    | string | Search by name or tagline         |

**Response:** `[{ id, name, slug, tagline, icon, color, category_slug, category_name, is_featured, is_suite }]`

#### `GET /api/apps/:slug`
Returns a single app with its full details and related apps from the same category.

**Response:** `{ app: { ...full_app_data, features }, related: [{ slug, name, tagline, icon, color }] }`

---

### Blog Endpoints

#### `GET /api/blog`
Returns published blog posts, newest first.

**Query Parameters:**
| Param    | Type   | Description              |
|---------|--------|-------------------------|
| category| string | Filter by post category  |

**Response:** `[{ id, title, slug, excerpt, category, author, cover_image, read_time, created_at }]`

#### `GET /api/blog/:slug`
Returns a single published blog post with full content.

#### `GET /api/blog/admin/all` (Auth Required)
Returns all blog posts including drafts, newest first.

#### `POST /api/blog` (Auth Required)
Creates a new blog post.

**Body:** `{ title, slug, excerpt, content, category, author, cover_image, read_time, status }`

#### `PUT /api/blog/:id` (Auth Required)
Updates an existing blog post.

#### `DELETE /api/blog/:id` (Auth Required)
Deletes a blog post.

---

### Auth Endpoints

#### `POST /api/auth/admin/login`
Authenticates an admin user.

**Body:** `{ password: "string" }`

**Response:** `{ token: "bearer_token_string" }`

**Authentication:** Protected endpoints require an `Authorization: Bearer <token>` header.

---

## Frontend Pages & Routes

### Public Pages (inside Layout shell)

| Route             | Component         | Description                              |
|-------------------|-------------------|------------------------------------------|
| `/`               | Home              | Hero, featured apps, benefits, CTA       |
| `/apps`           | AppCenter         | Full catalog with sidebar + search       |
| `/apps/:slug`     | AppDetail         | App details, features, preview, related  |
| `/pricing`        | Pricing           | Three-tier pricing comparison            |
| `/about`          | About             | Company story, values, milestones        |
| `/contact`        | Contact           | Contact form + company info              |
| `/blog`           | Blog              | Article listing with category filter     |
| `/blog/:slug`     | BlogPost          | Full article with formatted content      |
| `/privacy`        | PrivacyPolicy     | Privacy Policy                           |
| `/terms`          | TermsOfService    | Terms of Service                         |
| `/cookies`        | CookiePolicy      | Cookie Policy                            |

### Admin Pages (outside Layout shell)

| Route              | Component        | Description                       |
|--------------------|------------------|-----------------------------------|
| `/admin/login`     | AdminLogin       | Password login form               |
| `/admin`           | AdminDashboard   | Post list, delete, status toggle  |
| `/admin/new`       | AdminPostEditor  | Create new blog post              |
| `/admin/edit/:id`  | AdminPostEditor  | Edit existing blog post           |

---

## Key Features

### Zoho-Style Mega Menu
The Products dropdown displays a two-panel layout:
- **Left sidebar:** Category list with hover/click selection
- **Right panel:** Grid of apps in the selected category with icons, names, and taglines
- Links directly to individual app detail pages

### Live Search
- Accessible from the navbar search icon
- Debounced API calls (200ms) for instant suggestions
- Keyboard navigation (arrow keys + Enter)
- Shows up to 6 app matches with logos
- Direct navigation to app detail pages

### App Detail Pages
- Dynamic pages generated from database for all 31+ apps
- Breadcrumb navigation (Apps > Category > App Name)
- Custom logos and dashboard previews for branded apps
- Feature list sidebar, "Why Choose" section
- "Start Free Trial" and "Request Demo" call-to-action buttons
- Related apps from the same category

### Blog CMS
- Public blog with category filtering (Technology, Business, Product Updates, etc.)
- Markdown-style content formatting (`## headings`, `**bold**`)
- Admin panel with full CRUD operations
- Draft/Published status management
- Cover images and estimated read times

### Responsive Design
- Mobile hamburger menu
- Responsive grid layouts across all pages
- Touch-friendly interactions

---

## Admin Panel

### Accessing the Admin

1. Navigate to `/admin/login`
2. Enter the password (stored in `ADMIN_PASSWORD` environment variable)
3. On success, a Bearer token is stored in `localStorage` and used for subsequent API calls

### Admin Capabilities

- **View all posts** (including drafts) on the dashboard
- **Create** new blog posts with title, content, category, author, cover image, and status
- **Edit** existing posts
- **Delete** posts
- **Toggle** between draft and published status

---

## Custom App Branding

Certain apps have custom logos and dashboard preview screenshots instead of generic icons. These are managed through `client/src/lib/appAssets.js`:

```javascript
export const appLogos = {
  nexflow: "/images/nexflow-logo.png",
  nexcoach: "/images/nexcoach-logo.png",
};

export const appPreviews = {
  nexflow: "/images/nexflow-preview.png",
  nexcoach: "/images/nexcoach-preview.png",
};
```

Custom logos appear in:
- App detail page header
- Products mega menu dropdown
- Search suggestion results
- App Center catalog cards
- Homepage featured apps section

To add branding for another app:
1. Place the logo image in `client/public/images/`
2. Add an entry to `appLogos` in `appAssets.js` using the app's slug as key
3. Optionally add a dashboard preview to `appPreviews`

---

## Design System

### Color Palette

| Token   | Hex       | Usage                              |
|---------|-----------|------------------------------------|
| Primary | `#1e3a5f` | Dark navy - headers, buttons, text |
| Accent  | `#00d4aa` | Teal/cyan - CTAs, highlights       |

Both colors have full shade ranges (50-900) defined in the Tailwind `@theme` configuration in `client/src/index.css`.

### Typography
- System font stack via Tailwind defaults
- Headings: Bold, primary-800 color
- Body: Regular, gray-600 color

### Component Patterns
- **Cards:** White bg, rounded-xl/2xl, border-gray-100, hover shadow
- **Buttons:** Rounded-xl, font-semibold, transition-colors
- **Sections:** py-16/py-20 vertical spacing, max-w-7xl container

---

## Environment Variables

| Variable         | Required | Description                                    |
|-----------------|----------|------------------------------------------------|
| `DATABASE_URL`  | Yes      | PostgreSQL connection string                   |
| `ADMIN_PASSWORD`| Yes      | Password for admin panel login                 |
| `ADMIN_TOKEN`   | Yes      | Secret token used for admin API authentication |

---

## NPM Scripts

| Script          | Command                                     | Description                              |
|----------------|---------------------------------------------|------------------------------------------|
| `npm run dev`  | `concurrently "npm run server" "npm run client"` | Start both servers for development   |
| `npm run server`| `node server/index.js`                     | Start Express API server only            |
| `npm run client`| `vite`                                     | Start Vite dev server only               |
| `npm run build` | `vite build`                               | Build frontend for production            |
| `npm run seed`  | `node server/seed.js`                      | Seed database with all data              |
| `npm start`     | `NODE_ENV=production node server/index.js` | Start production server                  |

---

## Deployment

### Production Build

```bash
npm run build
```

This outputs the compiled frontend to `dist/public/`.

### Running in Production

```bash
NODE_ENV=production npm start
```

In production mode, Express serves:
- API endpoints at `/api/*`
- Static frontend files from `dist/public/`
- All other routes fall back to `index.html` (SPA routing)

The server listens on port `5000` in production.

### Required Setup

1. Ensure PostgreSQL is accessible via `DATABASE_URL`
2. Set `ADMIN_PASSWORD` and `ADMIN_TOKEN` environment variables
3. Run `npm run seed` once to populate the database
4. Run `npm run build` to compile the frontend
5. Start with `npm start`

---

## App Categories & Counts

| Category            | Apps |
|--------------------|------|
| Sales              | 6    |
| Marketing          | 3    |
| Commerce           | 2    |
| Customer Support   | 2    |
| Finance            | 3    |
| Email & Collaboration | 3 |
| Human Resources    | 3    |
| Legal              | 1    |
| Security & IT      | 2    |
| BI & Analytics     | 1    |
| Project Management | 2    |
| Developer Platform | 2    |
| IoT                | 1    |

---

## License

Proprietary - All rights reserved.
