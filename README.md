# Personal Website

This repository contains a personal portfolio site built with React + TypeScript, SCSS modules, and Bun.

Quick start

- Install dependencies: `bun install`
- Run dev server: `bun run dev`
- Build: `bun run build`

Contributing / Commits

- Open an issue or submit a PR for improvements.

This project uses Conventional Commits. Use the provided commit helper:

- `bun run commit` — opens Commitizen to create a conventional commit and pushes the branch.

Linting & commit hooks

- Commit messages are validated by `commitlint`.

Releases

Releases are automated in CI using `semantic-release` on the `main` branch. For local releases the `release-it` configuration is included.

Project structure

- `src/` — React source
- `public/` — static assets
- `src/components` — componentized UI sections (Hero, Experience, Projects, Navbar, etc.)
- `src/pages/home` — home page and styles

Notes

- A `useIsMobile` hook exists under `src/utililties` (matchMedia based) but most responsive behavior was moved to SCSS via a mobile mixin at `src/styles/_mixins.scss`.
- Styles use SCSS modules to localize component styles.

# Personal Website

This repository contains the source for William Marchant's personal website — a responsive React + TypeScript site styled with SCSS modules and optimized for fast local development with Bun.

Features

- Split layout with a fixed left panel (hero/contact) and a scrollable right panel (resume sections) on desktop. The layout is column on mobile.
- Responsive components and a mobile-friendly navigation
- Data-driven sections (projects, experience, education, skills) stored in `src/pages/home/data.tsx`

Project structure (high level)

- `src/pages/home` — home page, data and styles
- `src/components` — reusable UI components (hero, navbar, projects, skills, etc.)
- `src/styles` — global SCSS, mixins and design tokens

License

- See the repository root for license information (if any).

Enjoy! — William Marchant

## Deployment to GitHub Pages

This site is deployed to GitHub Pages at: https://wmarchant13.github.io/personal-website

### Deploy steps

1. Build the static site:
   ```sh
   bun run build
   ```
2. Deploy to GitHub Pages:
   ```sh
   bun run deploy
   ```

The deployment uses the `gh-pages` package to publish the `out` directory to the `gh-pages` branch.
