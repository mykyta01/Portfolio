# Portfolio

[Live portfolio](https://mykyta01.github.io/Portfolio/)

A static portfolio built with HTML, SCSS, JavaScript, and Vite.

## Local development

Use Node.js 24 (see `.nvmrc`), then run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Changes to HTML, SCSS, and JavaScript update automatically.

## Production build

```sh
npm run build
npm run preview
```

The complete publishable website is generated in `dist/`. The preview command serves that build locally; it is not a production server.

Edit `index.html`, `styles/`, `scripts/`, and `images/`. Do not edit generated files in `dist/`. Dependencies in `node_modules/` and build output are ignored by Git.

## GitHub Pages

In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source before merging this migration.

The workflow builds pull requests for validation and publishes `dist/` on pushes to `main`. It can also be run manually from `main` in the Actions tab.

Vite's `base` is `/Portfolio/` for the existing GitHub Pages URL. Change it to `/` if moving to a custom domain or a host serving the site at its root.
