# 🚀 Deploying to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

## Automatic Deployment (Recommended)

### Setup Steps:

1. **Create a GitHub Repository**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/micro-project.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**

   - Go to your repository on GitHub
   - Navigate to: **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **Deploy from a branch**
     - Branch: **gh-pages** / **(root)**
   - Click **Save**

3. **Automatic Deployment**
   - Every push to the `main` branch will trigger automatic deployment
   - The GitHub Action will build and deploy your app
   - Your app will be live at: `https://YOUR_USERNAME.github.io/micro-project/`

## Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Important Notes

1. **Update base URL**: If your repository name is different from "micro-project", update the `base` value in `vite.config.ts`:

   ```typescript
   base: '/your-repo-name/',
   ```

2. **First deployment**: It may take a few minutes for your site to go live.

3. **Custom domain** (optional): You can configure a custom domain in GitHub Pages settings.

## Deployment Status

Check the deployment status:

- Go to your repository on GitHub
- Click on the **Actions** tab
- View the latest workflow run

## Troubleshooting

**Site not loading?**

- Ensure GitHub Pages is enabled in repository settings
- Verify the `base` path in `vite.config.ts` matches your repo name
- Check the Actions tab for deployment errors

**404 Error?**

- Make sure the repository name in `vite.config.ts` base matches exactly
- Clear browser cache and try again

**Build fails?**

- Check that all dependencies are in `package.json`
- Ensure there are no TypeScript errors: `npm run build` locally

---

## Quick Deploy Commands

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/micro-project.git
git push -u origin main

# Future updates
git add .
git commit -m "Update notes app"
git push

# Manual deploy (if needed)
npm run deploy
```

Your app will be live at: **https://YOUR_USERNAME.github.io/micro-project/**

🎉 Happy deploying!
