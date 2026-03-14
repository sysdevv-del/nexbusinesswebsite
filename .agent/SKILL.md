---
name: NexBusiness Codebase
description: Onboarding context for the NexBusiness marketing website — a React + Express + PostgreSQL full-stack application showcasing 31+ integrated business SaaS apps.
---

# NexBusiness Codebase Context

## What is NexBusiness?

NexBusiness is a **marketing & showcase website** for a unified B2B SaaS platform (similar to Zoho). It presents 31+ integrated business apps organized across 13 categories, with a polished modern UI, interactive Zoho-style navigation, and a built-in blog CMS.

**Live domain**: [nexbusiness.id](https://nexbusiness.id)

## Tech Stack

- **Frontend**: React 18, React Router v6, Vite 5, Tailwind CSS 4
- **Backend**: Express.js 4, Node.js
- **Database**: PostgreSQL (raw SQL via `pg` driver — no ORM)
- **i18n**: Custom `LanguageContext` provider (English + Bahasa Indonesia)
- **Icons**: Lucide React with dynamic icon resolution
- **SEO**: `SEOHead` component + JSON-LD schemas + server-side sitemap/robots

## Project Layout

```
client/           → React SPA (Vite)
  src/components/ → Layout (navbar+footer), MegaMenu, SEOHead
  src/pages/      → 14 page components (Home, AppCenter, AppDetail, Pricing, About, Contact, Blog, BlogPost, Admin*, Legal*)
  src/lib/        → api.js, icons.jsx, appAssets.js, LanguageContext.jsx
server/           → Express API
  routes/         → apps.js, blog.js, seo.js
  middleware/     → adminAuth.js (Bearer token)
  seed.js         → Full DB seeder
```

## Key Conventions

1. **Colors**: Primary navy `#1e3a5f` + Accent teal `#00d4aa` (defined in `@theme` in `index.css`)
2. **Styling**: Tailwind CSS 4 with `@theme` block — NOT a `tailwind.config.js`
3. **Translations**: All UI text via `t("key")` from `useLanguage()` hook
4. **Dynamic Icons**: Apps store icon name as string in DB → `DynamicIcon` component resolves it
5. **Custom Branding**: `appAssets.js` maps app slug → logo/preview image
6. **SQL**: Always parameterized queries (`$1`, `$2`...), no raw interpolation
7. **Server**: CommonJS (`require`), Client: ESM (`import`)
8. **Vite Aliases**: `@` → `client/src/`, `@assets` → `attached_assets/`

## Database Tables

- `categories` (id, name, slug, icon, sort_order)
- `apps` (id, name, slug, tagline, description, icon, color, category_id FK, is_featured, is_suite, features TEXT[], created_at)
- `blog_posts` (id, title, slug, excerpt, content, category, author, cover_image, read_time, status, created_at, updated_at)

## API Endpoints

- `GET /api/categories` — All categories
- `GET /api/apps` — Apps with `?category=`, `?featured=true`, `?search=` filtering
- `GET /api/apps/:slug` — Single app + related apps
- `GET /api/blog` — Published posts, `?category=` filter
- `GET /api/blog/:slug` — Single published post
- `GET /api/blog/admin/all` — All posts (auth required)
- `POST /api/blog` — Create post (auth required)
- `PUT /api/blog/:id` — Update post (auth required)
- `DELETE /api/blog/:id` — Delete post (auth required)
- `POST /api/auth/admin/login` — Admin login (returns Bearer token)
- `GET /sitemap.xml` — Dynamic XML sitemap
- `GET /robots.txt` — Robots.txt

## Known Issues

1. **`seo.js` sitemap bug**: Blog query uses `WHERE published = true` but the column is `status` with value `'published'`
2. **No test suite**: No testing framework configured
3. **Windows `npm start`**: Uses `NODE_ENV=production` which is Unix syntax — needs `cross-env` on Windows
4. **Contact form**: UI-only, no backend endpoint to receive submissions
5. **Auth**: Plain-text token comparison, no JWT/expiry/refresh

## Development Commands

```bash
npm run dev      # Start both Vite + Express (development)
npm run seed     # Seed/reset database
npm run build    # Production frontend build
npm start        # Production server
```
