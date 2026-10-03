# Fadal Razin — Portfolio

Personal portfolio site for **Fadal Razin**, an IT Infrastructure & Support
professional based in Saudi Arabia. Built with React, TypeScript, Vite, and
Tailwind CSS.

🔗 **Live site:** _add your GitHub Pages URL here once deployed_

## Running locally

```bash
npm install
npm run dev
```

Then open the local address it prints (usually `http://localhost:5173`).

## Editing content

Almost all of the text on the site — headlines, experience, skills, projects,
contact details — lives in a single data file:

```
src/config/content.json
```

Site-level settings (page title, meta description, navigation, social links)
live in:

```
src/config/site.json
```

Edit either file, save, and the dev server updates automatically. See
`src/config/README.md` for the full structure of both files.

## Building for production

```bash
npm run build
```

This type-checks the project, runs the test suite, and produces an optimized
build in `dist/`.

## Deployment

This repo is set up to deploy automatically to **GitHub Pages** via the
GitHub Actions workflow in `.github/workflows/deploy.yml` — it builds and
publishes the site on every push to `main`. In the repo's **Settings → Pages**,
set the source to **GitHub Actions**.

Once deployed, add the live GitHub Pages URL to `site.json`'s `meta.url`
field so social-media link previews (Open Graph images) resolve correctly.

## License

This project is built on an open-source portfolio template and is used
under the terms of the MIT License — see `LICENSE`.
