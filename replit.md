# NexBusiness - Business App Center

## Overview
NexBusiness is a marketing website for a business application center. It showcases business apps, pricing plans, and company information.

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS 4, React Router, TanStack React Query, Lucide React icons
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL (via `pg` driver)
- **Styling**: Tailwind CSS with custom color theme

## Project Structure
```
├── client/                 # Frontend (Vite + React)
│   ├── index.html          # Vite entry HTML
│   └── src/
│       ├── main.jsx        # React entry point
│       ├── App.jsx         # Main app with React Router
│       ├── index.css       # Global styles + Tailwind imports
│       ├── components/     # Shared components (Layout, etc.)
│       ├── pages/          # Page components (Home, AppCenter, etc.)
│       └── lib/            # Utilities
├── server/                 # Backend (Express)
│   ├── index.js            # Express server (port 3000)
│   ├── db.js               # PostgreSQL connection
│   ├── routes/
│   │   └── apps.js         # API routes for apps
│   └── seed.js             # Database seeding script
├── vite.config.js          # Vite config (root: client)
├── tailwind.config.js      # Tailwind config
├── postcss.config.js       # PostCSS config
└── package.json            # Root package.json
```

## Color Scheme
- **Primary** (Dark Navy): #1a365d (shades 50-900)
- **Accent** (Teal/Cyan): #00d4aa (shades 50-900)
- **Surface**: #f8fafc

## Routes
- `/` - Home page
- `/apps` - App Center (browse apps)
- `/apps/:slug` - Individual app detail
- `/pricing` - Pricing plans
- `/about` - About page
- `/contact` - Contact page

## API Endpoints
- `GET /api/categories` - List app categories
- `GET /api/apps` - List all apps
- `GET /api/apps/:slug` - Get app by slug

## Development
- Frontend runs on port 5173 (Vite dev server)
- Backend runs on port 3000 (Express)
- Vite proxies `/api` requests to the backend
- Frontend workflow exposed on port 5000 for Replit webview

## Recent Changes
- 2026-02-15: Initial project setup with React + Vite + Tailwind CSS + Express + PostgreSQL
