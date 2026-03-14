---
description: How to start the NexBusiness development environment
---

## Prerequisites

- Node.js 20+
- PostgreSQL database running and accessible
- `.env` file in project root with `DATABASE_URL`, `ADMIN_PASSWORD`, `ADMIN_TOKEN`

## Steps

// turbo
1. Install dependencies:
```bash
npm install
```

2. Seed the database (this drops and recreates all tables — use with caution):
```bash
npm run seed
```

// turbo
3. Start the development servers (Vite on :5000, Express on :3000):
```bash
npm run dev
```

4. Open the browser to http://localhost:5000

## Notes
- Vite automatically proxies `/api` requests to the Express server on port 3000
- Hot module replacement (HMR) is enabled for frontend changes
- Backend changes require restarting the server
- Admin panel is at `/admin/login` (password from `ADMIN_PASSWORD` env var)
