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
- `src/data/projects/`

Each project has its own file in `src/data/projects/`. The directory's `index.js`
collects those files into the project's data list.

Each project object includes:
- `slug`
- `title`
- `year`
- `type` (one of the portfolio filter categories)
- `category`
- `role`
- `thumbnail` (an object with `src` and `alt`, used only for project cards)
- `description`
- `tools`
- `media` (each item has `type`, `src`, `alt`, `caption`; `type` can be `image`,
  `video`, or `embed`)
- `credits` (each item has `label`, `name`, and an optional `url`)
- `published`
- `featured`

### Publish flow

1. Add or edit a project file in `src/data/projects/` and import it from
   `src/data/projects/index.js`.
2. Put that project's local media files in:
   - `public/projects/<slug>/`
   
   Video embeds can use a privacy-enhanced external URL in the project's `media`
   list instead of a local file.
3. Set `published: true` when ready to show the project on the site.
4. Set `featured: true` when the published project should appear in the Featured Work
   section.

Only projects with `published: true` have accessible detail pages. Only projects with
both `published: true` and `featured: true` appear in the Featured Work section.

The optional `thumbnail` field controls the image shown on the Featured Work card.
It is separate from `media`, so a card thumbnail does not need to appear in the
project's case-study media feed.

## 5) Important file map (beginner-friendly)

- `src/App.jsx`
-  - Client-side page routing
- `src/pages/`
  - One editable JSX file for each page
- `src/components/PageShell.jsx`
  - Shared site navigation, page header, and social links
- `src/components/ProjectCard.jsx`
  - Reusable project card used in featured work
- `src/data/projects/`
  - Individual project data files and their index
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
