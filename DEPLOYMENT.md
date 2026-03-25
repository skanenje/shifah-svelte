# Deployment Guide

## Vercel Deployment

### Favicon Fix

If the Vercel v0 icon still appears after deployment, follow these steps:

1. **Clear Vercel Cache:**
   ```bash
   # In your Vercel dashboard
   Settings → General → Clear Build Cache
   ```

2. **Force Redeploy:**
   ```bash
   git add .
   git commit -m "Update favicon"
   git push
   ```

3. **Clear Browser Cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Or clear browser cache completely

4. **Verify Files Are Deployed:**
   Check these URLs after deployment:
   - `https://your-domain.vercel.app/favicon.svg`
   - `https://your-domain.vercel.app/favicon.png`
   - `https://your-domain.vercel.app/favicon.ico`
   - `https://your-domain.vercel.app/site.webmanifest`

### Build Settings

Ensure your Vercel project settings are:
- **Framework Preset:** SvelteKit
- **Build Command:** `npm run build`
- **Output Directory:** `.svelte-kit` (auto-detected)
- **Install Command:** `npm install`

### Environment Variables

No environment variables are required for basic deployment.

### Custom Domain

If using a custom domain, the favicon should work immediately after DNS propagation.

## Troubleshooting

### Favicon Still Not Showing

1. Check Vercel deployment logs for any errors
2. Verify all files in `/static` are being deployed
3. Try accessing the favicon directly: `https://your-site.com/favicon.ico`
4. Clear CDN cache in Vercel dashboard
5. Wait 5-10 minutes for CDN propagation

### Performance

- All images are optimized with lazy loading
- Fonts are preloaded
- Static assets are cached for 1 year
- CSS is minified with Lightning CSS

## Post-Deployment Checklist

- [ ] Favicon displays correctly
- [ ] All pages load (/, /services, /contact)
- [ ] Contact forms open email client
- [ ] Phone numbers are clickable
- [ ] Images load properly
- [ ] Navigation works on mobile
- [ ] Run Lighthouse audit (target: 90+ score)

## Contact

For deployment issues, contact your development team.
