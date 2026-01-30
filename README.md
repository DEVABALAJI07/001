# Prabhu Studio — Website

This repository contains a simple, responsive static website for Prabhu Studio.

## Files
- `index.html` — main page
- `styles/styles.css` — site styles
- `js/script.js` — minimal JavaScript
- `images/` — add your hero and portfolio images here (not included)

## Quick preview (locally)
1. Clone the repo
2. Open `index.html` in your browser
   - No build step required for the static version.

## Deploy (GitHub Pages)
1. Push files to the repository.
2. In repository Settings > Pages, choose the branch (e.g., `main`) and root folder `/` then Save.
3. Wait a minute — the site will be available at `https://<username>.github.io/<repo>/` or your custom domain if configured.

## Contact form notes
- The included form uses Formspree as an example. Sign up at https://formspree.io/ and replace the `action` value in `index.html` with your form endpoint.
- Alternatives:
  - Use mailto (not recommended for production).
  - Use Netlify Forms (if deploying on Netlify).
  - Build a small serverless function to receive and forward emails.

## Images & assets
- Replace `images/hero.jpg`, `images/og-image.jpg`, and portfolio placeholders with your photos.
- Optimize images for web (use WebP or compressed JPEGs) and keep sizes reasonable for performance.

## Next steps I can do for you
- Add your images and replace placeholders.
- Add a GitHub Actions workflow to build (if converting to a static-site generator) or to run image optimization.
- Push these files to your repo DEVABALAJI07/001 and enable GitHub Pages for you.