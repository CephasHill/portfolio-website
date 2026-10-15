# portfolio-website

Personal portfolio site for **Peter Hill** targeting VFX/Animation Technical Director roles.

This project uses:
- Vite
- React (JavaScript)
- Plain CSS

No backend, database, login, CMS, or deployment secrets are included.

## 1) Run locally

From the repository root:

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## 2) Build for production

```bash
npm run build
```

The static production files are created in `dist/`.

## 3) Preview the production build

```bash
npm run preview
```

## 4) Add or edit a project

Main data file:
- `src/data/projects.js`

Each project object includes:
- `slug`
- `title`
- `year`
- `category`
- `role`
- `description`
- `tools`
- `media` (each item has `type`, `src`, `alt`, `caption`)
- `credits`
- `published`

### Publish flow

1. Add or edit a project in `src/data/projects.js`.
2. Put that project's media files in:
   - `public/projects/<slug>/`
3. Set `published: true` when ready to show the project on the site.

Only projects with `published: true` appear on the home page and have accessible detail pages.

## 5) Important file map (beginner-friendly)

- `src/App.jsx`
  - Main page layout
  - Home page sections (hero, reel, featured work, about, contact)
  - Project detail page routing logic
- `src/components/ProjectCard.jsx`
  - Reusable project card used in featured work
- `src/data/projects.js`
  - Single source of truth for portfolio projects
- `src/index.css`
  - Site styling (responsive, accessible focus states, reduced-motion support)
- `index.html`
  - Base HTML + default SEO/social metadata tags

## 6) Nginx SPA fallback (required for project detail URLs)

Because project detail pages use client-side routing (for example `/projects/my-project`), add this in your Nginx server block:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

Without this fallback, direct refreshes on detail URLs can return 404 errors.

## 7) TODO placeholders to update

- Resume URL (`src/App.jsx`)
- Contact email (`src/App.jsx`)
- Demo reel URL (`src/App.jsx`)
- Project content and media (`src/data/projects.js` and `public/projects/<slug>/`)
- Social preview image path in `index.html`
