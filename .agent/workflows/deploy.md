---
description: How to build and deploy NexBusiness to production
---

## Steps

// turbo
1. Build the frontend for production:
```bash
npm run build
```

2. Verify the build output exists:
```bash
ls dist/public/
```

3. Commit and push to main branch to trigger auto-deploy:
```bash
git add -A
git commit -m "chore: production build"
git push origin main
```

4. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
   - SSH into the VPS
   - `git pull origin main`
   - `npm install`
   - `npm run build`
   - `pm2 restart nexbusiness`

## Manual Deployment (if needed)
SSH into the VPS and run:
```bash
cd /var/www/nexbusiness
git pull origin main
npm install
npm run build
pm2 restart nexbusiness
```
