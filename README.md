# Personal Website

This repository contains a personal portfolio site built with React + TypeScript, SCSS modules, and Bun.

Quick start

- Install dependencies: `bun install`
- Run dev server: `bun run dev`
- Build: `bun run build`

Contributing / Commits

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

If you want me to run tests, start the dev server, or tidy any leftover files (for example deleting `optimized.module.scss` if unused), tell me which action to take next.

# Personal Website

This repository contains the source for William Marchant's personal website — a responsive React + TypeScript site styled with SCSS modules and optimized for fast local development with Bun.

Features

- Split layout with a fixed left panel (hero/contact) and a scrollable right panel (resume sections)
- Responsive components and a mobile-friendly navigation
- Data-driven sections (projects, experience, education, skills) stored in `src/pages/home/data.tsx`

Quick start

1. Install dependencies

```bash
bun install
```

2. Start development server

```bash
bun dev
```

3. Build for production

```bash
bun build
```

Useful commands

- `bun dev` — run dev server
- `bun build` — build production assets

Project structure (high level)

- `src/pages/home` — home page, data and styles
- `src/components` — reusable UI components (hero, navbar, projects, skills, etc.)
- `src/styles` — global SCSS, mixins and design tokens

Contributing

- Open an issue or submit a PR for improvements.

Commit workflow & Release CI

- `bun run commit` (or `npm run commit`) — runs Commitizen (`git-cz`) with the project's custom adapter (`custom-adapters/cz-custom.cjs`) to create Conventional Commit messages and then pushes the branch. The project defines a `commit` script in `package.json`:

  ```json
  "scripts": {
  	"commit": "git add . && git-cz && git push origin $(git symbolic-ref --short HEAD)"
  }
  ```

- Commit message linting: `@commitlint/config-conventional` and `@commitlint/cli` are configured via `commitlint.config.cjs` to enforce Conventional Commits (`type(scope): subject`). Example:

  ```
  feat(nav): add responsive navbar
  fix(auth): correct token refresh
  ```

- GitHub Release CI: the repository uses `semantic-release` (configured in `release.config.cjs`) to automatically analyze commits, generate changelogs, create Git tags, and publish GitHub releases when run in CI on the `main` branch. The config includes plugins for changelog generation and GitHub releases.

- Local/alternate release tooling: there is a `release-it` block in `package.json` for local release hooks (it runs `bun build` after bump). The CI is the recommended automated release path.

Notes

- Keep commit messages conventional — this enables automated semantic versioning and clean changelogs.
- If you prefer not to use `bun`, the `commit` script works with `npm run commit` too.

License

- See the repository root for license information (if any).

Enjoy! — William Marchant
